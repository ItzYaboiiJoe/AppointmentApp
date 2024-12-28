function AdminServicesCards() {
  return (
    <div className="max-w-sm bg-HoverShade rounded-lg shadow-xl hover:shadow-2xl">
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-IconColor">
          Regular Haircut
        </h5>
        <div className="flex justify-between">
          <p className="CardsHeadersStyle">Price:</p>
          <p className="CardsInfoStyle">$20</p>
        </div>
        <div className="flex justify-between">
          <p className="CardsHeadersStyle">Duration:</p>
          <p className="CardsInfoStyle">30 mins</p>
        </div>
        <div className="flex justify-between">
          <p className="CardsHeadersStyle">Category:</p>
          <p className="CardsInfoStyle">Haircut</p>
        </div>
        <div className="flex justify-between">
          <p className="CardsHeadersStyle">Description:</p>
          <p className="CardsInfoStyle">Standard Men Haircut</p>
        </div>
      </div>
    </div>
  );
}

export default AdminServicesCards;
