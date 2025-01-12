import React, { useState, useEffect } from "react";

const ServicesFloatingCircles = () => {
  const [circlePositions, setCirclePositions] = useState({
    leftCircle: { x: "11.8%", y: "80%" },
    rightCircle: { x: "89%", y: "80%" },
  });
  const [stopped, setStopped] = useState(false);
  const [scrollLimit, setScrollLimit] = useState(3200);
  const [scrollStart, setScrollStart] = useState(500);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY < scrollStart) {
      setCirclePositions({
        leftCircle: { x: "11.8%", y: "80%" },
        rightCircle: { x: "89%", y: "80%" },
      });
      return;
    }

    if (scrollY < scrollLimit && stopped) {
      setStopped(false);
      return;
    }

    if (stopped) return;

    if (scrollY >= scrollLimit) {
      setStopped(true);
      setCirclePositions({
        leftCircle: { x: "7.8%", y: "100%" },
        rightCircle: { x: "93%", y: "100%" },
      });
      return;
    }

    const horizontalMovement = Math.min((scrollY - scrollStart) / 12, 40);
    const verticalMovement = Math.max(0, (scrollY - scrollStart - 400) / 0.7);
    const curveMovement = Math.sin(verticalMovement / 100) * 50;

    setCirclePositions({
      leftCircle: {
        x: `${11.8 - horizontalMovement}%`,
        y: `${80 + verticalMovement + curveMovement}%`,
      },
      rightCircle: {
        x: `${89 + horizontalMovement}%`,
        y: `${80 + verticalMovement + curveMovement}%`,
      },
    });
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setScrollLimit(2700);
      setScrollStart(600);
      setCirclePositions({
        leftCircle: { x: "15%", y: "85%" },
        rightCircle: { x: "85%", y: "85%" },
      });
    } else if (screenWidth < 1024) {
      setScrollLimit(2600);
      setScrollStart(700);
      setCirclePositions({
        leftCircle: { x: "12%", y: "82%" },
        rightCircle: { x: "88%", y: "82%" },
      });
    } else {
      setScrollLimit(3200);
      setScrollStart(800);
      setCirclePositions({
        leftCircle: { x: "11.8%", y: "80%" },
        rightCircle: { x: "89%", y: "80%" },
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [stopped]);

  return (
    <>
      <span
        className="absolute h-5 w-5 rounded-full bg-yellow-400/60 shadow-[0_0_20px_10px_rgb(255,204,21)] text-yellow-400 backdrop-blur-lg sm:hidden animate-pulse"
        style={{
          top: circlePositions.leftCircle.y,
          left: circlePositions.leftCircle.x,
          transform: "translate(-50%, -50%)",
        }}
      ></span>
      <span
        className="absolute h-5 w-5 rounded-full bg-yellow-400/60 shadow-[0_0_20px_10px_rgb(255,204,21)] text-yellow-400 backdrop-blur-lg sm:hidden animate-pulse"
        style={{
          top: circlePositions.rightCircle.y,
          left: circlePositions.rightCircle.x,
          transform: "translate(-50%, -50%)",
        }}
      ></span>
    </>
  );
};

export default ServicesFloatingCircles;
