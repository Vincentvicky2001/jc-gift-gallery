export default function HeroBanner() {
  return (
    <section className="px-2 md:px-4 py-4">
      <div className="rounded-[35px] overflow-hidden bg-[#FDF6EC] shadow-xl max-w-7xl mx-auto border border-[#F3E5C8]">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 sm:p-8 md:p-14">

            <div className="inline-block border-2 border-[#C89B3C] text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-bold tracking-wide">
              SPECIAL OFFER
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black leading-tight mt-5">
              Make Every
              <br />
              Occasion
              <br />
              <span className="text-[#B8860B]">
                Extra Special
              </span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-black font-medium">
              Flat
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-black leading-none mt-2">
              50% OFF
            </h2>

            <p className="text-gray-700 mt-4 text-base md:text-lg">
              On Selected Gift Collection
            </p>

            <button className="mt-6 bg-[#B8860B] hover:bg-black transition text-white px-7 py-3 rounded-full font-bold text-base md:text-lg shadow-md">
              Shop Now →
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="h-full p-4 md:p-8 flex items-center justify-center">

            <img
              src="/images/hero-banner.jpg"
              alt="Gift Banner"
              className="
                w-full
                h-[260px]
                sm:h-[420px]
                md:h-[620px]
                object-cover
                rounded-[30px]
                shadow-xl
              "
            />

          </div>
        </div>
      </div>
    </section>
  );
}