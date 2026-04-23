import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 120 } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const CARDS = [
  {
    icon: '🔐',
    title: 'Secure Payments',
    desc: 'Every transaction through Brosa is protected end-to-end. Customers transact with total confidence, vendors receive funds safely and instantly.',
    color: '#14B8A6',
  },
  {
    icon: '🛡️',
    title: 'WhatsApp Native Privacy',
    desc: "Brosa runs entirely inside WhatsApp's encrypted infrastructure, so you benefit from world-class security standards without any extra setup.",
    color: '#0EA5E9',
  },
  {
    icon: '📱',
    title: 'Verified Business Account',
    desc: 'Your Brosa storefront is tied to a verified WhatsApp Business number. Only you control your orders — no unauthorized access, ever.',
    color: '#8B5CF6',
  },
];

const StatsSection = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section
      ref={ref}
      id="security"
      className="stacked-section"
      style={{ background: 'linear-gradient(135deg, #f8faff 0%, #f0fdf9 100%)', zIndex: 14 }}
    >
      <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <motion.span
            variants={fadeUp}
            style={{
              display: 'inline-block',
              fontSize: '11px', fontWeight: '700',
              letterSpacing: '0.12em', color: '#14B8A6',
              textTransform: 'uppercase', marginBottom: '14px',
            }}
          >
            Built on WhatsApp
          </motion.span>
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: '800', color: '#0f1117',
              letterSpacing: '-0.5px', maxWidth: '700px',
              margin: '0 auto', lineHeight: '1.15',
            }}
          >
            Secured with WhatsApp's Built-In Privacy Protections
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="security-grid"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 24px 56px rgba(0,0,0,0.1)' }}
              transition={{ y: { type: 'spring', stiffness: 400, damping: 20 } }}
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '36px 28px',
                boxShadow: '0 2px 20px rgba(0,0,0,0.055)',
              }}
            >
              <div style={{
                width: '80px', height: '80px',
                borderRadius: '18px',
                background: `linear-gradient(135deg, ${card.color}18, ${card.color}32)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '36px', marginBottom: '24px',
              }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f1117', marginBottom: '10px' }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7' }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .security-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .security-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;