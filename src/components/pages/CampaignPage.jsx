import React from "react";
import Footer from "../footer/Footer";
import background from "../../assets/images/content.png";
import WhiteBoard from "../3dModels/WhiteBoard";
import { useTranslation } from "react-i18next";
import Header from "../header/Header";

const CampaignPage = () => {
  const { t } = useTranslation();

  const cards= [
    {
      title: t("campaignPage.main.whyChooseUs.strategy.title"),
      name: t("campaignPage.main.whyChooseUs.strategy.description"),
    },
    {
      title: t("campaignPage.main.whyChooseUs.creativeContent.title"),
      name: t("campaignPage.main.whyChooseUs.creativeContent.description"),
    },
    {
      title: t("campaignPage.main.whyChooseUs.socialMediaManagement.title"),
      name: t("campaignPage.main.whyChooseUs.socialMediaManagement.description"),
    },
    {
      title: t("campaignPage.main.whyChooseUs.analytics.title"),
      name: t("campaignPage.main.whyChooseUs.analytics.description"),
    },
  ]

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
        <Header
          title={t("campaignPage.header.title")}
          description={t("campaignPage.header.description")}
        />
        <main>
        <div
          className="w-full flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-end lg:items-end"
        >
          <div className="flex flex-col justify-center items-center space-y-6 w-[85%] m-20 p-6  bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#FF7B6E]">
              {t("campaignPage.main.campaignDefinition.title")}
            </h2>
            <p
              className="text-xl leading-10 text-justify"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("campaignPage.main.campaignDefinition.description")}
            </p>
          </div>
            <WhiteBoard />
        </div>
          <div className="flex flex-col items-center justify-center space-y-6 my-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
              {t("campaignPage.main.whyChooseUs.title")}
            </h3>

            <section className="grid grid-cols-1 lg:grid-cols-2  max-w-6xl m-auto gap-6">
                  {cards.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="flex flex-col items-center justify-center space-y-4 w-[80%] h-[160px] m-auto cursor-pointer p-6 bg-black/20 border border-white/20 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
                    >
                      <h3 className="text-xl font-bold text-[#FF7B6E]">
                        {card.title}
                      </h3>
                      <p className="text-white">{card.name}</p>
                    </div>
                  ))}
                </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CampaignPage;
