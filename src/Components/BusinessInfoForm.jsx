import { useState, useEffect } from "react";
import Availability from "./Availability";
import { useUser } from "../Config/userContext";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { fireStore } from "../Config/firebase-config";

function BusinessInfoForm() {
  const { user } = useUser();
  const [showAvailability, setShowAvailability] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    businessType: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(fireStore, user.businessID, "BusinessInformation");
      const docSnap = await getDoc(docRef);
      docSnap.exists();
      setFormData(docSnap.data());
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleBusinessHoursClick = () => {
    setShowAvailability(true);
  };

  function handleCloseModal() {
    setIsModalOpen(false);
    setShowAvailability(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(
        doc(fireStore, "Joe BarberShop", "BusinessInformation"),
        formData
      );
      setMessage("Business information saved successfully!");
    } catch (error) {
      setMessage("Failed to save business information.");
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-2 ml-5">
        <h2 className="text-Primary text-2xl my-2">Business Information</h2>
        {/* Business Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" Name"
            className="border-solid border border-black rounded w-64"
          />
        </div>
        {/* Business Address */}
        <div>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder=" Street Address"
            className="border-solid border border-black rounded w-64"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 w-64">
          {/* Business Address City */}
          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder=" City"
              className="border-solid border border-black rounded w-20"
            />
          </div>
          {/* Business Address State */}
          <div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder=" State"
              className="border-solid border border-black rounded w-20"
            />
          </div>
          {/* Business Address Zip */}
          <div>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder=" Zip"
              className="border-solid border border-black rounded w-20"
            />
          </div>
        </div>
        {/* Business Type */}
        <div>
          <input
            type="text"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            placeholder=" Business Type"
            className="border-solid border border-black rounded w-64"
          />
        </div>
        {/* Business Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" Business Email"
            className="border-solid border border-black rounded w-64"
          />
        </div>
        {/* Business Phone Number */}
        <div>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder=" Business Phone Number"
            className="border-solid border border-black rounded w-64"
          />
        </div>
        {/* Business Hours */}
        <div>
          <button
            type="button"
            className="bg-Primary text-white px-4 py-1 shadow-xl rounded hover:bg-[#1e6f65] w-64"
            onClick={handleBusinessHoursClick}
          >
            Business Hours
          </button>
        </div>
        <div className="grid grid-rows-1 w-64">
          <button
            className="bg-Primary text-white px-4 py-1 shadow-xl rounded hover:bg-[#1e6f65]"
            type="submit"
          >
            Save
          </button>
        </div>
        <p className="text-sm px-1 py-1 mt-4">{message}</p>
        {showAvailability && (
          <div className="mt-4">
            <Availability onClose={handleCloseModal} />
          </div>
        )}
      </div>
    </form>
  );
}

export default BusinessInfoForm;
