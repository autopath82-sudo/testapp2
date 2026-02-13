import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Visit from './pages/Visit';

function App() {
  return (
    <Router>
      <div className="text-center">
        <HeroSection />
        <header className="bg-gray-800 px-5 py-20 text-white flex flex-col items-center justify-center text-[calc(10px+2vmin)]">
          <h1 className="text-4xl font-bold mb-4">Welcome to roastandrelax</h1>
          <p className="text-xl">Your React application is running!</p>
        </header>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/visit" element={<Visit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;