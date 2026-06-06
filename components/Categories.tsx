export default function Categories() {
  const categories = [
    "Birthday",
    "Couple",
    "Corporate",
    "Combo",
    "Mug",
    "Frame",
    "Toys",
    "Festival",
  ];

  return (
    <section className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#1C1C1C]">
          Browse Categories
        </h2>

        <button className="text-[#B8860B] font-semibold">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((item) => (
          <a
            key={item}
            href={`/category/${item}`}
            className="bg-white rounded-2xl shadow-sm p-4 text-center hover:shadow-lg transition"
          >
            <div className="w-14 h-14 mx-auto bg-[#F3E8D2] rounded-full mb-3 flex items-center justify-center text-2xl">
              🎁
            </div>

            <p className="text-sm font-medium text-black">
              {item}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}