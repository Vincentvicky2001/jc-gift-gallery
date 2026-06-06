export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
          Contact JC Gift Gallery
        </h1>

        <div className="space-y-5 text-black">
          <p>📞 Phone / WhatsApp: +91 7760761963</p>
          <p>📧 Email: jcgiftgallery@gmail.com</p>
          <p>
            📍 Address: 4th Main, 2nd Cross, Palasandra Layout,
            Kolar - 563101, Karnataka
          </p>
        </div>

        <a
          href="https://wa.me/917760761963"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-8 bg-[#25D366] text-white py-4 rounded-xl font-bold"
        >
          Chat on WhatsApp
        </a>

        <a
          href="/"
          className="block text-center mt-4 bg-[#D4A017] text-white py-4 rounded-xl font-bold"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}