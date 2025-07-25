interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({
  phoneNumber = "5511999999999", // Número padrão - substituir pelo real
  message = "Olá! Gostaria de saber mais sobre os serviços.",
  className = ""
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${className}`}
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/f4a777cd-a8be-4c64-8c58-c4b686093a4c.png"
        alt="WhatsApp"
        className="w-full h-full object-cover rounded-full"
      />
      <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping opacity-75 group-hover:opacity-100"></div>
    </button>
  );
};

export { WhatsAppButton };