export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919538952178"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-lg font-bold z-50 flex items-center gap-3"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-7 h-7"
      />

      <span className="text-white">
        Order on WhatsApp
      </span>
    </a>
  );
}