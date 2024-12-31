import React from "react";
import TypeIt from "typeit-react";
import kalootLogo from "../../assets/images/kaloot-logo.png";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col px-12 mt-20 items-center justify-between sm:p-8 md:p-10 md:max-w-[90%] sm:m-auto sm:flex-row-reverse sm:justify-center sm:space-x-8 md:space-x-10 sm:space-y-0 space-y-8">
        <div className="relative">
          <div className="w-[250px] h-[250px] animate-pulse shadow-[0_0_25px_10px_rgb(255,255,255)] bg-white bg-opacity-80 rounded-full"></div>
          <div className="absolute top-0">
            <img src={kalootLogo} alt="logo" />
          </div>
        </div>
        <TypeIt
          className="text-white sm:w-3/4 h-40 leading-[50px] md:leading-[55px] lg:leading-[60px] text-center sm:text-start md:text-justify"
          options={{
            strings: [
              '<span class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">کلوت مولتی مدیا</span>',
              '<span class="text-xl md:text-2xl lg:text-3xl font-medium">جایی که هنر و فناوری دست به دست هم می دهند تا تصویر شما خلق شود</span>',
            ],
            speed: 40,
            loop: false,
            cursor: true,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
