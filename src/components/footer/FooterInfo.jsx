import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";


const FooterInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 mt-10 md:mb-10 md:flex-row md:justify-center md:items-center md:space-x-6 md:space-x-reverse md:flex-wrap md:space-y-0">
      <div className="text-white text-base md:text-lg md:my-4 flex items-center space-x-2 space-x-reverse border-2 border-b-0 md:border-b-2 border-white p-2 px-4 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl rounded-b-none md:rounded-b-xl shadow-lg">
        <CgPhone className="text-2xl -rotate-90" />
        <a className="text-white" href="tel:+989132962399">
          شماره تماس: 09132962399
        </a>
      </div>
      <div className="text-white text-xs md:text-lg md:my-4 flex items-center space-x-2 space-x-reverse border-2 border-b-0 md:border-b-2 border-white p-2 px-4 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl rounded-b-none md:rounded-b-xl shadow-lg">
        <MdOutlineAlternateEmail className="text-xl" />
        <span>پست الکترونیکی: Kalootmultimedia@gmail.com</span>
      </div>
      <div className="text-white text-xs md:text-lg md:my-4 flex items-center space-x-2 space-x-reverse border-2 border-b-0 md:border-b-2 border-white p-2 px-4 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl rounded-b-none md:rounded-b-xl shadow-lg">
        <FaMapMarkerAlt className="text-xl" />
        <span>آدرس استودیو کلوت: کرمان،بلوار پزشک،خیابان بیهقی،کوچه4</span>
      </div>
    </div>
  );
};

export default FooterInfo;
