export default function AdminHelpPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          Admin Product Management
        </h1>

        <p className="text-gray-700 leading-7">
          In the current demo version, product details are managed through code.
          In the full production version, the owner will be able to manage
          products directly from the admin dashboard.
        </p>

        <div className="mt-8 space-y-4">
          <div className="border border-[#E8E1D6] rounded-xl p-4">
            ✅ Add new products
          </div>

          <div className="border border-[#E8E1D6] rounded-xl p-4">
            ✅ Update prices and offers
          </div>

          <div className="border border-[#E8E1D6] rounded-xl p-4">
            ✅ Upload product images
          </div>

          <div className="border border-[#E8E1D6] rounded-xl p-4">
            ✅ Delete unavailable products
          </div>

          <div className="border border-[#E8E1D6] rounded-xl p-4">
            ✅ Manage customer orders
          </div>
        </div>

        <a
          href="/admin"
          className="block text-center mt-8 bg-[#D4A017] text-white py-4 rounded-xl font-bold"
        >
          Back to Admin
        </a>
      </div>
    </main>
  );
}