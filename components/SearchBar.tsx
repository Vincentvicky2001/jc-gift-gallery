"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "./ProductData";

export default function SearchBar() {
  const router = useRouter();
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredProducts = products
    .filter((product) => {
      const query = searchText.trim().toLowerCase();

      if (!query) {
        return false;
      }

      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    })
    .slice(0, 6);

  useEffect(() => {
    const closeSuggestions = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", closeSuggestions);

    return () => {
      document.removeEventListener(
        "mousedown",
        closeSuggestions
      );
    };
  }, []);

  const openProduct = (slug: string) => {
    setSearchText("");
    setShowSuggestions(false);
    router.push(`/product/${slug}`);
  };

  const handleSearch = () => {
    const query = searchText.trim();

    if (!query) {
      return;
    }

    if (filteredProducts.length > 0) {
      openProduct(filteredProducts[0].slug);
      return;
    }

    alert("No matching products found.");
  };

  return (
    <div
      ref={searchBoxRef}
      className="relative mx-auto w-full max-w-3xl"
    >
      <div className="flex overflow-hidden rounded-2xl border border-[#E8E1D6] bg-white shadow-sm">
        <input
          type="text"
          value={searchText}
          placeholder="Search gifts, frames, mugs..."
          onChange={(event) => {
            setSearchText(event.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          className="w-full px-4 py-3 text-black outline-none md:px-5 md:py-4"
        />

        <button
          type="button"
          onClick={handleSearch}
          aria-label="Search products"
          className="bg-gradient-to-r from-[#D4A017] to-[#B8860B] px-5 font-bold text-white md:px-7"
        >
          🔍
        </button>
      </div>

      {showSuggestions && searchText.trim() && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[420px] overflow-y-auto rounded-2xl border border-[#E8E1D6] bg-white shadow-xl">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <button
                key={product.slug}
                type="button"
                onClick={() => openProduct(product.slug)}
                className="flex w-full items-center gap-4 border-b border-[#F0EAE0] p-3 text-left transition last:border-b-0 hover:bg-[#FFF8ED]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-bold text-black">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                  <p className="font-bold text-[#B8860B]">
                    {product.price}
                  </p>
                </div>

                <span className="text-xl text-[#B8860B]">
                  ›
                </span>
              </button>
            ))
          ) : (
            <div className="p-6 text-center">
              <p className="font-semibold text-gray-700">
                No products found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Try searching for frame, mug, birthday or
                keychain.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}