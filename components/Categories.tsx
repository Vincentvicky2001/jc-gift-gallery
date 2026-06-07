const categories = [
  { name: "Birthday", icon: "🎁", link: "/category/Birthday" },
  { name: "Anniversary", icon: "♡", link: "/category/Couple" },
  { name: "Couple", icon: "👥", link: "/category/Couple" },
  { name: "Corporate", icon: "💼", link: "/category/Corporate" },
  { name: "Combo", icon: "🎁", link: "/category/Combo" },
  { name: "Mugs", icon: "☕", link: "/category/Mug" },
  { name: "Frames", icon: "▣", link: "/category/Frame" },
  { name: "Festival", icon: "🎉", link: "/category/Festival" },
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

      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.link}
            className="bg-white rounded-2xl border border-[#E8E1D6] shadow-sm p-4 text-center hover:shadow-md transition"
          >
            <div className="text-4xl text-[#B8860B] mb-3">
              {category.icon}
            </div>

            <p className="text-sm font-semibold text-black">
              {category.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}