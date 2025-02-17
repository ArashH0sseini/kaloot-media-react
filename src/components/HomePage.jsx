import Header from "./header/Header";
import Arrows from "./header/Arrows";
import Kelaket from "./3dModels/Kelaket";
import Services from "./services/Services";
import ConsultationForm from "./consultation/Consultation";
import Footer from "./footer/Footer";
import AboutUs from "./AboutUs";
import FollowInstagram from "./Instagram/FollowInstagram";
import Magazine from "./magazine/Magazine";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();
  
  return (
    <>
      {/* <Rolls3dBackground /> */}
      <div id="home" className="w-full absolute top-0 bg-gradient-to-b from-[rgb(0,0,0)] via-[rgb(255,65,65)] to-[rgb(0,0,0)]">
        <Header title={t("kaloot")} description={t("slogan")} />
        <main>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-1/2">
              <AboutUs />
            </div>
            <div className="w-full lg:w-1/2 mb-12">
              <Arrows />
              <Kelaket />
            </div>
          </div>
          <Services />
          <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between">
            <ConsultationForm />
            <FollowInstagram />
          </div>
          <Magazine />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
