function AppointmentInfoModal({ event, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="text-xl mb-4 text-IconColor">Appointment Details</div>
        {event && (
          <div>
            <p>Name: {event.title}</p>
            <p>Service: {event.extendedProps?.service || "Not provided"}</p>
            <p>Email: {event.extendedProps?.email || "Not provided"}</p>
            <p>Phone: {event.extendedProps?.phone || "Not provided"}</p>
            <p>Date: {event.start.toLocaleDateString()}</p>
            <p>Time: {event.start.toLocaleTimeString()}</p>
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 shadow-xl"
            type="button"
            onClick={onClose}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentInfoModal;
