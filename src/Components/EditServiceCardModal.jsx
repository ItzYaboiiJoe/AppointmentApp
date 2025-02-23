function EditServiceCardModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4 text-IconColor">
          Edit Service (Service Name)
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Title Field */}
            <div>
              <label className="block text-IconColor">Title</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="Title"
                required
              />
            </div>
            {/* Price Field */}
            <div>
              <label className="block text-IconColor">Price</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="Price"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Duration Field Dropdown */}
            <div>
              <label className="block text-IconColor">Duration</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="Duration"
                required
              >
                <option value="">Select duration</option>
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
              </select>
            </div>
            {/* Category Field */}
            <div>
              <label className="block text-IconColor">Category</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="Category"
                required
              />
            </div>
          </div>
          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-IconColor">Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-1"
              name="Description"
              required
            />
          </div>
          {/* Save and Cancel Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 shadow-xl"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-Primary text-white px-4 py-2 rounded hover:bg-[#1e6f65] shadow-xl"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditServiceCardModal;
