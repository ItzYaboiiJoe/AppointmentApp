import { TiDeleteOutline } from "react-icons/ti";
import ConfirmServiceDeleteModal from "./ConfirmServiceDeleteModal";
import EditServiceCardModal from "./EditServiceCardModal";
import { useState } from "react";

function AdminServicesCards({ service }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function handleDeleteOpenModal() {
    return setIsDeleteModalOpen(true);
  }

  function handleDeleteCloseModal() {
    return setIsDeleteModalOpen(false);
  }

  function handleEditOpenModal() {
    return setIsEditModalOpen(true);
  }

  function handleEditCloseModal() {
    return setIsEditModalOpen(false);
  }

  return (
    <div className="max-w-sm bg-HoverShade rounded-lg shadow-xl hover:shadow-2xl">
      {/* Delete Card Button */}
      <button
        className="text-IconColor float-right rounded-sm m-2"
        onClick={handleDeleteOpenModal}
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
        {/* Edit Button */}
        <div className="flex justify-end">
          <button
            className="bg-transparent text-black rounded-lg hover:underline"
            onClick={handleEditOpenModal}
          >
            Edit
          </button>
        </div>
      </div>
      {isDeleteModalOpen && (
        <ConfirmServiceDeleteModal
          onClose={handleDeleteCloseModal}
          serviceId={service.id}
        />
      )}
      {isEditModalOpen && (
        <EditServiceCardModal
          onClose={handleEditCloseModal}
          serviceId={service.id}
        />
      )}
    </div>
  );
}

export default AdminServicesCards;
