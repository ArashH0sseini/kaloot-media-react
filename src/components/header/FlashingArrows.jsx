import React, { useState, useEffect } from "react";
import triangleSrc from '../../assets/images/neon.png'
const FlashingArrows = ({rotate,left,top}) => {
  const [activeStates, setActiveStates] = useState([false, false, false]); // حالت روشن/خاموش هر فلش
  const [step, setStep] = useState(0); // مرحله انیمیشن
  const [pause, setPause] = useState(false); // حالت توقف در مراحل خاص

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStates((prevStates) => {
        const newStates = [...prevStates];

        if (pause) {
          // وقتی در مرحله توقف هستیم، انیمیشن ثابت می‌ماند
          return newStates;
        }

        // مدیریت مراحل انیمیشن
        if (step < 3) {
          // روشن شدن فلش‌ها
          newStates[step] = true;
          setStep(step + 1);
        } else if (step === 3) {
          // توقف زمانی که هر سه فلش روشن هستند
          setPause(true);
          setTimeout(() => setPause(false), 500); // توقف برای 1 ثانیه
          setStep(step + 1);
        } else if (step > 3 && step < 7) {
          // خاموش شدن فلش‌ها
          newStates[6 - step] = false;
          setStep(step + 1);
        } else if (step === 7) {
          // توقف زمانی که همه فلش‌ها خاموش شده‌اند
          setPause(true);
          setTimeout(() => setPause(false), 500); // توقف برای 1 ثانیه
          setStep(0); // بازگشت به مرحله اول
        }

        return newStates;
      });
    }, 500); // تغییر وضعیت هر 500 میلی‌ثانیه

    return () => clearInterval(interval); // پاک کردن تایمر هنگام خروج از کامپوننت
  }, [step, pause]);

  return (
    <div className="relative w-10 h-20">
      {[0, 1, 2].map((index) => (
        <img
          key={index}
          src={triangleSrc}
          alt="Triangle"
          className={`absolute w-8 h-8 transform ${
            activeStates[index] ? "opacity-100" : "opacity-30"
          }`}
          style={{
            rotate: rotate,
            left: `${index * left}px`, // فاصله فلش‌ها به سمت راست
            top: `${index * top}px`, // فاصله فلش‌ها به سمت پایین
          }}
        />
      ))}
    </div>
  );
};

export default FlashingArrows
