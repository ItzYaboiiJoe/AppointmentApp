import { fireStore } from "../Config/firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { data } from "autoprefixer";

function NewAppointmentModal({ onClose }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesCollection = collection(
        fireStore,
        "Joe BarberShop",
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

    fetchServices();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h2 className="text-xl mb-4 text-IconColor">
          Create a New Appointment
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <div>
              <label className="block text-IconColor">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-IconColor">Email</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Phone */}
            <div>
              <label className="block text-IconColor">Phone</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            {/* Service */}
            <div>
              <label className="block text-IconColor">Service</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              >
                <option value=""> </option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Date */}
            <div>
              <label className="block text-IconColor">Date</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            {/* Time */}
            <div>
              <label className="block text-IconColor">Time</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
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
              type="button"
              onClick={onClose}
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
