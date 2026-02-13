import React from 'react';
import { motion } from 'framer-motion';
import cafeInterior from '../assets/cafe-interior.jpg';

const AboutUs = () => {
  return (
    <>
      <section className="md:w-1/2 flex items-center justify-center">
        <img
          src={cafeInterior}
          alt="Cozy café interior"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </section>
      <motion.section
        className="md:w-1/2 p-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="max-w-lg bg-beige p-8 shadow-lg rounded-lg transition duration-300 transform hover:scale-105">
          <h2 className="text-3xl font-serif mb-4 text-gray-800">About Us</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            Welcome to Roast & Relax Café, where we believe in the art of coffee making. Our café is a haven for coffee enthusiasts who appreciate the rich aroma and taste of premium coffee. We source our beans from the finest plantations around the world, ensuring every cup is a delightful experience. Our cozy interior is designed to provide a relaxing atmosphere, perfect for unwinding with a book or catching up with friends. Join us for a cup of coffee and experience the warmth and comfort of Roast & Relax.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;