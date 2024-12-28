import { FaRegCalendarAlt } from "react-icons/fa";

function AdminTopNavbar({ pageTitle }) {
  return (
    <header className="w-full bg-Primary h-20 flex items-center justify-between px-6 shadow-lg">
      <h1 className="text-black text-xl font-medium">{pageTitle}</h1>
      <button className="flex items-center bg-[#E9C46A] text-black px-4 py-2 rounded-lg hover:bg-[#F4A261] shadow-lg hover:shadow-2xl">
        <FaRegCalendarAlt className="mr-2" />
        New Appointment
      </button>
    </header>
  );
}

export default AdminTopNavbar;
