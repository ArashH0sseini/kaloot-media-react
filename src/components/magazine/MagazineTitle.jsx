import React from "react";

const MagazineTitle = ({ title, size, circle }) => {
  return (
    <div className="w-full">
      <div className=" text-center z-10 bg-white rounded-2xl py-2 px-4 shadow-lg">
        <h3 style={{ fontSize: size }} className="font-bold text-[#FF3131]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default MagazineTitle;
