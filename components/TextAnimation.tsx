"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const TextFadeAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const text =
    "I'm a skilled developer in JavaScript and TypeScript also expertise in frameworks like React, Node.js, Express.js and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";
  const words = text.split(" ");
  return (
    <div ref={ref}>
      {words.map((word, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.05,
            delay: index * 0.05,
          }}
          className="mr-[4px] inline-block"
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};
