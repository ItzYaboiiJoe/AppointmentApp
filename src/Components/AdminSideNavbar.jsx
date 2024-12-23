import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdMiscellaneousServices, MdRoomService } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

function AdminSideNavbar() {
  return (
    <nav className="w-48 bg-teal-500 h-screen flex flex-col items-center py-6">
      {/* Business Name Section */}
      <div className="mb-10 text-white flex items-center flex-col">
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
        <span className="text-lg font-semibold">Business Name</span>
      </div>

      {/* Navigation Links */}
      <ul className="w-full space-y-6">
        <li className="w-full">
          <Link
            to="/AdminOverview"
            className="flex items-center bg-white w-full px-4 py-3 rounded-lg shadow-md hover:bg-gray-300"
          >
            <GrOverview className="text-teal-800 mr-3" />
            <span className="text-teal-700 font-medium">Overview</span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/AdminCalendar"
            className="flex items-center bg-white w-full px-4 py-3 rounded-lg shadow-md hover:bg-gray-300"
          >
            <FaRegCalendarAlt className="text-teal-800 mr-3" />
            <span className="text-teal-700 font-medium">Calendar</span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/AdminServices"
            className="flex items-center bg-white w-full px-4 py-3 rounded-lg shadow-md hover:bg-gray-300"
          >
            <MdRoomService className="text-teal-800 mr-3" />
            <span className="text-teal-700 font-medium">Services</span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/AdminReports"
            className="flex items-center bg-white w-full px-4 py-3 rounded-lg shadow-md hover:bg-gray-300"
          >
            <TbReportSearch className="text-teal-800 mr-3" />
            <span className="text-teal-700 font-medium">Reports</span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/AdminSettings"
            className="flex items-center bg-white w-full px-4 py-3 rounded-lg shadow-md hover:bg-gray-300"
          >
            <MdMiscellaneousServices className="text-teal-800 mr-3" />
            <span className="text-teal-700 font-medium">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminSideNavbar;
