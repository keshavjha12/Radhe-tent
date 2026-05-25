import React from 'react';
import { 
  PiggyBank, ShieldCheck, Timer, Zap, MapPin, 
  Smile, ClipboardList, Hammer, Sparkles
} from 'lucide-react';
import { MithilaBorderDivider } from './MithilaMotif';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <PiggyBank className="text-gold-mid" size={28} />,
      title: "Affordable Custom Packages",
      desc: "Flexible budgets matching rural & urban households. Custom estimates assure zero hidden charges."
    },
    {
      icon: <Timer className="text-gold-mid" size={28} />,
      title: "Extremely Fast Service",
      desc: "Instant transportation and rapid structural setup. Pandal structures are fully built hours in advance."
    },
    {
      icon: <ShieldCheck className="text-gold-mid" size={28} />,
      title: "Complete Event Management",
      desc: "We coordinate catering support, seating, background music, lighting, VIP lounges, and generators under one hand."
    },
    {
      icon: <Zap className="text-gold-mid" size={28} />,
      title: "Latest Lighting & Digital Systems",
      desc: "State-of-the-art DMX stage wash beams, heavy subwoofers, laser emitters, and magical fairy light arrays."
    },
    {
      icon: <MapPin className="text-gold-mid" size={28} />,
      title: "Available Across Mithila Region",
      desc: "Reliable logistics extending to the heart of Madhubani, Darbhanga, Benipatti, pandaul, and Samastipur."
    },
    {
      icon: <Hammer className="text-gold-mid" size={28} />,
      title: "Robust Waterproof Shelters",
      desc: "High quality aluminum structures and thick waterproof drapes keeping events secure against sudden storms."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-deep-maroon via-royal-red to-deep-maroon text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-gold-mid/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-royal-red/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-mid/10 border border-gold-mid/30 text-gold-mid text-xs font-bold uppercase tracking-widest">
            <Sparkles size={12} fill="currentColor" />
            <span>विशेषता हमारी (Our Advantages)</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl">
            Why Mithila Trusts Radhe
          </h2>
          <p className="font-sans text-festive-yellow/80 text-sm sm:text-base">
            Professionalism blended with local values. We take care of structural, electrical, and audio management so you can enjoy sacred family milestones with peace of mind.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-black/40 border border-gold-mid/15 hover:border-gold-mid/40 transition-all duration-300 group flex items-start gap-4 hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-gold-mid/15 text-gold-mid group-hover:bg-gold-mid group-hover:text-deep-maroon transition-all duration-300 flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-white group-hover:text-gold-light transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner Quote */}
        <div className="mt-20 p-6 sm:p-10 rounded-3xl bg-gold-mid text-deep-maroon relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide">
              Planning a Grand Vivah (Wedding) or Havan?
            </h3>
            <p className="font-sans text-sm">
              Lock in your dates today! Setup begins 24 hours prior to wedding so your guests walk in with dynamic smiles.
            </p>
          </div>
          <a
            href="tel:+918920942854"
            className="bg-deep-maroon hover:bg-royal-red text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all shadow-md hover:scale-105"
          >
            Get Free Consultation Now
          </a>
        </div>

      </div>
    </section>
  );
}
