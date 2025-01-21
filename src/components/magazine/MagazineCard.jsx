import React from "react";
import styles from "./MagazineCard.module.css";
import MagazineStarRating from "./MagazineStarRating";
import author from "../../assets/images/arash.jpg";
import { useTranslation } from "react-i18next";

const MagazineCard = ({ img, id, alt }) => {
    const { t } = useTranslation();
  
  return (
    <article
      id={id}
      className={`relative overflow-hidden w-80 rounded-3xl p-[7px] bg-gradient-to-r from-[#ffaf1b] via-[#ff0095] to-[#a201ff] ${styles.backgroundAnimate}`}
    >
      <div className="bg-white/70 backdrop-blur-lg border border-white/20 p-2 rounded-3xl h-[480px]">
        <div className="bg-white rounded-3xl p-2 shadow-2xl h-[340px] flex flex-col justify-between">
          <div className="flex items-center justify-start">
            <div className="h-10 w-10 my-3 mx-2 bg-black/30 rounded-full object-cover">
              <img
                src={author}
                alt=""
                className="w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-gray-600">{t("author")}</span>
              <span className="font-bold text-sm text-black">{t("arash")}</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bg-black/60 rounded-3xl w-full h-full p-3 px-6 cursor-pointer">
              <p className="text-white text-justify leading-[26px]">
              {t("blog")}
              </p>
            </div>
            <img
              src={img}
              alt={alt}
              className="w-full h-[260px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse p-4">
          <MagazineStarRating rating={3} />
        </div>

        <div className="w-full h-16 bg-white rounded-t-xl rounded-b-3xl shadow-2xl p-2 flex">
          <div className="w-1/2 h-full cursor-pointer bg-[#8401ff] rounded-t-xl rtl:rounded-l-xl rounded-3xl flex items-center justify-center">
            <span className="flex items-center justify-center text-white font-bold text-lg">
            {t("view")}
            </span>
          </div>
          <div className="w-1/2 h-full flex flex-col space-y-1 justify-center items-center p-2">
            <span className="font-bold text-sm">{t("publicationDate")}</span>
            <span className="font-medium text-sm">{t("date")}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MagazineCard;
