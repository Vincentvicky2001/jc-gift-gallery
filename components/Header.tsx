export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#E8E1D6]">
      <div className="flex items-center justify-between px-5 py-4">
        
        {/* Left Menu */}
        <div className="flex items-center gap-4">
          <a href="/" className="text-black font-semibold">
            Home
          </a>

          <a href="/about" className="text-black font-semibold">
            About
          </a>

          <a href="/reviews" className="text-black font-semibold">
            Reviews
          </a>

          <a href="/contact" className="text-black font-semibold">
            Contact
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.jpg"
            alt="JC Gift Gallery"
            className="w-[180px] md:w-[240px] object-contain"
          />
        </div>

        {/* Right Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="/wishlist">❤️</a>
          <a href="/cart">🛒</a>
          <a href="/account">👤</a>
        </div>
      </div>
    </header>
  );
}