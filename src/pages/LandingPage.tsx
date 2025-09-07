import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

const LandingPage: React.FC = () => {
  // Animation variants for the hero section
  const heroVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen font-inter text-white overflow-hidden">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('img.avif')" }}
        ></div>
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.h1
            className="text-6xl font-extrabold tracking-tight sm:text-8xl text-green-200"
            variants={itemVariants}
          >
            CiviCo<span className="text-green-500">G</span>reen
          </motion.h1>
          <motion.p
            className="mt-6 text-2xl font-medium leading-8 text-gray-200"
            variants={itemVariants}
          >
            Citizens + Community + Green Future
          </motion.p>
          <motion.p
            className="mt-4 text-lg font-light leading-6 italic text-gray-300"
            variants={itemVariants}
          >
            Innovating for a greener tomorrow.
          </motion.p>
          <motion.div
            className="mt-12 flex items-center justify-center"
            variants={itemVariants}
          >
            <Link
              to="/dashboard"
              className="rounded-full bg-white px-10 py-5 text-xl font-bold text-green-600 shadow-xl hover:bg-gray-200 transition-colors transform hover:scale-105"
            >
              Explore CiviCoGreen
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
