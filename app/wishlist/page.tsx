"use client";

import { useEffect, useState } from "react";

type WishlistItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
};

type CartItem = WishlistItem & {
  quantity: number;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("jc-wishlist") || "[]"
      );

      setWishlist(
        Array.isArray(savedWishlist) ? savedWishlist : []
      );
    } catch {
      setWishlist([]);
    }
  }, []);

  const saveWishlist = (updatedWishlist: WishlistItem[]) => {
    setWishlist(updatedWishlist);

    localStorage.setItem(
      "jc-wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const removeItem = (slug: string) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.slug !== slug
    );

    saveWishlist(updatedWishlist);
    setMessage("Product removed from wishlist.");

    window.setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const addToCart = (item: WishlistItem) => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("jc-cart") || "[]"
      );

      const cart: CartItem[] = Array.isArray(savedCart)
        ? savedCart
        : [];

      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem.slug === item.slug
      );

      let updatedCart: CartItem[];

      if (existingItemIndex >= 0) {
        updatedCart = cart.map((cartItem, index) =>
          index === existingItemIndex
            ? {
                ...cartItem,
                quantity:
                  (Number(cartItem.quantity) || 1) + 1,
              }
            : cartItem
        );
      } else {
        updatedCart = [
          ...cart,
          {
            ...item,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "jc-cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(new Event("cartUpdated"));

      setMessage(`${item.name} added to cart successfully.`);

      window.setTimeout(() => {
        setMessage("");
      }, 2500);
    } catch {
      setMessage("Unable to add the product to the cart.");
    }
  };

  const moveToCart = (item: WishlistItem) => {
    addToCart(item);

    const updatedWishlist = wishlist.filter(
      (wishlistItem) => wishlistItem.slug !== item.slug
    );

    saveWishlist(updatedWishlist);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-4 pb-28">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-5 shadow-lg md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-[#B8860B]">
            My Wishlist
          </h1>

          {wishlist.length > 0 && (
            <span className="rounded-full bg-[#FFF4D6] px-4 py-2 font-bold text-[#B8860B]">
              {wishlist.length}{" "}
              {wishlist.length === 1 ? "Item" : "Items"}
            </span>
          )}
        </div>

        {message && (
          <p className="mb-5 rounded-xl border border-green-200 bg-green-50 p-3 font-semibold text-green-700">
            {message}
          </p>
        )}

        {wishlist.length === 0 ? (
          <div className="py-10 text-center">
            <div className="mb-4 text-6xl">♡</div>

            <p className="text-lg font-semibold text-gray-700">
              Your wishlist is empty.
            </p>

            <p className="mt-2 text-gray-500">
              Save products you like and view them here later.
            </p>

            <a
              href="/"
              className="mt-6 inline-block rounded-xl bg-[#D4A017] px-8 py-3 font-bold text-white"
            >
              Explore Products
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.slug}
                className="flex flex-col gap-4 rounded-2xl border border-[#E8E1D6] p-4 sm:flex-row"
              >
                <a href={`/product/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full rounded-xl object-cover sm:h-28 sm:w-28"
                  />
                </a>

                <div className="min-w-0 flex-1">
                  <a href={`/product/${item.slug}`}>
                    <h2 className="text-lg font-bold text-black hover:text-[#B8860B]">
                      {item.name}
                    </h2>
                  </a>

                  <p className="mt-1 text-lg font-bold text-[#B8860B]">
                    {item.price}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="rounded-xl bg-[#D4A017] px-4 py-2 font-bold text-white"
                    >
                      Add to Cart
                    </button>

                    <button
                      type="button"
                      onClick={() => moveToCart(item)}
                      className="rounded-xl border border-[#D4A017] px-4 py-2 font-bold text-[#B8860B]"
                    >
                      Move to Cart
                    </button>

                    <a
                      href={`/product/${item.slug}`}
                      className="rounded-xl border border-gray-300 px-4 py-2 font-semibold text-gray-700"
                    >
                      View Product
                    </a>

                    <button
                      type="button"
                      onClick={() => removeItem(item.slug)}
                      className="rounded-xl px-4 py-2 font-semibold text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {wishlist.length > 0 && (
          <a
            href="/cart"
            className="mt-6 block rounded-2xl bg-[#25D366] py-4 text-center text-lg font-bold text-white"
          >
            View Shopping Cart
          </a>
        )}
      </div>
    </main>
  );
}