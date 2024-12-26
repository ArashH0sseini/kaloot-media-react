import React from "react";
import Copyright from "./Copyright";
import FooterSunRise from "./FooterSunRise";

const Footer = () => {
  return (
    <div>
        <FooterSunRise />

      <div className="px-4 space-y-2 my-10">
        <div className="text-white text-sm flex items-center space-x-4 space-x-reverse">
          <a className="text-white" href="tel:+989132962399">
            شماره تماس: 09132962399
          </a>
        </div>
        <div className="text-white text-sm flex items-center">
          <span>
            آدرس استودیو کلوت: کرمان، بلوار پزشک، خیابان بیهقی، کوچه 4
          </span>
        </div>
        <div className="text-white text-sm flex items-center">
          <span>پست الکترونیکی: Kalootmultimedia@gmail.com</span>
        </div>
      </div>

        <Copyright />
    </div>
  );
};

export default Footer;
