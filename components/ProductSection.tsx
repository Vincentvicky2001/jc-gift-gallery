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
      rating: "⭐⭐⭐⭐⭐",
      review: "(5.0)",
    },
    {
      slug: "premium-gift-combo",
      name: "Premium Gift Combo",
      price: "₹999",
      oldPrice: "₹1599",
      offer: "38% OFF",
      image: "/images/gift2.jpg",
      rating: "⭐⭐⭐⭐",
      review: "(4.0)",
    },
    {
      slug: "couple-mug",
      name: "Couple Mug",
      price: "₹299",
      oldPrice: "₹499",
      offer: "40% OFF",
      image: "/images/gift3.jpg",
      rating: "⭐⭐⭐⭐⭐",
      review: "(4.8)",
    },
    {
      slug: "led-name-lamp",
      name: "LED Name Lamp",
      price: "₹799",
      oldPrice: "₹1299",
      offer: "38% OFF",
      image: "/images/gift4.jpg",
      rating: "⭐⭐⭐⭐",
      review: "(4.3)",
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
        {products.map((product) => {
          return (
            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E8E1D6] block hover:shadow-xl transition"
            >
              <a href={`/product/${product.slug}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-44 object-cover hover:scale-110 transition duration-300"
                  />

                  <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">
                    🤍
                  </button>

                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-bold">
                    {product.offer}
                  </div>
                </div>

                <div className="p-3 pb-3">
                  <h3 className="font-semibold text-sm text-black">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
                    {product.rating}

                    <span className="text-gray-600 text-xs">
                      {product.review}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-[#1C1C1C] font-bold">
                      {product.price}
                    </p>

                    <p className="text-gray-400 line-through text-sm">
                      {product.oldPrice}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-semibold">
                      ⚡ Fast Delivery
                    </div>

                    <div className="bg-blue-100 text-blue-700 text-[10px] px-2 py-1 rounded-full font-semibold">
                      🔒 Secure Payment
                    </div>

                    <div className="bg-purple-100 text-purple-700 text-[10px] px-2 py-1 rounded-full font-semibold">
                      💯 Premium Quality
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap mt-2">
                    <div className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded-lg font-semibold">
                      🔥 Trending
                    </div>

                    <div className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-lg font-semibold">
                      🚀 Limited Stock
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}