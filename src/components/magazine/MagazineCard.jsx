import React from "react";
import styles from "./MagazineCard.module.css";

const MagazineCard = ({ img, id, alt }) => {
  return (
    <article
      id={id}
      className={`relative overflow-hidden w-80 rounded-3xl p-[7px] bg-gradient-to-r from-blue-500 via-sky-500 to-blue-800 ${styles.backgroundAnimate}`} // کلاس ماژولار را اضافه کنید
    >
      <div className="bg-white/60 backdrop-blur-lg border border-white/20 p-2 rounded-3xl h-96">
        <div className="m-2">
            <div className="relative h-10 w-10 rounded-full">
            <span className="bg-green-500 h-full w-full rounded-full p-1 animate-pulse"></span>
            </div>
          <div className="absolute top-0 rounded-full w-8 h-8 bg-white flex items-center justify-center">
            <img src="" alt="" />
          </div>
        </div>
        <img
          src={img}
          alt={alt}
          className="w-full h-60 object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </article>
  );
};

export default MagazineCard;
