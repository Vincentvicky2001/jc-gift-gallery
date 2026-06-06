export default function FAQPage() {
  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can place an order directly through WhatsApp using the Buy on WhatsApp button.",
    },
    {
      question: "Do you provide customized gifts?",
      answer:
        "Yes, we provide customized mugs, frames, LED lamps, gift combos, and more.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Usually delivery takes 2–5 working days depending on location.",
    },
    {
      question: "Which payment methods are available?",
      answer:
        "Currently we support UPI, PhonePe, Google Pay, Paytm, and bank transfer.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you can track your order using the Track Order page.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-black">
                {faq.question}
              </h2>

              <p className="mt-3 text-gray-700 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}