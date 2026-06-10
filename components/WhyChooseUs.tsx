export default function WhyChooseUs() {
  const features = [
    {
      icon: "🚚",
      title: "Free Delivery",
      desc: "On orders above ₹499",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      desc: "100% safe transactions",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      desc: "Carefully curated items",
    },
    {
      icon: "🎁",
      title: "Personalisation",
      desc: "Custom names & photos",
    },
    {
      icon: "📦",
      title: "Fast Shipping",
      desc: "Quick delivery service",
    },
  ];

  return (
    <section className="px-4 py-10 bg-[#FAF7F0]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-black mb-8">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#EFE6D8] rounded-3xl p-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4A017] text-white flex items-center justify-center text-2xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-lg">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}