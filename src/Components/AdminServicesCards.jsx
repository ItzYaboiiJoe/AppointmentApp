import { set } from "rsuite/esm/internals/utils/date";
import supabase from "../Config/supabaseClient";
import { useEffect, useState } from "react";

function AdminServicesCards() {
  const [fetchError, setFetchError] = useState(null);
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const { data: servicesCardsInformation, error } = await supabase
        .from("servicesCardsInformation")
        .select("*");

      if (error) {
        setFetchError("Could not fetch services");
        setCards(null);
        console.log(error);
      }
      if (servicesCardsInformation) {
        setCards(servicesCardsInformation);
        setFetchError(null);
      }
      setLoading(false);
    };
    fetchCards();
  }, []);

  return (
    <div className="max-w-md bg-HoverShade rounded-lg shadow-xl hover:shadow-2xl">
      <div className="p-5">
        {loading && <p>Loading...</p>}
        {fetchError && <p className="text-red-500">{fetchError}</p>}
        {cards && (
          <div>
            {cards.map((card) => (
              <div key={card.id}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-IconColor">
                  {card.title}
                </h5>
                <div className="flex justify-between">
                  <p className="CardsHeadersStyle">Price:</p>
                  <p className="CardsInfoStyle">{card.price}</p>
                </div>
                <div className="flex justify-between">
                  <p className="CardsHeadersStyle">Duration:</p>
                  <p className="CardsInfoStyle">{card.duration}</p>
                </div>
                <div className="flex justify-between">
                  <p className="CardsHeadersStyle">Category:</p>
                  <p className="CardsInfoStyle">{card.category}</p>
                </div>
                <div className="flex justify-between">
                  <p className="CardsHeadersStyle">Description:</p>
                  <p className="CardsInfoStyle">{card.description}</p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-transparent text-black rounded-lg hover:underline">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminServicesCards;
