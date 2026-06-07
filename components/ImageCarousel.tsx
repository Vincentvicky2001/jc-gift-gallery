"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/gift1.jpg",
  "/images/gift2.jpg",
  "/images/gift3.jpg",
  "/images/gift4.jpg",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-5">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <img
          src={images[current]}
          alt=""
          className="w-full h-[250px] md:h-[450px] object-cover transition duration-500"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Premium Gift Collections
          </h2>

          <p className="text-white mt-3 text-sm md:text-lg">
            Customized gifts for every special occasion
          </p>

          <button className="mt-5 bg-[#D4A017] text-white px-6 py-3 rounded-full font-bold">
            Shop Now →
          </button>
        </div>
      </div>
    </section>
  );
}