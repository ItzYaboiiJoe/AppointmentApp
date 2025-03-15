function RegisterAdminUser() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Register Admin User
        </h1>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full py-2 pl-4 bg-transparent border border-gray-500 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterAdminUser;
