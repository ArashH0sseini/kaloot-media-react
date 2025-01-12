import React from "react";
import FloatingCircles from "../services/ServicesFloatingCircles";

const ConsultationTitle = ({ title, size, circle }) => {
  return (
    <div className="absolute top-0 w-full">
      <div className="relative w-[55%] sm:w-[30%] text-center z-10 bg-white rounded-2xl py-2 px-4 shadow-lg m-auto">
        <h3 style={{ fontSize: size }} className="font-bold text-[#FF3131]">
          {title}
        </h3>
        {circle ? <FloatingCircles /> : null}
      </div>
    </div>
  );
};

export default ConsultationTitle;
