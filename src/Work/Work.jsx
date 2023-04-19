import React from "react";
import ProjectCard from "./ProjectCard";
import { projectDetails } from "./ProjectDetails";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: `4em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col pt-28 lg:pt-72 items-center justify-center pb-[20px] lg:pb-10"
      ref={ref}
    >
      <motion.div
        className="grid w-[92%] max-w-[1320px] grid-cols-1 grid-rows-12 place-content-center place-items-center gap-x-5 gap-y-7 md:gap-y-10 md:grid-cols-2 md:grid-rows-6"
        aria-hidden="true"
        initial="hidden"
        animate={ctrls}
        variants={bodyAnimation}
      >
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
      </motion.div>
    </motion.section>
  );
};

export default Work;
