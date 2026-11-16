import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import PartnersMarquee from '../components/PartnersMarquee';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import LifestyleSection from '../components/LifestyleSection';
import StatsSection from '../components/StatsSection';
import DeveloperSection from '../components/DeveloperSection';
import SecuritySection from '../components/SecuritySection';
import ReviewsSection from '../components/ReviewsSection';
import FAQSection from '../components/FAQSection';
import CTABannerSection from '../components/CTABannerSection';

const HomePage = () => {
  const location = useLocation();

  // Smooth scroll handler if navigation triggered from another page
  useEffect(() => {
    if (location.state && location.state.scrollToTop) {
      window.history.replaceState({}, document.title);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      window.history.replaceState({}, document.title);

      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navOffset = 80;
          const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#0F172A]">
      {/* 1. Hero with simulated live WhatsApp conversation */}
      <HeroSection />

      {/* 2. Supported Banks & Telco Infinite Marquee */}
      <PartnersMarquee />

      {/* 3. AI Financial Infrastructure Bento Grid */}
      <FeaturesSection />

      {/* 4. How It Works (3 Steps) */}
      <HowItWorksSection />

      {/* 5. Fits Every Lifestyle (Interactive Tabbed Use Cases) */}
      <LifestyleSection />

      {/* 6. Real Numbers & Growth Metrics */}
      <StatsSection />

      {/* 7. Developer & Enterprise APIs */}
      <DeveloperSection />

      {/* 8. Bank-Grade Security & Emergency Freeze */}
      <SecuritySection />

      {/* 9. Wall of Love / Reviews */}
      <ReviewsSection />

      {/* 10. Frequently Asked Questions Accordion */}
      <FAQSection />

      {/* 11. Final High-Impact CTA Banner with Direct WhatsApp & QR Code */}
      <CTABannerSection />
    </div>
  );
};

export default HomePage;
