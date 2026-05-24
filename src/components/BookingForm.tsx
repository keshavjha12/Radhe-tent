import React, { useState, useEffect } from 'react';
import { 
  Calendar, Phone, MapPin, User, MessageSquare, 
  Sparkles, CalendarRange, CheckCircle2, ShoppingBag, Send
} from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingFormProps {
  selectedService?: string;
  selectedPackage?: 'standard' | 'premium' | 'royal' | 'custom';
  onBookingSubmitted?: (data: BookingSubmission) => void;
}

export default function BookingForm({ selectedService = 'Wedding Setup', selectedPackage = 'premium', onBookingSubmitted }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingSubmission>({
    name: '',
    phone: '',
    eventType: selectedService,
    eventDate: '',
    location: '',
    message: '',
    estimatedGuests: 400,
    packageType: selectedPackage
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected values from parent estimators if they change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      eventType: selectedService,
      packageType: selectedPackage
    }));
  }, [selectedService, selectedPackage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'estimatedGuests' ? parseInt(value) || 0 : value
    }));
  };

  // Compile formatted WhatsApp query string
  const getWhatsAppMessage = () => {
    const textLines = [
      `🚩 *REDHE TENT HOUSE - NEW EVENT BOOKING* 🚩`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${formData.name || 'Not Provided'}`,
      `📱 *Phone:* ${formData.phone || 'Not Provided'}`,
      `✨ *Ceremony:* ${formData.eventType}`,
      `📦 *Package Choice:* ${formData.packageType.toUpperCase()}`,
      `📅 *Date of Event:* ${formData.eventDate || 'Not Selected'}`,
      `📍 *Location (Mithila):* ${formData.location || 'Not Specified'}`,
      `👥 *Estimated Guests:* ${formData.estimatedGuests} People`,
      `📝 *Custom Inquiry details:*`,
      `   "${formData.message || 'None'}"`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📱 _Inquiry compiled live from Redhe Web Portal._`
    ];
    return encodeURIComponent(textLines.join('\n'));
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter at least your Name and Phone number to generate a WhatsApp inquiry.");
      return;
    }
    const message = getWhatsAppMessage();
    window.open(`https://wa.me/918920942854?text=${message}`, '_blank');
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    if (onBookingSubmitted) {
      onBookingSubmitted(formData);
    }

    setIsSubmitted(true);
    
    // Clear name and phone, reset state except ceremony selected
    setFormData({
      name: '',
      phone: '',
      eventType: selectedService,
      eventDate: '',
      location: '',
      message: '',
      estimatedGuests: 400,
      packageType: selectedPackage
    });
  };

  return (
    <section id="contact" className="py-24 bg-offwhite text-gray-800 relative border-t border-gold-mid/10">
      {/* Visual background details */}
      <div className="absolute top-10 right-10 w-44 h-44 bg-gold-mid/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-royal-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-red/5 border border-royal-red/15 text-royal-red text-xs font-bold uppercase tracking-widest">
              <Sparkles size={12} className="text-gold-dark animate-pulse" />
              <span>आरक्षण केंद्र (Secure Booking Center)</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-deep-maroon leading-tight">
              Let's Co-create Your Majestic Event
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
              Fill in your details below to lock your auspicious date with Redhe Tent House. Once submitted, our Madhubani reservation manager will review technical availability and call you back in less than 2 hours.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gold-mid/15 shadow-sm">
                <MapPin className="text-royal-red mt-1" size={20} />
                <div>
                  <h4 className="font-display font-bold text-sm text-deep-maroon">Our Head Office Location:</h4>
                  <p className="font-sans text-xs text-gray-600">Main Road Market Area, Madhubani - Bihar. (Serving full Samastipur and Darbhanga sectors too)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gold-mid/15 shadow-sm">
                <Phone className="text-royal-red mt-1" size={20} />
                <div>
                  <h4 className="font-display font-bold text-sm text-deep-maroon">Call/WhatsApp Booking Helpline:</h4>
                  <p className="font-sans text-xs text-gray-600">+91 89209 42854 • Available 24 hours a day during Lagan Season.</p>
                </div>
              </div>
            </div>

            {/* Mithila Visual Emblem */}
            <div className="hidden lg:block p-6 rounded-2xl bg-festive-yellow text-deep-maroon border border-gold-mid/20 relative shadow-sm">
              <div className="text-sm font-serif italic font-extrabold leading-relaxed text-royal-red">
                "We provide full setup support for Vivah (Wedding), Mundan, thread ceremonies (Janeu), and community pujas with complete structural safety."
              </div>
            </div>
          </div>

          {/* Right Block: Fully Functional Forms Panel */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-gold-mid/20 shadow-xl relative overflow-hidden text-gray-800">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-mid via-royal-red to-gold-mid pointer-events-none" />

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gold-mid text-deep-maroon flex items-center justify-center shadow-lg animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display font-black text-2xl text-deep-maroon">
                    Auspicious Request Submitted!
                  </h3>
                  <p className="font-sans text-sm text-gray-600 max-w-md leading-relaxed mx-auto">
                    Pranam! Your event request for <strong>{selectedService}</strong> has been successfully booked in our central local ledger. Our Mithila execution supervisor will ring you on your mobile immediately.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="tel:+918920942854"
                      className="px-6 py-3 rounded-full bg-deep-maroon text-white font-bold text-xs uppercase cursor-pointer hover:bg-royal-red transition-all"
                    >
                      Call Now +91 89209
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase transition-all"
                    >
                      Fill Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarRange className="text-royal-red" size={20} />
                    <h3 className="font-display font-extrabold text-xl text-deep-maroon">
                      Instant Booking Desk
                    </h3>
                  </div>

                  {/* Name and Mobile Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="flex items-center gap-1.5 text-deep-maroon font-bold uppercase tracking-wider text-xs">
                        <User size={12} className="text-royal-red" />
                        <span>Sponsor Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Keshav Jha"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red text-xs placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="flex items-center gap-1.5 text-deep-maroon font-bold uppercase tracking-wider text-xs">
                        <Phone size={12} className="text-royal-red" />
                        <span>Mobile Number *</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 99887 76655"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red text-xs placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Event Type & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="flex items-center gap-1.5 text-deep-maroon font-bold uppercase tracking-wider text-xs">
                        <CalendarRange size={12} className="text-royal-red" />
                        <span>Ceremony Type</span>
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red text-xs cursor-pointer"
                      >
                        <option value="Wedding Setup" className="bg-white text-gray-800">Vivah (Wedding Setup)</option>
                        <option value="Upnayan Ceremony" className="bg-white text-gray-800">Upnayan (Sacred Thread Setup)</option>
                        <option value="Mundan Ceremony" className="bg-white text-gray-800">Mundan Setup</option>
                        <option value="Festive Decoration" className="bg-white text-gray-800">Durga Puja / Satsang Tent</option>
                        <option value="Small Gathering" className="bg-white text-gray-800">Small Party (DJ & Lighting)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="flex items-center gap-1.5 text-deep-maroon font-bold uppercase tracking-wider text-xs">
                        <Calendar size={12} className="text-royal-red" />
                        <span>Ceremony Date *</span>
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red text-xs cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Location & Guest Numbers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="flex items-center gap-1.5 text-deep-maroon font-bold uppercase tracking-wider text-xs">
                        <MapPin size={12} className="text-royal-red" />
                        <span>Village / City Location *</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="e.g. Pandaul, Madhubani"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red text-xs placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="flex items-center gap-1.5 text-deep-maroon font-bold uppercase tracking-wider text-xs">
                        <User size={12} className="text-royal-red" />
                        <span>Expected Guests ({formData.estimatedGuests})</span>
                      </label>
                      <select
                        name="estimatedGuests"
                        value={formData.estimatedGuests}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red text-xs cursor-pointer"
                      >
                        <option value="150" className="bg-white">Up to 150 (Compact Pandal)</option>
                        <option value="400" className="bg-white">150 to 500 (Standard Setup)</option>
                        <option value="800" className="bg-white">500 to 1000 (Grand Reception)</option>
                        <option value="1500" className="bg-white">1000+ (Maharaja Tent & Truss DJ)</option>
                      </select>
                    </div>
                  </div>

                  {/* Msg notes */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-1.5 text-deep-maroon font-bold uppercase tracking-wider text-xs">
                      <MessageSquare size={12} className="text-royal-red" />
                      <span>Custom requirements or notes</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="e.g. Do you need waterproof hangar? Specific colors of flower decorations? Extra LED boards?"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-royal-red text-xs placeholder:text-gray-400"
                    />
                  </div>

                  {/* Buttons Submit booking desk & WhatsApp Booking */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {/* Central lead system submit */}
                    <button
                      type="submit"
                      onClick={handleSubmitBooking}
                      disabled={!formData.name || !formData.phone}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-mid to-gold-dark hover:from-gold-dark hover:to-gold-mid text-white py-3.5 px-6 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Send size={14} />
                      <span>Secure Website Booking</span>
                    </button>

                    {/* WhatsApp API compilation send */}
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      disabled={!formData.name || !formData.phone}
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-40"
                    >
                      <MessageSquare size={14} />
                      <span>Request on WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
