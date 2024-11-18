import React from 'react';

const OurServices = () => {
  return (
    <section className="relative overflow-hidden bg-bgdarkblue text-white w-full  px-4 md:px-8 flex items-center justify-center">
      {/* Left Section: Title */}
      <div className=" w-full  max-w-6xl mx-auto opacity-25">
        <h2 className=" text-left text-4xl sm:text-6xl md:text-[80px] lg:text-[120px] font-bold custom-gradient-text font-manrope">Our <br></br>Services</h2>
        </div>
    {/* blurry effect 1 */}
    <div className="absolute transform z-0 -translate-x-1/2  w-[400px] md:w-[866px] h-[300px] md:h-[658px]   bg-white opacity-[3%] rounded-full blur-[80px]"></div>
      

      {/* Cards Container */}
      <div className=" w-full mx-auto flex flex-col items-center justify-center gap-8 mt-20 md:mt-0 ">
        {/* Tilted top Card */}
        <div className="  w-[300px] md:w-[587px]  rounded-xl transform -rotate-10 ">
        <img
            src="/Assets/design.png"
            alt="UI/UX Icon"
            className="w-full h-auto mb-4"
          />
        </div>

        {/* Main Card */}
        <div className=" top-[265px] left-[697px] rounded-xl mt-14 flex flex-col items-center justify-center">
          <img
            src="/Assets/uiuxdesign.png"
            alt="UI/UX Icon"
            className="w-full h-auto  mb-6 mt-6"
          />
        
        </div>

        {/* Tilted bottom Card  */}
        <div className="mt-20 rounded-xl transform w-[300px] md:w-[587px] rotate-10  ">
        <img
            src="\Assets\bottomDesign.png"
            alt="bottomcard"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
