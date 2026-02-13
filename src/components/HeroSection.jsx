import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <motion.section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path/to/coffee-background.jpg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="absolute inset-0 bg-brown-900 bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h2
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Sip. Savor. Relax.
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Experience the finest handcrafted coffee, brewed to perfection for your ultimate relaxation.
        </motion.p>
        <div className="flex space-x-4">
          <Link
            to="/menu"
            className="bg-yellow-500 hover:bg-yellow-600 text-brown-900 font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Explore Menu
          </Link>
          <Link
            to="/visit"
            className="bg-yellow-300 hover:bg-yellow-400 text-brown-900 font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Visit Us
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;