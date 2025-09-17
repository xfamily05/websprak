import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello Gitesh! I'm interested in your services. I'd like to discuss my project with you.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group hover:scale-110 animate-pulse hover:animate-none"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;