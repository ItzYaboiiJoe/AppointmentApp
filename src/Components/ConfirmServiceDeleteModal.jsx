import { fireStore } from "../Config/firebase-config";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUser } from "../Config/userContext";

function ConfirmServiceDeleteModal({ onClose, serviceId }) {
  const { user } = useUser();

  const [service, setService] = useState("");

  useEffect(() => {
    const fetchServiceTitle = async () => {
      const serviceDocRef = doc(
        fireStore,
        user.businessID,
        "Services",
        "ServicesList",
        serviceId
      );
      const serviceDoc = await getDoc(serviceDocRef);
      setService(serviceDoc.data().Title);
    };

    fetchServiceTitle();
  }, [serviceId]);

  const handleDelete = async () => {
    const serviceDocRef = doc(
      fireStore,
      user.businessID,
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
          Are you sure you want to delete {service} service
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
            className="bg-red-700 text-white px-4 py-2 rounded mr-2 hover:bg-red-900 shadow-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmServiceDeleteModal;
