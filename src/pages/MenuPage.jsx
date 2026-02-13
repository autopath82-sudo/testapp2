import React from 'react';
import { motion } from 'framer-motion';
import coffeeImage from '../assets/coffee.jpg';
import MenuItem from '../components/MenuItem';
import getEnvironmentConfig from '../config/environment';

const { theme } = getEnvironmentConfig();

const MenuPage = () => {
  const menuItems = [
    { name: 'Espresso', description: 'Rich and bold espresso shot', price: '$3.00' },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '$4.00' },
    { name: 'Latte', description: 'Smooth espresso with steamed milk', price: '$4.50' },
    { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '$5.00' },
    { name: 'Americano', description: 'Espresso with hot water', price: '$3.50' },
  ];

  return (
    <motion.main
      className="w-full max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-label="Menu Page"
    >
      <h2
        className={`text-3xl font-bold ${theme.typography.fontFamily.serif} text-${theme.colors.brown[900]} mb-6 text-center`}
        aria-label="Menu Heading"
      >
        Our Menu
      </h2>
      <section className="flex flex-col md:flex-row items-center justify-between mb-8">
        <motion.img
          src={coffeeImage}
          alt="Delicious coffee"
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
            aria-label="Menu Description"
          >
            Discover our selection of freshly brewed coffee and delightful beverages. Each cup is crafted with care to provide you with the perfect coffee experience.
          </p>
        </motion.div>
      </section>
      <motion.ul
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <MenuItem name={item.name} description={item.description} price={item.price} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.main>
  );
};

export default MenuPage;