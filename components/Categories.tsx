const categories = [
  {
    name: "Birthday",
    image: "/images/categories/birthday.jpg",
    link: "/category/Birthday",
  },
  {
    name: "Anniversary",
    image: "/images/categories/anniversary.jpg",
    link: "/category/Couple",
  },
  {
    name: "Couple",
    image: "/images/categories/couple.jpg",
    link: "/category/Couple",
  },
  {
    name: "Corporate",
    image: "/images/categories/corporate.jpg",
    link: "/category/Corporate",
  },
  {
    name: "Combo",
    image: "/images/categories/combo.jpg",
    link: "/category/Combo",
  },
  {
    name: "Mugs",
    image: "/images/categories/mugs.jpg",
    link: "/category/Mug",
  },
  {
    name: "Frames",
    image: "/images/categories/frames.jpg",
    link: "/category/Frame",
  },
  {
    name: "Keychains",
    image: "/images/categories/keychains.jpg",
    link: "/category/Keychain",
  },
  {
    name: "Customized T Shirt",
    image: "/images/categories/tshirt.jpg",
    link: "/category/Tshirt",
  },
  {
    name: "Acrylic Frames",
    image: "/images/categories/acrylic.jpg",
    link: "/category/Acrylic",
  },
  {
    name: "Stickers and Labels",
    image: "/images/categories/stickers.jpg",
    link: "/category/Stickers",
  },
  {
    name: "Resin Art",
    image: "/images/categories/resin.jpg",
    link: "/category/Resin",
  },
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.link}
            className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D6] shadow-sm hover:shadow-lg transition"
          >

            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-3">
              <p className="text-lg font-bold text-center text-black">
                {category.name}
              </p>
            </div>

          </a>
        ))}
      </div>
    </section>
  );
}