import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer/Footer";
import background from "../../assets/images/imaging.png";
import VideoPlayer from "../VideoPlayer";
import drcover from "../../assets/images/dr.png";
import trade from "../../assets/images/trade.png";
import post from "../../assets/images/post.png";
import Header from "../header/Header";

const VideoPage = () => {
  const { t } = useTranslation();

  const videoData = [
    {
      videoUrl: "https://phoenixgameclub.ir/wp-content/uploads/rotin.webm",
      coverImage: trade,
      title: t("videoPage.videos.0.title"),
      description: t("videoPage.videos.0.description"),
      cards: [
        {
          title: t("videoPage.videos.0.cards.0.title"),
          name: t("videoPage.videos.0.cards.0.name"),
        },
        {
          title: t("videoPage.videos.0.cards.1.title"),
          name: t("videoPage.videos.0.cards.1.name"),
        },
        {
          title: t("videoPage.videos.0.cards.2.title"),
          name: t("videoPage.videos.0.cards.2.name"),
        },
        {
          title: t("videoPage.videos.0.cards.3.title"),
          name: t("videoPage.videos.0.cards.3.name"),
        },
      ],
    },
    {
      videoUrl: "https://phoenixgameclub.ir/wp-content/uploads/dr-post.webm",
      coverImage: post,
      title: t("videoPage.videos.1.title"),
      description: t("videoPage.videos.1.description"),
      cards: [
        {
          title: t("videoPage.videos.1.cards.0.title"),
          name: t("videoPage.videos.1.cards.0.name"),
        },
        {
          title: t("videoPage.videos.1.cards.1.title"),
          name: t("videoPage.videos.1.cards.1.name"),
        },
        {
          title: t("videoPage.videos.1.cards.2.title"),
          name: t("videoPage.videos.1.cards.2.name"),
        },
        {
          title: t("videoPage.videos.1.cards.3.title"),
          name: t("videoPage.videos.1.cards.3.name"),
        },
      ],
    },
    {
      videoUrl: "https://phoenixgameclub.ir/wp-content/uploads/dr.webm",
      coverImage: drcover,
      title: t("videoPage.videos.2.title"),
      description: t("videoPage.videos.2.description"),
      cards: [
        {
          title: t("videoPage.videos.2.cards.0.title"),
          name: t("videoPage.videos.2.cards.0.name"),
        },
        {
          title: t("videoPage.videos.2.cards.1.title"),
          name: t("videoPage.videos.2.cards.1.name"),
        },
        {
          title: t("videoPage.videos.2.cards.2.title"),
          name: t("videoPage.videos.2.cards.2.name"),
        },
        {
          title: t("videoPage.videos.2.cards.3.title"),
          name: t("videoPage.videos.2.cards.3.name"),
        },
      ],
    },
  ];

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
      <div className="m-auto text-white z-10 relative">
          <Header title={t("videoPage.header.title")} description={t("videoPage.header.description")} />
        <main className="w-full my-36 flex flex-col items-center justify-center space-y-20">
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
                <section className="w-full flex flex-wrap items-center justify-center gap-6">
                  {video.cards.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="flex flex-col items-center justify-center space-y-4 w-[280px] h-[120px] cursor-pointer p-6 bg-black/20 border border-white/20 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
                    >
                      <h3 className="text-xl font-bold text-[#FF7B6E]">
                        {card.title}
                      </h3>
                      <p className="text-white">{card.name}</p>
                    </div>
                  ))}
                </section>
              </div>
              <VideoPlayer
                videoUrl={video.videoUrl}
                coverImage={video.coverImage}
                isHorizontal={false}
              />
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;
