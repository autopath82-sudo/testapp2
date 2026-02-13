import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import getEnvironmentConfig from '../config/environment';

const { theme } = getEnvironmentConfig();

const MenuItem = ({ name, description, price }) => {
  return (
    <motion.li
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-md hover:bg-beige transition duration-300"
      aria-label={`Menu Item: ${name}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="flex-1">
        <h3 className={`text-xl font-bold ${theme.typography.fontFamily.serif} text-${theme.colors.brown[900]} mb-2`} aria-label={`Item Name: ${name}`}>{name}</h3>
        <p className={`text-base ${theme.typography.fontFamily.sans} text-gray-700`} aria-label={`Item Description: ${description}`}>{description}</p>
      </div>
      <span className={`text-lg font-bold text-${theme.colors.gold[500]} mt-2 sm:mt-0 sm:ml-4`} aria-label={`Item Price: ${price}`}>{price}</span>
    </motion.li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default MenuItem;