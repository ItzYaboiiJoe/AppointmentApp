import { fireStore } from "../Config/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

function AppointmentConfirmationModal({ onClose, appointmentName }) {
  const [appointment, setAppointment] = useState("");

  useEffect(() => {
    const fetchAppointmentName = async () => {
      const appointmentDocRef = doc(
        fireStore,
        "Joe BarberShop",
        "Appointments",
        "AppointmentsList",
        appointmentName
      );
      const appointmentDoc = await getDoc(appointmentDocRef);
      setAppointment(appointmentDoc.data().name);
    };

    fetchAppointmentName();
  }, [appointmentName]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4 text-IconColor">
          Appointment Created for {appointment}
        </h2>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 shadow-xl"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentConfirmationModal;
