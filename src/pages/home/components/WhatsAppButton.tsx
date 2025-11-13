export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+40721234567';
    const message = 'Bună ziua! Aș dori să fac o programare la Divine Beauty Studio.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      aria-label="Contactează-ne pe WhatsApp"
      className="fixed bottom-8 left-8 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 z-40 active:scale-95 cursor-pointer"
    >
      <i className="ri-whatsapp-line text-white text-xl md:text-2xl"></i>
    </button>
  );
}
