
export default function Process() {
  const steps = [
    {
      icon: 'ri-calendar-line',
      title: 'Programezi',
      description: 'Alegi serviciul dorit și programezi o întâlnire la momentul care îți convine.'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Consultanță',
      description: 'Discutăm despre dorințele tale și îți recomandăm cel mai potrivit tratament.'
    },
    {
      icon: 'ri-star-line',
      title: 'Serviciu Premium',
      description: 'Te bucuri de servicii de înaltă calitate într-o atmosferă relaxantă și luxoasă.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Glow Final',
      description: 'Pleci cu încredere sporită și o frumusețe care radiază naturalețe și eleganță.'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            Procesul Nostru
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Patru pași simpli către frumusețea ta ideală
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="lg:hidden absolute -left-8 top-8 w-8 h-8 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center">
                  <span className="text-[#0E0E0E] font-bold text-sm font-['Inter']">{index + 1}</span>
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#F5C84C]/20 hover:border-[#F5C84C]/60 transition-all duration-500 hover:transform hover:-translate-y-2 text-center relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6 mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto relative z-10">
                      <i className={`${step.icon} text-3xl text-[#0E0E0E]`}></i>
                    </div>
                    
                    {/* Step Number for Desktop */}
                    <div className="hidden lg:block absolute -top-2 -right-2 w-8 h-8 bg-[#0E0E0E] border-2 border-[#F5C84C] rounded-full flex items-center justify-center">
                      <span className="text-[#F5C84C] font-bold text-sm font-['Inter']">{index + 1}</span>
                    </div>

                    {/* Sparkle Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 right-2 w-2 h-2 bg-[#F5C84C] rounded-full animate-ping"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#EFB7D5] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1/2 left-0 w-1 h-1 bg-[#F5C84C] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#F5C84C] transition-colors duration-300 font-['Playfair_Display']">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed font-['Inter']">
                    {step.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-1 w-full bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Mobile Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-0 top-24 w-1 h-16 bg-gradient-to-b from-[#F5C84C] to-[#EFB7D5] ml-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
