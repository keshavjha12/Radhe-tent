import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, MessageSquare, Phone, Send, CheckCircle2 } from 'lucide-react';

interface InquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryPopup({ isOpen, onClose }: InquiryPopupProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [ceremony, setCeremony] = useState('Wedding Setup');
  const [isSent, setIsSent] = useState(false);

  const handleCallbackInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Simulate backend query save
    setIsSent(true);

    // Auto close modal after a few seconds
    setTimeout(() => {
      setIsSent(false);
      setName('');
      setPhone('');
      onClose();
    }, 4000);
  };

  const handleWhatsAppQuickInquiry = () => {
    const text = encodeURIComponent(`Pranam Radhe Tent House! I want to quickly book a priority consultation slot. My Name is ${name || 'Interested client'} and Phone is ${phone || 'Not Specified'}. I am planning a ${ceremony}.`);
    window.open(`https://wa.me/918920942854?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          
          {/* Backdrop Tap dismiss */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative bg-offwhite rounded-2xl max-w-md w-full overflow-hidden shadow-2xl z-10 border-2 border-gold-mid/40"
          >
            {/* Top Red-Gold Border line */}
            <div className="h-2 bg-gradient-to-r from-gold-mid via-royal-red to-gold-mid" />

            {/* Close Button dismiss */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 hover:bg-royal-red hover:text-white flex items-center justify-center text-gray-800 transition-colors"
              aria-label="Dismiss Close Inquiry"
            >
              <X size={16} />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              
              {isSent ? (
                <div className="py-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gold-mid/20 text-royal-red flex items-center justify-center animate-bounce">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-display font-black text-xl text-royal-red">
                    Callback Registered!
                  </h3>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed max-w-xs">
                    Thank you! Our Mithila setup executive has queued your priority request. We'll ring you on <strong>{phone}</strong> shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-royal-red/5 text-royal-red border border-royal-red/10 text-[10px] font-bold uppercase tracking-widest">
                      <Sparkles size={11} className="text-gold-mid animate-pulse" />
                      <span>विवाह मुहूर्त विशेष (Lagan Season Slot Booking)</span>
                    </div>
                    <h3 className="font-display font-black text-2xl text-royal-red">
                      Request Free Callback
                    </h3>
                    <p className="font-sans text-xs text-gray-600">
                      Peak wedding dates get booked fast across Mithila! Enter your number now to request a free site layout blueprint & instant callback.
                    </p>
                  </div>

                  <form onSubmit={handleCallbackInquiry} className="space-y-4 text-xs">
                    
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="block text-gray-700 font-bold uppercase tracking-wider">Sponsor Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar Jha"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red focus:bg-white"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="block text-gray-700 font-bold uppercase tracking-wider">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 91223 34455"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red focus:bg-white"
                      />
                    </div>

                    {/* Ceremony Selector */}
                    <div className="space-y-1">
                      <label className="block text-gray-700 font-bold uppercase tracking-wider">Select Ceremony</label>
                      <select
                        value={ceremony}
                        onChange={(e) => setCeremony(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red focus:bg-white cursor-pointer"
                      >
                        <option value="Wedding Setup">Shadi / Wedding Setup</option>
                        <option value="Mundan Ceremony">Mundan Ceremony Setup</option>
                        <option value="Upnayan Janeu">Upnayan (Janeu) Setup</option>
                        <option value="Small Gathering">Small Party / DJ Setup</option>
                      </select>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-royal-red hover:bg-deep-maroon text-white rounded-xl font-bold uppercase tracking-wider transition-colors inline-flex justify-center items-center gap-1.5"
                      >
                        <Send size={14} />
                        <span>Reserve Callback</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppQuickInquiry}
                        className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold uppercase tracking-wider transition-colors inline-flex justify-center items-center gap-1.5"
                      >
                        <MessageSquare size={14} />
                        <span>Instant WhatsApp Booking</span>
                      </button>
                    </div>

                  </form>
                </>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
