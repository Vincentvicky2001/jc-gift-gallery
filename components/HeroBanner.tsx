"use client";

import { useEffect, useState } from "react";

const banners = [
  "/images/banner/banner1.jpg",
  "/images/banner/banner2.jpg",
  "/images/banner/banner3.jpg",
];

export default function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-2 md:px-4 py-3 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6E9]">
      <div className="rounded-[35px] overflow-hidden bg-gradient-to-r from-[#FFF8ED] to-[#FFF3DD] shadow-2xl max-w-7xl mx-auto border border-[#E8D4A2]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-6 sm:p-8 md:p-14">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black leading-tight">
              Welcome to
              <br />
              <span className="text-[#B8860B] drop-shadow-sm">
                JC Gift Gallery
              </span>
            </h1>

            <p className="mt-5 text-base md:text-2xl text-[#3B2F1C] leading-relaxed font-medium">
              Thoughtful Gifts,
              <br />
              Heartfelt Moments,
              <br />
              Beautiful Memories,
              <br />
              Where Every Gift Tells a Story.
            </p>

            <a
              href="#best-seller"
              className="inline-flex items-center gap-2 mt-7 bg-gradient-to-r from-[#D4A017] to-[#B8860B] hover:scale-105 transition duration-300 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-2xl"
            >
              🎁 Shop Now →
            </a>
          </div>

          <div className="h-full p-4 md:p-8 flex items-center justify-center">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-[#E9C46A] blur-3xl opacity-20 rounded-[35px]"></div>

              <img
                src={banners[currentBanner]}
                alt="Premium Gift Banner"
                className="relative w-full h-[260px] sm:h-[420px] md:h-[620px] object-cover rounded-[30px] shadow-2xl transition-all duration-700"
              />

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentBanner === index ? "bg-[#B8860B]" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}