import { useState } from "react";
import { useUser } from "../Config/userContext";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "../Config/firebase-config";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Sign in the user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Fetch user data from Firestore
      const userDocRef = doc(fireStore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      // Store user data in a global state or context
      userDoc.exists();
      const userData = userDoc.data();
      setUser(userData); //store user data
      navigate("/AdminOverview");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
            <AiOutlineMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
            <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password
            </a>
            <p className="text-sm mt-6 text-gray-600">
              Interested in hosting your business?
            </p>
            <NavLink
              to="/RegisterBusiness"
              className="text-blue-500 text-sm hover:underline"
            >
              Register Now!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
