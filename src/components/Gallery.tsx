import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, X, MessageSquare, Sparkles, Image, Check } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryProps {
  onQuickBook: (serviceName: string) => void;
}

const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Royal Red Wedding Entrance",
    category: "wedding",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    description: "Grand traditional Maharaja entrance drapes lined with fresh yellow marigold chains and ambient hanging bulbs."
  },
  {
    id: "gal-2",
    title: "Golden Night Fairy Lighting",
    category: "lighting",
    imageUrl: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=800&q=80",
    description: "Immersive starry night effect constructed with over 5,000 meters of high-density copper-fairy lights wrapped perfectly around ancient trees."
  },
  {
    id: "gal-3",
    title: "Premium Stage Flower Arches",
    category: "stage",
    imageUrl: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80",
    description: "Deluxe metal truss stage draped in premium dual-color white and red roses, flanked by crystal candle stands."
  },
  {
    id: "gal-4",
    title: "Vedic Janeu Mandap Decor",
    category: "traditional",
    imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    description: "Authentic custom canopy structure designed with religious yellow drapes, clay lamps, and banana leaf patterns."
  },
  {
    id: "gal-5",
    title: "Truss Lighting & Heavy Sound Setup",
    category: "sound",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    description: "Concert-grade aluminum truss structure supporting automated LED moving head wash beams and high bass line-array speakers."
  },
  {
    id: "gal-6",
    title: "Festive Night Lantern Canopy",
    category: "lighting",
    imageUrl: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
    description: "Atmospheric multi-tiered paper lantern layouts creating a warm, nostalgic, family-friendly evening glow."
  },
  {
    id: "gal-7",
    title: "VIP Sitting Lounge",
    category: "wedding",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    description: "Sophisticated sofa seating layout styled in maroon velvet coverings for royal guests and bride/groom close family."
  },
  {
    id: "gal-8",
    title: "Traditional Mundan Shamiyana",
    category: "traditional",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    description: "Compact waterproof shamiyana in warm colors with low sit-down floor mattresses, perfect for religious chants & baby tonsure."
  }
];

export default function Gallery({ onQuickBook }: GalleryProps) {
  const [filter, setFilter] = useState<'all' | 'wedding' | 'lighting' | 'stage' | 'traditional' | 'sound'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const handleWhatsAppInquiry = (item: GalleryItem) => {
    const text = encodeURIComponent(`Pranam Radhe Tent House! I am looking for a setup similar to your gallery catalog: "${item.title}" (${item.category} setup). Please share customizable package costs.`);
    window.open(`https://wa.me/918920942854?text=${text}`, '_blank');
  };

  return (
    <section id="gallery" className="py-24 bg-offwhite text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-royal-red/5 border border-royal-red/10 text-royal-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles size={12} className="text-gold-mid animate-pulse" />
            <span>चित्र दीर्घा (Our Visual Catalog)</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-royal-red">
            Moments Of Celebration
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-600">
            Witness the elegance of tents and systems built by Radhe Tent House. Filter through categories to discover designs fitting your dream event.
          </p>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {(['all', 'wedding', 'lighting', 'stage', 'traditional', 'sound'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-royal-red text-white shadow-md border-transparent' 
                    : 'bg-white text-gray-700 hover:bg-royal-red/10 border border-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Layouts' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Responsive Columns) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gold-mid/10 h-80 cursor-pointer bg-white"
                onClick={() => setSelectedItem(item)}
              >
                {/* Visual Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon via-deep-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5" />
                
                {/* Instant Eye and Label Indicators (Fixed on Card bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent sm:from-transparent text-white sm:translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block bg-gold-mid/95 text-deep-maroon text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-display font-extrabold text-sm text-white filter drop-shadow">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold-mid text-deep-maroon flex items-center justify-center shadow-lg transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Eye size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal Overlay */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
              
              {/* Tap backdrop to close */}
              <div className="absolute inset-0" onClick={() => setSelectedItem(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-offwhite rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
              >
                {/* Close Button absolute inside Box */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-royal-red hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>

                {/* Left Side: Massive visual representation */}
                <div className="md:col-span-7 h-64 md:h-[500px] relative bg-black">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category tag */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1 bg-gold-mid text-deep-maroon py-1 px-3 rounded text-xs font-bold uppercase tracking-widest shadow-lg">
                    <Sparkles size={12} fill="currentColor" />
                    <span>{selectedItem.category} Setup</span>
                  </div>
                </div>

                {/* Right Side: Informative actions */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-[320px] md:h-[500px] overflow-y-auto">
                  
                  <div className="space-y-4">
                    <div className="font-sans text-[11px] font-black tracking-widest text-royal-red uppercase">
                      Radhe Live Work Demonstration
                    </div>
                    
                    <h3 className="font-display font-black text-2xl text-deep-maroon">
                      {selectedItem.title}
                    </h3>

                    <p className="font-sans text-sm text-gray-600 leading-relaxed">
                      {selectedItem.description}
                    </p>

                    {/* Quality Badging */}
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                        <Check size={14} className="text-emerald-500" />
                        <span>All safety logs certified standard</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                        <Check size={14} className="text-emerald-500" />
                        <span>Available in custom scale sizing</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons inside the modal */}
                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <button
                      onClick={() => handleWhatsAppInquiry(selectedItem)}
                      className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-bold text-sm tracking-wide shadow-md transition-all"
                    >
                      <MessageSquare size={16} />
                      <span>Inquiry on WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        onQuickBook(selectedItem.title);
                      }}
                      className="flex items-center justify-center gap-2 w-full bg-royal-red hover:bg-deep-maroon text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Book Similar Design</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
