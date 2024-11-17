import React from "react";

const IndustriesSection = () => {
  return (
    <section className="w-full h-[1200px]  bg-bgdarkblue text-white text-center">
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
          <span></span>we dive in
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          While others are still trying to navigate the digital landscape, we've
          mastered it. Let us take the guesswork out of digital marketing and
          propel your business to new heights. Trust our expertise to turn your
          online presence into a profit-generating powerhouse.
        </p>
        <div className="flex justify-evenly gap-6">
          <div className="w-[300px] h-[200px] bg-white rounded-lg opacity-90"></div>
          <div className="w-[300px] h-[200px] bg-white rounded-lg opacity-90"></div>
          <div className="w-[300px] h-[200px] bg-white rounded-lg opacity-90"></div>
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <button className="w-[50px] h-[50px] rounded-full border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-black transition">
            &lt;
          </button>
          <button className="w-[50px] h-[50px] rounded-full border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-black transition">
            &gt;
          </button>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
