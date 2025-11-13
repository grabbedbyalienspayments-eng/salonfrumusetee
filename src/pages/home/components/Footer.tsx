
export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0E0E0E] via-[#1A0F1A] to-[#0E0E0E] py-16 px-6 border-t border-[#F5C84C]/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent mb-4 font-['Playfair_Display']">
              Divine Beauty Studio
            </h3>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed font-['Inter']">
              Salonul premium de frumusețe din București, dedicat să-ți ofere servicii de înaltă calitate într-o atmosferă luxoasă și relaxantă.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-[#0E0E0E]"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <i className="ri-facebook-line text-[#0E0E0E]"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <i className="ri-tiktok-line text-[#0E0E0E]"></i>
              </a>
              <a 
                href="tel:+40721234567" 
                className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <i className="ri-phone-line text-[#0E0E0E]"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-['Inter']">Navigare Rapidă</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('acasa')}
                  className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Acasă
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicii')}
                  className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Servicii
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galerie')}
                  className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('echipa')}
                  className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Echipa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programari')}
                  className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Programări
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 font-['Inter']">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-white/70 font-['Inter']">
                <i className="ri-map-pin-line text-[#F5C84C] mr-2 mt-1 flex-shrink-0"></i>
                <span className="text-sm">Strada Frumuseții nr. 25, București</span>
              </li>
              <li className="flex items-center text-white/70 font-['Inter']">
                <i className="ri-phone-line text-[#F5C84C] mr-2 flex-shrink-0"></i>
                <a href="tel:+40721234567" className="text-sm hover:text-[#F5C84C] transition-colors duration-300 cursor-pointer">
                  +40 721 234 567
                </a>
              </li>
              <li className="flex items-start text-white/70 font-['Inter']">
                <i className="ri-mail-line text-[#F5C84C] mr-2 mt-1 flex-shrink-0"></i>
                <a href="mailto:contact@divinebeautystudio.ro" className="text-sm hover:text-[#F5C84C] transition-colors duration-300 cursor-pointer break-words">
                  contact@divinebeautystudio.ro
                </a>
              </li>
              <li className="flex items-start text-white/70 font-['Inter']">
                <i className="ri-time-line text-[#F5C84C] mr-2 mt-1 flex-shrink-0"></i>
                <div className="text-sm">
                  <p>Lun-Vin: 09:00-19:00</p>
                  <p>Sâm: 09:00-17:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#F5C84C]/20 pt-8">
          <div className="flex flex-col space-y-4 text-center md:text-left">
            {/* Copyright */}
            <div className="text-white/60 text-sm font-['Inter']">
              © 2025 Divine Beauty Studio — Frumusețe cu finețe.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer">
                Politica de Confidențialitate
              </a>
              <a href="#" className="text-white/60 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer">
                Termeni și Condiții
              </a>
              <a href="#" className="text-white/60 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer">
                Politica GDPR
              </a>
              <a href="#" className="text-white/60 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer">
                Politica Cookies
              </a>
            </div>

            {/* Made by */}
            <div className="text-white/60 text-sm font-['Inter']">
              Made by{' '}
              <a 
                href="https://websiteon.ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F5C84C] hover:text-[#EFB7D5] transition-colors duration-300 cursor-pointer"
              >
                WebsiteON.ro
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
