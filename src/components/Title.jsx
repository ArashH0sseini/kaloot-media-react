import React, { useState, useEffect } from "react";

const Title = ({ title, size, height }) => {
  const [circlePositions, setCirclePositions] = useState({
    leftCircle: { x: "9%", y: "50%" }, // کمی به سمت داخل
    rightCircle: { x: "91%", y: "50%" }, // کمی به سمت داخل
  });

  const handleScroll = () => {
    const scrollY = window.scrollY; // مقدار اسکرول عمودی
    const horizontalMovement = Math.min(scrollY / 10, 40); // حرکت روی محور افقی (تا انتهای خط افقی)
    const verticalMovement = Math.max(0, (scrollY - 400) / 0.7); // حرکت روی محور عمودی

    // به‌روزرسانی موقعیت دایره‌ها
    setCirclePositions({
      leftCircle: {
        x: `${9 - horizontalMovement}%`, // حرکت دایره به سمت چپ
        y: `${50 + verticalMovement}%`, // حرکت عمودی
      },
      rightCircle: {
        x: `${91 + horizontalMovement}%`, // حرکت دایره به سمت راست
        y: `${50 + verticalMovement}%`, // حرکت عمودی
      },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* خط افقی */}
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-0">
        <hr className="mx-[5%] shadow-lg border-t-4 border-white bg-white rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px]" />
      </div>

      {/* خطوط عمودی سمت چپ و راست */}
      <div
        style={{ height: height }}
        className="absolute top-1/2 right-[5%] flex items-center"
      >
        <hr className="w-1 h-full bg-white border-none" />
      </div>
      <div
        style={{ height: height }}
        className="absolute top-1/2 left-[5%] flex items-center"
      >
        <hr className="w-1 h-full bg-white border-none" />
      </div>

      {/* عنوان */}
      <div className="relative w-[55%] sm:w-[30%] md:w-[25%] lg:w-[20%] text-center z-10 bg-white rounded-2xl py-2 px-4 shadow-lg m-auto">
        <h3 style={{ fontSize: size }} className="font-bold text-[#FF3131]">
          {title}
        </h3>

        {/* دایره‌ها */}
        <span
          className="absolute h-5 w-5 rounded-full bg-yellow-400/60 shadow-[0_0_20px_10px_rgb(255,204,21)] text-yellow-400 backdrop-blur-lg animate-pulse"
          style={{
            top: circlePositions.leftCircle.y,
            left: circlePositions.leftCircle.x,
            transform: "translate(-50%, -50%)",
          }}
        ></span>
        <span
          className="absolute h-5 w-5 rounded-full bg-yellow-400/60 shadow-[0_0_20px_10px_rgb(255,204,21)] text-yellow-400 backdrop-blur-lg animate-pulse"
          style={{
            top: circlePositions.rightCircle.y,
            left: circlePositions.rightCircle.x,
            transform: "translate(-50%, -50%)",
          }}
        ></span>
      </div>
    </div>
  );
};

export default Title;
