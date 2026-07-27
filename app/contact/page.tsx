export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          Contact JC Gift Gallery
        </h1>

        <div className="space-y-5 text-black">

          <div>
            <p className="font-semibold">
              📞 Phone / WhatsApp:
            </p>

            <a
              href="tel:+919538952178"
              className="text-[#B8860B] hover:underline block mt-1"
            >
              +91 95389 52178
            </a>

            <a
              href="tel:+917760761963"
              className="text-[#B8860B] hover:underline block mt-1"
            >
              +91 77607 61963
            </a>
          </div>

          <div>
            <p className="font-semibold">📧 Email:</p>
            <a
              href="mailto:jcgiftgallery@gmail.com"
              className="text-[#B8860B] hover:underline"
            >
              jcgiftgallery@gmail.com
            </a>
          </div>

          <div>
            <p className="font-semibold">📍 Address:</p>
            <p>
              4th Main, 2nd Cross, Palasandra Layout,
              <br />
              Kolar - 563101, Karnataka
            </p>
          </div>

        </div>

        <a
          href="https://wa.me/919538952178"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-8 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20ba5a] transition"
        >
          Chat on WhatsApp
        </a>

        <a
          href="/"
          className="block text-center mt-4 bg-[#D4A017] text-white py-4 rounded-xl font-bold hover:bg-[#B8860B] transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}