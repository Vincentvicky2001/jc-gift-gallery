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
  const [fileName, setFileName] = useState("");

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

Reference Image:
${fileName ? fileName : "I will send image on WhatsApp"}

Please confirm design, price, and delivery details.`;

  const whatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="px-4 py-10 bg-[#FAF7F0]">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-[#E8E1D6] shadow-lg p-6 md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            🎁 Customize Your Gift
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Tell us what product you need, how you want it customized,
            and place your order directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
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

          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
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

          <input
            type="text"
            placeholder="Name/Text To Print"
            value={printText}
            onChange={(e) => setPrintText(e.target.value)}
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />
        </div>

        <textarea
          placeholder="Describe Your Customization Requirements..."
          rows={5}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none mt-5"
        />

        <div className="mt-5">
          <label className="block mb-2 font-semibold text-black">
            Upload Reference Image
          </label>

          <input
            type="file"
            onChange={(e) =>
              setFileName(e.target.files?.[0]?.name || "")
            }
            className="w-full border border-[#E8E1D6] rounded-xl px-4 py-3"
          />

          <p className="text-sm text-gray-500 mt-2">
            Note: Image file cannot be auto-attached through website WhatsApp.
            Please send the image manually in WhatsApp after clicking order.
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-7
            inline-flex
            items-center
            justify-center
            bg-gradient-to-r
            from-[#D4A017]
            to-[#B8860B]
            hover:scale-105
            duration-300
            transition
            text-white
            px-8
            py-4
            rounded-full
            font-bold
            text-lg
            shadow-xl
            w-full
            md:w-auto
            text-center
          "
        >
          🎁 Customize & Order on WhatsApp →
        </a>
      </div>
    </section>
  );
}