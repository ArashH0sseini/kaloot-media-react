import React, { useState, useEffect } from "react";

const FloatingCircles = () => {
  const [circlePositions, setCirclePositions] = useState({
    leftCircle: { x: "11.8%", y: "80%" },
    rightCircle: { x: "89%", y: "80%" },
  });
  const [stopped, setStopped] = useState(false); // وضعیت توقف
  const limit = 3200; // نقطه توقف حرکت

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // اگر اسکرول کمتر از حد توقف شد، بازنشانی وضعیت
    if (scrollY < limit && stopped) {
      setStopped(false);
      return;
    }

    // جلوگیری از به‌روزرسانی موقعیت وقتی توقف فعال است
    if (stopped) return;

    if (scrollY >= limit) {
      // متوقف کردن حرکت و ثابت کردن موقعیت توپ‌ها
      setStopped(true);
      setCirclePositions({
        leftCircle: { x: "7.8%", y: "100%" }, // مقادیر ثابت نهایی
        rightCircle: { x: "93%", y: "100%" },
      });
      return;
    }

    // حرکت توپ‌ها تا رسیدن به حد مشخص
    const horizontalMovement = Math.min(scrollY / 12, 40);
    const verticalMovement = Math.max(0, (scrollY - 400) / 0.7);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stopped]); // اجرای افکت تنها در صورت تغییر وضعیت توقف

  return (
    <>
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
    </>
  );
};

export default FloatingCircles;
