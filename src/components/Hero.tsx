import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, CalendarCheck, Sparkles, MessageSquare, ChevronRight, Award, MapPin } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

const backgroundImages = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80", // Festive Hall glow
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80", // Grand marquee tent
  "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=1600&q=80", // Fairy string lights
];

export default function Hero({ onBookClick }: HeroProps) {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: "15+", label: "सभ्यक अनुभव (Years Experience)" },
    { value: "950+", label: "विवाह आ उत्सव (Events Completed)" },
    { value: "120+", label: "गाँव आ नगर (Villages Served)" },
    { value: "4.9★", label: "ग्राहक संतुष्टि (Customer Rating)" },
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Pranam Redhe Tent House! I want to inquire about dynamic services (Tent, DJ, Lighting, Stage setup) for my upcoming event.");
    window.open(`https://wa.me/918920942854?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-maroon">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImages[currentBg]}')` }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Festive Golden/Maroon overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon via-deep-maroon/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-maroon/60 via-transparent to-deep-maroon/60 z-10" />
      </div>

      {/* Hero Visual Details: Traditional Lanterns floating left and right */}
      <div className="absolute left-4 top-24 sm:left-10 lg:left-16 z-20 hidden md:block animate-float">
        <div className="w-1.5 h-36 bg-gradient-to-b from-gold-mid/80 to-transparent mx-auto" />
        <div className="bg-gold-mid/15 p-2 rounded-full border border-gold-mid/30 text-gold-mid">
          <Sparkles size={18} className="animate-spin-slow" />
        </div>
      </div>
      <div className="absolute right-4 top-36 sm:right-10 lg:right-16 z-20 hidden md:block animate-float-delayed">
        <div className="w-1.5 h-48 bg-gradient-to-b from-gold-mid/80 to-transparent mx-auto" />
        <div className="bg-gold-mid/15 p-2 rounded-full border border-gold-mid/30 text-gold-mid">
          <Award size={18} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-20 text-center flex flex-col items-center">
        {/* Culture Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-mid/10 border border-gold-mid/40 mb-6 text-gold-mid"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="font-sans font-semibold text-xs uppercase tracking-widest">
            Mithila's Premium Event Partner
          </span>
        </motion.div>

        {/* Big Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl"
        >
          Complete Tent, Light & Sound <br />
          <span className="text-gold-shimmer filter drop-shadow">Solution for Every Celebration</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-sans text-lg sm:text-xl text-festive-yellow/80 max-w-2xl font-normal"
        >
          Serving <span className="text-white font-semibold">Madhubani</span> and the entire <span className="text-gold-mid font-semibold">Mithila Region</span> with traditional elegance and modern royal aesthetics.
        </motion.p>

        {/* Location Indicator bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 flex items-center gap-2 text-white/70 text-xs sm:text-sm bg-black/30 border border-white/10 px-4 py-1.5 rounded-full"
        >
          <MapPin size={14} className="text-gold-mid" />
          <span>Serving Madhubani, Darbhanga, Samastipur, Benipatti, Jhanjharpur, Pandaul & Nearby</span>
        </motion.div>

        {/* CTA Buttons Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          {/* Book Now */}
          <button
            onClick={onBookClick}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid text-deep-maroon font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-mid/40 hover:scale-[1.02] transition-all duration-300"
          >
            <CalendarCheck size={18} />
            <span>Book Your Date</span>
            <ChevronRight size={16} />
          </button>

          {/* Call Now */}
          <a
            href="tel:+918920942854"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-deep-maroon border-2 border-gold-mid text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-gold-mid/10 transition-all duration-300"
          >
            <Phone size={18} className="text-gold-mid" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Us */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-md hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <MessageSquare size={18} />
            <span>WhatsApp Us</span>
          </button>
        </motion.div>

        {/* Dynamic Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 w-full max-w-5xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-gold-mid/15">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-3 border-r last:border-r-0 border-gold-mid/10 last:border-none"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gold-mid filter drop-shadow">
                  {stat.value}
                </div>
                <div className="font-sans text-[10px] sm:text-xs text-white/70 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Traditional bottom decorative wave border (styled as delicate Mithila border) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-offwhite w-full h-auto"
        >
          <path d="M0,15 C180,28, 360,2, 540,15 C720,28, 900,2, 1080,15 C1260,28, 1440,5, 1440,5 L1440,28 L0,28 Z" fill="currentColor" />
          {/* Gold double line decor */}
          <path d="M0,8 C180,21, 360,0, 540,8 C720,21, 900,0, 1080,8 C1260,21, 1440,-2, 1440,-2" stroke="var(--color-gold-mid)" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  );
}
