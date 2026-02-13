import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MenuItem = ({ name, description, price }) => {
  return (
    <motion.li
      className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:bg-beige transition duration-300"
      aria-label={`Menu Item: ${name}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div>
        <h3 className="text-xl font-serif font-bold text-brown-900">{name}</h3>
        <p className="text-base font-sans text-gray-700">{description}</p>
      </div>
      <span className="text-lg font-bold text-gold-500">{price}</span>
    </motion.li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default MenuItem;