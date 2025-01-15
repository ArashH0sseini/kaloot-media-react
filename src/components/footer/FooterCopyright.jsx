import React from "react";
import { FaHeart } from "react-icons/fa";

const FooterCopyright = () => {
  return (
    <div className=" text-white text-xl border-t-[1px] rounded-t-2xl bg-white/10 backdrop-blur-lg shadow-lg w-full h-full py-4">
      <div className="flex flex-col space-y-4 md:space-y-0 w-full items-center justify-center md:flex-row md:items-start md:justify-between md:max-w-6xl md:m-auto">
        <div className="w-full flex items-center justify-center space-x-2 space-x-reverse">
          <span>طراحی شده با</span>
          <FaHeart
            className="text-red-500 animate-bounce"
            style={{ filter: "drop-shadow(0px 0px 8px rgb(255, 0, 0)" }}
          />
          <span>در استودیو کلوت</span>
        </div>
        <div className="w-full flex items-center justify-center">
          <span className="font-bold font-staatliches text-[10px]">TM</span>
          <span className="font-bold font-staatliches tracking-widest">
            KALOOTMULTIMEDIA
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
