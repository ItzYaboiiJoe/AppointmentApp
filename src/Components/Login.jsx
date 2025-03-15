import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <form action="">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h1>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaRegUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2 rounded border-gray-300 focus:ring-2 focus:ring-blue-400"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password
            </a>
          </div> */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          {/* Make sure to remove the forgot password a tag from down below when ready to implement remember me up above */}
          <div className="text-center mt-2">
            {/* change mt to 4 */}
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password
            </a>
            <p className="text-sm mt-6 text-gray-600">
              {/* remove mt-6 */}
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
