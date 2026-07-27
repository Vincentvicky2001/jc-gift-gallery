export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-6">
          Our Identity, Our Story!
        </h1>

        <p className="text-gray-700 leading-8 text-lg mb-5">
          At JC Gift Gallery, we believe every gift tells a story and every
          memory deserves to be cherished forever.
        </p>

        <p className="text-gray-700 leading-8 text-lg mb-5">
          What started as a passion for creating meaningful keepsakes has grown
          into a destination for personalized gifts that celebrate life's most
          special moments. From customized photo frames, mugs, keychains,
          T-shirts, acrylic art, resin creations, and corporate gifts to unique
          gift combos, every product is thoughtfully crafted with care and
          attention to detail.
        </p>

        <p className="text-gray-700 leading-8 text-lg mb-5">
          Our mission is to transform your precious memories into beautiful
          personalized creations that bring smiles, strengthen relationships,
          and make every celebration unforgettable.
        </p>

        <p className="text-gray-700 leading-8 text-lg mb-5">
          Whether it's a birthday, anniversary, wedding, graduation, corporate
          event, or a simple gesture of love, we're here to help you find the
          perfect gift that speaks from the heart.
        </p>

        <p className="text-gray-700 leading-8 text-lg mb-5">
          At JC Gift Gallery, we don't just create gifts—we create lasting
          memories.
        </p>

        <p className="text-2xl font-bold text-[#B8860B] mb-10">
          Crafted with Care. Personalized with Love. Remembered Forever.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
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
            className="inline-block rounded-xl bg-[#D4A017] px-8 py-4 font-bold text-white transition hover:bg-[#B8860B]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}