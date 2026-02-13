import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
  return (
    <motion.section
      className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-label="Contact Us Section"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center" aria-label="Contact Us Heading">Contact Us</h2>
      <p className="text-gray-600 mb-8 text-center" aria-label="Contact Us Description">
        Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <ContactForm />
    </motion.section>
  );
};

export default ContactUs;