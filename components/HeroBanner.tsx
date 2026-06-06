export default function HeroBanner() {
  return (
    <section className="px-4 py-5">
      <div className="bg-gradient-to-r from-[#F3E8D2] to-[#FFFDF8] rounded-3xl overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left */}
          <div className="p-8">
            <p className="text-[#B8860B] font-semibold uppercase tracking-wide">
              Special Gift
            </p>

            <h1 className="text-5xl font-bold text-black mt-2 leading-tight">
              Collection
            </h1>

            <p className="text-gray-700 mt-4 text-lg">
              Make Every Occasion Extra Special
            </p>

            <h2 className="text-6xl font-bold text-[#D4A017] mt-6">
              50% OFF
            </h2>

            <button className="mt-8 bg-black text-white px-7 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
              SHOP NOW →
            </button>
          </div>

          {/* Right */}
          <div className="p-5 flex justify-center">
            <img
              src="/images/gift1.jpg"
              alt=""
              className="w-full max-w-md h-[320px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}