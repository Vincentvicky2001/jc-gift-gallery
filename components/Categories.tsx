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
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">
          Browse Categories
        </h2>

        <button className="text-[#B8860B] font-semibold">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {categories.map((item, index) => (
          <div key={item} className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-md border-2 border-[#E6C76A]">
              <img
                src={`/images/gift${(index % 4) + 1}.jpg`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm mt-2 font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}