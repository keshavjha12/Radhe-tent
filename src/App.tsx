/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import InquiryPopup from './components/InquiryPopup';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Wedding Setup');
  const [selectedPackage, setSelectedPackage] = useState<'standard' | 'premium' | 'royal' | 'custom'>('premium');

  // Trigger delayed pop-up on page visit after 10 seconds (User-friendly and conversion-boosting)
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('redhe_popup_shown');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsInquiryOpen(true);
        sessionStorage.setItem('redhe_popup_shown', 'true');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleBookTrigger = () => {
    // Scrolls smoothly down to contact form
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceQuickBookSelect = (serviceName: string, pkgType?: 'standard' | 'premium' | 'royal') => {
    setSelectedService(serviceName);
    if (pkgType) {
      setSelectedPackage(pkgType);
    }
    // Scroll down to the booking desk form
    handleBookTrigger();
  };

  return (
    <div className="min-h-screen bg-offwhite bg-pattern antialiased text-gray-800">
      
      {/* Sticky header navigation */}
      <Header onBookClick={handleBookTrigger} />

      {/* Hero Section Banner */}
      <main>
        <Hero onBookClick={handleBookTrigger} />

        {/* Narrative story of the brand */}
        <AboutUs />

        {/* Services & Estimator Grid */}
        <Services onBookSelect={handleServiceQuickBookSelect} />

        {/* Visual Showcase Gallery */}
        <Gallery onQuickBook={(serviceTitle) => handleServiceQuickBookSelect(serviceTitle, 'premium')} />

        {/* Brand Accents Benefits */}
        <WhyChooseUs />

        {/* Testimonials and Community Feedback Box */}
        <Testimonials />

        {/* VIP Booking Desk & WhatsApp API Integrator */}
        <BookingForm 
          selectedService={selectedService} 
          selectedPackage={selectedPackage} 
        />
      </main>

      {/* Footer details Map routing locator */}
      <Footer onBookTrigger={handleBookTrigger} />

      {/* Floating Speed Dials */}
      <FloatingActions onBookClick={handleBookTrigger} />

      {/* Delayed Conversion Trigger Inquiry Module */}
      <InquiryPopup 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />

    </div>
  );
}
