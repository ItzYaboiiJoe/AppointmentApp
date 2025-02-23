import { TiDeleteOutline } from "react-icons/ti";
import { useState, useEffect } from "react";
import { fireStore } from "../Config/firebase-config";
import { collection, getDocs, doc } from "firebase/firestore";

function AdminServicesCards() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesCollectionRef = collection(
          fireStore,
          "Joe BarberShop",
          "Services",
          "Services"
        );

        const servicesSnapshot = await getDocs(servicesCollectionRef);
        const servicesList = servicesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesList);
      } catch (error) {
        setError("Error fetching services: " + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && (
        <div className="max-w-sm bg-red-100 rounded-lg shadow-xl p-4 mb-4">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      {services.map((service) => (
        <div
          key={service.id}
          className="max-w-sm bg-HoverShade rounded-lg shadow-xl hover:shadow-2xl"
        >
          <button className="text-IconColor float-right rounded-sm m-2">
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
        </div>
      ))}
    </div>
  );
}

export default AdminServicesCards;
