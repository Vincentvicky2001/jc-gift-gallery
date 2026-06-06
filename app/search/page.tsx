"use client";

import { useState } from "react";
import { products } from "../../components/ProductData";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.price.includes(search)
    );
  });

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
        Search Products
      </h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by product name or price..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-[#B8860B] rounded-2xl p-4 outline-none text-black placeholder:text-gray-500 bg-white"
        />
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <a
              href={`/product/${product.slug}`}
              key={product.slug}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <img
                src={product.image}
                alt=""
                className="w-full h-44 object-cover"
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