export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            Contactează-ne
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Suntem aici pentru tine! Contactează-ne pentru orice întrebare sau programare
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#F5C84C]/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display']">
                Informații de Contact
              </h3>

              <div className="space-y-6">
                {/* Adresa */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-[#0E0E0E] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 font-['Inter']">Adresa Salon</h4>
                    <p className="text-white/70 font-['Inter']">
                      Strada Frumuseții nr. 25<br />
                      Sector 1, București 010101<br />
                      România
                    </p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-[#0E0E0E] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 font-['Inter']">Telefon</h4>
                    <a 
                      href="tel:0700000000" 
                      className="text-[#F5C84C] hover:text-[#EFB7D5] transition-colors duration-300 font-['Inter'] cursor-pointer"
                    >
                      070 000 000
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-[#0E0E0E] text-xl"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold mb-1 font-['Inter']">Email</h4>
                    <a 
                      href="mailto:contact@contactdevinebeautystudio.ro" 
                      className="text-[#F5C84C] hover:text-[#EFB7D5] transition-colors duration-300 font-['Inter'] cursor-pointer break-words text-sm md:text-base"
                    >
                      contact@contactdevinebeautystudio.ro
                    </a>
                  </div>
                </div>

                {/* Program */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-[#0E0E0E] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 font-['Inter']">Program</h4>
                    <div className="text-white/70 space-y-1 font-['Inter']">
                      <p>Luni - Vineri: 09:00 - 19:00</p>
                      <p>Sâmbătă: 09:00 - 17:00</p>
                      <p>Duminică: Închis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-[#F5C84C]/20">
                <h4 className="text-white font-semibold mb-4 font-['Inter']">Urmărește-ne</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <i className="ri-instagram-line text-[#0E0E0E] text-xl"></i>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <i className="ri-facebook-line text-[#0E0E0E] text-xl"></i>
                  </a>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <i className="ri-tiktok-line text-[#0E0E0E] text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#F5C84C]/20">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display']">
              Locația Noastră
            </h3>
            
            <div className="relative h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444444444444!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sen!2sro!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
              
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] px-4 py-2 rounded-full">
                <span className="text-[#0E0E0E] font-semibold text-sm font-['Inter']">Divine Beauty Studio</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm mb-4 font-['Inter']">
                Suntem situați în inima Bucureștiului, într-o zonă accesibilă cu transport în comun și parcare disponibilă.
              </p>
              
              <a 
                href="https://maps.google.com/?q=44.4268,26.1025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] text-[#0E0E0E] px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#F5C84C]/30 transition-all duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
              >
                <i className="ri-navigation-line mr-2"></i>
                Deschide în Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
