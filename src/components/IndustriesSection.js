// import React from "react";
import React, { useRef } from "react";

const IndustriesSection = () => {
  const sliderRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -350, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 350, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="w-1440px h-[840px] overflow-hidden bg-bgdarkblue text-white text-center">
      <div className="opacity-100">
        <div class="flex items-center justify-center mt-60 mb-10 bg-[#0B0917]">
          <button class="flex items-center gap-2 px-6 py-3 rounded-full bg-[#212027] border-2 border-[#484652] text-white font-manrope">
            <span class="w-4 h-4 bg-customPink rounded-full"></span>
            <span class="font-semibold">Expertise</span>
          </button>
        </div>

        <h2 className="text-6xl font-manrope font-bold text-pink-600 mb-4">
          Business industries
          <br />
          <span className="custom-gradient-text">we dive in</span>
        </h2>
        <div className="flex items-center justify-center ">
          <p className="font-manrope h-[75px] w-[842px] text-[18px] leading-[24.59px] text-gray-400 text-center mb-12 decoration-gray-400">
            While others are still trying to navigate the digital landscape,
            we've mastered it. Let us take the guesswork out of digital
            marketing and propel your business to new heights. Trust our
            expertise to turn your online presence into a profit-generating
            powerhouse.
          </p>
        </div>
        {/* card slider */}
        <div
          ref={sliderRef}
          className="flex justify-center gap-8 mb-8 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {/* Card 1 */}
          <div
            className="w-[350px] h-[200px] border border-gray-700  bg-[rgba(255,255,255,0.02)] rounded-[16px] p-6 text-white"
            style={{
              borderTop: "0.5px solid rgba(255, 255, 255, 0.2",
              borderBottom: "0.5px solid rgba(255, 255, 255, 0.2",
              borderLeft: "0.5px solid rgba(255, 255, 255, 0.6)",
              borderRight: "0.5px solid rgba(255, 255, 255, 0.6)",
            }}
          >
            <h3 className="text-xl  font-manrope text-white opacity-100 font-bold mb-4">
              Marketplace
            </h3>
            <p className="text-[18px] w-[324px] h-[104px]  leading-[26.1px] text-left text-gray-400 ">
              Crafting stories that sell. Content is king and we’re here to help
              you rule more kingdoms with captivating communication.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="w-[350px] h-[200px] border border-gray-700  bg-[rgba(255,255,255,0.02)] rounded-[16px] p-6 text-white"
            style={{
              borderTop: "0.5px solid rgba(255, 255, 255, 0.2",
              borderBottom: "0.5px solid rgba(255, 255, 255, 0.2",
              borderLeft: "0.5px solid rgba(255, 255, 255, 0.6)",
              borderRight: "0.5px solid rgba(255, 255, 255, 0.6)",
            }}
          >
            <h3 className="text-xl  font-manrope text-white opacity-100 font-bold mb-4">
              Beauty
            </h3>
            <p className="text-[18px] w-[324px] h-[104px]  leading-[26.1px] text-left text-gray-400 ">
              Crafting stories that sell. Content is king and we’re here to help
              you rule more kingdoms with captivating communication.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="w-[350px] h-[200px] border border-gray-700  bg-[rgba(255,255,255,0.02)] rounded-[16px] p-6 text-white"
            style={{
              borderTop: "0.5px solid rgba(255, 255, 255, 0.2",
              borderBottom: "0.5px solid rgba(255, 255, 255, 0.2",
              borderLeft: "0.5px solid rgba(255, 255, 255, 0.6)",
              borderRight: "0.5px solid rgba(255, 255, 255, 0.6)",
            }}
          >
            <h3 className="text-xl  font-manrope text-white opacity-100 font-bold mb-4">
              Marketplace
            </h3>
            <p className="text-[18px] w-[324px] h-[104px]  leading-[26.1px] text-left text-gray-400 ">
              Crafting stories that sell. Content is king and we’re here to help
              you rule more kingdoms with captivating communication.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="w-[350px] h-[200px] border border-gray-700  bg-[rgba(255,255,255,0.02)] rounded-[16px] p-6 text-white"
            style={{
              borderTop: "0.5px solid rgba(255, 255, 255, 0.2",
              borderBottom: "0.5px solid rgba(255, 255, 255, 0.2",
              borderLeft: "0.5px solid rgba(255, 255, 255, 0.6)",
              borderRight: "0.5px solid rgba(255, 255, 255, 0.6)",
            }}
          >
            <h3 className="text-xl  font-manrope text-white opacity-100 font-bold mb-4">
              Healthcare
            </h3>
            <p className="text-[18px] w-[324px] h-[104px]  leading-[26.1px] text-left text-gray-400 ">
              Crafting stories that sell. Content is king and we’re here to help
              you rule more kingdoms with captivating communication.
            </p>
          </div>
        </div>

        {/* buttons left and right  */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={scrollLeft}
            className=" rounded-full  hover:bg-yellow-200 hover:size-12 transition flex items-center justify-center"
          >
            <img
              src="\Assets\ArrowCircleLeft.png"
              alt="Left Arrow"
              className="w-[50px] h-[50px]"
            />
          </button>
          <button
            onClick={scrollRight}
            className=" rounded-full  hover:bg-yellow-200 hover:size-12 transition flex items-center justify-center"
          >
            <img
              src="\Assets\ArrowCircleRight.png"
              alt="Right Arrow"
              className="w-[50px] h-[50px]"
            />
          </button>
        </div>
      
      </div>
    </section>
  );
};

export default IndustriesSection;
