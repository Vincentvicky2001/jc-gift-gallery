export default function WhyChooseUs() {

  const points = [
    "Premium Quality Products",
    "Personalized Customization",
    "Affordable Pricing",
    "Fast Delivery",
    "Secure Packaging",
    "WhatsApp Ordering Support",
    "100% Customer Satisfaction",
  ];

  return (
    <section className="px-4 py-10 bg-[#FAF7F0]">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg border border-[#E8E1D6] p-6 md:p-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          🌟 Why Choose JC Gift Gallery?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          We create personalized gifts with premium quality,
          beautiful customization, secure packaging, and fast delivery
          to make every special moment unforgettable.
        </p>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {points.map((point) => (

            <div
              key={point}
              className="
                flex
                items-center
                gap-3
                bg-[#FFF8E7]
                border
                border-[#E8E1D6]
                rounded-2xl
                p-4
                shadow-sm
                hover:shadow-md
                transition
              "
            >

              <span className="text-2xl">
                ✅
              </span>

              <p className="text-lg md:text-xl font-bold text-black">
                {point}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}