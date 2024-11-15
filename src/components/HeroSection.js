import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-1440px text-center pb-20  bg-bgdarkblue text-white relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      {/* Parent container for Navbar and Get a Quote Button */}
      <div className="flex items-center justify-center w-full mt-10 mb-16 ml-24 pl-16">
        
        {/* Navbar */}
        <nav className="bg-black bg-opacity-20 rounded-full px-8 py-2  flex items-center justify-center w-[585px] h-[60px] shadow-lg border border-gray-800 ml-24">
          <ul className="flex space-x-8 text-white font-semibold">
            <li><a href="#Home" className="hover:text-pink-500">Home</a></li>
            <li><a href="#About" className="hover:text-pink-500">About Us</a></li>
            <li><a href="#Services" className="hover:text-pink-500">Services</a></li>
            <li><a href="#Career" className="hover:text-pink-500">Career</a></li>
            <li><a href="#Contact" className="hover:text-pink-500">Contact Us</a></li>
          </ul>
        </nav>
        
        {/* Get a Quote Button */}
        <button className="w-[209px] h-[60px] text-customPink font-semibold rounded-full border border-customPink hover:bg-customPink hover:text-white transition duration-200  ml-16">
          Get a Quote
        </button>
      </div>
      
      {/* Heading */}
      <h1 className="w-[1217px] h-[333px] font-manrope text-[92px] font-bold leading-[111.17px] text-center  custom-underline">
        <spam className="text-white custom-gradient-text font-bold">Welcome to your Caring,</spam> <span className="text-white custom-gradient-text font-bold">Listening Business Partner </span>
        <br />
        <span className="text-customPink mt-6 font-manrope">ENTUITE</span>
      </h1>



      {/* Description */}
      <p className="text-gray-400 text-[20px] font-normal leading-[30px] text-center opacity-75 font-manrope max-w-2xl w-[688px] h-[90px] mt-6 custom-underline">
  At Entuite, we prioritize your business by offering personalized solutions tailored to your needs, ensuring your success while delivering quality service every time.
</p>


      {/* CTA Button */}
      <button className="mt-10 bg-pink-700 hover:bg-customPink text-white font-semibold py-3 px-8 rounded-full">
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
