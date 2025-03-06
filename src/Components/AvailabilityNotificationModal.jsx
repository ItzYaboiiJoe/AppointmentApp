function AvailabilityNotificationModal({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4 text-IconColor">{message}</h2>
        <div className="flex justify-center">
          <button
            className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-700 shadow-xl"
            onClick={onClose}
            type="button"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvailabilityNotificationModal;
