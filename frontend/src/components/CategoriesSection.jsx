import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 110 } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const USE_CASES = [
  {
    icon: '🍛',
    label: 'Ordered GHS 60',
    vendor: "Mama Abena's Kitchen",
    title: 'Ordering from a Restaurant',
    desc: 'Order your favourite meals anytime — no app, no cash queue.',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=600&fit=crop&auto=format',
    accent: '#14B8A6',
  },
  {
    icon: '🏪',
    label: 'Ordered GHS 120',
    vendor: 'City Market Vendor',
    title: 'Buying from a Market Vendor',
    desc: 'Settle up at your local market with just a WhatsApp message.',
    img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&h=600&fit=crop&auto=format',
    accent: '#0EA5E9',
  },
  {
    icon: '👥',
    label: 'Shared GHS 45',
    vendor: 'Group Lunch Split',
    title: 'Splitting a Bill with Friends',
    desc: 'Split bills instantly. No awkward delays or IOUs.',
    img: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&h=600&fit=crop&auto=format',
    accent: '#8B5CF6',
  },
  {
    icon: '✂️',
    label: 'Tipped GHS 20',
    vendor: "Kwame's Barbershop",
    title: 'Paying at a Barbershop',
    desc: 'Get groomed, then scan to pay. Beautifully simple.',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=600&fit=crop&auto=format',
    accent: '#F59E0B',
  },
];

const CategoriesSection = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <section
      ref={ref}
      id="use-cases"
      className="stacked-section"
      style={{ background: '#0a0a0a', zIndex: 15 }}
    >
      <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <motion.span
            variants={fadeUp}
            style={{
              display: 'inline-block',
              fontSize: '11px', fontWeight: '700',
              letterSpacing: '0.14em', color: '#14B8A6',
              textTransform: 'uppercase', marginBottom: '16px',
            }}
          >
            Order via WhatsApp
          </motion.span>
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(28px, 4vw, 50px)',
              fontWeight: '800', color: '#fff',
              letterSpacing: '-0.5px', lineHeight: '1.12',
            }}
          >
            Where Brosa Fits Into Everyday Life
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="use-cases-grid"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
        >
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ y: { type: 'spring', stiffness: 350, damping: 20 }, scale: { type: 'spring', stiffness: 350, damping: 20 } }}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
              }}
            >
              {/* Photo */}
              <div style={{ height: '270px', position: 'relative', overflow: 'hidden' }}>
                <motion.img
                  src={uc.img}
                  alt={uc.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.45) 100%)',
                }} />

                {/* Notification pill */}
                <div style={{
                  position: 'absolute', top: '12px', left: '12px', right: '12px',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '50px',
                  padding: '7px 12px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                }}>
                  <div style={{
                    width: '26px', height: '26px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${uc.accent}, #0EA5E9)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', flexShrink: 0,
                  }}>↗</div>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontWeight: '700', fontSize: '11px', color: '#0f1117', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{uc.label}</div>
                    <div style={{ fontSize: '9px', color: '#9ca3af', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>to {uc.vendor}</div>
                  </div>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '6px',
                    background: uc.accent, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', flexShrink: 0,
                  }}>{uc.icon}</div>
                </div>
              </div>

              {/* Text */}
              <div style={{ background: '#1a1a1a', padding: '20px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '6px', lineHeight: '1.3' }}>
                  {uc.title}
                </h3>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.55' }}>
                  {uc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .use-cases-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .use-cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default CategoriesSection;