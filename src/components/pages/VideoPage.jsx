import React from "react";
import Footer from "../footer/Footer";
import kalootLogo from "../../assets/images/kaloot-logo.png";
import background from "../../assets/images/imaging.png";
import { Link } from "react-router-dom";

const VideoPage = () => {
  return (
    <div className="w-full relative bg-gradient-to-b from-[rgb(0,0,0)] to-[#C60A0A]">
      <div className="absolute z-0 opacity-10 w-full h-[1100px]">
        <img src={background} alt="" className="w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#860808] pointer-events-none"></div>
      </div>
      <div className="max-w-sm m-auto p-5 text-white z-10 relative">
        <header className="relative z-20">
          <Link to="/">
            <div className="w-[60px] h-[60px] animate-pulse shadow-[0_0_25px_2px_rgb(255,255,255)] bg-white bg-opacity-100 rounded-full">
              <img src={kalootLogo} alt="logo" />
            </div>
          </Link>
          <div className="flex flex-col my-6 space-y-4 items-center justify-center">
            <h1 className="font-bold text-[40px]">تصویربرداری</h1>
            <h2 className="text-xl leading-10 text-justify">
              تصویربرداری حرفه‌ای ما با تکنیک‌های پیشرفته، لحظات برند شما را به تصاویری شگفت‌انگیز تبدیل می‌کند که پیام شما را به بهترین شکل ممکن به مخاطب منتقل می‌کند
            </h2>
          </div>
        </header>
        <main className="my-20 flex flex-col items-center justify-center space-y-20">
          <div
            className="relative transform-gpu rounded-[70px] md:rounded-[50px]"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <img
              src={background}
              alt="content"
              className="w-full h-full object-cover rounded-[70px] md:rounded-[50px]"
            />
            <div className="absolute w-[85%] top-20 left-1/2 transform -translate-x-1/2 bg-white/40 shadow-lg rounded-xl px-4 py-3">
              <h6 className="text-white font-extrabold text-2xl sm:text-xl text-center">
                THUMBNAIL VIDEO
              </h6>
            </div>
          </div>

          <div
            className="relative transform-gpu rounded-[70px] md:rounded-[50px]"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <img
              src={background}
              alt="content"
              className="w-full h-full object-cover rounded-[70px] md:rounded-[50px]"
            />
            <div className="absolute w-[85%] top-20 left-1/2 transform -translate-x-1/2 bg-white/40 shadow-lg rounded-xl px-4 py-3">
              <h6 className="text-white font-extrabold text-2xl sm:text-xl text-center">
                THUMBNAIL VIDEO
              </h6>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;
