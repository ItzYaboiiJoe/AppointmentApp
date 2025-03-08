import { useState } from "react";
import { fireStore } from "../Config/firebase-config";
import { doc, setDoc } from "firebase/firestore";

function Availability({ onClose }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const hours = [
    "12:00 AM",
    "12:30 AM",
    "01:00 AM",
    "01:30 AM",
    "02:00 AM",
    "02:30 AM",
    "03:00 AM",
    "03:30 AM",
    "04:00 AM",
    "04:30 AM",
    "05:00 AM",
    "05:30 AM",
    "06:00 AM",
    "06:30 AM",
    "07:00 AM",
    "07:30 AM",
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  const [time, setTime] = useState(
    days.reduce(
      (acc, day) => ({
        ...acc,
        [day]: { OpeningTime: "", ClosingTime: "" },
      }),
      {}
    )
  );

  const [checkedDays, setCheckedDays] = useState(
    days.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );

  const [message, setMessage] = useState("");

  const handleCheckboxChange = (day) => {
    setCheckedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const handleTimeChange = (day, type, value) => {
    setTime((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hoursDocRef = doc(fireStore, "Joe BarberShop", "HoursOfOperation");

    const daysData = days.reduce((acc, day) => {
      if (checkedDays[day]) {
        acc[day] = {
          OpeningTime: time[day]?.OpeningTime || "",
          ClosingTime: time[day]?.ClosingTime || "",
          Status: "Open",
        };
      } else {
        acc[day] = {
          Status: "Closed",
        };
      }
      return acc;
    }, {});

    try {
      await setDoc(hoursDocRef, daysData);
      setMessage("Availability Updated Successfully");
    } catch (error) {
      setMessage("Failed to Update Availability");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="p-6 max-w-lg">
          <h1 className="text-lg font-semibold mb-2">Availability</h1>
          {/* Headers */}
          <div className="grid grid-cols-3 gap-4 mb-2 text-sm font-medium">
            <span className="text-left">Select Days</span>
            <span className="text-center">Opening Time</span>
            <span className="text-center">Closing Time</span>
          </div>

          <div className="space-y-2">
            {days.map((day) => (
              <div key={day} className="grid grid-cols-3 gap-4 items-center">
                {/* Checkbox */}
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={checkedDays[day]}
                    onChange={() => handleCheckboxChange(day)}
                  />
                  <span>{day}</span>
                </label>

                {/* Opening Time Dropdown */}
                <select
                  className={`border rounded-md p-1 text-sm w-32 ${
                    !checkedDays[day] ? "opacity-15 cursor-not-allowed" : ""
                  }`}
                  disabled={!checkedDays[day]}
                  onChange={(e) =>
                    handleTimeChange(day, "OpeningTime", e.target.value)
                  }
                >
                  {hours.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>

                {/* Closing Time Dropdown */}
                <select
                  className={`border rounded-md p-1 text-sm w-32 ${
                    !checkedDays[day] ? "opacity-15 cursor-not-allowed" : ""
                  }`}
                  disabled={!checkedDays[day]}
                  onChange={(e) =>
                    handleTimeChange(day, "ClosingTime", e.target.value)
                  }
                >
                  {hours.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            {/* Save button Status */}
            <div>
              <p className="px-4 py-1 mt-4 mr-4">{message}</p>
            </div>
            {/* Close Button */}
            <button
              className="bg-gray-500 text-white px-4 py-1 mt-4 mr-4 rounded hover:bg-gray-700 shadow-xl"
              onClick={onClose}
            >
              Close
            </button>
            {/* Save Button */}
            <button
              className="bg-Primary text-white px-4 py-1 mt-4 rounded hover:bg-[#1e6f65] shadow-xl"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Availability;
