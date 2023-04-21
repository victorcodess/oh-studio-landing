import { useState } from "react";

const NavBtn = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`${
        isActive ? "bg-white" : "bg-transparent"
      } w-[88px] h-[40px] lg:w-[96px] text-center rounded-full`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const buttons = [
    { title: "Home" },
    { title: "Profile" },
    { title: "Contact" },
  ];

  return (
    <nav className="flex fixed translate-x-[-50%] left-[50%] mx-auto top-5 py-1 px-1 z-50 bg-[#e8e5e480]/50 backdrop-blur-lg  rounded-full text-[14px] max-w-[280px] lg:max-w-[300px] gap-[4px] lg:top-8">
      {buttons.map((button, index) => (
        <NavBtn
          key={index}
          title={button.title}
          isActive={activeIndex === index}
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </nav>
  );
};

export default Navbar;
