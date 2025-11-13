
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Offers from './components/Offers';
import FinalCTA from './components/FinalCTA';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0E0E0E] text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#F5C84C] to-[#EFB7D5] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Team />
      <Process />
      <Testimonials />
      <Offers />
      <FinalCTA />
      <Booking />
      <Contact />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}