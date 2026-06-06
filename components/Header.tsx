export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#E8E1D6]">
      <div className="flex items-center justify-between px-5 py-5">
        {/* Menu */}
        <button className="text-3xl text-black">
          ☰
        </button>

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.jpg"
            alt="JC Gift Gallery"
            className="w-[180px] md:w-[240px] object-contain"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-4 text-2xl">
          <span>🔔</span>
          <span>👤</span>
        </div>
      </div>
    </header>
  );
}