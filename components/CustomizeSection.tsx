export default function CustomizeSection() {
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
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Enter Phone Number"
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

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
            <option>Stickers and Labels</option>
            <option>Other Customized Gift</option>
          </select>

          <select className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none">
            <option>Select Occasion</option>
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
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />

          <input
            type="number"
            placeholder="Quantity"
            className="border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none"
          />
        </div>

        <textarea
          placeholder="Describe Your Customization Requirements..."
          rows={5}
          className="w-full border border-[#E8E1D6] rounded-xl px-4 py-4 outline-none mt-5"
        />

        <div className="mt-5">
          <label className="block mb-2 font-semibold text-black">
            Upload Reference Image
          </label>

          <input
            type="file"
            className="w-full border border-[#E8E1D6] rounded-xl px-4 py-3"
          />

          <p className="text-sm text-gray-500 mt-2">
            You can also send images directly on WhatsApp after clicking order.
          </p>
        </div>

        <a
          href="https://wa.me/919538952178?text=Hello%20JC%20Gift%20Gallery%2C%20I%20want%20to%20customize%20a%20gift.%20Please%20help%20me%20with%20product%20details%2C%20design%2C%20price%2C%20and%20delivery."
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