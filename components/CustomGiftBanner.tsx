export default function CustomGiftBanner() {
  return (
    <section className="px-4 py-4">
      <div className="border border-[#D4A017] rounded-2xl p-4 flex items-center justify-between bg-[#FFFDF8]">
        <div>
          <h3 className="font-bold text-black">
            🎁 Personalized Gifts Made with Love
          </h3>
          <p className="text-sm text-gray-600">
            Customize your memories, your way.
          </p>
        </div>

        <a
          href="/contact"
          className="bg-black text-white px-5 py-3 rounded-xl font-bold"
        >
          Customize Now →
        </a>
      </div>
    </section>
  );
}