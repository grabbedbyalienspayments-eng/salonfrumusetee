
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#F5C84C]/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent font-['Playfair_Display']">
              Divine Beauty Studio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('acasa')}
              className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
            >
              Acasă
            </button>
            <button 
              onClick={() => scrollToSection('servicii')}
              className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
            >
              Servicii
            </button>
            <button 
              onClick={() => scrollToSection('galerie')}
              className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('echipa')}
              className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
            >
              Echipa
            </button>
            <button 
              onClick={() => scrollToSection('programari')}
              className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
            >
              Programări
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('programari')}
            className="hidden lg:block bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] text-[#0E0E0E] px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#F5C84C]/30 transition-all duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
          >
            Rezervă acum
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 cursor-pointer"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#F5C84C]/20 bg-[#0E0E0E]/95 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('acasa')}
                className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] text-left whitespace-nowrap cursor-pointer"
              >
                Acasă
              </button>
              <button 
                onClick={() => scrollToSection('servicii')}
                className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] text-left whitespace-nowrap cursor-pointer"
              >
                Servicii
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] text-left whitespace-nowrap cursor-pointer"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('echipa')}
                className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] text-left whitespace-nowrap cursor-pointer"
              >
                Echipa
              </button>
              <button 
                onClick={() => scrollToSection('programari')}
                className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] text-left whitespace-nowrap cursor-pointer"
              >
                Programări
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] text-left whitespace-nowrap cursor-pointer"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('programari')}
                className="bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] text-[#0E0E0E] px-6 py-3 rounded-full font-semibold mt-4 font-['Inter'] whitespace-nowrap cursor-pointer"
              >
                Rezervă acum
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
