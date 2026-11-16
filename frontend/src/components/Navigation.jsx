import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';
import BrosaLogoWhite from '../images/brosa-logo-white.png';
import logo from '../images/brosa-logo.png';
import { WHATSAPP_LINK } from '../utils/constants';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Product', id: 'product' },
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Use Cases', id: 'use-cases' },
    { label: 'Security', id: 'security' },
    { label: 'FAQ', id: 'faq' },
  ];

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToTop: true } });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'py-3 bg-white/95 backdrop-blur-xl border-b border-[#320472]/15 shadow-sm shadow-[#320472]/5'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo in Classic Royal Purple Badge (Scrolls to top of page) */}
            <button
              onClick={handleLogoClick}
              className="flex items-center group py-1 text-left cursor-pointer focus:outline-none"
              aria-label="Brosa Home - Scroll to top"
            >
              <div className="flex items-center px-3.5 py-1.5 rounded-2xl bg-[#320472] shadow-md shadow-[#320472]/35 border border-[#320472]/60 hover:shadow-lg hover:shadow-[#320472]/50 hover:scale-[1.03] transition-all duration-200">
                <img
                  src={BrosaLogoWhite}
                  alt="Brosa"
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform duration-200"
                />
              </div>
            </button>

            {/* Floating Navigation Pill */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm shadow-[#320472]/5 backdrop-blur-md">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#320472] hover:bg-purple-50/80 rounded-full transition-all duration-150"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Action Button with Purple-to-Orange Royalty Gradient */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#320472] via-[#6D28D9] to-[#EA580C] shadow-lg shadow-[#320472]/30 hover:shadow-xl hover:shadow-[#320472]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group border border-purple-300/20"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Start on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-800 bg-white/80 border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/98 backdrop-blur-2xl border-b border-slate-200 p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-left text-sm font-bold text-slate-800 hover:bg-orange-50 hover:text-[#EA580C] transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}

              <div className="pt-4 border-t border-slate-100 mt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] shadow-lg shadow-orange-500/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start on WhatsApp (+233 59 811 1199)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
