export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-bold text-xl">Total Products</h2>
            <p className="text-3xl font-bold text-[#D4A017] mt-3">4</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-bold text-xl">Orders</h2>
            <p className="text-3xl font-bold text-[#D4A017] mt-3">12</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-bold text-xl">WhatsApp Enquiries</h2>
            <p className="text-3xl font-bold text-[#D4A017] mt-3">28</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

          <button className="bg-[#D4A017] text-white px-5 py-3 rounded-xl font-bold mb-6">
            + Add Product
          </button>

          <div className="space-y-4">
            {["LED Photo Frame", "Premium Gift Combo", "Couple Mug", "LED Name Lamp"].map(
              (item) => (
                <div
                  key={item}
                  className="flex justify-between items-center border border-[#E8E1D6] rounded-xl p-4"
                >
                  <span>{item}</span>

                  <div className="flex gap-3">
                    <button className="text-[#B8860B] font-semibold">
                      Edit
                    </button>
                    <button className="text-red-500 font-semibold">
                      Delete
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}