import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <motion.section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path/to/coffee-background.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-brown-900 bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-5xl font-bold mb-4">Sip. Savor. Relax.</h2>
        <p className="text-lg mb-8 max-w-md">
          Experience the finest handcrafted coffee, brewed to perfection for your ultimate relaxation.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/menu"
            className="bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Explore Menu
          </Link>
          <Link
            to="/visit"
            className="bg-cream-500 hover:bg-cream-600 text-brown-900 font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Visit Us
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;