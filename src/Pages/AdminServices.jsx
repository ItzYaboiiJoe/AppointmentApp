import { useState, useEffect } from "react";
import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminTopNavbar from "../Components/AdminTopNavbar";
import AdminServicesCards from "../Components/AdminServicesCards";
import { IoAddCircleOutline } from "react-icons/io5";
import AddNewCardModal from "../Components/AddNewCardModal";
import { fireStore } from "../Config/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

function AdminServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = onSnapshot(
      collection(fireStore, "Joe BarberShop", "Services", "ServicesList"),
      (querySnapshot) => {
        const servicesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesList);
        setLoading(false);
      },
      (error) => {
        setError("Error fetching services: " + error.message);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => fetchData();
  }, []);

  function handleOpenModal() {
    return setIsModalOpen(true);
  }

  function handleCloseModal() {
    return setIsModalOpen(false);
  }

  function noServices() {
    if (loading) {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Loading...</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="bg-[#EAF4F1]">
      {/* side Navbar */}
      <div className="flex h-screen">
        <AdminSideNavbar />
        {/* Top Navbar */}
        <div className="flex-1 flex flex-col">
          <AdminTopNavbar pageTitle="Services" />
          {/* Body Content */}
          <div className="p-6">
            {/* Add New Button Modal */}
            <button
              className="text-Primary float-right"
              onClick={handleOpenModal}
            >
              <IoAddCircleOutline size={35} />
            </button>
            {/* Error for when there is issues with fetching */}
            {error && (
              <div className="max-w-sm bg-red-100 rounded-lg shadow-xl p-4 mb-4">
                <p className="text-red-500">{error}</p>
              </div>
            )}
            {/* No Services message */}
            <div className="grid grid-cols-4 gap-4 m-6">
              {noServices()}
              {/* Services Cards */}
              {services.map((service) => (
                <AdminServicesCards key={service.id} service={service} />
              ))}
            </div>
          </div>
          {isModalOpen && <AddNewCardModal onClose={handleCloseModal} />}
        </div>
      </div>
    </div>
  );
}

export default AdminServices;
