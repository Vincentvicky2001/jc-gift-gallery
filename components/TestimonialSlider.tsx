"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rahul",
    text: "Amazing quality and fast delivery!",
  },
  {
    name: "Sneha",
    text: "Best customized gifts collection.",
  },
  {
    name: "Karthik",
    text: "Premium packing and great support.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-8">
      <div className="bg-[#FFF8E7] rounded-3xl p-6 shadow-md text-center">
        <h2 className="text-2xl font-bold text-[#B8860B] mb-4">
          Customer Reviews
        </h2>

        <div className="transition-all duration-500">
          <p className="text-lg text-black italic">
            “{testimonials[index].text}”
          </p>

          <p className="mt-4 font-bold text-[#1C1C1C]">
            ⭐⭐⭐⭐⭐ {testimonials[index].name}
          </p>
        </div>
      </div>
    </section>
  );
}