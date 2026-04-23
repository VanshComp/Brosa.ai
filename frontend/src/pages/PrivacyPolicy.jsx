import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = "September 12, 2025";

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-4">We collect different types of information to provide and improve our services, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Personal Information:</strong> Name, Email address, Phone number (including WhatsApp number), and Delivery address.</li>
            <li><strong>Payment Information:</strong> Processed securely through third-party providers such as Paystack, MTN MoMo, or other gateways.</li>
            <li><strong>Transaction Information:</strong> Orders placed, items purchased, payment status, and delivery details/history.</li>
            <li><strong>Technical Information:</strong> Device info, browser type, operating system, IP address, and geolocation (when necessary for fraud prevention and delivery accuracy).</li>
            <li><strong>Cookies:</strong> Tracking data to enhance website performance and customer experience.</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use your information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To process and fulfill your orders, including payments and deliveries.</li>
            <li>To provide customer support and respond to inquiries.</li>
            <li>To personalize and improve your user experience on our platforms.</li>
            <li>To communicate updates, promotions, and service-related messages.</li>
            <li>To ensure security, prevent fraud, and comply with legal obligations.</li>
            <li>To analyze trends and improve our platform performance.</li>
          </ul>
        </>
      )
    },
    {
      id: 3,
      title: "How We Share Your Information",
      content: (
        <>
          <p className="mb-4">We may share your information in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Vendors & Delivery Partners:</strong> To fulfill your order and ensure timely delivery.</li>
            <li><strong>Payment Processors:</strong> With trusted third-party providers such as Paystack, MTN MoMo, or card processors.</li>
            <li><strong>Service Providers:</strong> For hosting, analytics, and IT support.</li>
            <li><strong>Legal Obligations:</strong> When required by law, regulation, or to protect our rights.</li>
            <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
          </ul>
          <p style={{ marginTop: '16px', fontWeight: '600', color: '#EA580C' }}>We do not sell your personal information to third parties.</p>
        </>
      )
    },
    {
      id: 4,
      title: "Data Security",
      content: (
        <p className="text-gray-700 leading-relaxed">
          We implement technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet is 100% secure.
        </p>
      )
    },
    {
      id: 5,
      title: "Data Retention",
      content: (
        <p className="text-gray-700 leading-relaxed">
          We retain your personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements.
        </p>
      )
    },
    {
      id: 6,
      title: "Your Rights",
      content: (
        <>
          <p className="mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Access to the personal information we hold about you.</li>
            <li>Correction of inaccurate or incomplete information.</li>
            <li>Request deletion of your personal data ("Right to be Forgotten").</li>
            <li>Object to or restrict processing of your data.</li>
            <li>Withdraw consent to data processing (where applicable).</li>
          </ul>
          <p style={{ marginTop: '16px' }}>Requests can be made by contacting us at <a href="mailto:hello@brosa.ai" style={{ color: '#F97316', textDecoration: 'none', fontWeight: '500' }}>hello@brosa.ai</a>.</p>
        </>
      )
    },
    {
      id: 7,
      title: "Cookies & Tracking Technologies",
      content: (
        <p className="text-gray-700 leading-relaxed">
          Our website may use cookies and similar tracking technologies to improve functionality and personalize content. You can manage or disable cookies through your browser settings.
        </p>
      )
    },
    {
      id: 8,
      title: "Third-Party Links",
      content: (
        <p className="text-gray-700 leading-relaxed">
          Our website or WhatsApp platform may contain links to third-party sites. We are not responsible for the privacy practices or content of those external websites.
        </p>
      )
    },
    {
      id: 9,
      title: "Children’s Privacy",
      content: (
        <p className="text-gray-700 leading-relaxed">
          Our services are not directed to children under the age of 13. We do not knowingly collect personal data from children. If we discover such data has been collected, we will take steps to delete it immediately.
        </p>
      )
    },
    {
      id: 10,
      title: "Updates to This Policy",
      content: (
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time to reflect changes in technology, law, or our business practices. The updated version will be posted on this page with a revised effective date.
        </p>
      )
    },
    {
      id: 11,
      title: "Contact Us",
      content: (
        <div style={{ background: 'rgba(249,115,22,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(249,115,22,0.1)' }}>
          <p style={{ fontWeight: '800', color: '#1C0A00', marginBottom: '16px', fontSize: '20px' }}>Brosa AI Ltd</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#444' }}>
            <p><strong>Email:</strong> <a href="mailto:hello@brosa.ai" style={{ color: '#F97316', textDecoration: 'none', fontWeight: '500' }}>hello@brosa.ai</a></p>
            <p><strong>Phone:</strong> +233 20 343 1334 / +233 24 136 6340</p>
            <p><strong>Address:</strong> 14 Hayford Road, Airport Commercial Area, Accra, Ghana</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={{ background: '#FFF7ED', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Header */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', borderBottom: '1px solid rgba(249,115,22,0.1)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: '900', color: '#1C0A00', marginBottom: '16px', letterSpacing: '-1.5px' }}>
              Privacy Policy
            </h1>
            <p style={{ color: '#78716C', fontStyle: 'italic', fontSize: '18px' }}>
              This Privacy Policy was last revised on {lastUpdated}.
            </p>
            <div style={{ height: '4px', width: '80px', background: '#F97316', marginTop: '24px', borderRadius: '4px' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1C0A00', marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#F97316', marginRight: '16px', fontFamily: 'monospace' }}>{section.id}.</span>
                  {section.title}
                </h2>
                <div style={{ fontSize: '17px', color: '#444', lineHeight: '1.8', fontWeight: '400' }}>
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(249,115,22,0.1)', textAlign: 'center' }}
          >
            <p style={{ color: '#78716C', marginBottom: '24px', fontWeight: '500' }}>Ready to get back?</p>
            <Link
              to="/"
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '16px 32px',
                background: '#F97316', color: '#FFF', borderRadius: '100px',
                fontWeight: '700', textDecoration: 'none', transition: 'all 0.2s',
                boxShadow: '0 8px 24px rgba(249,115,22,0.25)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(249,115,22,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.25)'; }}
            >
              ← Back to Homepage
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
