import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarRange, Sparkles, MessageSquare } from 'lucide-react';
import { MithilaLogo, MithilaLantern } from './MithilaMotif';

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'hindi' | 'maithili'>('maithili');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: { maithili: 'गृह (Home)', hindi: 'मुख्य पृष्ठ (Home)' }, href: '#home' },
    { label: { maithili: 'परिचय (About)', hindi: 'हमारे बारे में (About)' }, href: '#about' },
    { label: { maithili: 'सेवा (Services)', hindi: 'हमारी सेवाएं (Services)' }, href: '#services' },
    { label: { maithili: 'गैलरी (Gallery)', hindi: 'फ़ोटो गैलरी (Gallery)' }, href: '#gallery' },
    { label: { maithili: 'किऐक हम (Why Us)', hindi: 'हम ही क्यों (Why Us)' }, href: '#why-us' },
    { label: { maithili: 'संपर्क (Contact)', hindi: 'संपर्क करें (Contact)' }, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-deep-maroon/95 shadow-xl border-b border-gold-mid/30 py-3 backdrop-blur-md'
            : 'bg-gradient-to-b from-deep-maroon/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Concept */}
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
              <MithilaLogo className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="font-sans font-semibold text-sm tracking-wide text-white/90 hover:text-gold-mid transition-colors duration-200"
                >
                  {lang === 'maithili' ? item.label.maithili : item.label.hindi}
                </a>
              ))}
            </nav>

            {/* Quick Actions & Language Switcher */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Selector widget */}
              <div className="inline-flex rounded-full bg-black/30 p-1 border border-gold-mid/25 text-xs text-white">
                <button
                  onClick={() => setLang('maithili')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    lang === 'maithili' ? 'bg-gold-mid text-deep-maroon font-bold' : 'hover:text-gold-mid'
                  }`}
                  title="Maithili language support"
                >
                  मैथिली
                </button>
                <button
                  onClick={() => setLang('hindi')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    lang === 'hindi' ? 'bg-gold-mid text-deep-maroon font-bold' : 'hover:text-gold-mid'
                  }`}
                  title="Hindi language support"
                >
                  हिंदी
                </button>
              </div>

              {/* Call Now button */}
              <a
                href="tel:+918920942854"
                className="flex items-center gap-2 text-white border border-gold-mid/50 hover:border-gold-mid hover:bg-gold-mid/10 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <Phone size={14} className="text-gold-mid animate-pulse" />
                <span className="hidden lg:inline">+91 89209 42854</span>
                <span className="lg:hidden">Call</span>
              </a>

              {/* Booking CTA */}
              <button
                onClick={onBookClick}
                className="flex items-center gap-2 bg-gradient-to-r from-gold-mid to-gold-light hover:from-gold-light hover:to-gold-mid text-deep-maroon px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-mid/30 transition-all duration-300"
              >
                <CalendarRange size={14} />
                <span>Book Now</span>
              </button>
            </div>

            {/* Festive Hanging Lantern Anchor on Right side for Desktops */}
            <div className="hidden xl:block absolute right-12 top-0">
              <div className="animate-float">
                <MithilaLantern />
              </div>
            </div>

            {/* Mobile Actions Container */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Quick Book Button for Mobile */}
              <button
                onClick={onBookClick}
                className="bg-gold-mid hover:bg-gold-light text-deep-maroon p-2 rounded-full shadow-md"
                aria-label="Book Now"
              >
                <CalendarRange size={18} />
              </button>

              {/* Language Switcher for Mobile */}
              <button
                onClick={() => setLang(lang === 'maithili' ? 'hindi' : 'maithili')}
                className="bg-black/40 text-[10px] font-bold text-gold-mid border border-gold-mid/20 px-2 py-1.5 rounded"
              >
                {lang === 'maithili' ? 'मैथिली' : 'हिंदी'}
              </button>

              {/* Hamburger Menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gold-mid p-2"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drop down */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-deep-maroon shadow-2xl border-t border-b border-gold-mid/20 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block text-base font-semibold text-white/90 hover:text-gold-mid transition-colors py-1 pl-4 border-l-2 border-transparent hover:border-gold-mid"
                >
                  {lang === 'maithili' ? item.label.maithili : item.label.hindi}
                </a>
              ))}
              <div className="pt-4 border-t border-gold-mid/10 flex flex-col gap-3">
                <a
                  href="tel:+918920942854"
                  className="flex items-center justify-center gap-2 border border-gold-mid/50 text-white py-3 rounded-lg font-bold text-sm tracking-wide"
                >
                  <Phone size={16} className="text-gold-mid" />
                  <span>Call: +91 89209 42854</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-mid to-gold-light text-deep-maroon py-3 rounded-lg font-bold text-sm tracking-wide shadow-md"
                >
                  <CalendarRange size={16} />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
