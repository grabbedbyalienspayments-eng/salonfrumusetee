import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    serviciu: '',
    data: '',
    ora: '',
    mesaj: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const servicii = [
    'Coafură & Styling',
    'Cosmetică Facială',
    'Machiaj Profesional',
    'Laminare Gene & Sprâncene',
    'Tratamente cu Microdermabraziune',
    'Îngrijire Premium Păr',
    'Pachet Glow Basic',
    'Pachet Luxury Glam',
    'Pachet Divine Experience'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4au7mjbpm5d1fqikik0', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nume: '',
          telefon: '',
          serviciu: '',
          data: '',
          ora: '',
          mesaj: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="programari" className="py-20 px-6 bg-gradient-to-br from-[#0E0E0E] via-[#1A0F1A] to-[#0E0E0E]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] bg-clip-text text-transparent">
            Fă o Programare
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Inter']">
            Completează formularul de mai jos și te vom contacta în cel mai scurt timp pentru a confirma programarea
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#F5C84C]/20">
          <form id="programari-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
            {/* Nume și Telefon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nume" className="block text-white font-semibold mb-2 font-['Inter']">
                  Nume complet *
                </label>
                <input
                  type="text"
                  id="nume"
                  name="nume"
                  value={formData.nume}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-[#F5C84C]/30 rounded-xl text-white placeholder-white/50 focus:border-[#F5C84C] focus:outline-none transition-colors duration-300 font-['Inter'] text-sm"
                  placeholder="Introduceți numele complet"
                />
              </div>

              <div>
                <label htmlFor="telefon" className="block text-white font-semibold mb-2 font-['Inter']">
                  Număr de telefon *
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-[#F5C84C]/30 rounded-xl text-white placeholder-white/50 focus:border-[#F5C84C] focus:outline-none transition-colors duration-300 font-['Inter'] text-sm"
                  placeholder="070 000 000"
                />
              </div>
            </div>

            {/* Serviciu */}
            <div>
              <label htmlFor="serviciu" className="block text-white font-semibold mb-2 font-['Inter']">
                Serviciul dorit *
              </label>
              <div className="relative">
                <select
                  id="serviciu"
                  name="serviciu"
                  value={formData.serviciu}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-[#F5C84C]/30 rounded-xl text-white focus:border-[#F5C84C] focus:outline-none transition-colors duration-300 font-['Inter'] text-sm appearance-none pr-8 cursor-pointer"
                >
                  <option value="" className="bg-[#0E0E0E] text-white">Selectează serviciul</option>
                  {servicii.map((serviciu, index) => (
                    <option key={index} value={serviciu} className="bg-[#0E0E0E] text-white">
                      {serviciu}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-[#F5C84C]"></i>
                </div>
              </div>
            </div>

            {/* Data și Ora */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="data" className="block text-white font-semibold mb-2 font-['Inter']">
                  Data dorită *
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-white/10 border border-[#F5C84C]/30 rounded-xl text-white focus:border-[#F5C84C] focus:outline-none transition-colors duration-300 font-['Inter'] text-sm cursor-pointer"
                />
              </div>

              <div>
                <label htmlFor="ora" className="block text-white font-semibold mb-2 font-['Inter']">
                  Ora preferată *
                </label>
                <input
                  type="time"
                  id="ora"
                  name="ora"
                  value={formData.ora}
                  onChange={handleInputChange}
                  required
                  min="09:00"
                  max="19:00"
                  className="w-full px-4 py-3 bg-white/10 border border-[#F5C84C]/30 rounded-xl text-white focus:border-[#F5C84C] focus:outline-none transition-colors duration-300 font-['Inter'] text-sm cursor-pointer"
                />
              </div>
            </div>

            {/* Mesaj */}
            <div>
              <label htmlFor="mesaj" className="block text-white font-semibold mb-2 font-['Inter']">
                Mesaj suplimentar
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                value={formData.mesaj}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 bg-white/10 border border-[#F5C84C]/30 rounded-xl text-white placeholder-white/50 focus:border-[#F5C84C] focus:outline-none transition-colors duration-300 font-['Inter'] text-sm resize-none"
                placeholder="Detalii suplimentare despre programare (opțional)"
              />
              <div className="text-right text-white/50 text-xs mt-1 font-['Inter']">
                {formData.mesaj.length}/500 caractere
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] text-[#0E0E0E] px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#F5C84C]/40 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-['Inter'] whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Se trimite...
                  </span>
                ) : (
                  'Trimite programarea'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center">
                <i className="ri-check-circle-line text-green-400 text-2xl mb-2 block"></i>
                <p className="text-green-400 font-semibold font-['Inter']">
                  Îți mulțumim! Te contactăm în scurt timp pentru a confirma programarea.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-center">
                <i className="ri-error-warning-line text-red-400 text-2xl mb-2 block"></i>
                <p className="text-red-400 font-semibold font-['Inter']">
                  A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi direct.
                </p>
              </div>
            )}
          </form>

          {/* Program Info */}
          <div className="mt-8 pt-8 border-t border-[#F5C84C]/20 text-center">
            <p className="text-white/70 font-['Inter']">
              <i className="ri-time-line text-[#F5C84C] mr-2"></i>
              Program: Luni - Sâmbătă: 09:00 - 19:00 | Duminică: Închis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
