export default function AddProductPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          Add New Product
        </h1>

        <form className="space-y-5">
          <div>
            <label className="font-semibold">Product Name</label>
            <input
              type="text"
              placeholder="Example: LED Photo Frame"
              className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-4"
            />
          </div>

          <div>
            <label className="font-semibold">Price</label>
            <input
              type="text"
              placeholder="Example: ₹599"
              className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-4"
            />
          </div>

          <div>
            <label className="font-semibold">Old Price</label>
            <input
              type="text"
              placeholder="Example: ₹999"
              className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-4"
            />
          </div>

          <div>
            <label className="font-semibold">Offer</label>
            <input
              type="text"
              placeholder="Example: 40% OFF"
              className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-4"
            />
          </div>

          <div>
            <label className="font-semibold">Category</label>
            <select className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-4">
              <option>Birthday Gifts</option>
              <option>Couple Gifts</option>
              <option>Photo Frames</option>
              <option>Mugs</option>
              <option>Gift Combos</option>
              <option>Custom Gifts</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Product Image</label>
            <input
              type="file"
              className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-4"
            />
          </div>

          <div>
            <label className="font-semibold">Description</label>
            <textarea
              placeholder="Enter product description"
              rows={5}
              className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-4"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-[#D4A017] text-white py-4 rounded-xl font-bold"
          >
            Save Product
          </button>
        </form>
      </div>
    </main>
  );
}