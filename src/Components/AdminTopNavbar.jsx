import { FaRegCalendarAlt } from "react-icons/fa";

function AdminTopNavbar({ pageTitle }) {
  return (
    <header className="w-full bg-[#2A9D8F] h-20 flex items-center justify-between px-6 shadow-md">
      <h1 className="text-black text-xl font-medium">{pageTitle}</h1>
      <button className="flex items-center bg-[#E9C46A] text-black px-4 py-2 rounded-lg shadow hover:bg-[#F4A261]">
        <FaRegCalendarAlt className="mr-2" />
        New Appointment
      </button>
    </header>
  );
}

export default AdminTopNavbar;
