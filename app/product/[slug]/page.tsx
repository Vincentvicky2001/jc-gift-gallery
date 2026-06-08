type Props = {
  params: {
    slug: string;
  };
};

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

export default function ProductPage({ params }: Props) {
  const product = products.find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl">
        Product Not Found
      </div>
    );
  }

  const whatsappMessage = `Hello JC Gift Gallery,

I would like to order:

Product: ${product.name}
Price: ${product.price}

Customer Details:
Name:
Phone:
Address:

Please confirm availability.`;

  const whatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-white p-5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={product.image}
            alt=""
            className="w-full rounded-3xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-black">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            {product.rating}

            <span className="text-gray-600">
              {product.review}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <p className="text-3xl font-bold text-black">
              {product.price}
            </p>

            <p className="line-through text-gray-400">
              {product.oldPrice}
            </p>
          </div>

          <div className="mt-4 inline-block bg-red-500 text-white px-3 py-1 rounded-lg font-bold">
            {product.offer}
          </div>

          <div className="mt-6 space-y-4">

            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              placeholder="Enter Delivery Address"
              className="w-full border p-3 rounded-xl h-32"
            />

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}