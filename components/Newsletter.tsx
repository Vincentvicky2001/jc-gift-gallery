export default function Newsletter() {
  return (
    <section className="px-4 py-10">
      <div className="bg-[#FFF3D9] rounded-3xl p-8 text-center shadow-md">
        <h2 className="text-3xl font-bold text-[#B8860B]">
          Subscribe for Offers
        </h2>

        <p className="text-gray-700 mt-3">
          Get latest gift collections and exclusive discounts.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-xl border border-[#D4A017] outline-none w-full md:w-[400px] text-black"
          />

          <button className="bg-[#D4A017] text-white px-8 py-4 rounded-xl font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}