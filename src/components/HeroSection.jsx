import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelector('.parallax-bg').style.backgroundPositionY = `${scrollY * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.section
      className="relative w-full h-screen bg-cover bg-center parallax-bg"
      style={{ backgroundImage: "url('/path/to/coffee-background.jpg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 bg-brown-900 bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4 text-cream"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          aria-label="Hero Heading"
        >
          Sip. Savor. Relax.
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg mb-8 max-w-md text-beige"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          aria-label="Hero Description"
        >
          Experience the finest handcrafted coffee, brewed to perfection for your ultimate relaxation.
        </motion.p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/menu"
            className="bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
            aria-label="Explore Menu"
          >
            Explore Menu
          </Link>
          <Link
            to="/visit"
            className="bg-gold-300 hover:bg-gold-400 text-brown-900 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
            aria-label="Visit Us"
          >
            Visit Us
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;