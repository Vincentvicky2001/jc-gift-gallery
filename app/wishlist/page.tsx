"use client";

import { useEffect, useState } from "react";

type WishlistItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("jc-wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const removeItem = (slug: string) => {
    const updatedWishlist = wishlist.filter((item) => item.slug !== slug);
    setWishlist(updatedWishlist);
    localStorage.setItem("jc-wishlist", JSON.stringify(updatedWishlist));
  };

  const addToCart = (item: WishlistItem) => {
    const savedCart = localStorage.getItem("jc-cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find(
      (cartItem: any) => cartItem.slug === item.slug
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((cartItem: any) =>
        cartItem.slug === item.slug
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    localStorage.setItem("jc-cart", JSON.stringify(updatedCart));
    alert("Added to cart successfully!");
  };

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-4 pb-28">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-5 md:p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <>
            <p className="text-gray-600">
              No wishlist items added yet.
            </p>

            <a
              href="/"
              className="block mt-6 text-center bg-[#D4A017] text-white py-3 rounded-xl font-bold"
            >
              Explore Products
            </a>
          </>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
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

                  <div className="flex flex-wrap gap-3 mt-3">
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-[#D4A017] text-white px-4 py-2 rounded-xl font-bold"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() => removeItem(item.slug)}
                      className="text-red-600 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}