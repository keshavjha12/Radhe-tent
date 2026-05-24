import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, CalendarCheck, ArrowUp, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export default function FloatingActions({ onBookClick }: FloatingActionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Pranam Redhe Tent House! I want to quickly consult about tent and lighting packages for my upcoming ceremony.");
    window.open(`https://wa.me/918920942854?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 select-none pointer-events-none">
      
      {/* Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-deep-maroon hover:bg-royal-red text-gold-mid border border-gold-mid/30 shadow-lg pointer-events-auto hover:scale-110 transition-transform cursor-pointer"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Floating Priority Call Button */}
      <a
        href="tel:+918920942854"
        className="p-4 rounded-full bg-royal-red text-white hover:bg-deep-maroon shadow-lg pointer-events-auto hover:scale-110 transition-transform flex items-center justify-center relative group border border-gold-mid/40"
        title="Call Booking Helpline"
      >
        <Phone size={20} className="animate-pulse" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-deep-maroon text-gold-mid text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Helpline
        </span>
      </a>

      {/* Floating WhatsApp Chat */}
      <button
        onClick={handleWhatsApp}
        className="p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg pointer-events-auto hover:scale-110 transition-transform flex items-center justify-center relative group"
        title="Direct Chat on WhatsApp"
      >
        <MessageSquare size={20} />
        {/* Glow point */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>
        
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-deep-maroon text-gold-mid text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Us
        </span>
      </button>

    </div>
  );
}
