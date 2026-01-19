import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Peter Israel",
      position: "CEO",
      image:
        "https://th.bing.com/th/id/OIP.bxhY64sVlbdXwb-wDVzylwHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      bio: "We help businesses drive real revenue by transforming WhatsApp into a seamless ordering channel.",
    },
    {
      name: "Godwin Acquah",
      position: "COO",
      image:
        "https://th.bing.com/th/id/OIP.bxhY64sVlbdXwb-wDVzylwHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      bio: "Dedicated to helping businesses succeed with WhatsApp ordering.",
    },
    {
      name: "Vansh Gautam",
      position: "CTO",
      image:
        "https://th.bing.com/th/id/OIP.bxhY64sVlbdXwb-wDVzylwHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      bio: "Building future-ready, AI-first products where engineering meets exceptional user experience.",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Company Founded",
      description:
        "Brosa AI was born from the need for simpler restaurant ordering.",
    },
    {
      year: "2023",
      title: "First 100 Customers",
      description:
        "Launched our beta version and onboarded our first 100 businesses.",
    },
    {
      year: "2024",
      title: "Series A Funding",
      description: "Raised $5M to expand our team and improve our platform.",
    },
    {
      year: "2024",
      title: "5000+ Businesses",
      description:
        "Reached 5000+ active businesses using our platform worldwide.",
    },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible with WhatsApp ordering.",
    },
    {
      icon: "❤️",
      title: "Customer First",
      description:
        "Every decision we make is focused on helping our customers succeed.",
    },
    {
      icon: "🤝",
      title: "Simplicity",
      description:
        "We believe technology should be simple and accessible to everyone.",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description:
        "We're committed to helping businesses worldwide thrive in the digital age.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="heading-gradient">About Brosa AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            We're on a mission to simplify online ordering for businesses
            worldwide
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Brosa AI, we believe that every business deserves access to
                cutting-edge technology without the complexity or high costs
                typically associated with it. Our mission is to democratize
                online ordering by leveraging the power of WhatsApp - a platform
                that billions of people already use and trust.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We started with a simple observation: while food delivery apps
                were becoming increasingly popular, they were also becoming
                increasingly expensive for small businesses. The high commission
                fees, complex setup processes, and technical barriers were
                preventing many worthy establishments from participating in the
                digital economy.
              </p>
              <p className="text-lg text-gray-600">
                That's why we created Brosa AI - a solution that's as simple as
                scanning a QR code, but as powerful as any enterprise ordering
                system.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/hero-phone.png"
                alt="Brosa AI Platform"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="heading-gradient">Our Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every feature
              we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl mb-4 inline-block"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="heading-gradient">Meet Our Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Brosa AI\'s success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-x-16 gap-y-20 
                max-w-6xl mx-auto place-items-center">

            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl p-8 shadow-lg 
           hover:shadow-2xl hover:ring-2 hover:ring-teal-200
           transition-all duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="heading-gradient">Our Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to a platform serving thousands of businesses
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full relative z-10"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Join Us on Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Ready to transform your business with WhatsApp ordering? Start your
            journey with us today.
          </motion.p>
          <motionLink
            to="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
          </motionLink>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
