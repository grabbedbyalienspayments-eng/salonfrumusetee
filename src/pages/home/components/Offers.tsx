
export default function Offers() {
  const packages = [
    {
      name: 'Glow Basic',
      price: '299',
      popular: false,
      services: [
        'Consultanță personalizată',
        'Tratament facial de bază',
        'Machiaj natural',
        'Styling păr simplu',
        'Produse de întreținere'
      ],
      description: 'Perfect pentru o înfrumusețare rapidă și naturală'
    },
    {
      name: 'Luxury Glam',
      price: '599',
      popular: true,
      services: [
        'Consultanță completă',
        'Tratament facial premium',
        'Machiaj profesional',
        'Coafură elegantă',
        'Laminare gene',
        'Produse premium incluse',
        'Ședință foto bonus'
      ],
      description: 'Experiența completă pentru evenimente speciale'
    },
    {
      name: 'Divine Experience',
      price: '899',
      popular: false,
      services: [
        'Consultanță VIP',
        'Tratament facial de lux',
        'Machiaj artistic',
        'Coafură de gală',
        'Laminare gene & sprâncene',
        'Microdermabraziune',
        'Masaj relaxant',
        'Kit produse premium',
        'Servicii la domiciliu'
      ],
      description: 'Luxul absolut pentru cele mai importante momente'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            Pachetele Noastre
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Alege pachetul perfect pentru nevoile tale de frumusețe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative group animate-fade-up ${
                pkg.popular ? 'lg:scale-110 lg:-mt-8' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge - Mobile Optimized */}
              {pkg.popular && (
                <div className="absolute -top-3 right-2 md:-top-4 md:left-1/2 md:transform md:-translate-x-1/2 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] px-3 py-1 md:px-6 md:py-2 rounded-full z-10">
                  <span className="text-[#0E0E0E] font-bold text-xs md:text-sm font-['Inter']">CEL MAI POPULAR</span>
                </div>
              )}

              {/* Card */}
              <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 hover:transform hover:-translate-y-2 ${
                pkg.popular 
                  ? 'border-[#F5C84C] shadow-2xl shadow-[#F5C84C]/20' 
                  : 'border-[#F5C84C]/20 hover:border-[#F5C84C]/60'
              }`}>
                
                {/* Header */}
                <div className="text-center mb-8 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Playfair_Display']">
                    {pkg.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-6 font-['Inter']">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent font-['Playfair_Display']">
                      {pkg.price}
                    </span>
                    <span className="text-white/60 ml-2 font-['Inter']">RON</span>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 mb-8">
                  {pkg.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="ri-check-line text-[#0E0E0E] text-sm"></i>
                      </div>
                      <span className="text-white/80 font-['Inter']">{service}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => scrollToSection('programari')}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 font-['Inter'] whitespace-nowrap cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] text-[#0E0E0E] hover:shadow-2xl hover:shadow-[#F5C84C]/40 transform hover:scale-105'
                      : 'border-2 border-[#F5C84C] text-white hover:bg-[#F5C84C]/10'
                  }`}
                >
                  Alege acest pachet
                </button>

                {/* Glow Effect */}
                {pkg.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F5C84C]/10 to-[#EFB7D5]/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-white/60 font-['Inter']">
            * Prețurile pot varia în funcție de complexitatea serviciilor. Consultanța inițială este gratuită.
          </p>
        </div>
      </div>
    </section>
  );
}
