import { fireStore } from "../Config/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUser } from "../Config/userContext";

function EditServiceCardModal({ onClose, serviceId }) {
  const { user } = useUser();

  const [loading, setLoading] = useState(true); // State to store the loading status

  // State to store the service details
  const [service, setService] = useState({
    Title: "",
    Price: "",
    Duration: "",
    Category: "",
    Description: "",
  });

  // Fetch service details when the component mounts or serviceId changes
  useEffect(() => {
    const fetchServiceDetails = async () => {
      const serviceDocRef = doc(
        fireStore,
        "businesses",
        user.businessID,
        user.businessID,
        "Services",
        "ServicesList",
        serviceId
      );
      const serviceDoc = await getDoc(serviceDocRef);
      setService(serviceDoc.data());
      setLoading(false); // Set loading to false after fetching data
    };

    fetchServiceDetails();
  }, [serviceId]);

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  // Handle saving the updated service details
  const handleSave = async () => {
    const serviceDocRef = doc(
      fireStore,
      "businesses",
      user.businessID,
      user.businessID,
      "Services",
      "ServicesList",
      serviceId
    );
    await updateDoc(serviceDocRef, service);
    onClose(); // Close the modal after saving
  };

  // Show loading state while fetching data
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Render the form with service details
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4 text-IconColor">
          Edit Service ({service.Title})
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Title Field */}
            <div>
              <label className="block text-IconColor">Title</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="Title"
                value={service.Title}
                onChange={handleChange}
                required
              />
            </div>
            {/* Price Field */}
            <div>
              <label className="block text-IconColor">Price</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="Price"
                value={service.Price}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Duration Field Dropdown */}
            <div>
              <label className="block text-IconColor">Duration</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="Duration"
                value={service.Duration}
                onChange={handleChange}
                required
              >
                <option value="">Select duration</option>
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
              </select>
            </div>
            {/* Category Field */}
            <div>
              <label className="block text-IconColor">Category</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="Category"
                value={service.Category}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-IconColor">Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-1"
              name="Description"
              rows="4"
              value={service.Description}
              onChange={handleChange}
              required
            />
          </div>
          {/* Save and Cancel Button */}
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
              onClick={handleSave}
              className="bg-Primary text-white px-4 py-2 rounded hover:bg-[#1e6f65] shadow-xl"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditServiceCardModal;
