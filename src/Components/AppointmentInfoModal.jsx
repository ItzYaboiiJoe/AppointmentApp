function AppointmentInfoModal({ event, onClose, onDelete }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <div className="text-xl mb-4 text-IconColor">Appointment Details</div>
        {event && (
          <div>
            <p className="py-1">Name: {event.title}</p>
            <p className="py-1">
              Service: {event.extendedProps?.service || "Not provided"}
            </p>
            <p className="py-1">
              Email: {event.extendedProps?.email || "Not provided"}
            </p>
            <p className="py-1">
              Phone: {event.extendedProps?.phone || "Not provided"}
            </p>
            <p className="py-1">Date: {event.start.toLocaleDateString()}</p>
            <p className="py-1">Time: {event.start.toLocaleTimeString()}</p>
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-700 shadow-xl"
            type="button"
            onClick={() => onDelete(event.id)}
          >
            Delete
          </button>
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
