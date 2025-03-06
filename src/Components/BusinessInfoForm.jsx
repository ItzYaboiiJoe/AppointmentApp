function BusinessInfoForm() {
  return (
    <form>
      <div className="flex flex-col space-y-2">
        <div>
          <h2>Business Information</h2>
          <input
            type="text"
            placeholder="Name"
            className="border-solid border border-black"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Street Address"
            className="border-solid border border-black"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Business Type"
            className="border-solid border border-black"
          />
        </div>
      </div>
    </form>
  );
}

export default BusinessInfoForm;
