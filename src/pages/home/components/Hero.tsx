
import { useEffect, useState } from 'react';

export default function Hero() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://readdy.ai/api/search-image?query=Luxury%20beauty%20salon%20interior%20with%20soft%20pink%20and%20gold%20lighting%2C%20elegant%20hair%20styling%20station%2C%20professional%20makeup%20area%2C%20dreamy%20bokeh%20lights%2C%20slow%20motion%20hair%20movement%20effect%2C%20premium%20spa%20atmosphere%2C%20feminine%20luxury%20design%2C%20soft%20focus%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape"
          alt="Divine Beauty Studio"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFB7D5]/30 via-[#0E0E0E]/50 to-[#F5C84C]/20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#F5C84C]/40 to-[#EFB7D5]/40 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-white via-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent animate-fade-up">
          Frumusețe redefinită.
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90 font-['Inter'] max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{animationDelay: '0.3s'}}>
          Servicii premium de îngrijire, create pentru femeile care vor calitate și rafinament.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => scrollToSection('programari')}
            className="bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] text-[#0E0E0E] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#F5C84C]/40 transition-all duration-300 transform hover:scale-105 font-['Inter'] whitespace-nowrap cursor-pointer"
          >
            Fă o programare
          </button>
          
          <button 
            onClick={() => scrollToSection('servicii')}
            className="border-2 border-[#F5C84C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F5C84C]/10 transition-all duration-300 font-['Inter'] whitespace-nowrap cursor-pointer"
          >
            Vezi serviciile
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F5C84C] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#F5C84C] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
