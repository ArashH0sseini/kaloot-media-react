import React from "react";
import TypeIt from "typeit-react";
import kalootLogo from "../../assets/images/kaloot-logo.png";
import Arrows from "./Arrows";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col px-12 mt-20 items-center justify-between md:p-10 md:max-w-[90%] md:m-auto md:flex-row-reverse md:justify-center md:space-x-10 md:space-y-0 space-y-8 ">
        <div className="relative">
          <div className="w-[250px] h-[250px] animate-pulse shadow-[0_0_25px_10px_rgb(255,255,255)] bg-white bg-opacity-80 rounded-full"></div>
          <div className="absolute top-0">
            <img src={kalootLogo} alt="logo" />
          </div>
        </div>
        <TypeIt
          className="text-white text-2xl md:text-3xl lg:text-4xl font-black h-40 leading-[50px] md:leading-[55px] lg:leading-[60px] text-center md:text-justify"
          options={{
            strings: [
              '<span class="text-2xl md:text-5xl lg:text-6xl font-extrabold">کلوت مولتی مدیا</span>',
              '<span class="text-xl md:text-2xl lg:text-3xl font-medium">جایی که هنر و فناوری دست به دست هم می دهند تا تصویر شما خلق شود</span>',
            ],
            speed: 40,
            loop: false,
            cursor: true,
          }}
        />
      </div>

      <Arrows />
    </div>
  );
};

export default Header;
