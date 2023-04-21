import React from "react";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 0.25,
        staggerChildren: 0.2,
      },
    },
  };

  const childAnimation = {
    hidden: {
      opacity: 0,
      y: `2em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0,
        duration: 1.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const child2Animation = {
    hidden: {
      opacity: 0,
      y: `6em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.25,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section className="h-[50vh] md:h-[50vh] flex flex-col pt-[190px] lg:pt-96 items-center justify-center">
      <motion.div
        className="flex items-center flex-col justify-center gap-[40px]"
        ref={ref}
        aria-hidden="true"
        initial="hidden"
        animate={ctrls}
      >
        <motion.h1
          className="font-bold text-[36px] leading-[43.2px] md:leading-[57.6px] tracking-[0.2px] w-[85%] text-center text-black md:text-[48px] md:max-w-[800px] md:w-[75%] lg:text-[72px] lg:leading-[86.4px] lg:max-w-[900px]"
          variants={childAnimation}
        >
          A brand and product designer working with clients globally
        </motion.h1>

        <motion.div
          className="hidden md:flex gap-[10px] text-[14px] font-light"
          variants={child2Animation}
        >
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
