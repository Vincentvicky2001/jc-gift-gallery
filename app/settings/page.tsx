"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("jc-name");
    const savedPhone = localStorage.getItem("jc-phone");
    const savedEmail = localStorage.getItem("jc-email");

    if (savedName) setName(savedName);
    if (savedPhone) setPhone(savedPhone);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const saveSettings = () => {
    localStorage.setItem("jc-name", name);
    localStorage.setItem("jc-phone", phone);
    localStorage.setItem("jc-email", email);

    alert("Account settings saved successfully!");
  };

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6 pb-28">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          Account Settings
        </h1>

        {/* Name */}
        <div className="mb-5">

          <label className="block mb-2 font-semibold text-black">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-[#E8E1D6] rounded-xl p-4 outline-none"
          />

        </div>

        {/* Phone */}
        <div className="mb-5">

          <label className="block mb-2 font-semibold text-black">
            Phone Number
          </label>

          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full border border-[#E8E1D6] rounded-xl p-4 outline-none"
          />

        </div>

        {/* Email */}
        <div className="mb-5">

          <label className="block mb-2 font-semibold text-black">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full border border-[#E8E1D6] rounded-xl p-4 outline-none"
          />

        </div>

        {/* Save Button */}
        <button
          onClick={saveSettings}
          className="w-full bg-[#D4A017] text-white py-4 rounded-xl font-bold text-lg"
        >
          Save Settings
        </button>

        {/* Back */}
        <a
          href="/account"
          className="block mt-5 text-center text-[#B8860B] font-semibold"
        >
          Back to Account
        </a>

      </div>

    </main>
  );
}