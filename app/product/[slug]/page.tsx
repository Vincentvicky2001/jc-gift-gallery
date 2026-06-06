"use client";

import { useState } from "react";

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
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  return <ProductClient slug={slug} />;
}

function ProductClient({ slug }: { slug: string }) {
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const product =
    products[slug as keyof typeof products] ||
    products["led-photo-frame"];

  const whatsappMessage = `Hello JC Gift Gallery,

I would like to order:

Product: ${product.name}
Price: ${product.price}
Quantity: ${quantity}

Customer Name: ${customerName}
Customer Phone: ${customerPhone}
Delivery Address: ${customerAddress}

Please confirm availability and payment details.`;

  const whatsappLink = `https://wa.me/917760761963?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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

          <div className="mt-6 space-y-4">
            <div>
              <label className="font-semibold text-black">Quantity</label>
              <input
                type="number"
                value={quantity}
                min={1}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-3 text-black bg-white"
              />
            </div>

            <div>
              <label className="font-semibold text-black">Customer Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-3 text-black bg-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="font-semibold text-black">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-3 text-black bg-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="font-semibold text-black">Delivery Address</label>
              <textarea
                placeholder="Enter delivery address"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                rows={4}
                className="w-full mt-2 border border-[#E8E1D6] rounded-xl p-3 text-black bg-white placeholder:text-gray-500"
              ></textarea>
            </div>
          </div>

          <a
            href={whatsappLink}
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