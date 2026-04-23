import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 120 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x:  0, transition: { type: 'spring', damping: 22, stiffness: 120 } },
};
const fadeRight = {
  hidden: { opacity: 0, x:  40, scale: 0.95 },
  show:   { opacity: 1, x:  0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 110, delay: 0.15 } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const CTABannerSection = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  const BADGES = ['✅ Setup Done', '📦 First Order In!', '💰 Payment Received'];

  return (
    <section
      ref={ref}
      className="stacked-section"
      style={{
        background: 'linear-gradient(145deg, #dbeafe 0%, #e0e7ff 50%, #ede9fe 100%)',
        zIndex: 17,
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(59,130,246,0.07)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '40%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(139,92,246,0.07)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 1 }}>
        <div
          className="cta-banner-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
        >

          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.span
              variants={fadeUp}
              style={{
                display: 'inline-block', fontSize: '11px', fontWeight: '700',
                letterSpacing: '0.12em', color: '#3b82f6',
                textTransform: 'uppercase', marginBottom: '16px',
              }}
            >
              Instant Setup
            </motion.span>

            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(28px, 3.5vw, 50px)',
                fontWeight: '800', color: '#1e3a8a',
                lineHeight: '1.12', letterSpacing: '-0.5px',
                marginBottom: '22px',
              }}
            >
              Start Taking Orders in Under 5 Minutes
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '16px', color: '#1e40af',
                lineHeight: '1.72', marginBottom: '36px',
                opacity: 0.75, maxWidth: '440px',
              }}
            >
              Register your WhatsApp storefront today. Add your menu, generate your QR code, and receive your first order — all within minutes, with zero technical setup required.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
            >
              <motion.a
                href="https://wa.me/message/52KOT5KCITWJB1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  display: 'inline-block', backgroundColor: '#fff',
                  color: '#1e3a8a', padding: '12px 28px',
                  borderRadius: '10px', fontSize: '14px',
                  fontWeight: '700', textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                }}
              >
                Learn More
              </motion.a>
              <motion.a
                href="https://forms.gle/M2bzMeER3nURvzyM9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 14px 36px rgba(30,58,138,0.35)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  display: 'inline-block', backgroundColor: '#1e3a8a',
                  color: '#fff', padding: '12px 28px',
                  borderRadius: '10px', fontSize: '14px',
                  fontWeight: '700', textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(30,58,138,0.28)',
                }}
              >
                Register Now →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: '320px', height: '300px' }}>

              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '220px', height: '220px', borderRadius: '50%', border: '2px dashed rgba(59,130,246,0.25)' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '280px', height: '280px', borderRadius: '50%', border: '1px dashed rgba(139,92,246,0.18)' }}
              />

              {/* Center icon */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '96px', height: '96px', borderRadius: '24px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '44px',
                boxShadow: '0 20px 48px rgba(59,130,246,0.35)',
              }}>
                📲
              </div>

              {/* Floating badges */}
              {BADGES.map((badge, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 1.4 }}
                  style={{
                    position: 'absolute',
                    background: '#fff',
                    borderRadius: '50px',
                    padding: '8px 14px',
                    fontSize: '12px', fontWeight: '600',
                    color: '#1e3a8a',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    whiteSpace: 'nowrap',
                    ...(i === 0 ? { top: '8px', left: '-16px' }
                       : i === 1 ? { bottom: '28px', right: '-16px' }
                       : { top: '50%', left: '-24px', transform: 'translateY(-50%)' }),
                  }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-banner-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .cta-banner-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default CTABannerSection;
