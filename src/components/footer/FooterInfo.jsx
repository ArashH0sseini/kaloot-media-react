import React from "react";

const FooterInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 space-y-2 md:space-y-0 my-10">
      <div className="text-white text-sm flex items-center space-x-4 space-x-reverse">
        <a className="text-white" href="tel:+989132962399">
          شماره تماس: 09132962399
        </a>
      </div>
      <div className="text-white text-sm flex items-center">
        <span>آدرس استودیو کلوت: کرمان،بلوار پزشک،خیابان بیهقی،کوچه4</span>
      </div>
      <div className="text-white text-sm flex items-center">
        <span>پست الکترونیکی: Kalootmultimedia@gmail.com</span>
      </div>
    </div>
  );
};

export default FooterInfo;
