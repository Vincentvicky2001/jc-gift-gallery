export default function Footer() {
  return (
    <footer className="bg-[#FFFDF8] border-t border-[#E8E1D6] px-6 py-10 mt-10 mb-24">
      <div className="max-w-6xl mx-auto text-center">

        <div className="flex justify-center mb-5">
          <img
            src="/logo.jpg"
            alt="JC Gift Gallery"
            className="w-[280px] md:w-[360px] object-contain"
          />
        </div>

        <h2 className="text-3xl font-bold text-[#B8860B]">
          JC Gift Gallery
        </h2>

        <p className="text-[#1C1C1C] text-lg mt-2">
          Gifts That Create Memories
        </p>

        <div className="mt-6 space-y-3 text-[#1C1C1C] text-lg">
          <p>📞 Primary: +91 9538952178</p>
          <p>📞 Alternative: +91 7760761963</p>
          <p>📧 jcgiftgallery@gmail.com</p>
          <p>
            📍 4th Main, 2nd Cross, Palasandra Layout,
            Kolar - 563101, Karnataka
          </p>
        </div>

        <p className="mt-8 text-[#666666]">
          © 2026 JC Gift Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}