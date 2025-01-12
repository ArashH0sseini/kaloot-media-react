import React from "react";
import ServicesFloatingCircles from "./ServicesFloatingCircles";

const ServicesTitle = ({ title, size, circle }) => {
  return (
    <div className="absolute top-0 w-full">
      <div className="relative w-[55%] sm:w-[40%] xl:w-[20%] text-center z-10 bg-white rounded-2xl py-2 px-4 shadow-lg m-auto">
        <h3 style={{ fontSize: size }} className="font-bold text-[#FF3131]">
          {title}
        </h3>
        {circle ? <ServicesFloatingCircles /> : null}
      </div>
    </div>
  );
};

export default ServicesTitle;
