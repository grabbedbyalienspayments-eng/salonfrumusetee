
export default function Services() {
  const services = [
    {
      icon: 'ri-scissors-line',
      title: 'Coafură & Styling',
      description: 'Tunsori moderne, coafuri elegante și styling profesional pentru orice ocazie specială.'
    },
    {
      icon: 'ri-heart-3-line',
      title: 'Cosmetică Facială',
      description: 'Tratamente faciale personalizate cu produse premium pentru o piele radianta și sănătoasă.'
    },
    {
      icon: 'ri-brush-line',
      title: 'Machiaj Profesional',
      description: 'Machiaj pentru evenimente, nunți și ședințe foto cu tehnici profesionale și produse de lux.'
    },
    {
      icon: 'ri-eye-line',
      title: 'Laminare Gene & Sprâncene',
      description: 'Proceduri de laminare și modelare pentru un look natural și definit care durează săptămâni.'
    },
    {
      icon: 'ri-star-line',
      title: 'Tratamente cu Microdermabraziune',
      description: 'Exfoliere profundă și regenerare celulară pentru o piele netedă și luminoasă.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Îngrijire Premium Păr',
      description: 'Tratamente intensive de hidratare, reconstrucție și protecție pentru părul deteriorat.'
    }
  ];

  return (
    <section id="servicii" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Descoperă gama completă de servicii premium, create pentru a-ți evidenția frumusețea naturală
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#F5C84C]/20 hover:border-[#F5C84C]/60 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F5C84C]/20 cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-[#0E0E0E]`}></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5C84C]/20 to-[#EFB7D5]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#F5C84C] transition-colors duration-300 font-['Playfair_Display']">
                {service.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed font-['Inter']">
                {service.description}
              </p>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
