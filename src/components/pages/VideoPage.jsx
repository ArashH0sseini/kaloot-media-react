import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import kalootLogo from "../../assets/images/kaloot-logo.png";
import background from "../../assets/images/imaging.png";
import VideoPlayer from "../VideoPlayer";
import drcover from "../../assets/images/dr.png";
import drrotin from "../../assets/images/rotin.png";
import post from "../../assets/images/post.png";

const VideoPage = () => {
  return (
    <div className="w-full relative bg-gradient-to-b from-[rgb(0,0,0)] to-[#C60A0A]">
      <div className="absolute z-0 opacity-10 w-full h-[1100px]">
        <img
          src={background}
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#860808] pointer-events-none"></div>
      </div>
      <div className="m-auto p-5 text-white z-10 relative">
        <header className="relative z-20">
          <Link to="/">
            <div className="w-[60px] h-[60px] animate-pulse shadow-[0_0_25px_2px_rgb(255,255,255)] bg-white bg-opacity-100 rounded-full">
              <img src={kalootLogo} alt="logo" />
            </div>
          </Link>
          <div className="flex flex-col w-[90%] m-auto my-6 space-y-4 items-center justify-center">
            <h1 className="font-bold text-[40px]">تصویربرداری</h1>
            <h2 className="text-xl leading-10 text-justify">
              تصویربرداری حرفه‌ای ما با تکنیک‌های پیشرفته، لحظات برند شما را به
              تصاویری شگفت‌انگیز تبدیل می‌کند که پیام شما را به بهترین شکل ممکن
              به مخاطب منتقل می‌کند
            </h2>
          </div>
        </header>
        <main className="w-full my-20 flex flex-col items-center justify-center space-y-20">
          <div className="w-full flex flex-col-reverse items-center justify-center lg:flex-row lg:items-center lg:justify-between">
            <div class="flex flex-col justify-center items-center space-y-6 w-[85%] lg:w-1/2 m-20 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg ">
              <h2 className="text-3xl font-bold text-[#FF7B6E]">
                تیتر توضیح ویدئو
              </h2>
              <p className="text-xl leading-10 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                illum eius id quidem voluptas iusto magni, exercitationem odit
                accusamus in saepe dolore enim facilis animi fuga neque hic illo
                laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Ipsam illum eius id quidem voluptas iusto magni,
                exercitationem odit accusamus in saepe dolore enim facilis animi
                fuga neque hic illo laboriosam! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Ipsam illum eius id quidem
                voluptas iusto magni, exercitationem odit accusamus in saepe
                dolore enim facilis animi fuga neque hic illo laboriosam!
              </p>
            </div>
              <VideoPlayer
                videoUrl="https://phoenixgameclub.ir/wp-content/uploads/rotin.webm"
                coverImage={drrotin}
                isHorizontal={false}
              />
          </div>
          <div className="w-full flex flex-col-reverse items-center justify-center lg:flex-row-reverse lg:items-center lg:justify-between">
            <div class="flex flex-col justify-center items-center space-y-6 w-[85%] lg:w-1/2 m-20 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg ">
              <h2 className="text-3xl font-bold text-[#FF7B6E]">
                تیتر توضیح ویدئو
              </h2>
              <p className="text-xl leading-10 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                illum eius id quidem voluptas iusto magni, exercitationem odit
                accusamus in saepe dolore enim facilis animi fuga neque hic illo
                laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Ipsam illum eius id quidem voluptas iusto magni,
                exercitationem odit accusamus in saepe dolore enim facilis animi
                fuga neque hic illo laboriosam! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Ipsam illum eius id quidem
                voluptas iusto magni, exercitationem odit accusamus in saepe
                dolore enim facilis animi fuga neque hic illo laboriosam!
              </p>
            </div>
            <VideoPlayer
              videoUrl="https://phoenixgameclub.ir/wp-content/uploads/dr-post.webm"
              coverImage={post}
              isHorizontal={false}
            />
          </div>

          <div className="w-full flex flex-col-reverse items-center justify-center lg:flex-row lg:items-center lg:justify-between">
            <div class="flex flex-col justify-center items-center space-y-6 w-[85%] lg:w-1/2 m-20 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg ">
              <h2 className="text-3xl font-bold text-[#FF7B6E]">
                تیتر توضیح ویدئو
              </h2>
              <p className="text-xl leading-10 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                illum eius id quidem voluptas iusto magni, exercitationem odit
                accusamus in saepe dolore enim facilis animi fuga neque hic illo
                laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Ipsam illum eius id quidem voluptas iusto magni,
                exercitationem odit accusamus in saepe dolore enim facilis animi
                fuga neque hic illo laboriosam! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Ipsam illum eius id quidem
                voluptas iusto magni, exercitationem odit accusamus in saepe
                dolore enim facilis animi fuga neque hic illo laboriosam!
              </p>
            </div>
            <VideoPlayer
              videoUrl="https://phoenixgameclub.ir/wp-content/uploads/dr.webm"
              coverImage={drcover}
              isHorizontal={false}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;
