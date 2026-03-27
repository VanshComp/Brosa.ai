import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
  {
    id: 'food-meals',
    icon: '🍽️',
    title: 'Food & Meals',
    description: 'Order delicious meals from trusted local vendors around you.',
    features: [
      'Local Foods (Waakye, Gobɛ, Kenkey, Yam chips & pork)',
      'Restaurants (Local & Continental)',
      'Fast Food & Quick Bites',
      'Pizza with multiple sizes & toppings',
      'Pickup or doorstep delivery',
    ],
    color: 'from-emerald-500 to-teal-500',
    image:
      'https://img.freepik.com/free-photo/variety-african-dishes-top-view_23-2149230512.jpg',
  },

  {
    id: 'transport-travel',
    icon: '🚌',
    title: 'Transport & Travel',
    description: 'Book and manage your trips easily and securely.',
    features: [
      'Bus ticketing (Intercity & Intra-city)',
      'Airline ticketing (Domestic & International)',
      'Seat selection & booking confirmation',
      'Travel updates & notifications',
    ],
    color: 'from-blue-500 to-indigo-500',
    image:
      'https://tse2.mm.bing.net/th/id/OIP.aQt7qcDvaX_RodmuDTh7DAHaEO?rs=1&pid=ImgDetMain&o=7&rm=3',
  },

  {
    id: 'pharmacy-health',
    icon: '💊',
    title: 'Pharmacy & Health',
    description: 'Essential health products delivered safely to your doorstep.',
    features: [
      'Prescription medication orders',
      'Over-the-counter drugs',
      'Health & wellness products',
      'Secure home delivery',
    ],
    color: 'from-red-500 to-pink-500',
    image:
      'https://www.ghsupplychain.org/sites/default/files/2023-03/Mozambique%20private%20pharmacy%20DDD_resizedbanner.jpg',
  },

  {
    id: 'events-entertainment',
    icon: '🎟️',
    title: 'Events & Entertainment',
    description: 'Discover and book tickets for movies, concerts, and live events.',
    features: [
      'Cinema ticket booking',
      'Concert & live event tickets',
      'Instant ticket confirmation',
      'Group & bulk purchases',
    ],
    color: 'from-purple-500 to-violet-500',
    image:
      'https://furtherafrica.com/content-files/uploads/2020/10/traditional-south-african-wedding-1024x680.jpg',
  },

  {
    id: 'insurance',
    icon: '🛡️',
    title: 'Insurance',
    description: 'Reliable protection for your vehicle with quick coverage.',
    features: [
      'Motor / vehicle insurance',
      'Instant policy issuance',
      'Digital documents & renewals',
      'Easy claims assistance',
    ],
    color: 'from-amber-500 to-orange-500',
    image:
      'https://img.freepik.com/free-photo/car-insurance-concept-with-vehicle-keys_23-2149144070.jpg',
  },
];


  return (
    <section className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="heading-gradient">One App for All Your Orders</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Customers can easily order and pay via WhatsApp without any extra work.
          Perfect for any business type.
        </p>
      </motion.div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 },
            }}
            onClick={() => setSelectedCategory(category)}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-x-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg`}
              >
                {category.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>

              {/* Features */}
              <div className="space-y-1">
                {category.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-xs text-gray-500">
                    <svg className="w-3 h-3 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
            ></motion.div>
          </motion.div>
        ))}
      </div>

      {/* Selected Category Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedCategory.color} rounded-2xl flex items-center justify-center text-3xl`}>
                    {selectedCategory.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCategory.title}</h2>
                    <p className="text-gray-600">{selectedCategory.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-8">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedCategory.features.map((feature, i) => (
                    <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex-1">
                  Start Free Trial
                </button>
                <button className="btn-secondary flex-1">
                  View Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center bg-white rounded-2xl p-12 shadow-lg"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using Brosa AI to streamline their ordering process
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motionLink
            to="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Launch Your WhatsApp Store
          </motionLink>
          <motionLink
            to="/demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-8 py-4"
          >
            Try Brosa Demo
          </motionLink>
        </div>
      </motion.div>
    </section>
  );
};

export default CategoriesSection;