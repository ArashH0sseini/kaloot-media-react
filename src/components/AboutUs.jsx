import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex items-center justify-center p-6 py-8 lg:my-28">
      <div class="flex flex-col justify-center items-center w-[85%] md:w-[75%] p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg ">
        <p class="text-white text-xl text-justify leading-[45px]">
          {t("about")}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
