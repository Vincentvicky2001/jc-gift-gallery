export default function CustomizeSection() {
  return (
    <section className="px-4 py-10 bg-[#FAF7F0]">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-[#E8E1D6] shadow-sm p-6 md:p-10">

        {/* Heading */}
        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-black">
            🎁 Customize Your Gift
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Tell us your customization requirements and order directly on WhatsApp.
          </p>

        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

          {/* Product Type */}
          <select className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none">
            <option>Select Product Type</option>
            <option>Mug</option>
            <option>Photo Frame</option>
            <option>LED Frame</option>
            <option>Keychain</option>
            <option>T Shirt</option>
            <option>Combo Gift</option>
            <option>Acrylic Frame</option>
            <option>Corporate Gift</option>
            <option>Resin Art</option>
          </select>

          {/* Occasion */}
          <select className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none">
            <option>Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Wedding</option>
            <option>Love / Couple</option>
            <option>Friendship</option>
            <option>Corporate</option>
            <option>Festival</option>
          </select>

          {/* Custom Name */}
          <input
            type="text"
            placeholder="Name/Text To Print"
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

          {/* Quantity */}
          <input
            type="number"
            placeholder="Quantity"
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

        </div>

        {/* Customization Message */}
        <textarea
          placeholder="Describe Your Customization Requirements..."
          rows={5}
          className="w-full border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none mt-5"
        />

        {/* Upload */}
        <div className="mt-5">

          <label className="block mb-2 font-semibold text-black">
            Upload Reference Image
          </label>

          <input
            type="file"
            className="w-full border border-[#E8E1D6] rounded-xl px-4 py-3"
          />

        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919538952178"
          target="_blank"
          className="
            mt-7
            inline-block
            bg-[#B8860B]
            hover:bg-black
            transition
            text-white
            px-8
            py-4
            rounded-full
            font-bold
            text-lg
          "
        >
          Order On WhatsApp →
        </a>

      </div>

    </section>
  );
}