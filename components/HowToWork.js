import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const HowToWork = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="bg-white-500 dark:bg-black-600 w-full pt-20"
      id="how-it-works"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 dark:text-white-500 leading-relaxed"
            >
              How It Works
            </motion.h3>
            <div className="pt-8 lg:pt-12 px-6 sm:px-0 lg:px-6">
              <motion.img
                variants={scrollAnimation}
                src={"/assets/cdn-working.png"}
                width={"100%"}
                alt={"how-it-works"}
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
