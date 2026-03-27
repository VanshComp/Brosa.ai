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
          Your use of our platform is also governed by our <Link to="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your information.
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
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <p className="font-bold text-slate-900 mb-4 text-xl">Brosa AI Ltd</p>
          <div className="space-y-2 text-gray-700 font-light">
            <p><strong>Email:</strong> <a href="mailto:hello@brosa.ai" className="text-teal-600 hover:underline">hello@brosa.ai</a></p>
            <p><strong>Phone:</strong> +233 20 343 1334 / +233 24 136 6340</p>
            <p><strong>Address:</strong> 14 Hayford Road, Airport Commercial Area, Accra, Ghana</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-slate-50 pt-32 pb-16 border-b border-gray-200">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 italic">
              Effective Date: {lastUpdated}.
            </p>
            <div className="h-1 w-20 bg-slate-900 mt-6 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="prose prose-slate max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-start underline decoration-teal-500/30 decoration-4 underline-offset-8">
                  <span className="text-teal-600 mr-4 font-mono">{section.id}.</span>
                  {section.title}
                </h2>
                <div className="text-lg text-gray-600 leading-relaxed font-light">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-gray-100 text-center"
          >
            <p className="text-gray-500 mb-6 font-medium">Have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Contact Support
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
