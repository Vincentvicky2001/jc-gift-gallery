export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#E8E1D6] shadow-lg z-50">
      <div className="flex justify-around items-center py-4">

        <a
          href="/"
          className="flex flex-col items-center text-[#B8860B]"
        >
          <span>🏠</span>
          <p className="text-xs mt-1">Home</p>
        </a>

        <a
          href="/track-order"
          className="flex flex-col items-center text-gray-500"
        >
          <span>📦</span>
          <p className="text-xs mt-1">Orders</p>
        </a>

        <a
          href="/cart"
          className="flex flex-col items-center text-gray-500"
        >
          <span>🛒</span>
          <p className="text-xs mt-1">Cart</p>
        </a>

        <a
          href="/wishlist"
          className="flex flex-col items-center text-gray-500"
        >
          <span>❤️</span>
          <p className="text-xs mt-1">Wishlist</p>
        </a>

        <a
          href="/account"
          className="flex flex-col items-center text-gray-500"
        >
          <span>👤</span>
          <p className="text-xs mt-1">Account</p>
        </a>

      </div>
    </div>
  );
}