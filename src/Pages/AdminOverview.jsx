import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminTopNavbar from "../Components/AdminTopNavbar";

function AdminOverview() {
  return (
    // side Navbar
    <div className="flex h-screen">
      <AdminSideNavbar />
      {/* Top Navbar */}
      <div className="flex-1 flex flex-col">
        <AdminTopNavbar pageTitle="Overview" />
        {/* Body Content */}
        <div className="flex-1 bg-gray-100 p-6">
          <h1 className="text-gray-700 text-xl font-bold">Body Content</h1>
        </div>
      </div>
    </div>
  );
}

export default AdminOverview;
