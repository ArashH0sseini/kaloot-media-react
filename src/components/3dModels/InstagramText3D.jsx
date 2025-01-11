import React from "react";
import { motion } from "framer-motion";

const InstagramText3D = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.span
        className="text-white text-[40px] font-bungee border-b-2 border-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
      >
        kalootmedia@
      
      </motion.span>
    </div>
  );
};

export default InstagramText3D;
