import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const lastUpdated = "September 12, 2025";

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: (
        <p>
          Welcome to Brosa – Ai Ltd. By accessing or using our website, WhatsApp ordering platform, and related services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before using our services.
        </p>
      )
    },
    {
      id: 2,
      title: "Eligibility",
      content: (
        <p>
          You must be at least 18 years old to use our services. By using our platform, you represent that you meet this requirement and that you have the legal capacity to enter into these Terms.
        </p>
      )
    },
    {
      id: 3,
      title: "Services Provided",
      content: (
        <p>
          Brosa – Ai Ltd provides a digital commerce platform enabling users to browse menus, place orders via WhatsApp, make secure payments, and arrange for delivery or pickup with partner vendors and delivery agents.
        </p>
      )
    },
    {
      id: 4,
      title: "User Responsibilities",
      content: (
        <>
          <p className="mb-4">By using our services, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
            <li>Provide accurate and complete information during registration and checkout.</li>
            <li>Use the platform for lawful purposes only.</li>
            <li>Refrain from attempting to disrupt, damage, or gain unauthorized access to our systems.</li>
          </ul>
        </>
      )
    },
    {
      id: 5,
      title: "Orders and Payments",
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
          <li>Orders placed via our platform are subject to vendor acceptance and availability.</li>
          <li>Payments must be made using approved payment methods (e.g., Paystack, MTN MoMo, card processors).</li>
          <li>Brosa – Ai Ltd is not responsible for payment failures due to issues with third-party providers.</li>
        </ul>
      )
    },
    {
      id: 6,
      title: "Delivery and Pickup",
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
          <li>Delivery times are estimates and may vary based on factors outside our control.</li>
          <li>Users are responsible for providing accurate delivery details.</li>
          <li>Brosa is not liable for delays or losses caused by incorrect addresses or failure to receive orders.</li>
        </ul>
      )
    },
    {
      id: 7,
      title: "Intellectual Property",
      content: (
        <p>
          All content, trademarks, logos, software, and materials on our platform are the property of Brosa – Ai Ltd or its licensors. Users are not permitted to copy, reproduce, or distribute such materials without prior written consent.
        </p>
      )
    },
    {
      id: 8,
      title: "Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law, Brosa – Ai Ltd shall not be liable for any indirect, incidental, or consequential damages, including but not limited to loss of data, profits, or service interruptions, arising from your use of the platform.
        </p>
      )
    },
    {
      id: 9,
      title: "Termination of Use",
      content: (
        <p>
          We reserve the right to suspend or terminate your access to our services at our discretion, without notice, if you violate these Terms or engage in unlawful or harmful activities.
        </p>
      )
    },
    {
      id: 10,
      title: "Privacy",
      content: (
        <p>
          Your use of our platform is also governed by our <Link to="/privacy" style={{ color: '#F97316', textDecoration: 'none', fontWeight: '500' }}>Privacy Policy</Link>, which explains how we collect, use, and protect your information.
        </p>
      )
    },
    {
      id: 11,
      title: "Changes to These Terms",
      content: (
        <p>
          We may update these Terms and Conditions from time to time. The revised version will be posted on our website with the updated effective date. Continued use of our services constitutes acceptance of the revised Terms.
        </p>
      )
    },
    {
      id: 12,
      title: "Governing Law",
      content: (
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of Ghana. Any disputes shall be resolved in the courts of Ghana.
        </p>
      )
    },
    {
      id: 13,
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
              Terms and Conditions
            </h1>
            <p style={{ color: '#78716C', fontStyle: 'italic', fontSize: '18px' }}>
              Effective Date: {lastUpdated}.
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
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
