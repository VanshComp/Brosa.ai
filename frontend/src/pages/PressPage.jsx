import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PressPage = () => {
  const pressReleases = [
    {
      id: 1,
      date: "March 2026",
      location: "Accra, Ghana",
      title: "Brosa Announces Launch of WhatsApp-Based Marketplace in March 2026",
      excerpt: "Brosa, a next-generation conversational commerce platform, has announced its official launch, enabling users to order food and access services directly through WhatsApp.",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
          <p>
            <span className="font-bold text-slate-900">Accra, Ghana - March 2026</span> — Brosa, a next-generation conversational commerce platform, has announced its official launch in March 2026. The platform enables users to order food and access services directly through WhatsApp, eliminating the need for traditional mobile applications.
          </p>
          <p>
            Built for mobile-first markets, Brosa leverages WhatsApp's widespread adoption to deliver a seamless, chat-based ordering experience. Users can browse menus, place orders, make payments via mobile money, and receive real-time updates — all within a single conversation.
          </p>
          
          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Redefining How People Order</h3>
          <p>
            Brosa introduces a new model of digital commerce where interaction replaces navigation. By removing the need for multiple apps and complex interfaces, the platform simplifies how customers engage with businesses.
          </p>
          <blockquote className="border-l-4 border-teal-500 pl-6 my-8 italic text-slate-600 bg-slate-50 py-4 rounded-r-xl">
            "We are not building another app. We are building a simpler way for people to access services using tools they already use every day. WhatsApp is already part of daily life — we are simply turning it into a marketplace."
            <footer className="mt-2 font-bold text-slate-900 not-italic">— Brosa Spokesperson</footer>
          </blockquote>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">A Unified Marketplace Experience</h3>
          <p>
            Through a single WhatsApp number, Brosa aggregates multiple vendors and services into one unified experience. Customers can:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Discover a range of food vendors</li>
            <li>Place orders through guided chat flows</li>
            <li>Pay securely using mobile money</li>
            <li>Select delivery or pickup options</li>
            <li>Receive instant confirmations and updates</li>
          </ul>
          <p>
            This approach is designed to reduce friction, improve accessibility, and increase conversion rates for both customers and vendors.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Empowering Local Businesses</h3>
          <p>
            Brosa also provides a powerful channel for vendors, particularly small and informal businesses, to digitize their operations without the need for websites or dedicated apps. By simplifying onboarding and centralizing demand, the platform enables vendors to reach a broader customer base while focusing on their core operations.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Looking Ahead</h3>
          <p>
            While the initial launch focuses on food ordering, Brosa plans to expand into additional service categories, including ticketing, transport, and hospitality, positioning itself as a comprehensive conversational marketplace.
          </p>

          <div className="bg-slate-900 text-white p-8 rounded-3xl mt-16">
            <h4 className="text-xl font-bold mb-4">About Brosa</h4>
            <p className="text-slate-300 font-light">
              Brosa is a WhatsApp-based commerce platform designed to simplify how people order food and access services. By combining conversational interfaces with integrated payments and multi-vendor access, Brosa delivers a fast, familiar, and frictionless user experience tailored for emerging markets.
            </p>
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
            <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
              Press Release
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Newsroom
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              Stay updated with the latest announcements, mission updates, and media resources from Brosa AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases List */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="space-y-24">
            {pressReleases.map((release, index) => (
              <motion.article
                key={release.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="mb-10">
                  <header>
                    <div className="flex items-center gap-4 text-gray-500 font-medium mb-4">
                      <span>{release.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{release.location}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 hover:text-teal-600 transition-colors">
                      {release.title}
                    </h2>
                  </header>
                  <div className="prose prose-slate prose-lg max-w-none">
                    {release.content}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Media Contact Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-10 bg-teal-50 rounded-[2.5rem] border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Media Inquiries</h3>
              <p className="text-gray-600">For press kits, interviews, or additional information.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href="mailto:press@brosa.ai" 
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all text-center shadow-lg shadow-slate-200"
              >
                Contact Press Team
              </a>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all text-center"
              >
                General Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
