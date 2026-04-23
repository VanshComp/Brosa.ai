import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/brosa-logo.png';

const NAV_HEIGHT = 72;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll for sticky nav style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'features', label: 'Features' },
    { id: 'payments', label: 'Payments' },
    { id: 'faq', label: 'FAQ' },
  ];

  // Smooth scroll with correct offset for nav height
  const scrollToSection = useCallback((id) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and pass the target id
      navigate('/', { state: { scrollTo: id } });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [location.pathname, navigate]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 120 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: `${NAV_HEIGHT}px`,
          backgroundColor: isScrolled ? 'rgba(255,251,245,0.96)' : 'rgba(255,255,255,0)',
          backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(234,88,12,0.08)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 24px rgba(249,115,22,0.07)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <motion.img
              src={logo}
              alt="Brosa AI"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{ height: '72px', width: 'auto', display: 'block' }}
            />
          </RouterLink>

          {/* Desktop Nav Links — centered */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#EA580C';
                  e.currentTarget.style.backgroundColor = 'rgba(249,115,22,0.07)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#374151';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side: CTA + Mobile Burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.a
              href="https://wa.me/message/52KOT5KCITWJB1"
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-cta"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(135deg, #F97316, #EA580C)',
                color: '#fff',
                padding: '9px 20px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 16px rgba(249,115,22,0.30)',
              }}
            >
              Try it Out
            </motion.a>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="mobile-burger"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                width: '40px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '5px',
                borderRadius: '8px',
              }}
            >
              <span style={{
                display: 'block', width: '20px', height: '2px',
                backgroundColor: '#1a1a1a', borderRadius: '2px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '20px', height: '2px',
                backgroundColor: '#1a1a1a', borderRadius: '2px',
                transition: 'opacity 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: '20px', height: '2px',
                backgroundColor: '#1a1a1a', borderRadius: '2px',
                transition: 'transform 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                zIndex: 998,
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 24, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: `${NAV_HEIGHT}px`,
                left: 0,
                right: 0,
                zIndex: 999,
                backgroundColor: '#fff',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                padding: '16px 24px 24px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, type: 'spring', damping: 20 }}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '17px',
                      fontWeight: '500',
                      color: '#1a1a1a',
                      padding: '14px 12px',
                      textAlign: 'left',
                      fontFamily: 'inherit',
                      borderRadius: '10px',
                      transition: 'background-color 0.15s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(249,115,22,0.06)'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <motion.a
                href="https://wa.me/message/52KOT5KCITWJB1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: 'spring', damping: 20 }}
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #F97316, #EA580C)',
                  color: '#fff',
                  padding: '15px 24px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  textAlign: 'center',
                  boxShadow: '0 6px 20px rgba(249,115,22,0.32)',
                }}
              >
                Try it Out
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navigation;