"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "./products";

export default function SearchBar() {
  const router = useRouter();
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Remove products that use placeholder images
  // and remove repeated product names from search.
  const searchableProducts = useMemo(() => {
    const uniqueProducts = new Map<
      string,
      (typeof products)[number]
    >();

    products
      .filter((product) => {
        const imagePath = product.image.trim().toLowerCase();

        return (
          imagePath !== "" &&
          !imagePath.includes("placeholder")
        );
      })
      .forEach((product) => {
        const productName = product.name.trim().toLowerCase();

        if (!uniqueProducts.has(productName)) {
          uniqueProducts.set(productName, product);
        }
      });

    return Array.from(uniqueProducts.values());
  }, []);

  // Search by product name, category, or price.
  const filteredProducts = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return searchableProducts
      .filter((product) => {
        return (
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.price.toLowerCase().includes(query)
        );
      })
      .slice(0, 6);
  }, [searchText, searchableProducts]);

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
      document.removeEventListener("mousedown", closeSuggestions);
    };
  }, []);

  const openProduct = (slug: string) => {
    setSearchText("");
    setShowSuggestions(false);

    router.push(`/products/${slug}`);
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
          className="bg-gradient-to-r from-[#D4A017] to-[#B8860B] px-5 font-bold text-white transition hover:opacity-90 md:px-7"
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
                  className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-bold text-black">
                    {product.name}
                  </h3>

                  <p className="text-sm capitalize text-gray-500">
                    {product.category.replaceAll("-", " ")}
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
                Try searching for frame, mug, birthday or keychain.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}