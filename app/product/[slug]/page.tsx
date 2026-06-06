const products = {
  "led-photo-frame": {
    name: "LED Photo Frame",
    price: "₹599",
    oldPrice: "₹999",
    offer: "40% OFF",
    image: "/images/gift1.jpg",
    description:
      "A premium customized LED photo frame, perfect for birthdays, anniversaries, couple gifts, and special occasions.",
  },
  "premium-gift-combo": {
    name: "Premium Gift Combo",
    price: "₹999",
    oldPrice: "₹1599",
    offer: "38% OFF",
    image: "/images/gift2.jpg",
    description:
      "A luxury premium gift combo with elegant packing, perfect for birthdays, weddings, and corporate gifting.",
  },
  "couple-mug": {
    name: "Couple Mug",
    price: "₹299",
    oldPrice: "₹499",
    offer: "40% OFF",
    image: "/images/gift3.jpg",
    description:
      "Beautiful customized couple mug for anniversaries, birthdays, and memorable special days.",
  },
  "led-name-lamp": {
    name: "LED Name Lamp",
    price: "₹799",
    oldPrice: "₹1299",
    offer: "38% OFF",
    image: "/images/gift4.jpg",
    description:
      "Premium LED name lamp customized with name, perfect for room decor and gifting.",
  },
};

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductDetailsPage({ params }: Props) {
  const product =
    products[params.slug as keyof typeof products] ||
    products["led-photo-frame"];

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-4 pb-24">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <img
          src={product.image}
          alt=""
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#1C1C1C]">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <p className="text-2xl font-bold text-[#B8860B]">
              {product.price}
            </p>

            <p className="text-gray-400 line-through">
              {product.oldPrice}
            </p>

            <span className="bg-[#F3E8D2] text-[#B8860B] px-3 py-1 rounded-lg text-sm">
              {product.offer}
            </span>
          </div>

          <p className="mt-5 text-gray-700 leading-7">
            {product.description}
          </p>

          <div className="mt-6">
            <label className="font-semibold">Quantity</label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-3"
            />
          </div>

          <a
            href={`https://wa.me/917760761963?text=Hello JC Gift Gallery,%0A%0AI would like to order:%0AProduct: ${product.name}%0APrice: ${product.price}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-6 bg-[#25D366] text-white py-4 rounded-xl font-bold"
          >
            Buy on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}