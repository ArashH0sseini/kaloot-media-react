import React, { useState, useEffect } from "react";

const FloatingCircles = () => {
  const [circlePositions, setCirclePositions] = useState({
    leftCircle: { x: "15%", y: "85%" },
    rightCircle: { x: "85%", y: "85%" },
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // حرکت دایره‌ها هنگام اسکرول
    const horizontalMovement = Math.min(scrollY / 12, 40);
    const verticalMovement = Math.max(0, (scrollY - 400) / 0.7);
    const curveMovement = Math.sin(verticalMovement / 100) * 50;

    setCirclePositions({
      leftCircle: {
        x: `${15 - horizontalMovement}%`,
        y: `${85 + verticalMovement + curveMovement}%`,
      },
      rightCircle: {
        x: `${85 + horizontalMovement}%`,
        y: `${85 + verticalMovement + curveMovement}%`,
      },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <span
        className="absolute h-5 w-5 rounded-full bg-yellow-400/60 shadow-[0_0_20px_10px_rgb(255,204,21)] text-yellow-400 backdrop-blur-lg animate-pulse sm:hidden"
        style={{
          top: circlePositions.leftCircle.y,
          left: circlePositions.leftCircle.x,
          transform: "translate(-50%, -50%)",
        }}
      ></span>
      <span
        className="absolute h-5 w-5 rounded-full bg-yellow-400/60 shadow-[0_0_20px_10px_rgb(255,204,21)] text-yellow-400 backdrop-blur-lg animate-pulse sm:hidden"
        style={{
          top: circlePositions.rightCircle.y,
          left: circlePositions.rightCircle.x,
          transform: "translate(-50%, -50%)",
        }}
      ></span>
    </>
  );
};

export default FloatingCircles;
