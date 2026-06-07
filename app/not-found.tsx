export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] flex items-center justify-center px-6">
      <div className="text-center">
        <img
          src="/logo.jpg"
          alt="JC Gift Gallery"
          className="w-48 mx-auto mb-6"
        />

        <h1 className="text-6xl font-bold text-[#B8860B]">
          404
        </h1>

        <p className="text-2xl text-black mt-4">
          Page Not Found
        </p>

        <p className="text-gray-600 mt-3">
          The page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="inline-block mt-8 bg-[#D4A017] text-white px-8 py-4 rounded-xl font-bold"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}