"use client";

type Review = {
  name: string;
  rating: number;
  comment: string;
};

const reviews: Review[] = [
  {
    name: "Rahul",
    rating: 5,
    comment: "Amazing quality and fast delivery. Highly recommended!",
  },
  {
    name: "Priya",
    rating: 5,
    comment: "The customized photo frame looked beautiful. Loved it!",
  },
  {
    name: "Anjali",
    rating: 4,
    comment: "Good packaging and excellent print quality.",
  },
  {
    name: "Vikram",
    rating: 5,
    comment: "Perfect gift for birthdays. Will order again.",
  },
];

export default function ProductReviews() {
  return (
    <section className="mt-8 bg-white rounded-3xl shadow-lg p-6 border border-[#E8E1D6]">
      <h2 className="text-2xl font-bold text-[#B8860B] mb-6">
        Customer Reviews
      </h2>

      <div className="space-y-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-b border-[#F0EAE0] pb-4 last:border-b-0"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold">{review.name}</h3>

              <span className="text-yellow-500">
                {"⭐".repeat(review.rating)}
              </span>
            </div>

            <p className="mt-2 text-gray-700">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}