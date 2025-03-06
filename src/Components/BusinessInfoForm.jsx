function BusinessInfoForm() {
  return (
    <form>
      <div className="flex flex-col space-y-2 ml-5">
        <h2 className="text-Primary text-2xl my-2">Business Information</h2>
        {/* Business Name */}
        <div>
          <input
            type="text"
            placeholder="Name"
            className="border-solid border border-black w-64"
          />
        </div>
        {/* Business Address */}
        <div>
          <input
            type="text"
            placeholder="Street Address"
            className="border-solid border border-black w-64"
          />
        </div>
        {/* Business Type */}
        <div>
          <input
            type="text"
            placeholder="Business Type"
            className="border-solid border border-black w-64"
          />
        </div>
        {/* Business Hours */}
        <div>
          <button className="bg-Primary text-white px-4 py-1 shadow-xl rounded hover:bg-[#1e6f65] w-64">
            Business Hours
          </button>
        </div>
      </div>
    </form>
  );
}

export default BusinessInfoForm;
