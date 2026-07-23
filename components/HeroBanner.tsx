"use client";

import { useEffect, useState } from "react";

const banners = [
  "/images/banner/banner1.jpg",
  "/images/banner/banner2.jpg",
  "/images/banner/banner3.jpg",
];

const features = [
  {
    icon: "🎁",
    title: "Personalized Gifts",
    subtitle: "Made Just For You",
  },
  {
    icon: "🚚",
    title: "Fast & Safe Delivery",
    subtitle: "On Time, Every Time",
  },
  {
    icon: "🏅",
    title: "Premium Quality",
    subtitle: "You Can Trust",
  },
  {
    icon: "♡",
    title: "Made with Love",
    subtitle: "For Every Occasion",
  },
];

const statistics = [
  {
    icon: "👥",
    value: "500+",
    label: "Happy Customers",
  },
  {
    icon: "🎁",
    value: "1000+",
    label: "Gifts Delivered",
  },
  {
    icon: "☆",
    value: "4.9",
    label: "Customer Rating",
  },
  {
    icon: "▦",
    value: "12+",
    label: "Gift Categories",
  },
];

export default function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((previousBanner) =>
        previousBanner === banners.length - 1
          ? 0
          : previousBanner + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const showPreviousBanner = () => {
    setCurrentBanner((previousBanner) =>
      previousBanner === 0
        ? banners.length - 1
        : previousBanner - 1
    );
  };

  const showNextBanner = () => {
    setCurrentBanner((previousBanner) =>
      previousBanner === banners.length - 1
        ? 0
        : previousBanner + 1
    );
  };

  return (
    <section className="bg-gradient-to-b from-[#FFFDF8] to-[#FFF6E9] px-2 py-3 md:px-4">
      <div className="mx-auto max-w-7xl">
        {/* Full Width Changing Banner */}
        <div className="relative overflow-hidden rounded-[24px] border border-[#E8D4A2] bg-[#FFF8ED] shadow-xl md:rounded-[35px]">
          <div className="relative h-[280px] w-full sm:h-[420px] md:h-[560px] lg:h-[620px]">
            {banners.map((banner, index) => (
              <img
                key={banner}
                src={banner}
                alt={`JC Gift Gallery Banner ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  currentBanner === index
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}

            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            {/* Shop Now Button on Every Banner */}
<div className="absolute bottom-8 left-0 right-0 flex justify-center">
  <a
    href="#best-selling"
    onClick={(event) => {
      event.preventDefault();

      document
        .getElementById("best-selling")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }}
    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] px-7 py-3 text-base font-bold text-white shadow-2xl transition duration-300 hover:scale-105 md:px-10 md:py-4 md:text-xl"
  >
    🎁 Shop Now →
  </a>
</div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={showPreviousBanner}
              aria-label="Previous banner"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl font-bold text-black shadow-lg transition hover:bg-white md:left-5 md:h-14 md:w-14"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNextBanner}
              aria-label="Next banner"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl font-bold text-black shadow-lg transition hover:bg-white md:right-5 md:h-14 md:w-14"
            >
              ›
            </button>

            {/* Slider Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 md:bottom-4">
              {banners.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentBanner(index)}
                  aria-label={`Open banner ${index + 1}`}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentBanner === index
                      ? "w-8 bg-[#D4A017]"
                      : "w-3 bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-[24px] border border-[#E8D4A2] bg-white p-4 shadow-lg md:grid-cols-4 md:gap-0 md:rounded-[30px] md:p-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center justify-center px-3 py-5 text-center ${
                index !== features.length - 1
                  ? "md:border-r md:border-[#E8D4A2]"
                  : ""
              }`}
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF8ED] text-4xl text-[#B8860B]">
                {feature.icon}
              </div>

              <h3 className="text-base font-bold text-black md:text-lg">
                {feature.title}
              </h3>

              <p className="mt-1 text-sm text-gray-700 md:text-base">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Row */}
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-[24px] border border-[#E8D4A2] bg-white p-4 shadow-lg md:grid-cols-4 md:gap-0 md:rounded-[30px] md:p-6">
          {statistics.map((statistic, index) => (
            <div
              key={statistic.label}
              className={`flex flex-col items-center justify-center px-3 py-5 text-center ${
                index !== statistics.length - 1
                  ? "md:border-r md:border-[#E8D4A2]"
                  : ""
              }`}
            >
              <div className="mb-2 text-4xl text-[#B8860B]">
                {statistic.icon}
              </div>

              <p className="text-3xl font-black text-black md:text-4xl">
                {statistic.value}
              </p>

              <p className="mt-1 text-sm text-gray-700 md:text-base">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}