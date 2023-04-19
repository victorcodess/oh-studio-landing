import { useEffect } from "react";

const ProjectCard = ({ img, title, link, video, available }) => {
  return (
    <div className="w-[100%] flex flex-col items-start justify-center gap-2">
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
