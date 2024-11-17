import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-1440px text-center pb-20  bg-bgdarkblue text-white relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      {/* blurry effect 1 */}
      <div className="absolute transform -translate-x-1/2  w-[605px] h-[222px] top-[550px] left-[658px] bg-white opacity-[3%] rounded-full blur-[80px]"></div>
          
      {/* Parent container for Navbar and Get a Quote Button */}
      <div className="flex items-center justify-center w-full mt-10 mb-16 ml-24 pl-16">
        
        {/* Navbar */}
        <nav className=" bg-[rgba(255,2,94,0.02)]  rounded-full px-8 py-2  flex items-center justify-center w-[585px] h-[60px] shadow-lg border border-gray-800 ml-24">
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


      {/* TTE Button */}
      <button className="mt-10 bg-customPink text-white  text-[20px] font-semibold py-3 px-8 h-[72px] w-[356px] rounded-full">
        Talk to an Expert
      </button>
      
      {/* Partner Logos */}
      <div className="flex gap-8 mt-20 w-[5834.08px] h-[68px] top-[865px] left-[-2238.04px] justify-center items-center flex-wrap">
        <img src="/logos/investify.png" alt="Investify" className="h-[55.01px] w[309.63px] Top-[6.56px] Left-[764.93px]" />
        <img src="/logos/knewish.png" alt="Knewish" className="h-[45.37px] w[300.48px] Top-[11.25px] Left-[1146.08px]" />
        <img src="/logos/upglam.png" alt="Upglam" className="h-[64.22px] w[295.96px] Top-[1.89px] Left-[1516.17px]" />
        <img src="/logos/nutrilix.png" alt="Nutrilix" className="h-[47.83px] w[291.32px] Top-[9.86px] Left-[1879.67px]" />
      </div>
    </section>
  );
};

export default HeroSection;
