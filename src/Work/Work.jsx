import React from "react";
import ProjectCard from "./ProjectCard";
import { projectDetails } from "./ProjectDetails";

const Work = () => {
  return (
    <section className="flex flex-col pt-28 lg:pt-72 items-center justify-center">
      <div className="grid w-[92%] max-w-[1320px] grid-cols-1 grid-rows-12 place-content-center place-items-center gap-x-5 gap-y-7 md:gap-y-10 md:grid-cols-2 md:grid-rows-6">
        {projectDetails.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              img={project.img}
              title={project.title}
              link={project.link}
              video={project.video}
              available={project.available}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
