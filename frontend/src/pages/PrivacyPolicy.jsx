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
          <p className="mt-4 font-semibold text-teal-800">We do not sell your personal information to third parties.</p>
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
          <p className="mt-4">Requests can be made by contacting us at <a href="mailto:hello@brosa.ai" className="text-teal-600 hover:underline">hello@brosa.ai</a>.</p>
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
        <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
          <p className="font-bold text-teal-900 mb-4 text-xl">Brosa AI Ltd</p>
          <div className="space-y-2 text-gray-700">
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 italic">
              This Privacy Policy was last revised on {lastUpdated}.
            </p>
            <div className="h-1 w-20 bg-teal-500 mt-6 rounded-full"></div>
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
                className="prose prose-teal max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-start">
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
            <p className="text-gray-500 mb-6 font-medium">Ready to get back?</p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
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
