import { fireStore } from "../Config/firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

function ConfirmServiceDeleteModal({ onClose, serviceId }) {
  const handleDelete = async () => {
    const serviceDocRef = doc(
      fireStore,
      "Joe BarberShop",
      "Services",
      "ServicesList",
      serviceId
    );
    await deleteDoc(serviceDocRef);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4 text-IconColor">
          Are you sure you want to delete (Insert Service Name) Service
        </h2>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 shadow-xl"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-700 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 shadow-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmServiceDeleteModal;
