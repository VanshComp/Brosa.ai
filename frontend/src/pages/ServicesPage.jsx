import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      monthly: 29,
      yearly: 290,
      description: 'Perfect for small businesses just getting started',
      features: [
        'Up to 100 orders/month',
        'Basic menu management',
        'QR code generation',
        'WhatsApp integration',
        'Email support',
        'Basic analytics',
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Professional',
      monthly: 79,
      yearly: 790,
      description: 'Ideal for growing businesses with higher volume',
      features: [
        'Up to 1000 orders/month',
        'Advanced menu management',
        'Multiple QR codes',
        'Priority WhatsApp support',
        'Phone & email support',
        'Advanced analytics',
        'Customer management',
        'Promotional tools',
      ],
      popular: true,
      color: 'from-teal-500 to-blue-600',
    },
    {
      name: 'Enterprise',
      monthly: 199,
      yearly: 1990,
      description: 'For large businesses with custom needs',
      features: [
        'Unlimited orders',
        'Custom menu solutions',
        'White-label options',
        'Dedicated support manager',
        '24/7 phone support',
        'Custom integrations',
        'Advanced reporting',
        'API access',
        'Multi-location support',
      ],
      popular: false,
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const services = [
    {
      icon: '📱',
      title: 'WhatsApp Ordering System',
      description: 'Complete ordering solution integrated with WhatsApp Business',
      features: [
        'Instant QR code menu access',
        'Automated order processing',
        'Real-time notifications',
        'Customer chat integration',
      ],
    },
    {
      icon: '💳',
      title: 'Payment Processing',
      description: 'Secure payment solutions for your business',
      features: [
        'Mobile money integration',
        'Credit card processing',
        'Cash on delivery',
        'Secure transactions',
      ],
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Detailed insights into your business performance',
      features: [
        'Sales analytics',
        'Customer behavior',
        'Popular items tracking',
        'Revenue reports',
      ],
    },
    {
      icon: '🎯',
      title: 'Marketing Tools',
      description: 'Promote your business and engage customers',
      features: [
        'WhatsApp campaigns',
        'Promotional offers',
        'Customer segmentation',
        'Loyalty programs',
      ],
    },
    {
      icon: '🔧',
      title: 'Customization',
      description: 'Tailor the platform to your business needs',
      features: [
        'Branded QR codes',
        'Custom menu layouts',
        'Business branding',
        'Multi-language support',
      ],
    },
    {
      icon: '🛠️',
      title: 'Support & Training',
      description: 'Comprehensive support to ensure your success',
      features: [
        '24/7 technical support',
        'Training resources',
        'Onboarding assistance',
        'Success management',
      ],
    },
  ];

  const faqs = [
    {
      question: 'How quickly can I set up Brosa AI?',
      answer: 'Most businesses are up and running within 5 minutes. Simply create your account, add your menu items, generate your QR code, and you\'re ready to start taking orders.',
    },
    {
      question: 'Do customers need to download an app?',
      answer: 'No! That\'s the beauty of Brosa AI. Customers simply scan your QR code with their phone\'s camera and order directly through WhatsApp - no app downloads required.',
    },
    {
      question: 'What payment methods are supported?',
      answer: 'We support mobile money, credit/debit cards, and cash on delivery. The exact options available depend on your location and preferences.',
    },
    {
      question: 'Can I customize the ordering experience?',
      answer: 'Yes! You can customize your menu, branding, QR codes, and even set up promotional campaigns to engage with your customers.',
    },
    {
      question: 'Is there a limit to how many orders I can receive?',
      answer: 'This depends on your plan. Starter plans include up to 100 orders per month, while Professional and Enterprise plans offer higher limits or unlimited orders.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for all plans, with phone support and dedicated success managers available for Professional and Enterprise customers.',
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
            <span className="heading-gradient">Our Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive solutions to transform your business with WhatsApp ordering
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
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
              <span className="heading-gradient">What We Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed with WhatsApp ordering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl mb-6 inline-block"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/*<section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="heading-gradient">Simple Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your business needs
            </p>

            
            <div className="flex justify-center items-center space-x-4">
              <span className={`text-lg ${selectedPlan === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                Monthly
              </span>
              <button
                onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none"
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ left: selectedPlan === 'monthly' ? '4px' : '36px' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </button>
              <span className={`text-lg ${selectedPlan === 'yearly' ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                Yearly
                <span className="text-sm text-teal-600 ml-1">(Save 20%)</span>
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-teal-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${selectedPlan === 'monthly' ? plan.monthly : plan.yearly}
                    <span className="text-lg text-gray-600">/{selectedPlan === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  {selectedPlan === 'yearly' && (
                    <p className="text-sm text-teal-600">Save ${(plan.monthly * 12) - plan.yearly}/year</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution?</p>
            <Link to="/contact" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300">
              Contact our sales team →
            </Link>
          </div>
        </div>
       </section> */}

      {/* FAQ Section */}
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
              <span className="heading-gradient">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Join thousands of businesses already using Brosa AI to streamline their ordering process
          </motion.p>
          <motionLink
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Free Trial
          </motionLink>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;