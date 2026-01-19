import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import whatsappIcon from '../images/whatsapp.png';

const MotionLink = motion(Link);

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: whatsappIcon,
      iconType: 'image',
      title: 'No Apps, Just WhatsApp',
      description:
        'Customers scan your Brosa QR code, browse your menu, place orders instantly, and pay securely, all within WhatsApp.',
      color: 'from-teal-500 to-teal-600',
      stats: '95% faster checkout',
    },
    {
      icon: '📢',
      iconType: 'emoji',
      title: 'Boost Sales with WhatsApp Reach',
      description:
        'Engage customers directly on the app they use every day. With WhatsApp promotions and notifications, your offers reach more people.',
      color: 'from-blue-500 to-blue-600',
      stats: '3x higher engagement',
    },
    {
      icon: '🎯',
      iconType: 'emoji',
      title: 'Reduce Stress, Serve Better',
      description:
        'Streamlined orders mean less crowding and confusion. Vendors manage orders efficiently, customers enjoy faster service.',
      color: 'from-purple-500 to-purple-600',
      stats: '80% fewer errors',
    },
    {
      icon: '💰',
      iconType: 'emoji',
      title: 'Lower Costs Than Traditional Apps',
      description:
        'Skip the high commissions and complexity of food delivery apps. Keep more of your earnings with our simple pricing.',
      color: 'from-emerald-500 to-emerald-600',
      stats: 'Save up to 30%',
    },
    {
      icon: '🔒',
      iconType: 'emoji',
      title: 'Secure Mobile Money Payments',
      description:
        'Accept payments through trusted mobile money services or cash on delivery. Secure transactions for peace of mind.',
      color: 'from-indigo-500 to-indigo-600',
      stats: '100% secure',
    },
    {
      icon: '🚀',
      iconType: 'emoji',
      title: 'Instant Setup & Launch',
      description:
        'Get started in minutes, not months. Create your menu, generate your QR code, and start taking orders immediately.',
      color: 'from-pink-500 to-pink-600',
      stats: 'Setup in 5 mins',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section ref={ref} className="container-custom">
      {/* Heading */}
      <motion.div
        //initial={{ opacity: 0, y: 30 }}
        //animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="heading-gradient">Why Use Brosa</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          It simplifies everyday life by bringing essential services together on the platform customers already use — WhatsApp.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        //initial="hidden"
        //animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            {/* Glow */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20`}
            />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                {feature.iconType === 'image' ? (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-9 h-9 object-contain"
                  />
                ) : (
                  <span className="text-2xl">{feature.icon}</span>
                )}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <motion.div
                //initial={{ opacity: 0, x: -20 }}
                //animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className={`inline-flex px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-sm font-medium rounded-full`}
              >
                {feature.stats}
              </motion.div>
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        //initial={{ opacity: 0, y: 30 }}
        //animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mt-16"
      >
        <MotionLink
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary text-lg px-8 py-4 inline-block"
        >
          Start Your Free Trial
        </MotionLink>
        <p className="text-gray-600 mt-4">
          No credit card required • Setup in 5 minutes
        </p>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
