import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      number: 5000,
      suffix: '+',
      label: 'Active Businesses',
      description: 'Trusted by restaurants worldwide',
      color: 'from-teal-500 to-teal-600',
    },
    {
      number: 100000,
      suffix: '+',
      label: 'Orders Processed',
      description: 'Seamless transactions completed',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 99,
      suffix: '%',
      label: 'Customer Satisfaction',
      description: 'Happy customers and business owners',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Always here to help you succeed',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <section ref={ref} className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="heading-gradient">Trusted by Businesses Worldwide</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join thousands of successful businesses that have transformed their ordering process with Brosa AI
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-x-hidden"
          >
            {/* Background Gradient */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Number */}
              <motion.div
                className="text-4xl lg:text-5xl font-bold mb-2"
              >
                <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {isInView && (
                    <Counter
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2000}
                      delay={index * 200}
                    />
                  )}
                </span>
              </motion.div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>

            {/* Hover Effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
            ></motion.div>
          </motion.div>
        ))}
      </div>

      {/* Additional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-8 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">3x</div>
            <p className="text-teal-100">Faster Order Processing</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50%</div>
            <p className="text-teal-100">Reduction in Staff Costs</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Zero</div>
            <p className="text-teal-100">Technical Skills Required</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Counter Component
const Counter = ({ end, suffix = '', duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * end);
        
        if (current !== countRef.current) {
          countRef.current = current;
          setCount(current);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default StatsSection;