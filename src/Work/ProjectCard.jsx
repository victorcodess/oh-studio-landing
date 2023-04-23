import { useState } from "react";

const ProjectCard = ({ img, title, link, video, available }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full cursor-pointer project-card relative flex flex-col items-start justify-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute item w-full hidden md:flex top-0 left-0 justify-between items-start px-5 pt-5 lg:px-5 lg:pt-5 z-30 ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity ease-in-out duration-300`}
      >
        <div>
          <h4 className="text-white text-[14px] lg:text-[18px]">{title}</h4>
          <h4
            className={`${
              available ? "hidden" : "inline"
            } text-white/50 text-[14px] lg:text-[18px]`}
          >
            Coming Soon
          </h4>
        </div>
        <a href={link} target="">
          <div
            className={`${
              available ? "bg-white" : "bg-black"
            } w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full cursor-pointer flex items-center justify-center transition-transform duration-300`}
            style={{
              transform: isHovered ? "translate(0)" : "translate(-20px, 20px)",
            }}
          >
            {available ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(255, 255, 255)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            )}
          </div>
        </a>
      </div>
      <div
        className={`overlay absolute w-full flex-col h-full rounded-xl hidden md:flex ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      {!video ? (
        <img
          src={img}
          alt="project-image"
          className="w-full h-[308px] sm:h-[496px] rounded-xl justify-cente object-cover bg-cover bg-center"
        />
      ) : (
        <div className="h-[308px] w-full sm:h-[496px] rounded-xl overflow-hidden flex justify-center">
          <video
            className="max-w-none h-[308px] sm:h-[496px] rounded-xl"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={img} type="video/mp4" />
          </video>
        </div>
      )}

      <div className="text-[14px] md:hidden flex gap-2">
        <p>{title}</p>
        <p className={`${available ? "hidden" : "block"} text-[#7f7f7f]`}>
          Unavailable
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
