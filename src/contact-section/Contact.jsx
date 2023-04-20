import React from "react";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        delay: 0.5,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const child2Animation = {
    hidden: {
      opacity: 0,
      y: `2em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.55,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col pt-[114px] md:pt-[67px] md:pb-[67px] lg:py-[144px] pb-[114px] items-center justify-center text-[30px] md:text-[38px] font-bold"
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={bodyAnimation}
    >
      <motion.h2 variants={childAnimation}>Let's work together.</motion.h2>
      <motion.h2
        className="text-[#7f7f7f] hover:text-[#7f7f7f]/50 cursor-pointer -mt-2"
        variants={child2Animation}
      >
        Get in touch.
      </motion.h2>
    </motion.section>
  );
};

export default Contact;
