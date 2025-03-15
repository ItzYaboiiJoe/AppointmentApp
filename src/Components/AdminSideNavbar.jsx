import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdMiscellaneousServices, MdRoomService } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { fireStore } from "../Config/firebase-config";

function AdminSideNavbar() {
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    const docRef = doc(fireStore, "Joe BarberShop", "BusinessInformation");
    const fetchBusinessName = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setBusinessName(docSnap.data().name);
      }
    });

    return () => fetchBusinessName();
  }, []);

  return (
    <nav className="w-48 bg-Primary h-screen flex flex-col items-center py-6">
      {/* Business Name Section */}
      <div className="mb-10 text-white flex items-center flex-col">
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
        <span className="text-lg font-semibold">{businessName}</span>
      </div>

      {/* Navigation NavLinks */}
      <ul className="w-full space-y-6">
        <li className="w-full shadow-lg">
          <NavLink to="/AdminOverview" className="ButtonStyle">
            <GrOverview className="IconStyle" />
            <span className="MainStyle">Overview</span>
          </NavLink>
        </li>
        <li className="w-full shadow-lg">
          <NavLink to="/AdminCalendar" className="ButtonStyle">
            <FaRegCalendarAlt className="IconStyle" />
            <span className="MainStyle">Calendar</span>
          </NavLink>
        </li>
        <li className="w-full shadow-lg">
          <NavLink to="/AdminServices" className="ButtonStyle">
            <MdRoomService className="IconStyle" />
            <span className="MainStyle">Services</span>
          </NavLink>
        </li>
        <li className="w-full shadow-lg">
          <NavLink to="/AdminReports" className="ButtonStyle">
            <TbReportSearch className="IconStyle" />
            <span className="MainStyle">Reports</span>
          </NavLink>
        </li>
        <li className="w-full shadow-lg">
          <NavLink to="/AdminSettings" className="ButtonStyle">
            <MdMiscellaneousServices className="IconStyle" />
            <span className="MainStyle">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AdminSideNavbar;
