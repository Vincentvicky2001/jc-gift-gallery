"use client";

export default function AccountPage() {

  const logout = () => {
    localStorage.removeItem("jc-cart");
    localStorage.removeItem("jc-wishlist");

    alert("Logged out successfully!");

    window.location.href = "/";
  };

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        {/* Profile */}
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

        {/* Options */}
        <div className="space-y-4">

          <a
            href="/track-order"
            className="block border border-[#E8E1D6] rounded-2xl p-4 hover:bg-[#FFF8E7] transition"
          >
            📦 My Orders
          </a>

          <a
            href="/wishlist"
            className="block border border-[#E8E1D6] rounded-2xl p-4 hover:bg-[#FFF8E7] transition"
          >
            ❤️ Wishlist
          </a>

          <a
            href="/saved-address"
            className="block border border-[#E8E1D6] rounded-2xl p-4 hover:bg-[#FFF8E7] transition"
          >
            📍 Saved Addresses
          </a>

          <a
            href="/settings"
            className="block border border-[#E8E1D6] rounded-2xl p-4 hover:bg-[#FFF8E7] transition"
          >
            ⚙️ Account Settings
          </a>

          <button
            onClick={logout}
            className="w-full text-left border border-red-200 text-red-500 rounded-2xl p-4 hover:bg-red-50 transition"
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </main>
  );
}