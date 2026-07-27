"use client";

import { useState } from "react";

export default function CustomizeSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [productType, setProductType] = useState("");
  const [occasion, setOccasion] = useState("");
  const [printText, setPrintText] = useState("");
  const [quantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");

  const whatsappMessage = `Hello JC Gift Gallery,

I want to customize a gift.

Customer Details:
Name: ${name}
Phone: ${phone}

Product Details:
Product Type: ${productType}
Occasion: ${occasion}
Name/Text To Print: ${printText}
Quantity: ${quantity}

Customization Requirements:
${details}

Please confirm design, price, and delivery details.`;

  const whatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-[#FAF7F0] px-4 py-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#E8E1D6] bg-white p-6 shadow-lg md:p-10">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            🎁 Customize Your Gift
          </h2>

          <p className="mt-3 text-lg leading-8 text-gray-600">
            Tell us what product you need, how you want it customized,
            and place your order directly on WhatsApp.
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Name */}
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-[#E8E1D6] px-4 py-4 outline-none"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl border border-[#E8E1D6] px-4 py-4 outline-none"
          />

          {/* Product Type */}
          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="rounded-xl border border-[#E8E1D6] px-4 py-4 outline-none"
          >
            <option value="">Select Product Type</option>
            <option>Mug</option>
            <option>Photo Frame</option>
            <option>LED Frame</option>
            <option>Keychain</option>
            <option>T Shirt</option>
            <option>Combo Gift</option>
            <option>Acrylic Frame</option>
            <option>Corporate Gift</option>
            <option>Resin Art</option>
            <option>Stickers and Labels</option>
            <option>Other Customized Gift</option>
          </select>

          {/* Occasion */}
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="rounded-xl border border-[#E8E1D6] px-4 py-4 outline-none"
          >
            <option value="">Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Wedding</option>
            <option>Love / Couple</option>
            <option>Friendship</option>
            <option>Corporate</option>
            <option>Festival</option>
            <option>Other Occasion</option>
          </select>

          {/* Print Text */}
          <input
            type="text"
            placeholder="Name/Text To Print"
            value={printText}
            onChange={(e) => setPrintText(e.target.value)}
            className="rounded-xl border border-[#E8E1D6] px-4 py-4 outline-none"
          />

          {/* Quantity */}
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="rounded-xl border border-[#E8E1D6] px-4 py-4 outline-none"
          />
        </div>

        {/* Details */}
        <textarea
          placeholder="Describe Your Customization Requirements..."
          rows={5}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="mt-5 w-full rounded-xl border border-[#E8E1D6] px-4 py-4 outline-none"
        />

        {/* Reference Image Info */}
        <div className="mt-5">
          <label className="mb-2 block font-semibold text-black">
            If you have any reference image or design, please share it
            directly on WhatsApp after clicking order.
          </label>

          <p className="text-sm leading-6 text-gray-500">
            ✅ Share reference images, screenshots, or design ideas directly
            in WhatsApp for better customization.
          </p>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4A017] to-[#B8860B] px-6 py-4 text-center text-lg font-bold text-white shadow-xl transition duration-300 hover:scale-[1.01] hover:from-[#C99700] hover:to-[#A87400]"
        >
          <img
            src="/images/whatsapp.png"
            alt="WhatsApp"
            className="h-8 w-8 object-contain"
          />
          <span>Customize &amp; Order on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}