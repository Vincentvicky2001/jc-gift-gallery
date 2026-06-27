export default function Footer() {
  return (
    <footer className="bg-[#FFF8ED] mt-16 border-t border-[#E8D4A2] relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-4xl md:text-6xl font-black text-black">
            JC Gift Gallery
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[2px] w-16 bg-[#C89B3C]"></div>

            <p className="text-xl md:text-3xl text-black font-medium">
              Gifts That Create Memories
            </p>

            <div className="h-[2px] w-16 bg-[#C89B3C]"></div>
          </div>

          <div className="text-5xl mt-5 text-[#B8860B]">
            🎀
          </div>

        </div>

        {/* Contact Details */}
        <div className="mt-14 max-w-4xl mx-auto space-y-8">

          <div className="flex items-center gap-5 border-b border-dashed border-[#D4A017] pb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center text-3xl">
              📞
            </div>

            <p className="text-xl md:text-3xl text-black">
              +91 9538952178
            </p>
          </div>

          <div className="flex items-center gap-5 border-b border-dashed border-[#D4A017] pb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center text-3xl">
              📞
            </div>

            <p className="text-xl md:text-3xl text-black">
              +91 7760761963
            </p>
          </div>

          <div className="flex items-center gap-5 border-b border-dashed border-[#D4A017] pb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center text-3xl">
              ✉️
            </div>

            <p className="text-lg md:text-2xl text-black break-all">
              jcgiftgallery@gmail.com
            </p>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center text-3xl">
              📍
            </div>

            <p className="text-lg md:text-2xl text-black leading-relaxed">
              4th Main, 2nd Cross,
              <br />
              Palasandra Layout,
              <br />
              Kolar - 563101,
              <br />
              Karnataka
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 text-center">

          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-24 bg-[#C89B3C]"></div>

            <span className="text-4xl text-[#B8860B]">
              🎀
            </span>

            <div className="h-[2px] w-24 bg-[#C89B3C]"></div>
          </div>

          <p className="mt-6 text-gray-700 text-base md:text-xl">
            © 2026 JC Gift Gallery. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}