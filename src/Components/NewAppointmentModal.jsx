import { fireStore } from "../Config/firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { useUser } from "../Config/userContext";

function NewAppointmentModal({ onClose }) {
  const { user } = useUser();

  const [services, setServices] = useState([]);
  const [hoursOfOperation, setHoursOfOperation] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    duration: "",
  });

  // Fetch services and hours of operation from Firestore on component mount
  useEffect(() => {
    const fetchServices = async () => {
      const servicesCollection = collection(
        fireStore,
        user.businessID,
        "Services",
        "ServicesList"
      );
      const servicesSnapshot = await getDocs(servicesCollection);
      const servicesList = servicesSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.Title,
          duration: data.Duration,
        };
      });

      setServices(servicesList);
    };

    const fetchHoursOfOperation = async () => {
      const hoursDocRef = doc(fireStore, user.businessID, "HoursOfOperation");
      const hoursSnapshot = await getDoc(hoursDocRef);
      if (hoursSnapshot.exists()) {
        setHoursOfOperation(hoursSnapshot.data());
      }
    };

    fetchServices();
    fetchHoursOfOperation();
  }, []);

  // Handle date change and generate available time slots
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    setFormData({ ...formData, date: selectedDate });

    const dateObj = new Date(selectedDate + "T00:00:00");

    const dayOfWeek = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: "America/New_York",
    });

    const dayData = hoursOfOperation[dayOfWeek];

    if (dayData && dayData.Status === "Open") {
      generateTimeSlots(dayData.OpeningTime, dayData.ClosingTime);
    } else {
      setAvailableTimes([]);
    }
  };

  // Generate time slots based on opening and closing times
  const generateTimeSlots = (openingTime, closingTime) => {
    const timeSlots = [];

    // Extract hours, minutes, and period (AM/PM) from opening and closing times
    let [startHour, startMinute, startPeriod] = openingTime
      .match(/(\d+):(\d+)\s*(AM|PM)/)
      .slice(1);
    let [endHour, endMinute, endPeriod] = closingTime
      .match(/(\d+):(\d+)\s*(AM|PM)/)
      .slice(1);

    // Convert extracted values to integers
    startHour = parseInt(startHour, 10);
    startMinute = parseInt(startMinute, 10);
    endHour = parseInt(endHour, 10);
    endMinute = parseInt(endMinute, 10);

    // Convert 12-hour format to 24-hour format
    if (startPeriod === "PM" && startHour !== 12) startHour += 12;
    if (endPeriod === "PM" && endHour !== 12) endHour += 12;
    if (startPeriod === "AM" && startHour === 12) startHour = 0;
    if (endPeriod === "AM" && endHour === 12) endHour = 0;

    let currentHour = startHour;
    let currentMinute = startMinute;

    // Generate time slots in 15-minute intervals
    while (
      currentHour < endHour ||
      (currentHour === endHour && currentMinute < endMinute)
    ) {
      const formattedHour = currentHour % 12 === 0 ? 12 : currentHour % 12;
      const formattedMinute = currentMinute.toString().padStart(2, "0");
      const amPm = currentHour < 12 ? "AM" : "PM";

      // Add formatted time slot to the array
      timeSlots.push(`${formattedHour}:${formattedMinute} ${amPm}`);

      // Increment time by 15 minutes
      currentMinute += 15;
      if (currentMinute >= 60) {
        currentMinute = 0;
        currentHour += 1;
      }
    }

    // Update state with generated time slots
    setAvailableTimes(timeSlots);
  };

  // Handle input changes for form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Set duration based on selected service
    if (name === "service") {
      const selectedService = services.find(
        (service) => service.title === value
      );
      if (selectedService) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          duration: selectedService.duration,
        }));
      }
    }
  };

  // Handle form submission to add a new appointment
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const appointmentsCollection = collection(
        fireStore,
        user.businessID,
        "Appointments",
        "AppointmentsList"
      );
      await addDoc(appointmentsCollection, formData);
      onClose();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h2 className="text-xl mb-4 text-IconColor">
          Create a New Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <div>
              <label className="block text-IconColor">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-IconColor">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Phone */}
            <div>
              <label className="block text-IconColor">Phone</label>
              <input
                type="number"
                name="phone"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Service Dropdown */}
            <div>
              <label className="block text-IconColor">Service</label>
              <select
                name="service"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Date Selection */}
            <div>
              <label className="block text-IconColor">Date</label>
              <input
                type="date"
                name="date"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.date}
                onChange={handleDateChange}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            {/* Time Dropdown */}
            <div>
              <label className="block text-IconColor">Time</label>
              <select
                name="time"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a time</option>
                {availableTimes.length > 0 ? (
                  availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))
                ) : (
                  <option value="">Closed</option>
                )}
              </select>
            </div>
          </div>
          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 shadow-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-Primary text-white px-4 py-2 rounded hover:bg-[#1e6f65] shadow-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewAppointmentModal;
