import { TiDeleteOutline } from "react-icons/ti";
import ConfirmServiceDeleteModal from "./ConfirmServiceDeleteModal";
import { useState } from "react";

function AdminServicesCards({ service }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    return setIsModalOpen(true);
  }

  function handleCloseModal() {
    return setIsModalOpen(false);
  }

  return (
    <div className="max-w-sm bg-HoverShade rounded-lg shadow-xl hover:shadow-2xl">
      {/* Delete Card Button */}
      <button
        className="text-IconColor float-right rounded-sm m-2"
        onClick={handleOpenModal}
      >
        <TiDeleteOutline size={25} />
      </button>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-IconColor">
          {service.Title}
        </h5>
        <div className="flex justify-between">
          <p className="CardsHeadersStyle">Price:</p>
          <p className="CardsInfoStyle">${service.Price}</p>
        </div>
        <div className="flex justify-between">
          <p className="CardsHeadersStyle">Duration:</p>
          <p className="CardsInfoStyle">{service.Duration} mins</p>
        </div>
        <div className="flex justify-between">
          <p className="CardsHeadersStyle">Category:</p>
          <p className="CardsInfoStyle">{service.Category}</p>
        </div>
        <div className="flex justify-between">
          <p className="CardsHeadersStyle">Description:</p>
          <p className="CardsInfoStyle">{service.Description}</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-transparent text-black rounded-lg hover:underline">
            Edit
          </button>
        </div>
      </div>
      {isModalOpen && <ConfirmServiceDeleteModal onClose={handleCloseModal} />}
    </div>
  );
}

export default AdminServicesCards;
