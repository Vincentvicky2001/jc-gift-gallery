"use client";

import { useEffect, useState } from "react";

export default function OfferSlider() {
  const offers = [
    {
      title: "Birthday Special",
      subtitle: "Flat 40% OFF",
      image: "/images/gift1.jpg",
    },
    {
      title: "Couple Gifts",
      subtitle: "Premium Romantic Collection",
      image: "/images/gift2.jpg",
    },
    {
      title: "Custom Mugs",
      subtitle: "Buy 1 Get 1 Free",
      image: "/images/gift3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-6">
      <div className="relative rounded-3xl overflow-hidden shadow-xl">
        <img
          src={offers[current].image}
          alt=""
          className="w-full h-[250px] md:h-[400px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8">
          <h2 className="text-white text-4xl font-bold">
            {offers[current].title}
          </h2>

          <p className="text-white text-xl mt-3">
            {offers[current].subtitle}
          </p>

          <button className="mt-6 bg-[#D4A017] text-white px-6 py-3 rounded-xl w-fit font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}