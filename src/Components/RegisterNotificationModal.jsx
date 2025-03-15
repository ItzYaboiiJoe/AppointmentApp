function RegisterNotificationModal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96 text-center">
        <h2 className="text-lg font-bold text-gray-800 mb-4">{message}</h2>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default RegisterNotificationModal;
