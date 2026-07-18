"use client";

import { useEffect, useState } from "react";

type RecentlyViewedItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  category?: string;
  oldPrice?: string;
  offer?: string;
};

type RecentlyViewedProps = {
  currentSlug: string;
};

export default function RecentlyViewed({
  currentSlug,
}: RecentlyViewedProps) {
  const [recentProducts, setRecentProducts] = useState<
    RecentlyViewedItem[]
  >([]);

  const loadRecentProducts = () => {
    try {
      const savedProducts = JSON.parse(
        localStorage.getItem("jc-recently-viewed") || "[]"
      );

      if (!Array.isArray(savedProducts)) {
        setRecentProducts([]);
        return;
      }

      const filteredProducts = savedProducts
        .filter(
          (item: RecentlyViewedItem) =>
            item.slug !== currentSlug
        )
        .slice(0, 4);

      setRecentProducts(filteredProducts);
    } catch {
      setRecentProducts([]);
    }
  };

  useEffect(() => {
    loadRecentProducts();

    window.addEventListener(
      "recentlyViewedUpdated",
      loadRecentProducts
    );

    window.addEventListener(
      "storage",
      loadRecentProducts
    );

    return () => {
      window.removeEventListener(
        "recentlyViewedUpdated",
        loadRecentProducts
      );

      window.removeEventListener(
        "storage",
        loadRecentProducts
      );
    };
  }, [currentSlug]);

  if (recentProducts.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-6 max-w-6xl rounded-3xl border border-[#E8E1D6] bg-white p-5 shadow-lg md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#B8860B] md:text-3xl">
          Recently Viewed
        </h2>

        <p className="mt-1 text-gray-600">
          Continue exploring products you viewed earlier.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {recentProducts.map((item) => (
          <a
            key={item.slug}
            href={`/product/${item.slug}`}
            className="overflow-hidden rounded-2xl border border-[#E8E1D6] bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover sm:h-52"
              />

              {item.offer && (
                <span className="absolute left-2 top-2 rounded-lg bg-green-600 px-2 py-1 text-xs font-bold text-white">
                  {item.offer}
                </span>
              )}
            </div>

            <div className="p-3">
              <h3 className="line-clamp-2 min-h-[48px] font-bold text-black">
                {item.name}
              </h3>

              {item.category && (
                <p className="mt-1 text-xs text-gray-500">
                  {item.category}
                </p>
              )}

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#B8860B]">
                  {item.price}
                </span>

                {item.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {item.oldPrice}
                  </span>
                )}
              </div>

              <div className="mt-3 rounded-xl bg-gradient-to-r from-[#D4A017] to-[#B8860B] py-2 text-center text-sm font-bold text-white">
                View Again
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}