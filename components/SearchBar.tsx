export default function SearchBar() {
  return (
    <div className="px-4 py-3">
      <a
        href="/search"
        className="bg-white border border-[#E8E1D6] rounded-2xl px-4 py-4 flex items-center justify-between shadow-sm"
      >
        <span className="text-gray-500">
          Search gifts, combos, mugs, frames...
        </span>

        <span className="text-2xl text-[#B8860B]">🔍</span>
      </a>
    </div>
  );
}