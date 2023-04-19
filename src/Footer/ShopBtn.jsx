import React from "react";
import icon from "../assets/icon.png";

const ShopBtn = () => {
  return (
    <>
      <button className="fixed translate-x-[-50%] left-[50%] mx-auto bottom-5 bg-black text-white w-[93px] h-[40px] rounded-full text-center inline-flex items-center justify-center gap-3 mr-2 text-[14px] cursor-pointer md:bottom-[30px]">
        <img src={icon} alt="" className="w-3 h-3 " />
        Shop
      </button>
    </>
  );
};

export default ShopBtn;
