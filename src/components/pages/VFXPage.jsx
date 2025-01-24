import React from "react";
import Footer from "../footer/Footer";
import background from "../../assets/images/effect.png";
import VideoPlayer from "../VideoPlayer";
import Header from "../header/Header";
import { useTranslation } from "react-i18next";
import eyecover from "../../assets/images/eye.png";
import phonecover from "../../assets/images/phone.png";
import lioncover from "../../assets/images/lion.png";
import cafecover from "../../assets/images/cafe.png";
import borjcover from "../../assets/images/borj.png";

const VFXPage = () => {
  const { t } = useTranslation();

  const videoData = [
    {
      videoUrl: "https://phoenixgameclub.ir/wp-content/uploads/eye.webm",
      coverImage: eyecover,
      title: t("VFXPage.videos.0.title"),
      description: t("VFXPage.videos.0.description"),
    },
    {
      videoUrl: "https://phoenixgameclub.ir/wp-content/uploads/phone.webm",
      coverImage: phonecover,
      title: t("VFXPage.videos.1.title"),
      description: t("VFXPage.videos.1.description"),
    },
    {
      videoUrl: "https://phoenixgameclub.ir/wp-content/uploads/lion.webm",
      coverImage: lioncover,
      title: t("VFXPage.videos.2.title"),
      description: t("VFXPage.videos.2.description"),
    },
    {
      videoUrl: "https://phoenixgameclub.ir/wp-content/uploads/cafe.webm",
      coverImage: cafecover,
      title: t("VFXPage.videos.3.title"),
      description: t("VFXPage.videos.3.description"),
    },
    {
      videoUrl: "https://phoenixgameclub.ir/wp-content/uploads/borj.webm",
      coverImage: borjcover,
      title: t("VFXPage.videos.4.title"),
      description: t("VFXPage.videos.4.description"),
    },
  ];

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

      <div className="m-auto p-5 text-white relative z-10">
        <Header
          title={t("VFXPage.header.title")}
          description={t("VFXPage.header.description")}
        />
        <main className="w-full my-20 flex flex-col items-center justify-center space-y-20">
          {videoData.map((video, index) => (
            <div
              key={index}
              className={`w-full flex flex-col-reverse items-center justify-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } lg:items-center lg:justify-between`}
            >
              <div className="flex flex-col justify-center items-center space-y-6 w-[85%] lg:w-1/2 m-20 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-[#FF7B6E]">
                  {video.title}
                </h2>
                <p
                  className="text-xl leading-10 text-justify"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {video.description}
                </p>
              </div>
              <VideoPlayer
                videoUrl={video.videoUrl}
                coverImage={video.coverImage}
                isHorizontal={index % 2 !== 0}
              />
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VFXPage;
