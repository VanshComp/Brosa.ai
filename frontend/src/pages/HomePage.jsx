import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Typed from 'typed.js';
import anime from 'animejs';

// Import components
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CategoriesSection from '../components/CategoriesSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import ParticleBackground from '../components/ParticleBackground';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <motion.section style={{ opacity }}>
        <HeroSection />
      </motion.section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <FeaturesSection />
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100">
        <CategoriesSection />
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <StatsSection />
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 to-blue-50">
        <CTASection />
      </section>
    </div>
  );
};

export default HomePage;