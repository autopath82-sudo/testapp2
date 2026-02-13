import React from 'react';
import { motion } from 'framer-motion';
import cafeExterior from '../assets/cafe-exterior.jpg';
import getEnvironmentConfig from '../config/environment';

const { theme } = getEnvironmentConfig();

const VisitPage = () => {
  return (
    <motion.main
      className="w-full max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-label="Visit Page"
    >
      <h2
        className={`text-3xl font-bold ${theme.typography.fontFamily.serif} text-${theme.colors.brown[900]} mb-6 text-center`}
        aria-label="Visit Us Heading"
      >
        Visit Us
      </h2>
      <section className="flex flex-col md:flex-row items-center justify-between mb-8">
        <motion.img
          src={cafeExterior}
          alt="Exterior view of the café"
          className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md mb-6 md:mb-0"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            className={`text-lg ${theme.typography.fontFamily.sans} text-gray-700 leading-relaxed`}
            aria-label="Visit Us Description"
          >
            We invite you to visit our café located in the heart of the city. Enjoy a cozy atmosphere, friendly service, and a wide selection of coffee and pastries. Whether you're here to relax or work, our café is the perfect spot.
          </p>
        </motion.div>
      </section>
      <section className="text-center">
        <h3
          className={`text-2xl font-semibold ${theme.typography.fontFamily.serif} text-${theme.colors.brown[900]} mb-4`}
          aria-label="Location Heading"
        >
          Our Location
        </h3>
        <p className="text-gray-600 mb-2" aria-label="Address">
          123 Coffee Street, Brewtown, BT 12345
        </p>
        <p className="text-gray-600 mb-6" aria-label="Opening Hours">
          Open daily from 8:00 AM to 8:00 PM
        </p>
        <motion.div
          className="bg-gray-100 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe
            title="Café Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9c8f8f1e1!2s123%20Coffee%20St%2C%20Brewtown%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1614311234567!5m2!1sen!2sus"
            width="100%"
            height="300"
            className="rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default VisitPage;