export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6 pb-28">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-[#B8860B] mb-6">
          Track Your Order
        </h1>

        <input
          type="text"
          placeholder="Enter Order ID"
          className="w-full border border-[#E8E1D6] rounded-xl p-4 mb-4"
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          className="w-full border border-[#E8E1D6] rounded-xl p-4 mb-6"
        />

        <button className="w-full bg-[#D4A017] text-white py-4 rounded-xl font-bold">
          TRACK ORDER
        </button>

        <div className="mt-8 space-y-4">
          <div className="bg-[#F3E8D2] p-4 rounded-xl">✅ Order Received</div>
          <div className="bg-[#F3E8D2] p-4 rounded-xl">✅ Preparing</div>
          <div className="bg-[#F3E8D2] p-4 rounded-xl">⏳ Shipped</div>
          <div className="bg-gray-200 p-4 rounded-xl">🚚 Out For Delivery</div>
          <div className="bg-gray-200 p-4 rounded-xl">📦 Delivered</div>
        </div>
      </div>
    </main>
  );
}