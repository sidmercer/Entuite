import './App.css';
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import IndustriesSection from './components/IndustriesSection';

function App() {
  return (
    <div className="bg-bgdarkblue min-h-screen">
      <HeroSection />
      <AboutUs />
      <OurServices/>
      <IndustriesSection/>
    </div>
  );
}

export default App;
