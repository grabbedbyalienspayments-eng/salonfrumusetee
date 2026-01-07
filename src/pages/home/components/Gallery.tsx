import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://readdy.ai/api/search-image?query=Professional%20hair%20styling%20luxury%20salon%20close-up%2C%20elegant%20blonde%20hair%20with%20soft%20curls%2C%20pastel%20pink%20and%20gold%20lighting%2C%20premium%20beauty%20treatment%2C%20sophisticated%20feminine%20styling%2C%20soft%20focus%20background%2C%20luxury%20spa%20atmosphere&width=400&height=600&seq=gallery-1&orientation=portrait",
      alt: "Coafură elegantă",
      category: "Coafură"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Bridal%20makeup%20soft%20glam%20close-up%2C%20natural%20beauty%20enhancement%2C%20pink%20and%20gold%20tones%2C%20professional%20makeup%20artistry%2C%20elegant%20wedding%20look%2C%20luxury%20cosmetics%2C%20feminine%20beauty%20portrait&width=400&height=400&seq=gallery-2&orientation=squarish",
      alt: "Machiaj mireasa",
      category: "Machiaj"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Facial%20treatment%20spa-like%20luxury%20environment%2C%20professional%20skincare%20procedure%2C%20pink%20and%20gold%20aesthetic%2C%20premium%20beauty%20salon%2C%20relaxing%20atmosphere%2C%20elegant%20treatment%20room%2C%20soft%20lighting&width=600&height=400&seq=gallery-3&orientation=landscape",
      alt: "Tratament facial",
      category: "Cosmetică"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Professional%20hair%20coloring%20luxury%20salon%2C%20elegant%20hair%20transformation%2C%20pastel%20pink%20highlights%2C%20premium%20hair%20care%20products%2C%20sophisticated%20styling%20chair%2C%20luxury%20beauty%20environment&width=400&height=500&seq=gallery-4&orientation=portrait",
      alt: "Vopsit păr",
      category: "Coafură"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Luxury%20beauty%20salon%20interior%20design%2C%20elegant%20styling%20stations%2C%20pink%20and%20gold%20decor%2C%20premium%20furniture%2C%20sophisticated%20atmosphere%2C%20professional%20beauty%20equipment%2C%20feminine%20luxury%20space&width=400&height=600&seq=gallery-6&orientation=portrait",
      alt: "Salon interior",
      category: "Salon"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Professional%20wedding%20hairstyle%20updo%2C%20elegant%20bridal%20hair%20styling%2C%20romantic%20feminine%20look%2C%20luxury%20hair%20accessories%2C%20pink%20and%20gold%20tones%2C%20sophisticated%20beauty%20artistry&width=400&height=500&seq=gallery-7&orientation=portrait",
      alt: "Coafură nuntă",
      category: "Coafură"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Skincare%20treatment%20luxury%20spa%2C%20professional%20facial%20massage%2C%20premium%20beauty%20products%2C%20relaxing%20pink%20and%20gold%20environment%2C%20elegant%20treatment%20bed%2C%20sophisticated%20wellness%20atmosphere&width=500&height=400&seq=gallery-8&orientation=landscape",
      alt: "Îngrijire piele",
      category: "Cosmetică"
    }
  ];

  return (
    <section id="galerie" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            Galeria Noastră
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Descoperă transformările incredibile ale clientelor noastre
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-[#F5C84C]/20 hover:border-[#F5C84C]/60 transition-all duration-500">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold font-['Inter']">{image.alt}</p>
                        <p className="text-[#F5C84C] text-sm font-['Inter']">{image.category}</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center">
                        <i className="ri-eye-line text-[#0E0E0E] text-lg"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#F5C84C] transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
              <img 
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
