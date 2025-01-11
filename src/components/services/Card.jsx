import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";

const ROTATION_RANGE = 32.5;

const Card = ({ img, id, title, alt, link }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;



  const handleMove = (e, isTouch) => {
    const card = cardRef.current;
    if (!card) return;


    const rect = card.getBoundingClientRect();
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;

    const xp = clientX - rect.left;
    const yp = clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const rotateX = (yp / height - 0.5) * -ROTATION_RANGE;
    const rotateY = (xp / width - 0.5) * ROTATION_RANGE;

    x.set(rotateX);
    y.set(rotateY);

    const shine = card.querySelector(".shine");
    shine.style.background = `radial-gradient(circle at ${xp}px ${yp}px, rgba(255, 255, 255, 0.5), transparent)`;
    shine.style.opacity = "1";
  };

  const handleEnd = () => {
    x.set(0);
    y.set(0);

    const shine = cardRef.current?.querySelector(".shine");
    if (shine) {
      shine.style.opacity = "0";
    }

  };


  return (
    <motion.article
      id={id}
      ref={cardRef}
      onMouseMove={(e) => handleMove(e, false)}
      onMouseLeave={handleEnd}
      onTouchMove={(e) => handleMove(e, true)}
      onTouchEnd={handleEnd}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative rounded-[60px] md:rounded-[50px] transform-gpu overflow-hidden"
    >
      <Link to={link}>
        <div className="shine absolute inset-0 z-10 opacity-0 pointer-events-none transition-opacity duration-300"></div>

        <div
          className="relative transform-gpu"
          style={{
            transform: "translateZ(75px)",
          }}
        >
          <img src={img} alt={alt} className="w-full h-full object-cover" />
          <div className="absolute w-[85%] top-10 left-1/2 transform -translate-x-1/2 bg-white/40 shadow-lg rounded-xl px-4 py-3">
            <h6 className="text-white font-extrabold text-2xl sm:text-xl text-center text-shadow-xl">
              {title}
            </h6>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default Card;
