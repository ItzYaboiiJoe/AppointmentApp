import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdMiscellaneousServices, MdRoomService } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

function AdminSideNavbar() {
  return (
    <nav className="w-48 bg-Primary h-screen flex flex-col items-center py-6">
      {/* Business Name Section */}
      <div className="mb-10 text-white flex items-center flex-col">
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
        <span className="text-lg font-semibold">Business Name</span>
      </div>

      {/* Navigation Links */}
      <ul className="w-full space-y-6">
        <li className="w-full">
          <Link to="/AdminOverview" className="ButtonStyle">
            <GrOverview className="IconStyle" />
            <span className="MainStyle">Overview</span>
          </Link>
        </li>
        <li className="w-full">
          <Link to="/AdminCalendar" className="ButtonStyle">
            <FaRegCalendarAlt className="IconStyle" />
            <span className="MainStyle">Calendar</span>
          </Link>
        </li>
        <li className="w-full">
          <Link to="/AdminServices" className="ButtonStyle">
            <MdRoomService className="IconStyle" />
            <span className="MainStyle">Services</span>
          </Link>
        </li>
        <li className="w-full">
          <Link to="/AdminReports" className="ButtonStyle">
            <TbReportSearch className="IconStyle" />
            <span className="MainStyle">Reports</span>
          </Link>
        </li>
        <li className="w-full">
          <Link to="/AdminSettings" className="ButtonStyle">
            <MdMiscellaneousServices className="IconStyle" />
            <span className="MainStyle">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminSideNavbar;
