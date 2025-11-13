
export default function FinalCTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0E0E0E] via-[#2A1A23] to-[#0E0E0E] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#F5C84C]/20 to-[#EFB7D5]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#EFB7D5]/15 to-[#F5C84C]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-['Playfair_Display'] bg-gradient-to-r from-white via-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent leading-tight">
            E timpul să te pui pe primul loc.
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-['Inter']">
            Oferă-ți experiența de frumusețe pe care o meriți. Rezervă acum și descoperă transformarea care te va face să radiezi încredere și eleganță.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('programari')}
              className="group relative bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] text-[#0E0E0E] px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-[#F5C84C]/50 transition-all duration-300 transform hover:scale-105 font-['Inter'] whitespace-nowrap cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Rezervă acum</span>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              
              {/* Pulse Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full animate-ping opacity-20"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#F5C84C] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#F5C84C]/10 transition-all duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
            >
              Contactează-ne
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-shield-check-line text-2xl text-[#0E0E0E]"></i>
              </div>
              <h3 className="text-white font-semibold mb-2 font-['Inter']">Garanție 100%</h3>
              <p className="text-white/60 text-sm font-['Inter']">Satisfacția ta este prioritatea noastră</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-time-line text-2xl text-[#0E0E0E]"></i>
              </div>
              <h3 className="text-white font-semibold mb-2 font-['Inter']">Programare Flexibilă</h3>
              <p className="text-white/60 text-sm font-['Inter']">Adaptăm programul după nevoile tale</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-star-line text-2xl text-[#0E0E0E]"></i>
              </div>
              <h3 className="text-white font-semibold mb-2 font-['Inter']">Experiență Premium</h3>
              <p className="text-white/60 text-sm font-['Inter']">Servicii de lux într-o atmosferă relaxantă</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
