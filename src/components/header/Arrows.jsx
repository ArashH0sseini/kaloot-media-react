import React from "react";
import FlashingArrows from "../header/FlashingArrows";

const Arrows = () => {
  return (
    <div className="w-full flex items-center justify-between mt-10 px-10 sm:px-16 md:px-28 ">
      <FlashingArrows rotate="100deg" top={25} left={-25} />
      <FlashingArrows rotate="140deg" top={25} left={25}/>
    </div>
  );
};

export default Arrows;
