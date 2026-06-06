export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-6">
          About JC Gift Gallery
        </h1>

        <p className="text-gray-700 leading-8 text-lg">
          JC Gift Gallery is a premium gifting store dedicated to making
          every occasion special and memorable. We provide customized
          gifts, photo frames, mugs, LED lamps, gift combos, and many
          more unique products for birthdays, anniversaries, weddings,
          corporate events, and festivals.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-[#F3E8D2] rounded-2xl p-6 text-center">
            <h2 className="text-3xl mb-3">🎁</h2>
            <h3 className="font-bold text-xl">Premium Gifts</h3>
            <p className="mt-2 text-gray-700">
              Unique customized gifts with premium quality.
            </p>
          </div>

          <div className="bg-[#F3E8D2] rounded-2xl p-6 text-center">
            <h2 className="text-3xl mb-3">🚚</h2>
            <h3 className="font-bold text-xl">Fast Delivery</h3>
            <p className="mt-2 text-gray-700">
              Quick and safe delivery across Karnataka.
            </p>
          </div>

          <div className="bg-[#F3E8D2] rounded-2xl p-6 text-center">
            <h2 className="text-3xl mb-3">💖</h2>
            <h3 className="font-bold text-xl">Customer Satisfaction</h3>
            <p className="mt-2 text-gray-700">
              Making customers happy is our top priority.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#D4A017] text-white px-8 py-4 rounded-xl font-bold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}