import './App.css';
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="bg-bgdarkblue min-h-screen">
      <HeroSection />
      <AboutUs />
    </div>
  );
}

export default App;
