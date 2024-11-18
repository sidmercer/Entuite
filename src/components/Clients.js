import React from "react";

const Clients = () => {
  return (
    <section className="relative bg-bgdarkblue h-auto text-white w-full py-20 pb-52  px-6">
  {/* Section Title */}
  <div className="text-left max-w-[1240px] mx-auto  mb-28 px-4">
    <h2 className="text-5xl md:text-6xl font-manrope font-semibold custom-gradient-text">
      Our clients
    </h2>
    <p className="text-gray-400 font-manrope mt-4 text-lg">
      Hear firsthand how our solutions have boosted online success for users like you.
    </p>
  </div>
  
  {/* line 1  */}
  <div className="relative">
  <div
    className="w-[990px] h-0 border-t relative top-[35px]  opacity-[0.6] mx-auto"
    style={{
      borderImage: "linear-gradient(90deg, #141315 0%, #FFFFFF 16.5%, #EAEAEA 86.5%, #020103 100%)",
      borderImageSlice: 1,
    }}
  ></div>
</div>

{/* line 1.2  */}
<div className="relative">
  <div
    className="w-[990px] h-0 border-t  relative top-[250px] opacity-[0.6] mx-auto"
    style={{
      borderImage: "linear-gradient(90deg, #141315 0%, #FFFFFF 16.5%, #EAEAEA 86.5%, #020103 100%)",
      borderImageSlice: 1,
    }}
  ></div>
</div>


{/* line 2 horizontal  */}
<div className="relative">
  <div
    className="relative  w-[401px] top-[130px] left-[-140px] mx-auto h-0 border-t opacity-[0.6]"
    style={{
     
      transform: "rotate(-90deg)",
      borderImage:
        "linear-gradient(90deg, #141315 0%, #FFFFFF 16.5%, #EAEAEA 86.5%, #020103 100%)",
      borderImageSlice: 1,
    }}
  ></div>
</div>

{/* line 2 horizontal 2 */}
<div className="relative">
  <div
    className="relative w-[401px] top-[130px] right-[358px] mx-auto h-0 border-t opacity-[0.6]"
    style={{
     
      transform: "rotate(-90deg)",
      borderImage:
        "linear-gradient(90deg, #141315 0%, #FFFFFF 16.5%, #EAEAEA 86.5%, #020103 100%)",
      borderImageSlice: 1,
    }}
  ></div>
</div>


 {/* Testimonial Container */}
  <div className="flex justify-center items-center  relative mx-auto max-w-[1240px] px-4">
    {/* Glowing Pink Background */}
    <div className="absolute inset-0 w-[332px] h-[244px] left-52 top-14 bg-gradient-to-r from-[#FF007A] to-[#f00d60] opacity-100 blur-[100px] z-0"></div>

    {/* Testimonial Card */}
    <div className="relative z-10 flex items-center bg-transparent  p-8 gap-8 w-full md:w-[780px]">
      {/* Image */}
      <div className="w-[100px] relative  md:w-[217px] h-[100px] md:h-[217px]  flex-shrink-0">
        <img
          src="/Assets/c1.png" // Replace with your actual image path
          alt="Talia Taylor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Testimonial Text */}
      <div className="text-left w-[339px] h-[170px]">
        <p className="text-[18px] md:text-[24px] font-medium font-manrope leading-[26px] md:leading-[34px]">
          "This product has completely transformed how I manage my projects and deadlines"
        </p>
        <div className="mt-4">
          <p className="text-white font-normal text-md md:text-lg font-manrope">Talia Taylor</p>
          <p className="text-gray-400 text-sm">
            Digital Marketing Director @ Quantum
          </p>
        </div>
      </div>
    </div>
    
  </div>
  
</section>

  );
};

export default Clients;
