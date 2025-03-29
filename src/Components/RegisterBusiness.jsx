import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";
import { fireStore } from "../Config/firebase-config";
import RegisterNotificationModal from "./RegisterNotificationModal";

function RegisterBusiness() {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    businessType: "",
    phoneNumber: "",
  });

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Random 6 digit number generator for business ID
      const randomID = Math.floor(100000 + Math.random() * 900000);

      const businessInfoDocRef = doc(
        fireStore,
        "businesses",
        String(randomID),
        String(randomID),
        "BusinessInformation"
      );

      await setDoc(businessInfoDocRef, {
        name: formData.businessName,
        email: formData.email,
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        businessType: formData.businessType,
        phoneNumber: formData.phoneNumber,
        businessID: randomID,
      });

      setModalMessage("Business Registered Successfully!");
      setNotificationOpen(true);
    } catch (error) {
      setModalMessage("Error registering business. Please try again.");
      setNotificationOpen(true);
    }
  };

  const handleCloseModal = () => {
    setNotificationOpen(false);
    navigate("/RegisterAdminUser");
  };

  return (
    <>
      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center min-h-screen bg-gray-100"
      >
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Register Business
          </h1>

          {[
            { name: "businessName", placeholder: "Business Name" },
            { name: "email", placeholder: "Business Email", type: "email" },
            { name: "streetAddress", placeholder: "Street Address" },
            { name: "city", placeholder: "City" },
            { name: "state", placeholder: "State" },
            { name: "zip", placeholder: "Zip Code" },
            { name: "businessType", placeholder: "Business Type" },
            {
              name: "phoneNumber",
              placeholder: "Business Phone Number",
              type: "number",
            },
          ].map(({ name, placeholder, type = "text" }) => (
            <div key={name} className="mb-4 relative">
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Buttons */}
          <div className="mb-4 relative flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 shadow-xl rounded hover:bg-blue-700 order-last"
            >
              Register
            </button>
            <NavLink
              to="/Login"
              className="text-blue-500 text-sm hover:underline ml-5"
            >
              Cancel
            </NavLink>
          </div>
        </div>
      </form>
      <RegisterNotificationModal
        isOpen={notificationOpen}
        onClose={handleCloseModal}
        message={modalMessage}
      />
    </>
  );
}

export default RegisterBusiness;
