import React from 'react';
import { 
  Phone, MessageSquare, MapPin, Mail, Sparkles, 
  Facebook, Instagram, Youtube, Heart, Calendar 
} from 'lucide-react';
import { MithilaLogo } from './MithilaMotif';

interface FooterProps {
  onBookTrigger: () => void;
}

export default function Footer({ onBookTrigger }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const villages = [
    "Madhubani City", "Benipatti", "Pandaul", "Rajnagar", "Bisfi", 
    "Jhanjharpur", "Sakri", "Darbhanga", "Samastipur", "Laukaha", "Jaynagar"
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://facebook.com/RadheTentHouse" },
    { icon: <Instagram size={18} />, href: "https://instagram.com/RadheTentHouse" },
    { icon: <Youtube size={18} />, href: "https://youtube.com/@RadheTentHouse" },
  ];

  return (
    <footer className="bg-deep-maroon text-white border-t-2 border-gold-mid/30 relative select-none">
      
      {/* Upper content border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-mid via-royal-red to-gold-mid pointer-events-none" />

      {/* Main Grid container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Logo Concept & Brand Story Panel */}
          <div className="lg:col-span-4 space-y-4">
            <MithilaLogo className="h-10 w-auto" />
            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed pt-2">
              Premium events setups serving across the entire culturally rich Mithila region. Specializing in grand Maharaja Pandals, wedding stage decors, linear-array DJ sound setups, and elite atmospheric lighting.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-mid hover:text-gold-mid flex items-center justify-center transition-colors"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Service Area Grid lists */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-gold-mid uppercase tracking-widest flex items-center gap-1">
              <Sparkles size={14} className="text-gold-mid" />
              <span>कार्य क्षेत्र (Serving Areas)</span>
            </h4>
            <p className="font-sans text-xs text-white/60">
              We provide free logistics transportation to all core villages & sub-districts inside:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {villages.map((vil, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] font-sans bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/80"
                >
                  {vil}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Details helper */}
          <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm">
            <h4 className="font-display font-bold text-sm text-gold-mid uppercase tracking-widest">
              Contacts
            </h4>
            <div className="space-y-3">
              <a href="tel:+918920942854" className="flex items-center gap-2 hover:text-gold-mid transition-colors">
                <Phone size={14} className="text-gold-mid" />
                <span>+91 89209 42854</span>
              </a>
              <a 
                href="https://wa.me/918920942854"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gold-mid transition-colors"
              >
                <MessageSquare size={14} className="text-gold-mid" />
                <span>+91 89209 42854</span>
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin size={14} className="text-gold-mid mt-0.5" />
                <span>Madhubani Town, Bihar, 847211</span>
              </div>
            </div>
          </div>

          {/* Interactive Styled Google Map Placeholder */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-gold-mid uppercase tracking-widest">
              Find Us
            </h4>
            <div className="relative rounded-xl overflow-hidden border border-gold-mid/30 bg-black/40 p-1">
              {/* Aesthetic Custom Map Graphic styling */}
              <div className="h-28 bg-royal-red/35 flex flex-col items-center justify-center text-center p-3 relative bg-cover bg-center" style={{ backgroundImage: "radial-gradient(circle, rgba(91,14,14,0.95), rgba(0,0,0,0.85))" }}>
                
                {/* Traditional geometric grids */}
                <div className="absolute inset-2 border border-dashed border-gold-mid/30 rounded pointer-events-none" />
                
                <MapPin size={24} className="text-gold-mid animate-bounce" />
                <h5 className="font-display font-bold text-xs text-white mt-1">Madhubani, Bihar</h5>
                <p className="font-sans text-[9px] text-white/50 max-w-xs">Serving complete Mithila Circle</p>
                
                <a 
                  href="https://maps.google.com/?q=Madhubani+Bihar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 text-[10px] font-bold text-deep-maroon bg-gold-mid hover:bg-gold-light px-3 py-1 rounded transition-colors"
                >
                  Get Route Directions
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Banner Copyright with cultural tribute */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4 text-center sm:text-left">
          <div>
            <p>© {currentYear} Radhe Tent House. All rights reserved.</p>
            <p className="text-[10px] text-gold-mid/60 mt-0.5 uppercase tracking-widest font-sans font-medium">Madhubani - Mithila Event Setup Solution</p>
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={10} className="text-royal-red fill-royal-red animate-pulse" />
            <span>respect for Mithila traditions in Madhubani, Bihar.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
