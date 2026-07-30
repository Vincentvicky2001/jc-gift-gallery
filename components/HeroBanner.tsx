"use client";

import { useEffect, useState } from "react";

const banners = [
  "/images/banner/banner1.jpg",
  "/images/banner/banner2.jpg",
  "/images/banner/banner3.jpg",
  "/images/banner/banner4.jpg",
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
    icon: "❤️",
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
    icon: "⭐",
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
    <section className="bg-gradient-to-b from-[#FFFEFC] to-[#F7F5EF] px-2 py-2 md:px-4 md:py-3">
      <div className="mx-auto max-w-7xl">

        {/* Banner Slider */}
        <div className="relative overflow-hidden rounded-[20px] border border-[#E9E3D6] bg-[#F7F3EA] shadow-md md:rounded-[30px]">
          <div className="relative h-[230px] sm:h-[360px] md:h-[480px] lg:h-[560px] w-full">
            {banners.map((banner, index) => (
              <img
                key={banner}
                src={banner}
                alt={`JC Gift Gallery Banner ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
                  currentBanner === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              />
            ))}

            <button
              type="button"
              onClick={showPreviousBanner}
              aria-label="Previous banner"
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-black shadow-md transition hover:bg-white md:left-5 md:h-14 md:w-14 md:text-3xl"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={showNextBanner}
              aria-label="Next banner"
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-black shadow-md transition hover:bg-white md:right-5 md:h-14 md:w-14 md:text-3xl"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2 md:bottom-4">
              {banners.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentBanner(index)}
                  aria-label={`Open banner ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 md:h-3 ${
                    currentBanner === index
                      ? "w-7 bg-[#D4A017] md:w-8"
                      : "w-2.5 bg-white/90 shadow md:w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-2 grid grid-cols-2 gap-2 md:mt-4 md:grid-cols-4 md:gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex min-h-[125px] flex-col items-center justify-center rounded-2xl border border-[#E7E1D5] bg-[#FBFAF7] px-2 py-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:min-h-[165px] md:px-3 md:py-4"
            >
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#ECE6DA] bg-[#FFFDF9] text-2xl shadow-sm md:h-14 md:w-14 md:text-3xl">
                {feature.icon}
              </div>

              <h3 className="text-sm font-black leading-5 text-black md:text-lg">
                {feature.title}
              </h3>

              <p className="mt-1 text-xs leading-4 text-gray-700 md:text-base">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Statistic Cards */}
        <div className="mt-2 grid grid-cols-2 gap-2 md:mt-3 md:grid-cols-4 md:gap-3">
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="flex min-h-[115px] flex-col items-center justify-center rounded-2xl border border-[#E7E1D5] bg-[#FBFAF7] px-2 py-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:min-h-[155px] md:px-3 md:py-4"
            >
              <div className="mb-1 text-2xl md:text-3xl">
                {statistic.icon}
              </div>

              <p className="text-2xl font-black text-black md:text-4xl">
                {statistic.value}
              </p>

              <p className="mt-1 text-xs font-medium leading-4 text-gray-700 md:text-base">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}