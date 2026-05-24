import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Tent, Music, Lightbulb, Flower, CalendarRange, 
  Baby, Sparkles, Sofa, Check, Info, ShieldCheck, Zap
} from 'lucide-react';

interface ServicesProps {
  onBookSelect: (serviceName: string, packageType: 'standard' | 'premium' | 'royal') => void;
}

export default function Services({ onBookSelect }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'essential' | 'ceremony'>('all');
  
  // Interactive estimator state
  const [estType, setEstType] = useState<string>('Wedding Setup');
  const [estGuests, setEstGuests] = useState<number>(500);
  const [includeSound, setIncludeSound] = useState<boolean>(true);
  const [includePremiumFlowers, setIncludePremiumFlowers] = useState<boolean>(false);
  const [isWaterproof, setIsWaterproof] = useState<boolean>(false);

  const services = [
    {
      id: "ser-1",
      icon: <Tent className="text-royal-red" size={26} />,
      title: "Wedding Tent Setup",
      category: "essential",
      description: "Grand Maharaja Pandals and modern waterproof German Hangar structures. Built with high-strength steel arches and decorated in custom draperies like Royal Red, Gold, or Pastel colors.",
      subFeatures: ["Waterproof roofing", "Premium lining", "Traditional gate entry", "Up to 5000+ guests capacity"]
    },
    {
      id: "ser-2",
      icon: <Lightbulb className="text-royal-red" size={26} />,
      title: "Wedding & Decorative Lighting",
      category: "essential",
      description: "Festive illuminations showcasing LED pixel chains, warm fairy light canopies, moving beam spotlights, laser trusses, and crystal chandeliers to transform night events into fairy tales.",
      subFeatures: ["Intelligent wash lights", "Safety-wired distribution boards", "Dual backup generator support", "Fairy light drops"]
    },
    {
      id: "ser-3",
      icon: <Music className="text-royal-red" size={26} />,
      title: "Heavy DJ & Sound System",
      category: "essential",
      description: "Crystal clear bass and vocals powered by high-wattage Linear array speaker columns, dedicated sound mixers, heavy dual subwoofers, wireless mics, and premium wedding playlist support.",
      subFeatures: ["Crisp sub-bass", "Expert sound engineer in-house", "Zero feedback guarantee", "Karaoke & folk song setup"]
    },
    {
      id: "ser-4",
      icon: <Flower className="text-royal-red" size={26} />,
      title: "Royal Stage & Flower Decoration",
      category: "essential",
      description: "Breathtaking visual backdrops for grooms and brides featuring premium red carpet pathways, elegant floral arches of marigolds, roses, and orchids, and velvet royal chairs.",
      subFeatures: ["Self-standing metal trussing", "Natural & premium artificial flowers", "LED backdrop screens", "Velvet royal sofas"]
    },
    {
      id: "ser-5",
      icon: <Baby className="text-royal-red" size={26} />,
      title: "Mundan Ceremony Setup",
      category: "ceremony",
      description: "Charming and traditional setup for your child's sacred Mundan ceremony. Includes colorful floor gaddas (mattresses), soft carpet spreads, and auspicious yellow marigold lines.",
      subFeatures: ["Sit-down traditional style", "Compact waterproof shamiyanas", "Kids playground items optional", "Festive welcoming flags"]
    },
    {
      icon: <Sparkles className="text-royal-red" size={26} />,
      id: "ser-6",
      title: "Upnayan (Janeu) Ceremony",
      category: "ceremony",
      description: "Sacred thread initiation setup strictly adhering to Vedic rituals. Handcrafted Yajna (Havan) fire pits, seating grids with comfortable rugs for priests, and elegant backdrops.",
      subFeatures: ["Ritual-specific drapes", "Sacred Havan square logs", "Elegant brass lamp stands", "Auspicious mango leaf garlands"]
    },
    {
      id: "ser-7",
      icon: <Sofa className="text-royal-red" size={26} />,
      title: "Seating & Dining VIP Lounges",
      category: "essential",
      description: "Arrangement of high-quality banquet chairs wrapped in premium velvet jackets, round tables with spotless white spreads, and high-end VIP lounge sofas for prestigious family guests.",
      subFeatures: ["Round table setups", "Chair visual coverings", "Dedicated VIP carpets", "Sturdy buffet tables with skirting"]
    },
    {
      id: "ser-8",
      icon: <Zap className="text-royal-red" size={26} />,
      title: "Electrical & Heavy Generator Setup",
      category: "essential",
      description: "Uninterrupted power supply support under our control with heavy, environment-friendly silent diesel generators (DGs) ranging from 15 kVA to 125 kVA to assure smooth events.",
      subFeatures: ["Silent Diesel Generators", "Insulated copper power links", "Continuous standby monitoring", "Quick transfer switches"]
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  // BudgetItem estimator calculations
  const calculateBudget = (type: string, guests: number, sound: boolean, flowers: boolean, waterproof: boolean) => {
    let base = 35000;
    if (type === 'Wedding Setup') base = 65000;
    if (type === 'Upnayan Ceremony') base = 40000;
    if (type === 'Mundan Setup') base = 25000;
    
    // Per-guest incremental cost
    const guestMultiplier = base === 25000 ? 50 : 80;
    base += guests * guestMultiplier;

    // Additional modules
    if (sound) base += 15000;
    if (flowers) base += 18000;
    if (waterproof) base += 25000;

    return {
      standard: Math.round(base),
      premium: Math.round(base * 1.45),
      royal: Math.round(base * 2.1)
    };
  };

  const estimatedPrices = calculateBudget(estType, estGuests, includeSound, includePremiumFlowers, isWaterproof);

  const formatINR = (num: number) => {
    return '₹' + num.toLocaleString('en-IN');
  };

  return (
    <section id="services" className="py-24 bg-offwhite text-gray-800 relative border-y border-gold-mid/10">
      {/* Visual background details */}
      <div className="absolute top-10 left-10 w-44 h-44 bg-gold-mid/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-royal-red/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-red/5 border border-royal-red/15 text-royal-red text-xs font-bold uppercase tracking-widest">
            <Sparkles size={12} className="text-gold-dark" />
            <span>उत्कृष्ट सेवाएं (Our Offerings)</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-deep-maroon">
            Exquisite Event Services
          </h2>
          <p className="font-sans text-gray-600 text-base">
            Handcrafted decorative setups and cutting-edge light & sound technologies. We design customizable experiences optimized for traditional roots and majestic standards.
          </p>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-deep-maroon text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-festive-yellow'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('essential')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'essential' 
                  ? 'bg-deep-maroon text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-festive-yellow'
              }`}
            >
              Tent & Heavy Setups
            </button>
            <button
              onClick={() => setActiveTab('ceremony')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'ceremony' 
                  ? 'bg-deep-maroon text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-festive-yellow'
              }`}
            >
              Traditional Sacred setups (Mundan/Janeu)
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {filteredServices.map((service, index) => (
            <motion.div
              layout
              key={service.id}
              className="group relative p-6 rounded-2xl bg-white border border-gold-mid/15 hover:border-royal-red/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl h-full"
            >
              {/* Top ambient color spot */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-mid/5 to-transparent rounded-bl-3xl group-hover:from-gold-mid/15 transition-all" />

              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-gold-mid/10 border border-gold-mid/20 flex items-center justify-center text-royal-red mb-6 group-hover:bg-royal-red group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="font-display font-extrabold text-lg text-deep-maroon group-hover:text-royal-red transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-gray-600 mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Sub Features Bullet Grid */}
                <ul className="mt-5 space-y-2">
                  {service.subFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-1.5 text-xs text-gray-700">
                      <Check size={12} className="text-royal-red flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Quick Call and Booking CTA inside each card */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-wider text-gray-400">
                  Mithila Premium
                </span>
                <button
                  onClick={() => onBookSelect(service.title, 'premium')}
                  className="text-xs font-bold text-royal-red hover:text-deep-maroon flex items-center gap-1 transition-colors"
                >
                  <span>Quick Book</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Event Cost Estimator Tool */}
        <div className="mt-24 p-6 sm:p-10 rounded-3xl bg-white border border-gold-mid/30 shadow-xl relative overflow-hidden text-gray-800">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-royal-red/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gold-mid/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Filters / Selection Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-royal-red">
                <Info size={18} className="text-gold-dark" />
                <span className="font-display font-bold text-xs uppercase tracking-widest">
                  किफ़ायती आकलन (Budget Estimator Tool)
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-deep-maroon leading-tight">
                Customize & Estimate Your Celebration Budget
              </h3>
              <p className="font-sans text-sm text-gray-600">
                Play around with options below. Get instant approximate budget estimates representing standard, high-density premium, and ultra royal packages in Bihar.
              </p>

              <div className="space-y-4 pt-4 text-xs sm:text-sm">
                
                {/* Event Type Selected */}
                <div className="space-y-2">
                  <label className="block text-deep-maroon font-bold uppercase tracking-wider text-xs">
                    1. Select Ceremony
                  </label>
                  <select 
                    value={estType}
                    onChange={(e) => setEstType(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red text-sm cursor-pointer"
                  >
                    <option value="Wedding Setup" className="bg-white">Shadi (Wedding Grand Setup)</option>
                    <option value="Upnayan Ceremony" className="bg-white">Upnayan (Sacred Thread Initiation)</option>
                    <option value="Mundan Setup" className="bg-white">Mundan (Blessing Shaving Ceremony)</option>
                    <option value="Small Gathering Setup" className="bg-white">Birthday, Party & Corporate Launch</option>
                  </select>
                </div>

                {/* Range Slider for guests */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-deep-maroon font-bold uppercase tracking-wider text-xs">
                      2. Estimated Guests Count
                    </label>
                    <span className="text-royal-red font-mono font-bold text-xs bg-royal-red/5 px-2 py-0.5 rounded border border-royal-red/10">
                      {estGuests} Guests
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1500"
                    step="50"
                    value={estGuests}
                    onChange={(e) => setEstGuests(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal-red"
                  />
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>100 Guests</span>
                    <span>1500+ Guests (Grand Pandal)</span>
                  </div>
                </div>

                {/* Additional checkboxes */}
                <div className="pt-2">
                  <label className="block text-deep-maroon font-bold uppercase tracking-wider text-xs mb-3">
                    3. Additional Premium Modules Included
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    {/* Subwoofer DJ */}
                    <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                      includeSound ? 'bg-royal-red/5 border-royal-red text-deep-maroon font-bold' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}>
                      <input 
                        type="checkbox" 
                        checked={includeSound} 
                        onChange={(e) => setIncludeSound(e.target.checked)}
                        className="rounded accent-royal-red w-4 h-4"
                      />
                      <span>Truss Sound & DJ</span>
                    </label>

                    {/* Fresh Flowers */}
                    <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                      includePremiumFlowers ? 'bg-royal-red/5 border-royal-red text-deep-maroon font-bold' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}>
                      <input 
                        type="checkbox" 
                        checked={includePremiumFlowers} 
                        onChange={(e) => setIncludePremiumFlowers(e.target.checked)}
                        className="rounded accent-royal-red w-4 h-4"
                      />
                      <span>Royal Flowers Setup</span>
                    </label>

                    {/* Waterproof Hangar */}
                    <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                      isWaterproof ? 'bg-royal-red/5 border-royal-red text-deep-maroon font-bold' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}>
                      <input 
                        type="checkbox" 
                        checked={isWaterproof} 
                        onChange={(e) => setIsWaterproof(e.target.checked)}
                        className="rounded accent-royal-red w-4 h-4"
                      />
                      <span>Waterproof Sheds</span>
                    </label>

                  </div>
                </div>

              </div>
            </div>

            {/* Right Col: Instant dynamic pricing boxes */}
            <div className="lg:col-span-5 bg-deep-maroon rounded-2xl p-6 border border-gold-mid/30 text-center space-y-6 shadow-xl">
              <span className="inline-block bg-gold-mid text-deep-maroon px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                Instant Estimated Budgets
              </span>

              <div className="space-y-4 text-left">
                {/* Standard Package */}
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold-mid/20 transition-all">
                  <div>
                    <h4 className="font-display font-semibold text-xs text-white/80 uppercase">Standard Package</h4>
                    <p className="font-sans text-[10px] text-white/50">Basic setup + essentials</p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-base text-white">{formatINR(estimatedPrices.standard)}</div>
                    <button 
                      onClick={() => onBookSelect(estType, 'standard')}
                      className="text-[10px] font-bold text-gold-mid hover:underline"
                    >
                      Book ➔
                    </button>
                  </div>
                </div>

                {/* Premium Package (Starred) */}
                <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-gold-mid/10 to-royal-red/20 border-2 border-gold-mid/40 shadow-md">
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-display font-bold text-xs text-gold-mid uppercase">Premium Setup</h4>
                      <Sparkles size={11} className="text-gold-mid animate-pulse" />
                    </div>
                    <p className="font-sans text-[10px] text-white/60">Most popular Mithila choice</p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-black text-lg text-gold-light">{formatINR(estimatedPrices.premium)}</div>
                    <button 
                      onClick={() => onBookSelect(estType, 'premium')}
                      className="text-[10px] font-bold bg-gold-mid px-2 py-0.5 rounded text-deep-maroon hover:bg-white"
                    >
                      Select
                    </button>
                  </div>
                </div>

                {/* Royal Elite Package */}
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold-mid/20 transition-all">
                  <div>
                    <h4 className="font-display font-semibold text-xs text-white/80 uppercase">Royal Elite Setup</h4>
                    <p className="font-sans text-[10px] text-white/50 font-medium">Waterproof + Heavy Sound + High Decor</p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-base text-white">{formatINR(estimatedPrices.royal)}</div>
                    <button 
                      onClick={() => onBookSelect(estType, 'royal')}
                      className="text-[10px] font-bold text-gold-mid hover:underline"
                    >
                      Book ➔
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/60">
                <ShieldCheck size={13} className="text-emerald-400 animate-pulse" />
                <span>Estimate based on regional averages for 2026.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
