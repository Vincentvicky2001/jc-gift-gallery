export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FAF7F0]">
      <div className="text-center">
        <img
          src="/logo.jpg"
          alt="JC Gift Gallery"
          className="w-40 mx-auto animate-pulse"
        />

        <p className="mt-5 text-[#B8860B] text-2xl font-bold">
          Loading JC Gift Gallery...
        </p>
      </div>
    </div>
  );
}