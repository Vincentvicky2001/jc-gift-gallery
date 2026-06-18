export default function HeroBanner() {
  return (
    <section className="px-2 md:px-4 py-4">

      <div className="rounded-[35px] overflow-hidden bg-[#FDF6EC] shadow-xl max-w-7xl mx-auto border border-[#F3E5C8]">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 sm:p-8 md:p-14">

            {/* Offer Badge */}
            <div className="inline-block border-2 border-[#C89B3C] text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-bold tracking-wide">
              SPECIAL OFFER
            </div>

            {/* Welcome Heading */}
            <div className="mt-5 space-y-5">

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-black leading-tight">
                Welcome to
                <br />
                <span className="text-[#B8860B]">
                  JC Gift Gallery
                </span>
              </h1>

              <p className="text-base md:text-2xl text-black leading-relaxed font-medium">
                Thoughtful Gifts,
                <br />
                Heartfelt Moments,
                <br />
                Beautiful Memories,
                <br />
                Where Every Gift Tells a Story.
              </p>

            </div>

            {/* Premium Shop Button */}
            <a
              href="#best-seller"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                bg-gradient-to-r
                from-[#D4A017]
                to-[#B8860B]
                hover:scale-105
                transition
                duration-300
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                text-base
                md:text-lg
                shadow-xl
              "
            >
              🎁 Shop Now →
            </a>

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