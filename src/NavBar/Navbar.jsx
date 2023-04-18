import React from "react";

const Navbar = () => {
  return (
    <nav className="flex fixed translate-x-[-50%] left-[50%] mx-auto top-5 py-1 px-1  bg-[#e8e5e480]  rounded-full text-[14px]">
      <h4 className="py-[12px] px-[25px] rounded-full bg-white">Home</h4>
      <h4 className="py-[12px] px-[25px] rounded-full">Profile</h4>
      <h4 className="py-[12px] px-[25px] rounded-full">Contact</h4>
    </nav>
  );
};

export default Navbar;
