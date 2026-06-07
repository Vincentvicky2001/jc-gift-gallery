export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.jpg"
            alt="JC Gift Gallery"
            className="w-[260px] md:w-[340px] object-contain bg-white rounded-xl p-3"
          />
        </div>

        {/* Business Details */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-[#D4A017]">
            JC Gift Gallery
          </h2>

          <p className="text-gray-200 text-lg">
            Gifts That Create Memories
          </p>

          <p className="text-white text-lg">
            📞 Primary: +91 9538952178
          </p>

          <p className="text-white text-lg">
            📞 Alternative: +91 7760761963
          </p>

          <p className="text-white text-lg">
            📧 jcgiftgallery@gmail.com
          </p>

          <p className="text-gray-300 text-lg leading-8">
            📍 4th Main, 2nd Cross, Palasandra Layout,
            Kolar - 563101, Karnataka
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2026 JC Gift Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}