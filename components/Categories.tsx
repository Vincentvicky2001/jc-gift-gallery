const categories = [
  { name: "Birthday", icon: "🎁", link: "/category/birthday" },
  { name: "Anniversary", icon: "♡", link: "/category/anniversary" },
  { name: "Couple", icon: "👥", link: "/category/couple" },
  { name: "Corporate", icon: "💼", link: "/category/corporate" },
  { name: "Combo", icon: "🎁", link: "/category/combo" },
  { name: "Mugs", icon: "☕", link: "/category/mugs" },
  { name: "Frames", icon: "▣", link: "/category/frames" },
  { name: "Keychains", icon: "🔑", link: "/category/keychains" },
  { name: "Customized T Shirt", icon: "👕", link: "/category/customized-t-shirt" },
  { name: "Acrylic Frames", icon: "✨", link: "/category/acrylic-frames" },
  { name: "Stickers and Labels", icon: "🏷️", link: "/category/stickers-and-labels" },
  { name: "Resin Art", icon: "🌊", link: "/category/resin-art" },
];

export default function Categories() {
  return (
    <section className="px-4 py-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-black">
          Shop by Category
        </h2>

        <a href="/search" className="text-black font-semibold">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.link}
            className="bg-white rounded-2xl border border-[#E8E1D6] shadow-sm p-4 text-center hover:shadow-md transition min-h-[120px] flex flex-col items-center justify-center"
          >
            <div className="text-3xl text-[#B8860B] mb-3">
              {category.icon}
            </div>

            <p className="text-sm font-semibold text-black leading-tight text-center">
              {category.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}