const notifications = [
  "✅ Thank you for choosing JC Gift Gallery! Gifts That Create Memories.",

  "🎁 Welcome to JC Gift Gallery! Discover unique gifts for every special occasion.",

  "❤️ Surprise your loved ones with personalized gifts from JC Gift Gallery.",

  "🎁 Every product at JC Gift Gallery is fully customizable to your preferences.",

  "📸 Product images are for reference only. Final designs are customized as per your requirements.",

  "🎉 Exclusive offers available for a limited time. Don't miss out!",

  "✅ Thank you for choosing JC Gift Gallery! Gifts That Create Memories.",
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] px-4 py-8 pb-28">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-black mb-6">
          Notifications
        </h1>

        <div className="space-y-4">

          {notifications.map((message, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-5 text-black text-base md:text-lg leading-relaxed"
            >
              {message}
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}