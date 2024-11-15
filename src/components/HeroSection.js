import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-1440px text-center py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      {/* Parent container for Navbar and Get a Quote Button */}
      <div className="flex items-center justify-center w-full mt-6 mb-16 ml-24 pl-16">
        
        {/* Navbar */}
        <nav className="bg-black bg-opacity-20 rounded-full px-8 py-2 flex items-center justify-center w-[585px] h-[60px] shadow-lg border border-gray-800 ml-24">
          <ul className="flex space-x-8 text-white font-semibold">
            <li><a href="#Home" className="hover:text-pink-500">Home</a></li>
            <li><a href="#About" className="hover:text-pink-500">About Us</a></li>
            <li><a href="#Services" className="hover:text-pink-500">Services</a></li>
            <li><a href="#Career" className="hover:text-pink-500">Career</a></li>
            <li><a href="#Contact" className="hover:text-pink-500">Contact Us</a></li>
          </ul>
        </nav>
        
        {/* Get a Quote Button */}
        <button className="w-[209px] h-[60px] text-pink-500 font-semibold rounded-full border border-pink-500 hover:bg-pink-500 hover:text-white transition duration-200 ml-16">
          Get a Quote
        </button>
      </div>
      
      {/* Heading */}
      <h1 className="text-5xl font-bold mt-16">
        Welcome to your <span className="text-white">Caring, Listening</span> Business Partner
        <br />
        <span className="text-customPink text-6xl mt-4 block">ENTUITE</span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-lg mt-6 max-w-2xl w-[688px] h-[90px]">
        At Entuite, we prioritize your business by offering personalized solutions tailored to your needs, ensuring your success while delivering quality service every time.
      </p>

      {/* CTA Button */}
      <button className="mt-10 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full">
        Talk to an Expert
      </button>

      {/* Partner Logos */}
      <div className="flex gap-8 mt-20 justify-center items-center flex-wrap">
        <img src="/logos/investify.png" alt="Investify" className="h-8" />
        <img src="/logos/knewish.png" alt="Knewish" className="h-8" />
        <img src="/logos/upglam.png" alt="Upglam" className="h-8" />
        <img src="/logos/nutrilix.png" alt="Nutrilix" className="h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
