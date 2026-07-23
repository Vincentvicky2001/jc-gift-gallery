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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("jc-cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];

      if (Array.isArray(parsedCart)) {
        setCart(
          parsedCart.map((item: CartItem) => ({
            ...item,
            quantity: Number(item.quantity) || 1,
          }))
        );
      }
    } catch {
      setCart([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);

    localStorage.setItem(
      "jc-cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (index: number) => {
    const updatedCart = cart.map((item, itemIndex) =>
      itemIndex === index
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
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

  const clearCart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to remove all products from your cart?"
    );

    if (confirmed) {
      saveCart([]);
    }
  };

  const getNumericPrice = (price: string) => {
    return Number(price.replace(/[^\d.]/g, "")) || 0;
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      getNumericPrice(item.price) * item.quantity,
    0
  );

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAF7F0]">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#E8D4A2] border-t-[#B8860B]" />

          <p className="mt-4 font-semibold text-gray-700">
            Loading your cart...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFDF8] to-[#FFF4E2] px-4 py-8 pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-black text-black md:text-4xl">
              My Cart
            </h1>

            <p className="mt-1 text-gray-600">
              Review your products before checkout.
            </p>
          </div>

          {cart.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="self-start rounded-full border border-red-200 bg-white px-5 py-2 font-bold text-red-600 shadow-sm transition hover:bg-red-50"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="rounded-[32px] border border-[#E8D4A2] bg-white px-6 py-16 text-center shadow-xl">
            <div className="mb-5 text-7xl">
              🛒
            </div>

            <h2 className="text-2xl font-black text-black">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Add personalized gifts to your cart and make
              every occasion special.
            </p>

            <a
              href="/"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105"
            >
              Continue Shopping →
            </a>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <section className="space-y-4">
              {cart.map((item, index) => {
                const subtotal =
                  getNumericPrice(item.price) *
                  item.quantity;

                return (
                  <article
                    key={`${item.slug}-${item.size || ""}-${
                      item.finish || ""
                    }-${index}`}
                    className="rounded-[28px] border border-[#E8D4A2] bg-white p-4 shadow-lg transition hover:shadow-xl md:p-5"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <a
                        href={`/product/${item.slug}`}
                        className="shrink-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-48 w-full rounded-2xl object-cover sm:h-36 sm:w-36"
                        />
                      </a>

                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <a
                              href={`/product/${item.slug}`}
                            >
                              <h2 className="text-xl font-black text-black transition hover:text-[#B8860B]">
                                {item.name}
                              </h2>
                            </a>

                            {item.size && (
                              <p className="mt-2 text-sm text-gray-600">
                                Frame Size:{" "}
                                <span className="font-bold text-black">
                                  {item.size}
                                </span>
                              </p>
                            )}

                            {item.finish && (
                              <p className="mt-1 text-sm text-gray-600">
                                Frame Type:{" "}
                                <span className="font-bold text-black">
                                  {item.finish}
                                </span>
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeItem(index)
                            }
                            aria-label={`Remove ${item.name}`}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-xl text-red-600 transition hover:scale-110 hover:bg-red-100"
                          >
                            ×
                          </button>
                        </div>

                        <p className="mt-3 text-xl font-black text-[#B8860B]">
                          {item.price}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center rounded-full border border-[#E8D4A2] bg-[#FFF8ED] p-1">
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(index)
                              }
                              disabled={item.quantity <= 1}
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold text-[#B8860B] shadow-sm transition hover:bg-[#FFF0CC] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              −
                            </button>

                            <span className="min-w-12 text-center text-lg font-black text-black">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(index)
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A017] text-xl font-bold text-white shadow-sm transition hover:bg-[#B8860B]"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-gray-600">
                              Subtotal
                            </p>

                            <p className="text-xl font-black text-black">
                              ₹
                              {subtotal.toLocaleString(
                                "en-IN"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            <aside className="h-fit rounded-[28px] border border-[#E8D4A2] bg-white p-6 shadow-xl lg:sticky lg:top-24">
              <h2 className="text-2xl font-black text-black">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4 border-b border-[#E8E1D6] pb-5">
                <div className="flex items-center justify-between text-gray-700">
                  <span>Total Products</span>

                  <span className="font-bold text-black">
                    {cart.length}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-700">
                  <span>Total Quantity</span>

                  <span className="font-bold text-black">
                    {totalItems}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-700">
                  <span>Delivery</span>

                  <span className="font-bold text-green-600">
                    Confirm on WhatsApp
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-black text-black">
                  Grand Total
                </span>

                <span className="text-3xl font-black text-[#B8860B]">
                  ₹
                  {totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                Final delivery charges and payment details
                will be confirmed during checkout.
              </p>

              <a
                href="/checkout"
                className="mt-6 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 text-lg font-black text-white shadow-lg transition hover:scale-[1.02]"
              >
                Proceed to Checkout →
              </a>

              <a
                href="/"
                className="mt-3 flex w-full items-center justify-center rounded-2xl border-2 border-[#D4A017] py-3 font-bold text-[#B8860B] transition hover:bg-[#FFF8ED]"
              >
                Continue Shopping
              </a>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-gray-600">
                <div className="rounded-xl bg-[#FFF8ED] p-2">
                  🔒
                  <p className="mt-1">Secure</p>
                </div>

                <div className="rounded-xl bg-[#FFF8ED] p-2">
                  💯
                  <p className="mt-1">Quality</p>
                </div>

                <div className="rounded-xl bg-[#FFF8ED] p-2">
                  🚚
                  <p className="mt-1">Delivery</p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}