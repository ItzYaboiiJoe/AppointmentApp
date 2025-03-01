import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminTopNavbar from "../Components/AdminTopNavbar";
import Availability from "../Components/Availability";

function AdminSettings() {
  return (
    // side Navbar
    <div className="flex h-screen">
      <AdminSideNavbar />
      {/* Top Navbar */}
      <div className="flex-1 flex flex-col">
        <AdminTopNavbar pageTitle="Settings" />
        {/* Body Content */}
        <div className="flex-1 bg-[#EAF4F1] p-6">
          <Availability />
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
