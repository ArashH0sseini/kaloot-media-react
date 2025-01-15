import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sunrise from "../../assets/images/sunrise.png";

const FooterSunRise = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [linesAnimCompleted, setLinesAnimCompleted] = useState(false);


  useEffect(() => {
    if (inView) {
      setLinesAnimCompleted(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-center">
        <div className="w-1/2 sm:w-[30%] md:w-[20%] opacity-75">
          <motion.img
            src={sunrise}
            alt="Sunrise"
            initial={{ scaleY: 0, opacity: 0, height: 0 }}
            animate={{
              scaleY: linesAnimCompleted ? 1 : 0,
              opacity: linesAnimCompleted ? 1 : 0,
              height: linesAnimCompleted ? "100%" : 0,
              transition: { duration: 1, delay: 1 },
            }}
            style={{ filter: "drop-shadow(0px 0px 20px rgb(255, 145, 0))" }}

            className="w-full object-cover origin-bottom"
          />
        </div>
      </div>
      <div className="space-y-[2px]">
        {Array.from({ length: 10 }).reverse().map((_, index) => (
          <motion.hr
            key={index}
            initial={{ scaleX: 0, opacity: 0.1 }}
            animate={{
              scaleX: inView ? 1 : 0,
              opacity: inView ? 0.1 + (9 - index) * 0.1 : 0.1,
              transition: {
                delay: (9 - index) * 0.1,
                duration: 1,
              },
            }}
            className="w-full h-[1px] shadow-lg border-t border-white bg-white origin-center"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterSunRise;
