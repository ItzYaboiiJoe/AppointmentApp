import { FaRegCalendarAlt } from "react-icons/fa";
import NewAppointmentModal from "./NewAppointmentModal";
import { useState } from "react";

function AdminTopNavbar({ pageTitle }) {
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] =
    useState(false);

  function handleNewAppointmentOpenModal() {
    return setIsNewAppointmentModalOpen(true);
  }

  function handleNewAppointmentCloseModal() {
    return setIsNewAppointmentModalOpen(false);
  }
  return (
    <header className="w-full bg-Primary h-20 flex items-center justify-between px-6 shadow-lg">
      <h1 className="text-black text-xl font-medium">{pageTitle}</h1>
      <button
        className="flex items-center bg-[#E9C46A] text-black px-4 py-2 rounded-lg hover:bg-[#F4A261] shadow-lg hover:shadow-2xl"
        onClick={handleNewAppointmentOpenModal}
      >
        <FaRegCalendarAlt className="mr-2" />
        New Appointment
      </button>
      {isNewAppointmentModalOpen && (
        <NewAppointmentModal onClose={handleNewAppointmentCloseModal} />
      )}
    </header>
  );
}

export default AdminTopNavbar;
