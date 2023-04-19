import React from "react";

const Hero = () => {
  return (
    <section className="h-[50vh] flex flex-col pt-[190px] lg:pt-96 items-center justify-center">
      <div className="flex items-center flex-col justify-center gap-[40px]">
        <h1 className="font-bold text-[36px] leading-[43.2px] md:leading-[57.6px] tracking-[0.2px] w-[85%] text-center text-black md:text-[48px] md:max-w-[800px] md:w-[75%] lg:text-[72px] lg:leading-[86.4px] lg:max-w-[900px]">
          A brand and product designer working with clients globally
        </h1>

        <div className="hidden md:flex gap-[10px] text-[14px] font-light">
          <h4 className=" rounded-full py-[8px]">Expertise</h4>
          <h4 className="bg-[#e8e5e480] rounded-full py-[8px] px-[12px]">
            Branding
          </h4>
          <h4 className="bg-[#e8e5e480] rounded-full py-[8px] px-[12px]">
            Product
          </h4>
          <h4 className="bg-[#e8e5e480] rounded-full py-[8px] px-[12px]">
            Design Systems
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
