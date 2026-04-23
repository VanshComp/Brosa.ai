import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 120 } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

const FAQS = [
  {
    q: 'What is Brosa?',
    a: 'Brosa is an AI-powered WhatsApp ordering platform that lets customers browse menus, place orders, and pay — all without downloading any app. Vendors manage their storefront entirely through WhatsApp.',
  },
  {
    q: 'How does Brosa work?',
    a: 'Customers scan a Brosa QR code or tap a WhatsApp link. Our AI assistant guides them through your menu, takes their order, and processes payment — all inside a natural WhatsApp conversation.',
  },
  {
    q: 'Is Brosa secure?',
    a: "Yes. Brosa operates within WhatsApp's end-to-end encrypted environment. All payments are handled via verified, secure payment gateways with no financial data stored on our servers.",
  },
  {
    q: 'How do I get started with Brosa?',
    a: 'Setup takes just 5 minutes. Register your business, add your menu items, and get your QR code. No technical knowledge required.',
  },
  {
    q: 'What if customers have questions?',
    a: "Brosa's AI handles common customer queries automatically — order status, menu details, business hours, and more. You can also take over any conversation at any time.",
  },
  {
    q: 'What happens if there is an issue with an order?',
    a: 'Both the customer and vendor are notified immediately. Our support team is also available via WhatsApp to resolve any issues quickly and professionally.',
  },
  {
    q: 'Does Brosa work for all types of businesses?',
    a: 'Absolutely. Brosa works for restaurants, street food vendors, grocery shops, beauty salons, pharmacies, and more. If you sell something, Brosa can help you sell it through WhatsApp.',
  },
];

const CTASection = () => {
  const [open, setOpen] = useState(null);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <section
      ref={ref}
      id="faq"
      className="stacked-section"
      style={{ background: '#f5f5f0', zIndex: 16 }}
    >
      <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto', padding: '40px 24px' }}>

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
              display: 'inline-block', fontSize: '11px', fontWeight: '700',
              letterSpacing: '0.12em', color: '#14B8A6',
              textTransform: 'uppercase', marginBottom: '14px',
            }}
          >
            Got Questions?
          </motion.span>
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(30px, 5vw, 54px)',
              fontWeight: '800', color: '#0f1117',
              letterSpacing: '-0.5px',
            }}
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{ borderBottom: '1px solid rgba(0,0,0,0.09)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '26px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: '16px', fontFamily: 'inherit',
                }}
              >
                <span style={{
                  fontSize: '16px', fontWeight: '600', lineHeight: '1.35',
                  transition: 'color 0.2s ease',
                  color: open === i ? '#14B8A6' : '#0f1117',
                }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    border: `1.5px solid ${open === i ? '#14B8A6' : 'rgba(0,0,0,0.18)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', color: open === i ? '#14B8A6' : '#0f1117',
                    flexShrink: 0, transition: 'border-color 0.2s ease, color 0.2s ease',
                    lineHeight: 1,
                  }}
                >
                  +
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ height: { type: 'spring', damping: 26, stiffness: 200 }, opacity: { duration: 0.2 } }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      fontSize: '15px', color: '#64748b',
                      lineHeight: '1.72', paddingBottom: '26px', maxWidth: '700px',
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;