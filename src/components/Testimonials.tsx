import React, { useState } from 'react';
import { Star, MessageSquare, Quote, Sparkles, User, UserPlus, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '../types';
import { MithilaBorderDivider } from './MithilaMotif';

const initialTestimonials: TestimonialItem[] = [
  {
    id: "re-1",
    name: "Amitesh Kumar Mishra",
    location: "Pandaul, Madhubani",
    date: "May 2026",
    rating: 5,
    text: "Hired Redhe Tent House for my daughter's wedding setup in Madhubani. Outstanding waterproof Pandal! The drapes were ironed and spotless. The heavy sound and pixel LED lights made the entrance feel incredibly grand and beautiful.",
    eventType: "Wedding Ceremony"
  },
  {
    id: "re-2",
    name: "Shyam Sundar Jha",
    location: "Benipatti, Bihar",
    date: "April 2026",
    rating: 5,
    text: "For my son's Upnayan (Janeu) ceremony, we needed a pure traditional setup. They constructed a beautiful wooden Havan mandap with authentic mango leaves and custom drapes. Highly respectable crew and on-time service.",
    eventType: "Upnayan Ceremony"
  },
  {
    id: "re-3",
    name: "Rajeshwar Paswan",
    location: "Rajnagar, Madhubani",
    date: "Feb 2026",
    rating: 5,
    text: "Sensational DJ and sound layout. All the young guests danced until midnight, and there were no feedback noises. The generator was silent and power didn't interrupt for a second. Best tent house company in Bihar!",
    eventType: "Reception & DJ Night"
  },
  {
    id: "re-4",
    name: "Dr. Anirudh Choudhary",
    location: "Jhanjharpur, Bihar",
    date: "Jan 2026",
    rating: 4,
    text: "Very affordable pricing compared to high-end Patna decorators, but with identical royal quality. They arranged neat catering tables & chairs with beautiful white seat coats. Very professional team.",
    eventType: "Small Gathering & Reception"
  }
];

export default function Testimonials() {
  const [reviews, setReviews] = useState<TestimonialItem[]>(initialTestimonials);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    text: '',
    rating: 5,
    eventType: 'Wedding Ceremony'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const added: TestimonialItem = {
      id: `re-custom-${Date.now()}`,
      name: newReview.name,
      location: newReview.location || "Madhubani Region",
      date: "Just now",
      rating: newReview.rating,
      text: newReview.text,
      eventType: newReview.eventType
    };

    setReviews([added, ...reviews]);
    setSubmitted(true);
    // Reset form after submission
    setNewReview({
      name: '',
      location: '',
      text: '',
      rating: 5,
      eventType: 'Wedding Ceremony'
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="testimonials" className="py-24 bg-offwhite text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-royal-red/5 border border-royal-red/10 text-royal-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles size={12} className="text-gold-mid animate-pulse" />
            <span>शुभकामनाएं (Client Blessings)</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-royal-red">
            Praise From Mithila Families
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-600">
            Real reviews from real home owners and event sponsors who successfully trusted Redhe Tent House with their family's happiest moments.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          
          {/* Left Block: Interactive Review Grid (Dynamic States) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reviews.map((rev) => (
                <div 
                  key={rev.id}
                  className="p-6 rounded-2xl bg-white border border-gold-mid/10 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
                >
                  <Quote size={30} className="text-gold-mid/15 absolute top-4 right-4" />
                  
                  <div className="space-y-3">
                    {/* Event badge */}
                    <span className="inline-block bg-royal-red/5 text-royal-red border border-royal-red/10 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      {rev.eventType}
                    </span>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < rev.rating ? 'text-gold-mid fill-gold-mid' : 'text-gray-200'} 
                        />
                      ))}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold-mid/20 flex items-center justify-center text-royal-red">
                      <User size={16} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-royal-red">
                        {rev.name}
                      </h4>
                      <p className="font-sans text-[10px] text-gray-500">
                        {rev.location} • {rev.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Submit your Review widget */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border-2 border-gold-mid/30 shadow-xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-mid/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-4">
              <UserPlus className="text-royal-red" size={24} />
              <h3 className="font-display font-bold text-xl text-royal-red">
                Share Your Experience
              </h3>
            </div>
            <p className="font-sans text-xs text-gray-600 mb-6">
              Have we served you in Madhubani or Mithila? Leave your honest experience to guide local families in booking. Your review appears instantly!
            </p>

            {/* Submit form */}
            <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {submitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl space-y-2 flex flex-col items-center text-center">
                  <CheckCircle2 size={32} className="text-emerald-500 animate-pulse" />
                  <h4 className="font-bold">Blessing Shared!</h4>
                  <p className="text-xs">
                    Thank you so much! Your valuable recommendation has been added to our homepage testimonials. Keep supporting Redhe Tent House.
                  </p>
                </div>
              ) : null}

              {/* Name */}
              <div className="space-y-1">
                <label className="block text-gray-700 font-semibold">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra Jha"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:border-royal-red focus:bg-white text-xs"
                />
              </div>

              {/* Location & Event */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-gray-700 font-semibold">Your Location</label>
                  <input
                    type="text"
                    placeholder="e.g., Madhubani"
                    value={newReview.location}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:border-royal-red focus:bg-white text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-gray-700 font-semibold">Event Type</label>
                  <select
                    value={newReview.eventType}
                    onChange={(e) => setNewReview({ ...newReview, eventType: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:border-royal-red focus:bg-white text-xs cursor-pointer"
                  >
                    <option value="Wedding Ceremony">Wedding Setup</option>
                    <option value="Upnayan Ceremony">Janeu / Upnayan</option>
                    <option value="Mundan Ceremony">Mundan Ceremony</option>
                    <option value="Satsang & Puja">Satsang / Puja</option>
                    <option value="Small Gathering">Small Party Setup</option>
                  </select>
                </div>
              </div>

              {/* Rating Scale */}
              <div className="space-y-1">
                <label className="block text-gray-700 font-semibold">Star Rating</label>
                <div className="flex gap-2 p-1.5 bg-gray-50 rounded-xl w-fit border border-gray-100">
                  {[1, 2, 3, 4, 5].map((starVal) => (
                    <button
                      key={starVal}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: starVal })}
                      className="text-gold-light hover:scale-110 transition-transform"
                    >
                      <Star 
                        size={18} 
                        className={starVal <= newReview.rating ? 'fill-gold-mid text-gold-mid' : 'text-gray-300'} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="space-y-1">
                <label className="block text-gray-700 font-semibold">Review Text *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="How was our service, lighting, audio quality, and staff behavior?"
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:border-royal-red focus:bg-white text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 bg-royal-red text-white hover:bg-deep-maroon rounded-xl font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-1.5"
              >
                <span>Publish Testimonial</span>
              </button>

            </form>
          </div>

        </div>

        {/* Small decorative divider */}
        <MithilaBorderDivider className="mt-16" />

      </div>
    </section>
  );
}
