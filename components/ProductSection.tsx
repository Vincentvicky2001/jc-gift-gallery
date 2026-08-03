"use client";

import { useEffect, useState } from "react";
import { products } from "./products";

type Props = {
  title: string;
};

type Product = {
  slug: string;
  name: string;
  price: string;
  oldPrice?: string;
  offer?: string;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

export default function ProductSection({ title }: Props) {
  const [wishlistedSlugs, setWishlistedSlugs] = useState<string[]>([]);

  const displayProducts =
    title === "Best Selling"
      ? products.slice(0, 4)
      : products.slice(4, 8);

  useEffect(() => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("jc-wishlist") || "[]"
      );

      if (Array.isArray(savedWishlist)) {
        setWishlistedSlugs(
          savedWishlist.map((item: Product) => item.slug)
        );
      }
    } catch {
      setWishlistedSlugs([]);
    }
  }, []);

  const addToWishlist = (product: Product) => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("jc-wishlist") || "[]"
      );

      const wishlist = Array.isArray(savedWishlist)
        ? savedWishlist
        : [];

      const alreadyExists = wishlist.some(
        (item: Product) => item.slug === product.slug
      );

      let updatedWishlist: Product[];

      if (alreadyExists) {
        updatedWishlist = wishlist.filter(
          (item: Product) => item.slug !== product.slug
        );

        setWishlistedSlugs((current) =>
          current.filter((slug) => slug !== product.slug)
        );
      } else {
        updatedWishlist = [...wishlist, product];

        setWishlistedSlugs((current) => [
          ...current,
          product.slug,
        ]);
      }

      localStorage.setItem(
        "jc-wishlist",
        JSON.stringify(updatedWishlist)
      );

      window.dispatchEvent(
        new Event("wishlistUpdated")
      );
    } catch {
      alert("Unable to update wishlist.");
    }
  };

  const addToCart = (product: Product) => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("jc-cart") || "[]"
      );

      const cart: CartItem[] = Array.isArray(savedCart)
        ? savedCart
        : [];

      const exists = cart.some(
        (item) => item.slug === product.slug
      );

      const updatedCart = exists
        ? cart.map((item) =>
            item.slug === product.slug
              ? {
                  ...item,
                  quantity:
                    (Number(item.quantity) || 1) + 1,
                }
              : item
          )
        : [
            ...cart,
            {
              ...product,
              quantity: 1,
            },
          ];

      localStorage.setItem(
        "jc-cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      alert("Added to cart!");
    } catch {
      alert("Unable to add product to cart.");
    }
  };

  return (
    <section
      id={
        title === "Best Selling"
          ? "best-selling"
          : title.toLowerCase().replace(/\s+/g, "-")
      }
      className="bg-gradient-to-b from-[#FFFDF8] to-[#FFF6E9] px-4 py-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-black text-black">
          {title}
        </h2>

        <a
          href="/search"
          className="font-bold text-black transition hover:text-[#B8860B]"
        >
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {displayProducts.map((product) => {
          const isWishlisted =
            wishlistedSlugs.includes(product.slug);

          return (
            <div
              key={`${title}-${product.slug}`}
              className="overflow-hidden rounded-3xl border border-[#F3E5C8] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <a
                  href={`/products/${product.slug}`}
                  className="group relative block overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <img
                    src={
                      product.image.includes(".jpg")
                        ? product.image.replace(
                            ".jpg",
                            "-2.jpg"
                          )
                        : product.image
                    }
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 h-56 w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 sm:h-72"
                  />
                </a>

                <button
                  type="button"
                  onClick={() =>
                    addToWishlist(product)
                  }
                  aria-label={
                    isWishlisted
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="27"
                    height="27"
                    fill={
                      isWishlisted
                        ? "#ec4899"
                        : "#f9a8d4"
                    }
                    stroke={
                      isWishlisted
                        ? "#ec4899"
                        : "#ec4899"
                    }
                    strokeWidth="1.8"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>

                <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-black shadow">
                  {product.offer || "New"}
                </div>
              </div>

              <div className="space-y-3 p-4">
                <a
                  href={`/products/${product.slug}`}
                >
                  <h3 className="text-lg font-black leading-snug text-black transition hover:text-[#B8860B]">
                    {product.name}
                  </h3>
                </a>

                <div className="flex items-center gap-2 text-sm text-yellow-500">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-600">
                    (5.0)
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-2xl font-black text-black">
                    {product.price}
                  </p>

                  {product.oldPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </p>
                  )}
                </div>

                <div className="space-y-1 text-sm font-medium text-[#3B2F1C]">
                  <p>⚡ Fast Delivery</p>
                  <p>🔒 Secure Payment</p>
                  <p>💯 Premium Quality</p>
                  <p>🔥 Trending</p>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="w-full rounded-2xl bg-gradient-to-r from-[#D4A017] to-[#B8860B] py-3 font-bold text-white shadow-lg transition hover:scale-[1.02]"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}