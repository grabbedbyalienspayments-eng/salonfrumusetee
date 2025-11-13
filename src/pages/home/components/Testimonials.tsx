
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Maria Popescu',
      service: 'Machiaj nuntă',
      text: 'Am fost absolut încântată de serviciile Divine Beauty Studio! Echipa a fost profesionistă și atentă la fiecare detaliu. M-am simțit ca o adevărată prințesă în ziua nunții mele.',
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Happy%20bride%20portrait%20with%20elegant%20makeup%2C%20natural%20beauty%2C%20soft%20pink%20and%20gold%20tones%2C%20professional%20bridal%20styling%2C%20confident%20smile%2C%20luxury%20wedding%20preparation%2C%20feminine%20elegance&width=80&height=80&seq=testimonial-1&orientation=squarish"
    },
    {
      name: 'Ana Ionescu',
      service: 'Tratament facial',
      text: 'Tratamentele faciale de aici sunt incredibile! Pielea mea nu a arătat niciodată mai bine. Atmosfera este foarte relaxantă și produsele folosite sunt de cea mai înaltă calitate.',
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Satisfied%20female%20client%20portrait%2C%20glowing%20healthy%20skin%2C%20natural%20beauty%2C%20professional%20skincare%20results%2C%20confident%20expression%2C%20luxury%20spa%20environment%2C%20pink%20and%20gold%20aesthetic&width=80&height=80&seq=testimonial-2&orientation=squarish"
    },
    {
      name: 'Elena Radu',
      service: 'Coafură & styling',
      text: 'Stilistele de aici sunt adevărate artiste! Mi-au transformat complet look-ul și am primit atât de multe complimente. Recomand cu încredere Divine Beauty Studio!',
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Elegant%20woman%20with%20beautiful%20hairstyle%2C%20professional%20hair%20styling%20results%2C%20confident%20pose%2C%20luxury%20salon%20background%2C%20sophisticated%20appearance%2C%20pink%20and%20gold%20lighting&width=80&height=80&seq=testimonial-3&orientation=squarish"
    },
    {
      name: 'Cristina Dumitrescu',
      service: 'Pachet complet',
      text: 'Am ales pachetul Divine Experience și a fost o experiență de neuitat! Atenția la detalii, profesionalismul și rezultatele au depășit toate așteptările mele.',
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Happy%20female%20client%20portrait%2C%20complete%20beauty%20transformation%2C%20elegant%20appearance%2C%20professional%20beauty%20services%2C%20satisfied%20expression%2C%20luxury%20beauty%20salon%2C%20feminine%20confidence&width=80&height=80&seq=testimonial-4&orientation=squarish"
    },
    {
      name: 'Andreea Stoica',
      service: 'Laminare gene',
      text: 'Procedura de laminare gene a fost perfectă! Rezultatul este natural și durabil. Personalul este foarte prietenos și profesionist. Voi reveni cu siguranță!',
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Beautiful%20woman%20with%20enhanced%20eyelashes%2C%20natural%20eye%20makeup%2C%20professional%20lash%20treatment%20results%2C%20elegant%20portrait%2C%20luxury%20beauty%20salon%2C%20pink%20and%20gold%20aesthetic&width=80&height=80&seq=testimonial-5&orientation=squarish"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0E0E0E] via-[#1A0F1A] to-[#0E0E0E] relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#F5C84C]/30 to-[#EFB7D5]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            Ce Spun Clientele Noastre
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Mărturiile celor care au experimentat serviciile noastre premium
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-[#F5C84C]/20 max-w-4xl mx-auto">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-[#F5C84C] text-2xl mx-1 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></i>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-white/90 text-center leading-relaxed mb-8 font-['Inter'] italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#F5C84C]"
                      />
                      <div className="text-center">
                        <h4 className="text-white font-bold text-lg font-['Playfair_Display']">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#EFB7D5] font-['Inter']">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Mobile Optimized */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer z-10"
          >
            <i className="ri-arrow-left-line text-[#0E0E0E] text-xl"></i>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer z-10"
          >
            <i className="ri-arrow-right-line text-[#0E0E0E] text-xl"></i>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
