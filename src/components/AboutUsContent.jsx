import React from 'react';
import { motion } from 'framer-motion';

const AboutUsContent = () => {
  return (
    <motion.div
      className="bg-beige p-8 flex flex-col items-center justify-center shadow-lg rounded-lg transition duration-300 transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="max-w-lg">
        <h2 className="text-3xl font-serif mb-4 text-gray-800">About Us</h2>
        <p className="text-lg font-sans text-gray-700 leading-relaxed">
          Welcome to Roast & Relax Café, where we believe in the art of coffee making. Our café is a haven for coffee enthusiasts who appreciate the rich aroma and taste of premium coffee. We source our beans from the finest plantations around the world, ensuring every cup is a delightful experience. Our cozy interior is designed to provide a relaxing atmosphere, perfect for unwinding with a book or catching up with friends. Join us for a cup of coffee and experience the warmth and comfort of Roast & Relax.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUsContent;