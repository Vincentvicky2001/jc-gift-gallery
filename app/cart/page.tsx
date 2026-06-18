"use client";

import { useEffect, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("jc-cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeItem = (slug: string) => {
    const updatedCart = cart.filter((item) => item.slug !== slug);
    setCart(updatedCart);
    localStorage.setItem("jc-cart", JSON.stringify(updatedCart));
  };

  const whatsappMessage = `Hello JC Gift Gallery,

I want to order these products:

${cart
  .map(
    (item) =>
      `Product: ${item.name}
Price: ${item.price}
Quantity: ${item.quantity}`
  )
  .join("\n\n")}

Please confirm availability and payment details.`;

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-4 pb-28">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-5 md:p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <>
            <p className="text-gray-600">Your cart is empty.</p>

            <a
              href="/"
              className="block mt-6 text-center bg-[#D4A017] text-white py-3 rounded-xl font-bold"
            >
              Continue Shopping
            </a>
          </>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.slug}
                  className="flex gap-4 border border-[#E8E1D6] rounded-2xl p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h2 className="font-bold text-black">{item.name}</h2>
                    <p className="text-[#B8860B] font-bold">{item.price}</p>
                    <p className="text-gray-600">
                      Quantity: {item.quantity}
                    </p>

                    <button
                      onClick={() => removeItem(item.slug)}
                      className="mt-2 text-red-600 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/919538952178?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 text-center bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg"
            >
              Order Cart on WhatsApp
            </a>
          </>
        )}
      </div>
    </main>
  );
}