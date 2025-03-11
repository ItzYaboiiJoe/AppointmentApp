import { useState } from "react";
import Availability from "./Availability";

function BusinessInfoForm() {
  const [showAvailability, setShowAvailability] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBusinessHoursClick = () => {
    setShowAvailability(true);
  };

  function handleCloseModal() {
    setIsModalOpen(false);
    setShowAvailability(false);
  }

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
        <div className="grid grid-cols-3 gap-2 w-64">
          {/* Business Address City */}
          <div>
            <input
              type="text"
              placeholder="City"
              className="border-solid border border-black w-20"
            />
          </div>
          {/* Business Address State */}
          <div>
            <input
              type="text"
              placeholder="State"
              className="border-solid border border-black w-20"
            />
          </div>
          {/* Business Address Zip */}
          <div>
            <input
              type="text"
              placeholder="Zip"
              className="border-solid border border-black w-20"
            />
          </div>
        </div>
        {/* Business Type */}
        <div>
          <input
            type="text"
            placeholder="Business Type"
            className="border-solid border border-black w-64"
          />
        </div>
        {/* Business Email */}
        <div>
          <input
            type="text"
            placeholder="Business Email"
            className="border-solid border border-black w-64"
          />
        </div>
        {/* Business Phone Number */}
        <div>
          <input
            type="text"
            placeholder="Business Phone Number"
            className="border-solid border border-black w-64"
          />
        </div>
        {/* Business Hours */}
        <div>
          <button
            type="button"
            className="bg-Primary text-white px-4 py-1 shadow-xl rounded hover:bg-[#1e6f65] w-64"
            onClick={handleBusinessHoursClick}
          >
            Business Hours
          </button>
        </div>
        {showAvailability && (
          <div className="mt-4">
            <Availability onClose={handleCloseModal} />
          </div>
        )}
      </div>
    </form>
  );
}

export default BusinessInfoForm;
