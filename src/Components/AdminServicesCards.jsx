import supabase from "../Config/supabaseClient";
import { useEffect, useState } from "react";

function AdminServicesCards() {
  const [fetchError, setFetchError] = useState(null);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase
        .from("servicesCardsInformation")
        .select("*");

      if (error) {
        setFetchError("Could not fetch services");
        setCards(null);
        console.log(error);
      }
      if (data) {
        setCards(data);
        setFetchError(null);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="max-w-sm bg-HoverShade rounded-lg shadow-xl hover:shadow-2xl">
      <div className="p-5">
        {fetchError && (
          <h5 className="mb-2 text-xl font-bold tracking-tight text-IconColor">
            {fetchError}
          </h5>
        )}
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
