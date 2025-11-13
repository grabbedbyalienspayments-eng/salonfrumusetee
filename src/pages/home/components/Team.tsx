
export default function Team() {
  const teamMembers = [
    {
      name: 'Ana',
      role: 'Hair Stylist',
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20hair%20stylist%20portrait%2C%20elegant%20woman%20with%20blonde%20hair%2C%20luxury%20beauty%20salon%20background%2C%20soft%20pink%20and%20gold%20lighting%2C%20sophisticated%20professional%20appearance%2C%20confident%20smile%2C%20premium%20beauty%20industry%20expert&width=400&height=500&seq=team-ana&orientation=portrait",
      experience: '10+ ani experiență',
      specialization: 'Coafuri de nuntă & Styling',
      description: 'Specializată în coafuri elegante și styling pentru evenimente speciale.'
    },
    {
      name: 'Bianca',
      role: 'Makeup Artist',
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20makeup%20artist%20portrait%2C%20elegant%20brunette%20woman%20with%20natural%20makeup%2C%20luxury%20beauty%20salon%20environment%2C%20pink%20and%20gold%20aesthetic%20lighting%2C%20sophisticated%20beauty%20professional%20with%20hands%20naturally%20positioned%20at%20sides%2C%20confident%20artistic%20expression%2C%20premium%20cosmetics%20background%2C%20realistic%20human%20anatomy%2C%20single%20person%20portrait&width=400&height=500&seq=team-bianca-realistic&orientation=portrait",
      experience: 'Certificare internațională',
      specialization: 'Machiaj mireasa & Editorial',
      description: 'Artist cu certificare internațională, specializată în machiaj pentru nunți.'
    },
    {
      name: 'Mara',
      role: 'Cosmeticiană',
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20cosmetician%20portrait%2C%20elegant%20woman%20with%20natural%20beauty%2C%20luxury%20spa%20environment%2C%20soft%20pink%20and%20gold%20lighting%2C%20professional%20skincare%20expert%2C%20gentle%20smile%2C%20premium%20wellness%20atmosphere&width=400&height=500&seq=team-mara&orientation=portrait",
      experience: '15+ ani experiență',
      specialization: 'Tratamente faciale & Anti-aging',
      description: 'Expert în tratamente faciale avansate și proceduri de rejuvenare.'
    }
  ];

  return (
    <section id="echipa" className="py-20 px-6 bg-gradient-to-br from-[#0E0E0E] via-[#1A0F1A] to-[#0E0E0E]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            Echipa Noastră
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Profesioniști pasionați, dedicați să-ți ofere cea mai bună experiență de frumusețe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative mb-6 mx-auto w-80 h-96 overflow-hidden rounded-2xl">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] px-3 py-1 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                  <span className="text-[#0E0E0E] font-semibold text-sm font-['Inter']">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-[#F5C84C] transition-colors duration-300 font-['Playfair_Display']">
                    {member.name}
                  </h3>
                  <p className="text-[#EFB7D5] text-lg font-semibold font-['Inter']">
                    {member.role}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-[#F5C84C]/20 group-hover:border-[#F5C84C]/60 transition-all duration-300">
                  <p className="text-[#F5C84C] font-semibold mb-2 font-['Inter']">
                    {member.specialization}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed font-['Inter']">
                    {member.description}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <i className="ri-instagram-line text-[#0E0E0E]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <i className="ri-facebook-line text-[#0E0E0E]"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
