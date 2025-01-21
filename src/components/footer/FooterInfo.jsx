import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center px-4 mt-10 md:mb-10 md:flex-row md:justify-center md:items-center md:space-x-6 md:rtl:space-x-reverse md:flex-wrap md:space-y-0">
      <div className="text-white text-base md:text-lg md:my-4 flex items-center space-x-2 rtl:space-x-reverse border-2 border-b-0 md:border-b-2 border-white p-2 px-4 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl rounded-b-none md:rounded-b-xl shadow-lg">
        <CgPhone className="text-2xl rtl:-rotate-90" />
        <a className="text-white" href="tel:+989132962399">
          {t("phone")}: 09132962399
        </a>
      </div>
      <div className="text-white text-xs md:text-lg md:my-4 flex items-center space-x-2 rtl:space-x-reverse border-2 border-b-0 md:border-b-2 border-white p-2 px-4 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl rounded-b-none md:rounded-b-xl shadow-lg">
        <MdOutlineAlternateEmail className="text-xl" />
        <span>{t("email")}: Kalootmultimedia@gmail.com</span>
      </div>
      <div className="text-white text-xs md:text-lg md:my-4 flex items-center space-x-2 rtl:space-x-reverse border-2 border-b-0 md:border-b-2 border-white p-2 px-4 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl rounded-b-none md:rounded-b-xl shadow-lg">
        <FaMapMarkerAlt className="text-xl" />
        <span>{t("address")}</span>
      </div>
    </div>
  );
};

export default FooterInfo;
