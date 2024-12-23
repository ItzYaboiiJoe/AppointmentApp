import { FaRegCalendarAlt } from "react-icons/fa";

function AdminTopNavbar({ pageTitle }) {
  return (
    <header className="w-full bg-teal-500 h-16 flex items-center justify-between px-6 shadow-md">
      <h1 className="text-black text-xl font-medium">{pageTitle}</h1>
      <button
        className="flex items-center bg-orange-300 text-black px-4 py-2 rounded-lg shadow hover:bg-orange-400"
        onClick={"#"}
      >
        <FaRegCalendarAlt className="mr-2" />
        New Appointment
      </button>
    </header>
  );
}

export default AdminTopNavbar;
