import React from 'react';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="text-center">
      <HeroSection />
      <header className="bg-gray-800 px-5 py-20 text-white flex flex-col items-center justify-center text-[calc(10px+2vmin)]">
        <h1 className="text-4xl font-bold mb-4">Welcome to roastandrelax</h1>
        <p className="text-xl">Your React application is running!</p>
      </header>
    </div>
  );
}

export default App;