import React from "react";
import FlashingArrows from "../header/FlashingArrows";

const Arrows = () => {
  return (
    <div className="w-full flex items-center justify-center  space-x-reverse mt-10">
      <div className="rotate-90">
        <FlashingArrows />
      </div>
      <FlashingArrows />
    </div>
  );
};

export default Arrows;
