import { useState } from "react";
import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminTopNavbar from "../Components/AdminTopNavbar";
import AdminServicesCards from "../Components/AdminServicesCards";
import { IoAddCircleOutline } from "react-icons/io5";
import AddNewCardModal from "../Components/AddNewCardModal";

function AdminServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    return setIsModalOpen(true);
  }

  function handleCloseModal() {
    return setIsModalOpen(false);
  }

  return (
    // side Navbar
    <div className="flex h-screen">
      <AdminSideNavbar />
      {/* Top Navbar */}
      <div className="flex-1 flex flex-col">
        <AdminTopNavbar pageTitle="Services" />
        {/* Body Content */}
        <div className="flex-1 bg-[#EAF4F1] p-6">
          {/* Add New Button Modal */}
          <button
            className="text-Primary float-right"
            onClick={handleOpenModal}
          >
            <IoAddCircleOutline size={35} />
          </button>
          {/* Services Cards */}
          <div className="grid grid-cols-4 gap-4 m-6">
            <AdminServicesCards />
          </div>
        </div>
        {isModalOpen && <AddNewCardModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default AdminServices;
