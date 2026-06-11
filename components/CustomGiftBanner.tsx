export default function CustomGiftBanner() {
  return (
    <section className="px-4 py-6">
      <div className="bg-[#FFFDF8] border border-[#E8E1D6] rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
        
        <div>
          <h2 className="text-lg md:text-xl font-bold text-black">
            🎁 Personalized Gifts Made with Love
          </h2>

          <p className="text-gray-600 mt-1">
            Customize your memories, your way.
          </p>
        </div>

        <a
          href="/category/customized-t-shirt"
          className="bg-[#B8860B] hover:bg-[#D4A017] text-white px-6 py-3 rounded-xl font-bold transition text-center"
        >
          Customize Now →
        </a>

      </div>
    </section>
  );
}