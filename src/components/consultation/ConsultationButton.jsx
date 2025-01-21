import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";

const ConsultationButton = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="w-2/3 flex items-center justify-center p-1 rounded-xl hover:scale-110 transform 
        transition duration-300 animated-background bg-gradient-to-r from-[#ffb71b] via-[#ffae00] to-[#ff7301] shadow-[0_0_20px_5px_rgb(255,174,0)]"
      >
        <a
          href="tel:+989132962399"
          className="w-full p-2 rtl:space-x-reverse border-4 rounded-xl bg-black/20 backdrop-blur-lg
        text-white flex items-center justify-center space-x-4 overflow-hidden border-t-transparent 
        border-r-transparent border-b-transparent border-l-transparent"
        >
          <FaPhoneAlt className="text-2xl rtl:rotate-[270deg]" />
          <span className="font-semibold text-xl">{t("consultation")}</span>
        </a>
      </div>
    </div>
  );
};

export default ConsultationButton;
