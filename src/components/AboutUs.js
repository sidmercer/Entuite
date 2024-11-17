import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-bgdarkblue flex flex-col w-1440px text-white py-10 px-8">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center">

        {/* Left Section: Text */}
        <div className="lg:w-[608px] h-auto mb-10 lg:mb-0 flex flex-col gap-5">
          <button className="text-customPink bg-customPink bg-opacity-10 font-manrope px-4 py-2 w-[140px] h-[45px] rounded-full">
            About Us
          </button>
          <p className="custom-gradient-text text-[40px]   w-[600px] h-[225px] font-manrope leading-[44.8px] text-left">
            At Entuite, we are dedicated to delivering innovative solutions that
            empower businesses to thrive in today’s digital <br />
            landscape.
          </p>
        </div>

        {/* Right Section: Stats */}
        <div className="w-[503px] h-[479px] pl-6 pt-16 border-opacity-0 flex flex-col p-4">
          <div className="flex items-center w-[367px] h-[109px] top-[1123px] left-[840px] pt-4">
            <span className="text-5xl font-bold">250+</span>
            <span className="text-lg pl-6">Satisfied Clients</span>
          </div>
          <div className="flex items-center  w-[503px] h-[133px] top-[1196px] left-[837px]  border-t border-gray-700 pt-4">
            <span className="text-5xl font-bold">500+</span>
            <span className="text-lg pl-6">Projects Finished</span>
          </div>
          <div className="flex items-center w-[503px] h-[133px] top-[1469px] left-[837px]  border-t border-gray-700 pt-4">
            <span className="text-5xl font-bold">10+</span>
            <span className="text-lg pl-14">Years of Experience</span>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="mt-10 mb-20 flex justify-center">
        <img
          src="/logos/abtus.jpg"
          alt="About Us"
          className="w-[1240px] h-[549px] top-[1662px] left-[100px] rounded-tl-lg border-t border-gray-700 opacity-100"
        />
      </div>

    </section>
  );
};

export default AboutUs;
