import React from "react";
import Footer from "../footer/Footer";
import kalootLogo from "../../assets/images/kaloot-logo.png";
import background from "../../assets/images/motion.png";
import { Link } from "react-router-dom";
import VideoPlayer from "../VideoPlayer";
import motioncover from "../../assets/images/motioncover.png";
import flowercover from "../../assets/images/flowercover.png";

const MotionGraphicsPage = () => {
  return (
    <div className="w-full absolute top-0 bg-gradient-to-b from-[rgb(0,0,0)] to-[#C60A0A]">
      <div className="absolute z-0 opacity-10 w-full h-[1100px]">
        <img
          src={background}
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#860808] pointer-events-none"></div>
      </div>
      <div className="max-w-sm m-auto p-5 text-white z-10">
        <header>
          <Link to="/">
            <div className="w-[60px] h-[60px] animate-pulse shadow-[0_0_25px_2px_rgb(255,255,255)] bg-white bg-opacity-100 rounded-full">
              <img src={kalootLogo} alt="logo" />
            </div>
          </Link>

          <div className="flex flex-col my-6 space-y-4 items-center justify-center ">
            <h1 className="font-bold text-[40px]">موشن گرافیک</h1>
            <h2 className="text-xl leading-10 text-justify">
              تیزرهای موشن گرافیک سه‌بعدی ما، داستان برند شما را به شکلی جذاب و
              چشم‌نواز روایت می‌کنند و تجربه‌ای به‌یادماندنی برای مخاطبانتان خلق
              می‌کنند
            </h2>
          </div>
        </header>
        <main className="my-20 flex flex-col items-center justify-center space-y-20">
          <VideoPlayer
            videoUrl="https://phoenixgameclub.ir/wp-content/uploads/motion.webm"
            coverImage={motioncover}
            isHorizontal={true}
          />

          <VideoPlayer
            videoUrl="https://phoenixgameclub.ir/wp-content/uploads/flower.webm"
            coverImage={flowercover}
            isHorizontal={false}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MotionGraphicsPage;
