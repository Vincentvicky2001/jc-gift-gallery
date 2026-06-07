export default function HeroBanner() {
  return (
    <section className="px-4 py-4">
      <div className="rounded-3xl overflow-hidden bg-[#FFF3E0] shadow-md max-w-6xl mx-auto">
        <div className="grid grid-cols-2 items-center h-[360px]">
          
          {/* Left Content */}
          <div className="p-8">
            <p className="inline-block border border-[#D4A017] text-[#B8860B] px-3 py-1 rounded-full text-xs font-bold">
              SPECIAL OFFER
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight">
              Make Every Occasion
              <br />
              <span className="text-[#B8860B]">Extra Special</span>
            </h1>

            <p className="text-black mt-5 text-lg">
              Flat
            </p>

            <h2 className="text-6xl md:text-7xl font-bold text-black leading-none">
              50% OFF
            </h2>

            <p className="text-gray-700 mt-3 text-base">
              On Selected Gift Collection
            </p>

            <button className="mt-6 bg-black text-white px-7 py-3 rounded-full font-bold">
              Shop Now →
            </button>
          </div>

          {/* Right Image */}
          <div className="h-full p-5 flex items-center justify-center">
            <img
              src="/images/gift1.jpg"
              alt=""
              className="w-full h-[320px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}