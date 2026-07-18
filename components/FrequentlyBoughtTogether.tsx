"use client";

import { products } from "./ProductData";

type Props = {
  currentSlug: string;
};

export default function FrequentlyBoughtTogether({
  currentSlug,
}: Props) {
  const suggestions = products
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);

  const addAllToCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("jc-cart") || "[]"
    );

    suggestions.forEach((item) => {
      cart.push({
        slug: item.slug,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: 1,
      });
    });

    localStorage.setItem(
      "jc-cart",
      JSON.stringify(cart)
    );

    window.dispatchEvent(new Event("cartUpdated"));

    alert("Products added to cart!");
  };

  return (
    <section className="max-w-6xl mx-auto mt-6 bg-white rounded-3xl shadow-lg p-6 border border-[#E8E1D6]">
      <h2 className="text-2xl font-bold text-[#B8860B] mb-6">
        Frequently Bought Together
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {suggestions.map((item) => (
          <div
            key={item.slug}
            className="border rounded-2xl p-4"
          >
            <img
              src={item.image}
              className="w-full h-48 object-cover rounded-xl"
              alt={item.name}
            />

            <h3 className="font-bold mt-3">
              {item.name}
            </h3>

            <p className="text-[#B8860B] font-bold">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={addAllToCart}
        className="mt-6 w-full bg-[#D4A017] text-white py-4 rounded-2xl font-bold"
      >
        Add All To Cart
      </button>
    </section>
  );
}