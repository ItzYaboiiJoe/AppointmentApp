import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminTopNavbar from "../Components/AdminTopNavbar";
import BusinessInfoForm from "../Components/BusinessInfoForm";

function AdminSettings() {
  return (
    <div className="bg-[#EAF4F1]">
      {/* side Navbar */}
      <div className="flex h-screen">
        <AdminSideNavbar />
        {/* Top Navbar */}
        <div className="flex-1 flex flex-col">
          <AdminTopNavbar pageTitle="Settings" />
          {/* Body Content */}
          <div className=" p-6">
            <BusinessInfoForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
