import React from "react";

const ProductCard = ({ image, alt, title, description }) => {
  return (
    <div
      className="w-[397px] h-[479px] bg-[rgba(255,255,255,0.02)] p-4  pt-14 rounded-[24px] flex flex-col items-center justify-between border border-gray-700"
      style={{
        borderImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.2) 100%), 
        linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.2) 100%)`,
        borderWidth: "0.1px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="flex justify-center items-center mb-6">
        <img src={image} alt={alt} className="w-[290px] top-[60px] h-[107px]" />
      </div>
      <div className="w-[365px] h-[180px] relative top-[-40px]">
        <h2 className="text-[35px] font-manrope font-semibold w-[335px] h-[76px] leading-[38.4px] mb-4">
          {title}
        </h2>
        <p className="text-[16px] w-[365px] opacity-75 h-[88px] leading-[21.86px] font-manrope text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="overflow-hidden">
      <section className="relative bg-bgdarkblue text-white w-1440px pb-20 flex items-center justify-center">
        <div className=" text-white  ">
          {/* Section Title */}
          <div className="w-[1262px] h-[224px]  opacity-25 relative ">
            <h2 className="text-[200px] font-semibold  custom-gradient-text font-manrope  -ml-9">
              Our Product
            </h2>
          </div>

          {/* blurry effect of product */}
          <div className="absolute transform -translate-x-1/2  w-[866px] h-[607px] top-[100px] left-[700px]  bg-white opacity-[10%] rounded-full blur-[80px]"></div>

          {/* Cards Container */}
          <div className="flex gap-8 -mt-3 justify-center">
            <ProductCard
              image="/Assets/p1.png"
              alt="ENTUITE SMS Solutions"
              title="ENTUITE SMS Solutions"
              description="1202159188409717750) is a Telecom Regulatory Authority of India approved Telemarketer registered with Reliance Jio Infocomm Limited (RJIL)."
            />
            <ProductCard
              image="/Assets/p2.png"
              alt="ENTUITE CooperACTIVE"
              title="ENTUITE CooperACTIVE"
              description="ENTUITE CooperACTIVE is a Cloud-based Internal banking solution. Secured with 2 Factor Authentication, it boasts of Next-Gen Infrastructure that offers top-notch services and scalability."
            />
            <ProductCard
              image="/Assets/p3.png"
              alt="ENTUITE CooperACTIVE"
              title="ENTUITE CooperACTIVE"
              description="ENTUITE CooperACTIVE is a Cloud-based Internal banking solution. Secured with 2 Factor Authentication, it boasts of Next-Gen Infrastructure that offers top-notch services and scalability."
            />
          </div>
        </div>
      </section>

      <section className="relative bg-bgdarkblue text-white w-1440px pb-20">
        {/* blurry effect of why choose us */}
        <div className="absolute inset-0 z-0 transform -translate-x-1/2  w-[880px] h-[630px] top-[110px] left-[700px]  bg-white opacity-[2%] rounded-full blur-[80px]"></div>

        <div className="w-[1240px] h-[829px] mx-auto mt-10  text-white ">
          {/* why choose us */}
          <h2 className="text-6xl w-[481px] h-[67px]  font-semibold mb-8 custom-gradient-text text-center">
            Why Choose Us?
          </h2>

          {/* Cards Container */}
          <div className="flex flex-wrap gap-6 justify-center z-10 items-start">
            {/* Card 1 */}
            <div className="w-full md:w-[608px] h-[450px] border border-gray-400 rounded-3xl p-6 flex flex-col relative">
              {/* Pink Blur Effect */}
              <div className="blurpinkEffect absolute top-2 right-[380px] transform -translate-x-1/2"></div>

              {/* Icon */}
              <div className="w-[100px] h-[100px] border border-gray-600 rounded-full flex items-center justify-center  relative top-2">
                <img src="/Assets/lightbulb-on.png" alt="Tailored Solutions" />
              </div>

              {/* Heading */}
              <h3 className="text-[24px] md:text-[36px] font-manrope w-[503px] h-[98px] leading-[36px] md:leading-[49.18px] font-semibold text-left mt-14">
                Tailored Solutions for Every Business
              </h3>

              {/* Paragraph */}
              <p className="text-gray-400  text-[16px] md:text-[20px] w-[510px] h-[78px] leading-[24px] md:leading-[26px] mt-4 text-left">
                We understand that every business is unique. Our team crafts
                customized strategies that align with your specific goals,
                ensuring maximum impact and measurable results.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[608px] h-[450px] border border-gray-400 rounded-3xl p-6 flex flex-col relative">
              {/* Pink Blur Effect */}
              <div className="blurpinkEffect absolute top-2 right-[380px] transform -translate-x-1/2"></div>

              {/* Icon */}
              <div className="w-[100px] h-[100px] border border-gray-600 rounded-full flex items-center justify-center  relative top-2">
                <img src="/Assets/team.png" alt="Expert Team" />
              </div>

              {/* Heading */}
              <h3 className="text-[24px] md:text-[36px] font-manrope leading-[36px] md:leading-[49.18px] font-semibold text-left mt-14">
                Expert Team, Proven Results
              </h3>

              {/* Paragraph */}
              <p className="text-gray-400 w-full text-[16px] md:text-[20px] leading-[24px] md:leading-[26px] mt-14 text-left">
                Our agency is built on a foundation of expertise and experience.
                From design to development, we deliver high-quality solutions
                that have consistently driven success for our clients.
              </p>
            </div>

            {/* card 3 long term*/}
            <div className="w-[1240px] h-[228px] mt-2 rounded-[24px] border border-gray-400 p-6 flex items-center">
              <div className="flex items-center gap-4">
                {/* Pink Blur Effect */}
                <div className="blurpinkEffect relative top-2 -right-16  transform -translate-x-1/2"></div>

                {/* Icon */}
                <div className="w-[100px] h-[100px] border border-gray-600 rounded-full flex items-center justify-center  relative right-36 top-2">
                  <img
                    src="\Assets\chat-arrow-grow 1.png"
                    alt="Tailored Solutions"
                  />
                </div>

                <div>
                  <h3 className="text-xl text-[36px] font-manrope font-semibold -ml-14">
                    Committed to Long-term Growth
                  </h3>
                  <p className="text-gray-400  text-[16px] md:text-[20px] w-[938px] h-[52px] leading-[36px] font-manrope text-left mt-2 -ml-14">
                    We focus not just on immediate outcomes but on sustainable
                    growth. Our collaborative approach ensures that we partner
                    with you for the long haul, fostering your business's
                    success over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Products;
