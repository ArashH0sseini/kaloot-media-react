import React from "react";
import Footer from "../footer/Footer";
import kalootLogo from "../../assets/images/kaloot-logo.png";
import background from "../../assets/images/effect.png";
import { Link } from "react-router-dom";
import VideoPlayer from "../VideoPlayer"
import eyecover from '../../assets/images/eye.png'
import phonecover from '../../assets/images/phone.png'

const VFXPage = () => {
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

  {/* Make sure this div has relative positioning */}
  <div className="max-w-sm m-auto p-5 text-white relative z-10">
    <header>
      <Link to="/">
        <div className="w-[60px] h-[60px] animate-pulse shadow-[0_0_25px_2px_rgb(255,255,255)] bg-white bg-opacity-100 rounded-full">
          <img src={kalootLogo} alt="logo" />
        </div>
      </Link>
      <div className="flex flex-col my-6 space-y-4 items-center justify-center">
        <h1 className="font-bold text-[40px]">جلوه های ویژه</h1>
        <h2 className="text-xl leading-10 text-justify">
          با جلوه‌های ویژه حرفه‌ای، داستانتان را به تصاویری خیره‌کننده و
          فراموش‌نشدنی تبدیل کنید.
        </h2>
      </div>
    </header>
    <main className="my-20 flex flex-col items-center justify-center space-y-20">
      <VideoPlayer
        videoUrl="https://phoenixgameclub.ir/wp-content/uploads/eye.webm"
        coverImage={eyecover}
        isHorizontal={false}
      />
      <VideoPlayer
        videoUrl="https://phoenixgameclub.ir/wp-content/uploads/phone.webm"
        coverImage={phonecover}
        isHorizontal={true}
      />
    </main>
  </div>
  <Footer />
</div>

  );
};

export default VFXPage;
