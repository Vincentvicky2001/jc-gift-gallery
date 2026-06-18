"use client";

import { useEffect, useState } from "react";

export default function SavedAddressPage() {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const savedAddress = localStorage.getItem("jc-address");
    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, []);

  const saveAddress = () => {
    localStorage.setItem("jc-address", address);
    alert("Address saved successfully!");
  };

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6 pb-28">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          Saved Address
        </h1>

        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
          className="w-full border border-[#E8E1D6] rounded-xl p-4 h-40 outline-none"
        />

        <button
          onClick={saveAddress}
          className="w-full mt-5 bg-[#D4A017] text-white py-3 rounded-xl font-bold"
        >
          Save Address
        </button>

        <a
          href="/account"
          className="block mt-4 text-center text-[#B8860B] font-semibold"
        >
          Back to Account
        </a>
      </div>
    </main>
  );
}