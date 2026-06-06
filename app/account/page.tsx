export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-full bg-[#F3E8D2] flex items-center justify-center text-4xl">
            👤
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#B8860B]">
              My Account
            </h1>

            <p className="text-gray-500">
              Welcome to JC Gift Gallery
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-[#E8E1D6] rounded-2xl p-4">
            📦 My Orders
          </div>

          <div className="border border-[#E8E1D6] rounded-2xl p-4">
            ❤️ Wishlist
          </div>

          <div className="border border-[#E8E1D6] rounded-2xl p-4">
            📍 Saved Addresses
          </div>

          <div className="border border-[#E8E1D6] rounded-2xl p-4">
            ⚙ Account Settings
          </div>

          <div className="border border-red-200 text-red-500 rounded-2xl p-4">
            🚪 Logout
          </div>
        </div>
      </div>
    </main>
  );
}