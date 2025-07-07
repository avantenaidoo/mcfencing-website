import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '27825656621';
  const message = encodeURIComponent("Hi, I'm interested in your fencing services!");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 text-green-600 hover:text-green-800"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={60} />
    </a>
  );
};

export default WhatsAppButton;