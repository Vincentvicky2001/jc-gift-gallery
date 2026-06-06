export default function ReviewsPage() {
  const reviews = [
    {
      name: "Rahul",
      rating: "⭐⭐⭐⭐⭐",
      comment:
        "Amazing quality and fast delivery. The LED photo frame looked beautiful!",
    },
    {
      name: "Sneha",
      rating: "⭐⭐⭐⭐⭐",
      comment:
        "Loved the customized couple mug. Perfect gift for anniversary.",
    },
    {
      name: "Karthik",
      rating: "⭐⭐⭐⭐",
      comment:
        "Premium packing and good customer support on WhatsApp.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#B8860B] mb-8">
          Customer Reviews
        </h1>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-black">
                {review.name}
              </h2>

              <p className="mt-2 text-yellow-500 text-xl">
                {review.rating}
              </p>

              <p className="mt-4 text-gray-700 leading-7">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
