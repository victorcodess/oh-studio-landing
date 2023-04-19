import React from "react";

const Navbar = () => {
  return (
    <nav className="flex fixed translate-x-[-50%] left-[50%] mx-auto top-5 py-1 px-1  bg-[#e8e5e480]/50 backdrop-blur-lg  rounded-full text-[14px] max-w-[280px] gap-[4px]">
      <button className="w-[88px] h-[40px] text-center rounded-full bg-white">
        Home
      </button>
      <button className="w-[88px] h-[40px] text-center rounded-full">
        Profile
      </button>
      <button className="w-[88px] h-[40px] text-center rounded-full">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
