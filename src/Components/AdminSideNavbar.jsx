import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdMiscellaneousServices, MdRoomService } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

function AdminSideNavbar() {
  return (
    <nav className="w-64 bg-teal-500 h-screen flex flex-col items-center py-6">
      {/* Business Name Section */}
      <div className="mb-10 text-white flex items-center flex-col">
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
        <span className="text-lg font-semibold">Business Name</span>
      </div>

      {/* Navigation Links */}
      <ul className="w-full space-y-6">
        <li className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md">
          <GrOverview className="text-teal-700 mr-3" />
          <Link to="/Overview" className="text-teal-700 font-medium">
            Overview
          </Link>
        </li>
        <li className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md">
          <FaRegCalendarAlt className="text-teal-700 mr-3" />
          <Link to="/Calendar" className="text-teal-700 font-medium">
            Calendar
          </Link>
        </li>
        <li className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md">
          <MdRoomService className="text-teal-700 mr-3" />
          <Link to="/Services" className="text-teal-700 font-medium">
            Services
          </Link>
        </li>
        <li className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md">
          <TbReportSearch className="text-teal-700 mr-3" />
          <Link to="/Reports" className="text-teal-700 font-medium">
            Reports
          </Link>
        </li>
        <li className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md">
          <MdMiscellaneousServices className="text-teal-700 mr-3" />
          <Link to="/Settings" className="text-teal-700 font-medium">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminSideNavbar;
