import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminTopNavbar from "../Components/AdminTopNavbar";
import AdminServicesCards from "../Components/AdminServicesCards";

function AdminServices() {
  return (
    // side Navbar
    <div className="flex h-screen">
      <AdminSideNavbar />
      {/* Top Navbar */}
      <div className="flex-1 flex flex-col">
        <AdminTopNavbar pageTitle="Services" />
        {/* Body Content */}
        <div className="flex-1 bg-[#EAF4F1] p-6">
          <div className="grid grid-cols-4 gap-4 m-6">
            <AdminServicesCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminServices;
