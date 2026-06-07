export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919538952178"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 z-50"
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-16 h-16 rounded-full shadow-lg"
      />
    </a>
  );
}