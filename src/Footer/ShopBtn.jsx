import React from "react";
import icon from "../assets/icon.png";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ShopBtn = () => {
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
    hidden: {
      opacity: 0,
      y: `4em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.8,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div
      className="fixed translate-x-[-50%] left-[50%] mx-auto bottom-5"
      ref={ref}
    >
      <motion.button
        className=" bg-black text-white w-[93px] h-[40px] rounded-full text-center inline-flex items-center justify-center gap-3 mr-2 text-[14px] cursor-pointer md:bottom-[30px]"
        initial="hidden"
        animate={ctrls}
        variants={bodyAnimation}
      >
        <img src={icon} alt="" className="w-3 h-3 " />
        Shop
      </motion.button>
    </motion.div>
  );
};

export default ShopBtn;
