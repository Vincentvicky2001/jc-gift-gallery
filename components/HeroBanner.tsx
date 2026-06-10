export default function HeroBanner() {
  return (
    <section className="px-4 py-5">
      <div className="rounded-[35px] overflow-hidden bg-[#FDF6EC] shadow-lg max-w-7xl mx-auto border border-[#F3E5C8]">

        <div className="grid md:grid-cols-2 items-center min-h-[520px]">

          {/* LEFT CONTENT */}
          <div className="p-8 md:p-14">

            <div className="inline-block border-2 border-[#C89B3C] text-black px-6 py-3 rounded-full text-lg font-bold tracking-wide">
              SPECIAL OFFER
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-black leading-tight mt-6">
              Make Every
              <br />
              Occasion
              <br />
              <span className="text-[#B8860B]">
                Extra Special
              </span>
            </h1>

            <p className="mt-8 text-2xl text-black font-medium">
              Flat
            </p>

            <h2 className="text-6xl md:text-8xl font-black text-black leading-none mt-2">
              50% OFF
            </h2>

            <p className="text-gray-700 mt-5 text-lg">
              On Selected Gift Collection
            </p>

            <button className="mt-8 bg-black hover:bg-[#B8860B] transition text-white px-8 py-4 rounded-full font-bold text-lg shadow-md">
              Shop Now →
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="h-full p-5 md:p-8 flex items-center justify-center">

            <img
              src="/images/gift1.jpg"
              alt="Gift Banner"
              className="w-full h-[480px] object-cover rounded-[30px] shadow-xl"
            />

          </div>
        </div>
      </div>
    </section>
  );
}