import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutUs from './pages/AboutUs';
import MenuPage from './pages/MenuPage';
import Visit from './pages/Visit';
import ContactUs from './pages/ContactUs';
import getEnvironmentConfig from './config/environment';

const config = getEnvironmentConfig();

function App() {
  return (
    <Router>
      <div className="text-center">
        <HeroSection />
        <motion.header
          className="bg-gray-800 px-5 py-20 text-white flex flex-col items-center justify-center text-[calc(10px+2vmin)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to roastandrelax</h1>
          <p className="text-xl">Your React application is running!</p>
          <p className="text-sm mt-2">
            Environment: {process.env.NODE_ENV} | API URL: {config.apiUrl}
          </p>
        </motion.header>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;