import React from "react";

const Title = () => {
  return (
    <div className="relative w-full">
      <hr className="absolute top-1/2 left-0 w-full shadow-lg border-t-4 border-white bg-white transform -translate-y-1/2 z-0" />
      <div className="relative w-[55%] sm:w-[30%] md:w-[25%] lg:w-[20%] text-center z-10 bg-white rounded-2xl py-2 px-4 shadow-lg m-auto">
        <h3 className="font-bold text-[#FF3131] text-4xl">خدمات ما</h3>
      </div>
    </div>
  );
};

export default Title;
