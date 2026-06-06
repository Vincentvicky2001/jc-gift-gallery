export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          My Wishlist
        </h1>

        <p className="text-gray-600">
          No wishlist items added yet.
        </p>

        <a
          href="/"
          className="block mt-6 text-center bg-[#D4A017] text-white py-3 rounded-xl font-bold"
        >
          Explore Products
        </a>
      </div>
    </main>
  );
}