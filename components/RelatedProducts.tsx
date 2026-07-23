"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "./ProductData";

type RelatedProductsProps = {
  currentSlug: string;
  category: string;
};

type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  offer?: string;
  image: string;
};

export default function RelatedProducts({
  currentSlug,
  category,
}: RelatedProductsProps) {
  const router = useRouter();
  const [wishlistedSlugs, setWishlistedSlugs] = useState<string[]>([]);

  const relatedProducts = products
    .filter(
      (product) =>
        product.slug !== currentSlug &&
        product.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, 4);

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

  const toggleWishlist = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    event.stopPropagation();

    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("jc-wishlist") || "[]"
      );

      const wishlist: Product[] = Array.isArray(savedWishlist)
        ? savedWishlist
        : [];

      const exists = wishlist.some(
        (item) => item.slug === product.slug
      );

      const updatedWishlist = exists
        ? wishlist.filter(
            (item) => item.slug !== product.slug
          )
        : [...wishlist, product];

      localStorage.setItem(
        "jc-wishlist",
        JSON.stringify(updatedWishlist)
      );

      setWishlistedSlugs(
        updatedWishlist.map((item) => item.slug)
      );

      window.dispatchEvent(
        new Event("wishlistUpdated")
      );
    } catch {
      alert("Unable to update wishlist.");
    }
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-6 max-w-6xl rounded-[30px] border border-[#E8D4A2] bg-white p-5 shadow-xl md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-black md:text-3xl">
            Related Products
          </h2>

          <p className="mt-1 text-sm text-gray-600 md:text-base">
            You may also like these products.
          </p>
        </div>

        <a
          href={`/category/${category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="shrink-0 rounded-full border border-[#D4A017] px-4 py-2 text-sm font-bold text-[#B8860B] transition hover:bg-[#FFF8ED]"
        >
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {relatedProducts.map((product) => {
          const isWishlisted =
            wishlistedSlugs.includes(product.slug);

          return (
            <article
              key={product.slug}
              onClick={() =>
                router.push(`/product/${product.slug}`)
              }
              className="group cursor-pointer overflow-hidden rounded-3xl border border-[#E8E1D6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
                />

                {product.offer && (
                  <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-black text-white shadow">
                    {product.offer}
                  </span>
                )}

                <button
                  type="button"
                  onClick={(event) =>
                    toggleWishlist(event, product)
                  }
                  aria-label={
                    isWishlisted
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                    fill={
                      isWishlisted
                        ? "#ec4899"
                        : "white"
                    }
                    stroke="#ec4899"
                    strokeWidth="1.8"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <h3 className="line-clamp-2 min-h-[48px] text-base font-black leading-snug text-black md:text-lg">
                  {product.name}
                </h3>

                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#B8860B]">
                  {product.category}
                </p>

                <div className="mt-2 flex items-center gap-1 text-sm text-yellow-500">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-gray-500">
                    (5.0)
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xl font-black text-black">
                    {product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>

                <div className="mt-3 rounded-xl bg-[#FFF8ED] px-3 py-2 text-xs font-bold text-[#6B4A00]">
                  ⚡ Fast Delivery
                </div>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    router.push(
                      `/product/${product.slug}`
                    );
                  }}
                  className="mt-4 w-full rounded-2xl bg-gradient-to-r from-[#D4A017] to-[#B8860B] py-3 text-sm font-black text-white shadow-lg transition hover:scale-[1.02]"
                >
                  View Product →
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}