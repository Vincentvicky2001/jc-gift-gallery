"use client";

import { useEffect, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  size?: string;
  finish?: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("jc-cart");

    if (savedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(savedCart);

        setCart(
          parsedCart.map((item) => ({
            ...item,
            quantity: Number(item.quantity) || 1,
          }))
        );
      } catch {
        setCart([]);
      }
    }
  }, []);

  const saveCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("jc-cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (index: number) => {
    const updatedCart = cart.map((item, itemIndex) =>
      itemIndex === index
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    saveCart(updatedCart);
  };

  const decreaseQuantity = (index: number) => {
    const updatedCart = cart.map((item, itemIndex) =>
      itemIndex === index
        ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1),
          }
        : item
    );

    saveCart(updatedCart);
  };

  const removeItem = (index: number) => {
    const updatedCart = cart.filter(
      (_, itemIndex) => itemIndex !== index
    );

    saveCart(updatedCart);
  };

  const getNumericPrice = (price: string) => {
    return Number(price.replace(/[^\d.]/g, "")) || 0;
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + getNumericPrice(item.price) * item.quantity,
    0
  );

  const whatsappMessage = `Hello JC Gift Gallery,

I want to order these products:

${cart
  .map(
    (item, index) => `${index + 1}. Product: ${item.name}
${item.size ? `Size: ${item.size}\n` : ""}${
      item.finish ? `Type: ${item.finish}\n` : ""
    }Price: ${item.price}
Quantity: ${item.quantity}
Subtotal: ₹${(
      getNumericPrice(item.price) * item.quantity
    ).toLocaleString("en-IN")}`
  )
  .join("\n\n")}

Total Amount: ₹${totalPrice.toLocaleString("en-IN")}

Please confirm availability and payment details.`;

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-4 pb-28">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-5 md:p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <>
            <p className="text-gray-600 text-center">
              Your cart is empty.
            </p>

            <a
              href="/"
              className="block mt-6 text-center bg-[#D4A017] text-white py-3 rounded-2xl font-bold"
            >
              Continue Shopping
            </a>
          </>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => {
                const subtotal =
                  getNumericPrice(item.price) * item.quantity;

                return (
                  <div
                    key={`${item.slug}-${item.size || ""}-${
                      item.finish || ""
                    }-${index}`}
                    className="flex gap-4 border border-[#E8E1D6] rounded-2xl p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />

                    <div className="flex-1">
                      <h2 className="font-bold text-lg text-black">
                        {item.name}
                      </h2>

                      {item.size && (
                        <p className="text-sm text-gray-600">
                          Size:{" "}
                          <span className="font-semibold">
                            {item.size}
                          </span>
                        </p>
                      )}

                      {item.finish && (
                        <p className="text-sm text-gray-600">
                          Type:{" "}
                          <span className="font-semibold">
                            {item.finish}
                          </span>
                        </p>
                      )}

                      <p className="text-lg font-bold text-[#B8860B] mt-2">
                        {item.price}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(index)}
                          className="w-9 h-9 rounded-full border border-[#D4A017] text-[#B8860B] font-bold text-xl"
                        >
                          −
                        </button>

                        <span className="font-bold text-lg min-w-6 text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(index)}
                          className="w-9 h-9 rounded-full bg-[#D4A017] text-white font-bold text-xl"
                        >
                          +
                        </button>
                      </div>

                      <p className="mt-3 text-black font-semibold">
                        Subtotal:{" "}
                        <span className="text-[#B8860B]">
                          ₹{subtotal.toLocaleString("en-IN")}
                        </span>
                      </p>

                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="mt-3 text-red-600 font-semibold hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-[#FFF8ED] border border-[#E8E1D6] rounded-2xl p-5 flex items-center justify-between">
              <span className="text-xl font-bold text-black">
                Total Amount
              </span>

              <span className="text-2xl font-bold text-[#B8860B]">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <a
  href="/checkout"
  className="block mt-6 text-center bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg"
>
  Proceed to Checkout
</a>
          </>
        )}
      </div>
    </main>
  );
}