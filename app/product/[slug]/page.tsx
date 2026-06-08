"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

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

export default function ProductPage() {
  const params = useParams();

  const slug = params.slug as string;

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl font-bold">
        Product Not Found
      </div>
    );
  }

  const whatsappMessage = `Hello JC Gift Gallery,

I want to order this product:

Product Name: ${product.name}
Price: ${product.price}
Quantity: ${quantity}

Customer Details:
Name: ${name}
Phone Number: ${phone}
Address: ${address}

Please confirm my order.`;

  const whatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-[#fffaf0] px-4 py-8 pb-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-5 rounded-3xl shadow-lg">
        
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl shadow-md object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-black">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            <span>{product.rating}</span>

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

            <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {product.offer}
            </span>
          </div>

          <div className="mt-6 space-y-4">

            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded-xl outline-none"
            />

            <input
              type="number"
              min="1"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border p-3 rounded-xl outline-none"
            />

            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded-xl outline-none"
            />

            <textarea
              placeholder="Enter Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border p-3 rounded-xl h-28 outline-none"
            />

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg shadow-md hover:bg-green-600 transition"
            >
              <span className="text-2xl">🟢</span>

              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}