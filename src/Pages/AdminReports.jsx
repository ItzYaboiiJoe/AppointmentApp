import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminTopNavbar from "../Components/AdminTopNavbar";

function AdminReports() {
  return (
    <div className="bg-[#EAF4F1]">
      {/* side Navbar */}
      <div className="flex h-screen">
        <AdminSideNavbar />
        {/* Top Navbar */}
        <div className="flex-1 flex flex-col">
          <AdminTopNavbar pageTitle="Reports" />
          {/* Body Content */}
          <div className="p-6">
            <h1 className="text-gray-700 text-xl font-bold">Body Content</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminReports;
