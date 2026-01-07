import { useState } from 'react';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | 'gdpr' | 'cookies' | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (content: 'privacy' | 'terms' | 'gdpr' | 'cookies') => {
    setModalContent(content);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  const getModalContent = () => {
    switch(modalContent) {
      case 'privacy':
        return {
          title: 'Politica de Confidențialitate',
          content: `
            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">1. Introducere</h3>
            <p class="mb-4">Divine Beauty Studio respectă confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze în conformitate cu legislația în vigoare.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">2. Date Colectate</h3>
            <p class="mb-4">Colectăm următoarele categorii de date personale:</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Date de identificare (nume, prenume)</li>
              <li>Date de contact (email, telefon)</li>
              <li>Informații despre programări și servicii solicitate</li>
              <li>Preferințele dumneavoastră în ceea ce privește serviciile noastre</li>
            </ul>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">3. Scopul Prelucrării</h3>
            <p class="mb-4">Utilizăm datele dumneavoastră personale pentru:</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Procesarea și gestionarea programărilor</li>
              <li>Furnizarea serviciilor solicitate</li>
              <li>Comunicarea cu privire la serviciile noastre</li>
              <li>Îmbunătățirea calității serviciilor noastre</li>
            </ul>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">4. Securitatea Datelor</h3>
            <p class="mb-4">Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, modificării, divulgării sau distrugerii.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">5. Drepturile Dumneavoastră</h3>
            <p class="mb-4">Aveți dreptul de a accesa, rectifica, șterge sau restricționa prelucrarea datelor dumneavoastră personale. Pentru exercitarea acestor drepturi, ne puteți contacta la: contact@contactdevinebeautystudio.ro</p>
          `
        };
      case 'terms':
        return {
          title: 'Termeni și Condiții',
          content: `
            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">1. Acceptarea Termenilor</h3>
            <p class="mb-4">Prin utilizarea serviciilor Divine Beauty Studio, acceptați automat acești termeni și condiții în totalitate.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">2. Programări</h3>
            <p class="mb-4">Programările pot fi efectuate:</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Online prin intermediul formularului de pe website</li>
              <li>Telefonic la 070 000 000</li>
              <li>Prin WhatsApp</li>
            </ul>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">3. Anularea și Reprogramarea</h3>
            <p class="mb-4">Anulările trebuie efectuate cu minimum 24 de ore înainte de programarea stabilită. În cazul anulărilor ulterioare sau al neprezentării, ne rezervăm dreptul de a aplica o taxă de 50% din valoarea serviciului.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">4. Plăți</h3>
            <p class="mb-4">Plățile pot fi efectuate:</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Cash la salonul nostru</li>
              <li>Card bancar</li>
            </ul>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">5. Garanții și Reclamații</h3>
            <p class="mb-4">Garantăm calitatea serviciilor noastre. În cazul în care nu sunteți mulțumit(ă) de rezultat, vă rugăm să ne contactați în termen de 48 de ore pentru a găsi împreună o soluție.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">6. Modificări</h3>
            <p class="mb-4">Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment, cu notificarea prealabilă a clienților noștri.</p>
          `
        };
      case 'gdpr':
        return {
          title: 'Politica GDPR',
          content: `
            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">1. Conformitate GDPR</h3>
            <p class="mb-4">Divine Beauty Studio respectă în totalitate Regulamentul General privind Protecția Datelor (GDPR) și legislația română aplicabilă în domeniul protecției datelor.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">2. Responsabilul cu Protecția Datelor</h3>
            <p class="mb-4">Pentru orice întrebări legate de protecția datelor, ne puteți contacta la: contact@contactdevinebeautystudio.ro</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">3. Drepturile GDPR</h3>
            <p class="mb-4">În conformitate cu GDPR, aveți următoarele drepturi:</p>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>Dreptul de acces:</strong> Puteți solicita o copie a datelor personale pe care le deținem despre dumneavoastră</li>
              <li><strong>Dreptul de rectificare:</strong> Puteți solicita corectarea datelor inexacte</li>
              <li><strong>Dreptul de ștergere:</strong> Puteți solicita ștergerea datelor în anumite circumstanțe</li>
              <li><strong>Dreptul de restricționare:</strong> Puteți solicita restricționarea prelucrării datelor</li>
              <li><strong>Dreptul la portabilitatea datelor:</strong> Puteți solicita transferul datelor către un alt operator</li>
              <li><strong>Dreptul de opoziție:</strong> Puteți să vă opuneți prelucrării datelor în anumite situații</li>
            </ul>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">4. Perioada de Stocare</h3>
            <p class="mb-4">Păstrăm datele dumneavoastră personale atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate sau conform cerințelor legale.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">5. Transferul Datelor</h3>
            <p class="mb-4">Nu transferăm datele dumneavoastră în afara Uniunii Europene fără consimțământul dumneavoastră explicit sau fără garanții adecvate.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">6. Reclamații</h3>
            <p class="mb-4">Aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</p>
          `
        };
      case 'cookies':
        return {
          title: 'Politica Cookies',
          content: `
            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">1. Ce sunt Cookie-urile?</h3>
            <p class="mb-4">Cookie-urile sunt fișiere text mici care sunt plasate pe dispozitivul dumneavoastră atunci când vizitați website-ul nostru. Ele ajută la îmbunătățirea experienței dumneavoastră online.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">2. Tipuri de Cookie-uri Utilizate</h3>
            
            <p class="mb-2"><strong>Cookie-uri Esențiale:</strong></p>
            <p class="mb-4">Aceste cookie-uri sunt necesare pentru funcționarea corectă a website-ului și nu pot fi dezactivate.</p>

            <p class="mb-2"><strong>Cookie-uri Funcționale:</strong></p>
            <p class="mb-4">Aceste cookie-uri permit website-ului să rețină preferințele dumneavoastră pentru a vă îmbunătăți experiența.</p>

            <p class="mb-2"><strong>Cookie-uri de Analiză:</strong></p>
            <p class="mb-4">Aceste cookie-uri ne ajută să înțelegem cum interactionați cu website-ul nostru pentru a-l îmbunătăți.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">3. Gestionarea Cookie-urilor</h3>
            <p class="mb-4">Puteți gestiona sau șterge cookie-urile în conformitate cu preferințele dumneavoastră. Puteți șterge toate cookie-urile care sunt deja pe dispozitivul dumneavoastră și puteți configura majoritatea browserelor pentru a preveni plasarea lor.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">4. Cookie-uri Terțe</h3>
            <p class="mb-4">Website-ul nostru poate utiliza servicii terțe (precum Google Analytics) care plasează propriile cookie-uri. Aceste servicii au propriile politici de confidențialitate.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">5. Modificări ale Politicii</h3>
            <p class="mb-4">Ne rezervăm dreptul de a modifica această politică de cookie-uri. Vă recomandăm să o verificați periodic pentru a fi la curent cu orice modificări.</p>

            <h3 class="text-xl font-bold mb-4 text-[#F5C84C]">6. Contact</h3>
            <p class="mb-4">Pentru întrebări despre utilizarea cookie-urilor, ne puteți contacta la: contact@contactdevinebeautystudio.ro</p>
          `
        };
      default:
        return { title: '', content: '' };
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-br from-[#0E0E0E] via-[#1A0F1A] to-[#0E0E0E] py-16 px-6 border-t border-[#F5C84C]/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent mb-4 font-['Playfair_Display']">
                Divine Beauty Studio
              </h3>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed font-['Inter']">
                Salonul premium de frumusețe din București, dedicat să-ți ofere servicii de înaltă calitate într-o atmosferă luxoasă și relaxantă.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <i className="ri-instagram-line text-[#0E0E0E]"></i>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <i className="ri-facebook-line text-[#0E0E0E]"></i>
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <i className="ri-tiktok-line text-[#0E0E0E]"></i>
                </a>
                <a 
                  href="tel:0700000000" 
                  className="w-10 h-10 bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <i className="ri-phone-line text-[#0E0E0E]"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 font-['Inter']">Navigare Rapidă</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('acasa')}
                    className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                  >
                    Acasă
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicii')}
                    className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                  >
                    Servicii
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('galerie')}
                    className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                  >
                    Galerie
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('echipa')}
                    className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                  >
                    Echipa
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('programari')}
                    className="text-white/70 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                  >
                    Programări
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-4 font-['Inter']">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-white/70 font-['Inter']">
                  <i className="ri-map-pin-line text-[#F5C84C] mr-2 mt-1 flex-shrink-0"></i>
                  <span className="text-sm">Strada Frumuseții nr. 25, București</span>
                </li>
                <li className="flex items-center text-white/70 font-['Inter']">
                  <i className="ri-phone-line text-[#F5C84C] mr-2 flex-shrink-0"></i>
                  <a href="tel:0700000000" className="text-sm hover:text-[#F5C84C] transition-colors duration-300 cursor-pointer">
                    070 000 000
                  </a>
                </li>
                <li className="flex items-start text-white/70 font-['Inter']">
                  <i className="ri-mail-line text-[#F5C84C] mr-2 mt-1 flex-shrink-0"></i>
                  <a href="mailto:contact@contactdevinebeautystudio.ro" className="text-sm hover:text-[#F5C84C] transition-colors duration-300 cursor-pointer break-words">
                    contact@contactdevinebeautystudio.ro
                  </a>
                </li>
                <li className="flex items-start text-white/70 font-['Inter']">
                  <i className="ri-time-line text-[#F5C84C] mr-2 mt-1 flex-shrink-0"></i>
                  <div className="text-sm">
                    <p>Lun-Vin: 09:00-19:00</p>
                    <p>Sâm: 09:00-17:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#F5C84C]/20 pt-8">
            <div className="flex flex-col space-y-4 text-center md:text-left">
              {/* Copyright */}
              <div className="text-white/60 text-sm font-['Inter']">
                © {currentYear} Divine Beauty Studio — Frumusețe cu finețe.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-sm">
                <button 
                  onClick={() => openModal('privacy')}
                  className="text-white/60 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Politica de Confidențialitate
                </button>
                <button 
                  onClick={() => openModal('terms')}
                  className="text-white/60 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Termeni și Condiții
                </button>
                <button 
                  onClick={() => openModal('gdpr')}
                  className="text-white/60 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Politica GDPR
                </button>
                <button 
                  onClick={() => openModal('cookies')}
                  className="text-white/60 hover:text-[#F5C84C] transition-colors duration-300 font-['Inter'] cursor-pointer"
                >
                  Politica Cookies
                </button>
              </div>

              {/* Made by */}
              <div className="text-white/60 text-sm font-['Inter']">
                Made by{' '}
                <a 
                  href="https://websiteon.ro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#F5C84C] hover:text-[#EFB7D5] transition-colors duration-300 cursor-pointer"
                >
                  WebsiteON.ro
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-[#1A0F1A] to-[#0E0E0E] rounded-2xl border border-[#F5C84C]/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4">
            <div className="sticky top-0 bg-gradient-to-r from-[#1A0F1A] to-[#0E0E0E] p-6 border-b border-[#F5C84C]/20 flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent font-['Playfair_Display']">
                {getModalContent().title}
              </h2>
              <button 
                onClick={closeModal}
                className="text-white hover:text-[#F5C84C] transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>
            <div 
              className="p-6 text-white/80 font-['Inter'] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: getModalContent().content }}
            />
          </div>
        </div>
      )}
    </>
  );
}
