import React from 'react';
import { CheckCircle2, Award, Users, HeartHandshake, Sparkles } from 'lucide-react';
import { MithilaBorderDivider } from './MithilaMotif';

export default function AboutUs() {
  const highlights = [
    {
      icon: <Award className="text-gold-mid" size={24} />,
      title: "Mithila's Rich Legacy",
      desc: "For over 15 years, we have decorated wedding pandals and sacred grounds, respecting local rituals and Maithili styles."
    },
    {
      icon: <CheckCircle2 className="text-gold-mid" size={24} />,
      title: "On-Time Setup Guarantee",
      desc: "We ensure all tents, lights, stages, and crystal-clear sound setups are fully tested and functional 4 hours before the Muhurat starts."
    },
    {
      icon: <Users className="text-gold-mid" size={24} />,
      title: "Highly Trained Event Craftsmen",
      desc: "Our localized team of professional decorators, electrical crew, and sound technicians handle events of any scale seamlessly."
    },
    {
      icon: <HeartHandshake className="text-gold-mid" size={24} />,
      title: "Value First Philosophy",
      desc: "Premium, water-proof structures and elite digital lighting with packages customized to fit local families comfortably."
    }
  ];

  return (
    <section id="about" className="py-24 bg-offwhite text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative / Branding */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1 text-royal-red font-bold text-xs uppercase tracking-widest bg-royal-red/5 px-3 py-1 rounded-full border border-royal-red/10">
              <Sparkles size={14} className="text-gold-mid" />
              <span>कथा हमारी (Our Story)</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-royal-red leading-tight">
              Weaving Majestic Traditions <br />
              <span className="text-gold-dark font-serif font-semibold italic">with Premium Event Setup</span>
            </h2>

            <p className="font-sans text-base text-gray-700 leading-relaxed">
              Based in the heart of <strong>Madhubani, Bihar</strong>, <strong>Redhe Tent House</strong> has been the gold standard for exquisite catering-support, tent decor, and acoustic brilliance throughout the entire <strong>Mithila region</strong>. We believe that a wedding, thread ceremony (Upnayan), or shaving ceremony (Mundan) is not just an event—it’s a divine convergence of hearts and local rituals.
            </p>

            <p className="font-sans text-base text-gray-600 leading-relaxed">
              From majestic waterproof Maharaja Pandals to modern truss light shows and crisp DJ sound systems, we own 100% of our premium inventory. This means you skip the middleman and receive direct, robust, and pristine setup quality on your big day. We cover every remote village of Madhubani and nearby districts with utmost pride and precision.
            </p>

            {/* Embedded Mini Mithila art quote box with customized double line border */}
            <div className="p-6 bg-festive-yellow border-l-4 border-gold-mid rounded-r-xl">
              <p className="font-serif italic text-deep-maroon font-semibold text-lg">
                "मिथिलाक पावन माटि आ संस्कृति में रचल-बसल सेवा। अहाँक घरक नीक काजक लेल रेड्हे टेन्ट हाउस सदैव तत्पर।"
              </p>
              <p className="font-sans text-xs text-royal-red font-bold mt-2 uppercase tracking-widest text-right">
                — Redhe Event Promise
              </p>
            </div>
          </div>

          {/* Right Block: Image Visual Overlay & Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-mid/30">
              {/* Image showcasing beautiful wedding scene */}
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Wedding Setup"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon via-transparent to-transparent opacity-80" />
              
              {/* Hover Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-deep-maroon/90 border border-gold-mid/30 backdrop-blur-sm text-white">
                <div className="font-display font-extrabold text-gold-mid text-lg uppercase tracking-wide">
                  Redhe Tent House
                </div>
                <div className="font-sans text-xs text-white/80 mt-1">
                  Established 2011 • Trusted by 10,000+ Families across Bihar.
                </div>
              </div>
            </div>

            {/* Mithila Traditional element floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-mid/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-royal-red/10 rounded-full blur-2xl pointer-events-none" />
          </div>

        </div>

        {/* Traditional Divider */}
        <MithilaBorderDivider className="my-16" />

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white border border-gold-mid/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-festive-yellow/40 flex items-center justify-center mb-4 group-hover:bg-gold-mid/25 transition-all">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-royal-red mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
