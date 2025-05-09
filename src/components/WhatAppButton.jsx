import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5567996101874"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={25} />
    </a>
  );
}

export default WhatsAppButton;