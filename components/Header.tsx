"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-5 py-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-4xl text-black"
        >
          ☰
        </button>

        <img
          src="/logo.jpg"
          alt="JC Gift Gallery"
          className="w-[260px] md:w-[380px] object-contain"
        />

        <div className="flex gap-5 text-3xl">
          <a href="/track-order">🔔</a>
          <a href="/account">👤</a>
        </div>
      </div>

      {open && (
        <div className="bg-white border-t border-[#E8E1D6] px-6 py-4 space-y-4 shadow-md">
          <a href="/" className="block text-black font-semibold">Home</a>
          <a href="/about" className="block text-black font-semibold">About</a>
          <a href="/reviews" className="block text-black font-semibold">Reviews</a>
          <a href="/contact" className="block text-black font-semibold">Contact</a>
          <a href="/faq" className="block text-black font-semibold">FAQ</a>
          <a href="/admin" className="block text-black font-semibold">Admin</a>
        </div>
      )}
    </header>
  );
}