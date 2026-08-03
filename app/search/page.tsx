"use client";

import { useMemo, useState } from "react";
import { products } from "@/components/products";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  const uniqueProducts = useMemo(() => {
    const map = new Map();

    products.forEach((product) => {
      // Skip placeholder images
      if (
        !product.image ||
        product.image.includes("placeholder")
      ) {
        return;
      }

      // Skip duplicate product names
      const key = product.name.toLowerCase();

      if (!map.has(key)) {
        map.set(key, product);
      }
    });

    return Array.from(map.values());
  }, []);

  const filteredProducts = uniqueProducts.filter((product) => {
    return (
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.price.includes(search)
    );
  });

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
        Search Products
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by product name or price..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-[#B8860B] rounded-2xl p-4 outline-none text-black placeholder:text-gray-500 bg-white"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <a
              href={`/products/${product.slug}`}
              key={product.slug}
              className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="p-3">
                <h2 className="font-semibold text-sm text-black">
                  {product.name}
                </h2>

                <p className="text-[#B8860B] font-bold mt-1">
                  {product.price}
                </p>
              </div>
            </a>
          ))
        ) : (
          <p className="text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </main>
  );
}