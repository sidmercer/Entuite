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
      <h2 className="text-[35px] font-manrope font-semibold w-[335px] h-[76px] leading-[38.4px] mb-4">{title}</h2>
      <p className="text-[16px] w-[365px] opacity-75 h-[88px] leading-[21.86px] font-manrope text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="relative bg-bgdarkblue text-white w-1440px pb-20 flex items-center justify-center">
    <div className=" text-white  ">
      {/* Section Title */}
      <div className="w-[1262px] h-[224px]  opacity-25 relative ">
        <h2 className="text-[200px] font-semibold  custom-gradient-text font-manrope  -ml-9" >
          Our Product
        </h2>
      </div>

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
  );
};

export default Products;
