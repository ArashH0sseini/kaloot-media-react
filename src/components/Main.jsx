import React from "react";
import kalootLogo from "../assets/images/kaloot-logo.png";
import TypeIt from "typeit-react";
import content from "../assets/images/content.png";
import effect from "../assets/images/effect.png";
import imaging from "../assets/images/imaging.png";
import motion from "../assets/images/motion.png";
import Card from "./Card";
import Kelaket from "./Kelaket";

const Main = () => {
  const images = [
    { id: 1, src: content, alt: "content", title: "کمپین تبلیغاتی" },
    { id: 2, src: effect, alt: "effect", title: "جلوه های ویژه" },
    { id: 3, src: imaging, alt: "imaging", title: "تصویر برداری" },
    { id: 4, src: motion, alt: "motion", title: "موشن گرافیک" },
  ];

  return (
    <div className="w-full absolute top-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgb(255,65,65)] to-[rgb(0,0,0)]">
      <div className="flex flex-col p-20 items-center justify-between md:p-10 md:max-w-[90%] md:m-auto md:flex-row-reverse md:justify-center md:space-x-10 md:space-y-0 space-y-8 my-10">
        <div className="relative">
          <div className="w-[250px] h-[250px] animate-pulse shadow-[0_0_25px_10px_rgb(255,255,255)] bg-white bg-opacity-80 rounded-full"></div>
          <div className="absolute top-0">
            <img src={kalootLogo} alt="logo" />
          </div>
        </div>
        <TypeIt
          className="text-white text-2xl md:text-3xl lg:text-4xl font-black h-full leading-[50px] md:leading-[55px] lg:leading-[60px] text-center md:text-justify"
          options={{
            strings: [
              '<span class="text-4xl md:text-5xl lg:text-6xl font-extrabold">کلوت مولتی مدیا</span>',
              '<span class="text-xl md:text-2xl lg:text-3xl font-medium">جایی که هنر و فناوری دست به دست هم می دهند تا تصویر شما خلق شود</span>',
            ],
            speed: 40,
            loop: false,
            cursor: true,
          }}
        />
      </div>
      <div className=" flex flex-col items-center justify-center">
        {/* <Kelaket /> */}
        <div className="relative w-full">
          <hr className="absolute top-1/2 left-0 w-full shadow-lg border-t-4 border-[#FF7373] bg-[#FF7373] transform -translate-y-1/2 z-0" />
          <div className="relative w-[55%] sm:w-[30%] md:w-[25%] lg:w-[20%] text-center z-10 bg-[#FF7373] rounded-2xl py-2 px-4 shadow-lg m-auto">
            <h3 className="font-bold text-white text-4xl">خدمات ما</h3>
          </div>
        </div>
        {/* <hr className="absolute top-1/2 w-full shadow-lg border-t-4 border-[#FF7373] bg-[#FF7373] " /> */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 justify-items-center items-center my-2 p-12">
          {images.map((image) => (
            <Card
              img={image.src}
              alt={image.alt}
              title={image.title}
              id={image.id}
            />
          ))}
        </div>
        <span className="animate-spin">.</span>
      </div>
    </div>
  );
};

export default Main;
