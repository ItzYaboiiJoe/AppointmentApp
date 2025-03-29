import { useState } from "react";
import { auth } from "../Config/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { fireStore } from "../Config/firebase-config";
import { useNavigate } from "react-router-dom";
import RegisterNotificationModal from "./RegisterNotificationModal";

function RegisterAdminUser() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Update user profile with full name and username
      await updateProfile(user, {
        displayName: `${formData.fullName} (${formData.username})`,
      });

      // Add user to Firestore under 'users' collection
      const userRef = collection(fireStore, "users");
      const userDoc = doc(userRef, user.uid);
      await setDoc(userDoc, {
        businessID: formData.ID,
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
      });

      setModalMessage("Admin User Registered Successfully!");
      setNotificationOpen(true);
      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
        ID: "",
      });
    } catch (err) {
      setModalMessage("Error registering user. Please try again.");
      setNotificationOpen(true);
      setError(err.message);
    }
  };

  const handleCloseModal = () => {
    setNotificationOpen(false);
    navigate("/Login");
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className="flex justify-center items-center min-h-screen bg-gray-100"
      >
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Register Admin User
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4 relative">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="number"
              name="ID"
              placeholder="Business ID"
              value={formData.ID}
              onChange={handleChange}
              required
              className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
          >
            Register
          </button>
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

export default RegisterAdminUser;
