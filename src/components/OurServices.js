import React from 'react';

const OurServices = () => {
  return (
    <section className="relative bg-bgdarkblue text-white w-full h-[1049px] flex items-center justify-center">
      {/* Left Section: Title */}
      <div className="absolute w-[597px] h-[268px] top-[350px] left-[100px] opacity-25">
        <h2 className="text-[120px] font-bold custom-gradient-text font-manrope">Our Services</h2>
        </div>
    {/* blurry effect 1 */}
    <div className="absolute transform -translate-x-1/2  w-[866px] h-[658px] top-[250px]  bg-white opacity-[3%] rounded-full blur-[80px]"></div>
      

      {/* Cards Container */}
      <div className="absolute flex flex-col left-[745.97px] ">
        {/* Tilted top Card */}
        <div className=" top-[-434.72px]  rounded-xl transform -rotate-10 ">
        <img
            src="/Assets/design.png"
            alt="UI/UX Icon"
            className="w-[587px] h-[165px] mb-4"
          />
        </div>

        {/* Main Card */}
        <div className=" top-[265px] left-[697px] rounded-xl mt-14 flex flex-col items-center justify-center">
          <img
            src="/Assets/uiuxdesign.png"
            alt="UI/UX Icon"
            className="w-[503px] h-[520px]  mb-6 mt-6"
          />
        
        </div>

        {/* Tilted bottom Card  */}
        <div className="mt-20 rounded-xl transform rotate-10  ">
        <img
            src="/Assets/bottomdesign.png"
            alt="UI/UX Icon"
            className="w-[587px] h-[164px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
