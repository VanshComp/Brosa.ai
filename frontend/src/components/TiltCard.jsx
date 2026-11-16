import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.15 }}
        className={`relative h-full transition-all duration-300 shadow-[0_12px_40px_-10px_rgba(50,4,114,0.08),0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_-12px_rgba(50,4,114,0.16),0_8px_24px_-4px_rgba(249,115,22,0.1)] ${className}`}
      >
        {/* Subtle holographic sheen overlay on hover */}
        <div
          className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 mix-blend-overlay ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.15), transparent 70%)',
          }}
        />
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;

