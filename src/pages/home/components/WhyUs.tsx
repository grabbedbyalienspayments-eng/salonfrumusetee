
import { useState, useEffect } from 'react';

export default function WhyUs() {
  const [counters, setCounters] = useState({
    clients: 0,
    brides: 0,
    rating: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('why-us');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        clients: Math.floor(2500 * progress),
        brides: Math.floor(500 * progress),
        rating: Math.min(5, Math.floor(5 * progress))
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ clients: 2500, brides: 500, rating: 5 });
      }
    }, stepDuration);
  };

  const pillars = [
    {
      icon: 'ri-award-line',
      title: 'Expertiză',
      description: '15+ ani de experiență în industria frumuseții, cu tehnici moderne și inovatoare.',
      highlight: '15+ ani experiență'
    },
    {
      icon: 'ri-star-line',
      title: 'Produse Premium',
      description: 'Folosim exclusiv produse profesionale de top, certificate și recunoscute internațional.',
      highlight: 'Produse profesionale'
    },
    {
      icon: 'ri-heart-line',
      title: 'Atmosferă Luxury',
      description: 'Un spațiu elegant și relaxant, conceput pentru confortul și liniștea ta completă.',
      highlight: 'Experiență relaxantă'
    }
  ];

  return (
    <section id="why-us" className="py-20 px-6 bg-gradient-to-br from-[#0E0E0E] via-[#1A0F1A] to-[#0E0E0E]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            De Ce Să Ne Alegi
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Suntem dedicați să oferim cea mai bună experiență de frumusețe din București
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <i className={`${pillar.icon} text-3xl text-[#0E0E0E]`}></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5C84C]/30 to-[#EFB7D5]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#F5C84C] transition-colors duration-300 font-['Playfair_Display']">
                {pillar.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-4 font-['Inter']">
                {pillar.description}
              </p>

              <div className="inline-block bg-gradient-to-r from-[#F5C84C]/20 to-[#EFB7D5]/20 px-4 py-2 rounded-full border border-[#F5C84C]/30">
                <span className="text-[#F5C84C] font-semibold text-sm font-['Inter']">
                  {pillar.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent mb-2 font-['Playfair_Display']">
              {counters.clients}+
            </div>
            <p className="text-white/80 text-lg font-['Inter']">Cliente Fericite</p>
          </div>

          <div className="group">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent mb-2 font-['Playfair_Display']">
              {counters.brides}+
            </div>
            <p className="text-white/80 text-lg font-['Inter']">Mirese Machiate</p>
          </div>

          <div className="group">
            <div className="flex items-center justify-center mb-2">
              <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent font-['Playfair_Display']">
                {counters.rating}
              </span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#F5C84C] text-2xl"></i>
                ))}
              </div>
            </div>
            <p className="text-white/80 text-lg font-['Inter']">Rating Mediu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
