import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminTopNavbar from "../Components/AdminTopNavbar";
import Calendar from "../Components/Calendar";

function AdminCalendar() {
  return (
    // side Navbar
    <div className="flex h-screen">
      <AdminSideNavbar />
      {/* Top Navbar */}
      <div className="flex-1 flex flex-col bg-[#EAF4F1]">
        <AdminTopNavbar pageTitle="Calendar" />
        {/* Body Content */}
        <div className="px-6">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default AdminCalendar;
