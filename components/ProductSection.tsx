type Props = {
  title: string;
};

export default function ProductSection({ title }: Props) {
  const products = [
    {
      slug: "led-photo-frame",
      name: "LED Photo Frame",
      price: "₹599",
      oldPrice: "₹999",
      offer: "40% OFF",
      image: "/images/gift1.jpg",
    },
    {
      slug: "premium-gift-combo",
      name: "Premium Gift Combo",
      price: "₹999",
      oldPrice: "₹1599",
      offer: "38% OFF",
      image: "/images/gift2.jpg",
    },
    {
      slug: "couple-mug",
      name: "Couple Mug",
      price: "₹299",
      oldPrice: "₹499",
      offer: "40% OFF",
      image: "/images/gift3.jpg",
    },
    {
      slug: "led-name-lamp",
      name: "LED Name Lamp",
      price: "₹799",
      oldPrice: "₹1299",
      offer: "38% OFF",
      image: "/images/gift4.jpg",
    },
  ];

  return (
    <section className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#1C1C1C]">
          {title}
        </h2>

        <button className="text-[#B8860B] font-semibold">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <a
            href={`/product/${product.slug}`}
            key={product.name}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E8E1D6] block hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt=""
                className="w-full h-44 object-cover"
              />

              <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">
                🤍
              </button>
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="font-semibold text-sm">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <p className="text-[#1C1C1C] font-bold">
                  {product.price}
                </p>

                <p className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </p>
              </div>

              <div className="mt-2 inline-block bg-[#F3E8D2] text-[#B8860B] text-xs px-2 py-1 rounded-lg">
                {product.offer}
              </div>

              <div
                className="block text-center mt-4 bg-[#25D366] text-white py-2 rounded-xl font-semibold"
              >
                Buy on WhatsApp
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}