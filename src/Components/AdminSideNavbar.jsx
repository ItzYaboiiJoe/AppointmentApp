import { NavLink, useNavigate } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdMiscellaneousServices, MdRoomService } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useUser } from "../Config/userContext";
import { doc, onSnapshot } from "firebase/firestore";
import { fireStore } from "../Config/firebase-config";
import { signOut } from "firebase/auth";
import { auth } from "../Config/firebase-config";

function AdminSideNavbar() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    if (!user?.businessID) {
      setBusinessName(""); // Clear business name if user is null
      return;
    }

    const docRef = doc(
      fireStore,
      "businesses",
      user.businessID,
      user.businessID,
      "BusinessInformation"
    );

    const fetchBusinessName = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setBusinessName(docSnap.data().name);
      }
    });

    return () => fetchBusinessName();
  }, [user?.businessID]);

  const handleSignOut = async () => {
    await signOut(auth); // Sign out the user from Firebase Auth
    setUser(null); // Clear user data from UserContext
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/Login"); // Redirect to the login page
  };

  return (
    <nav className="w-48 bg-Primary h-screen flex flex-col justify-between items-center py-6">
      {/* Top Navbar Section */}
      <div className="w-full flex flex-col items-center">
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
      </div>

      {/* Bottom Navbar Section */}
      {/* Logout */}
      <div className="w-full px-4">
        <button
          className="flex items-center bg-white w-full px-4 py-3 rounded-lg shadow-md hover:bg-red-600"
          onClick={handleSignOut}
        >
          <RiLogoutBoxLine className="IconStyle" />
          <span className="MainStyle">Signout</span>
        </button>
      </div>
    </nav>
  );
}

export default AdminSideNavbar;
