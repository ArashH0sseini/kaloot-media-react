import React, { useState, useEffect } from "react";
import triangleSrc from '../../assets/images/neon.png'
const FlashingArrows = ({rotate,left,top}) => {
  const [activeStates, setActiveStates] = useState([false, false, false]);
  const [step, setStep] = useState(0);
  const [pause, setPause] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStates((prevStates) => {
        const newStates = [...prevStates];

        if (pause) {
          return newStates;
        }

        if (step < 3) {
          newStates[step] = true;
          setStep(step + 1);
        } else if (step === 3) {
          setPause(true);
          setTimeout(() => setPause(false), 500);
          setStep(step + 1);
        } else if (step > 3 && step < 7) {
          newStates[6 - step] = false;
          setStep(step + 1);
        } else if (step === 7) {
          setPause(true);
          setTimeout(() => setPause(false), 500);
          setStep(0);
        }

        return newStates;
      });
    }, 500);

    return () => clearInterval(interval);
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
            left: `${index * left}px`,
            top: `${index * top}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FlashingArrows
