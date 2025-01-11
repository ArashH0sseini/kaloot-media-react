import Rolls3dBackground from "./Rolls3dBackground";
import Header from "./header/Header";
import Arrows from "./header/Arrows";
import Kelaket from "./3dModels/Kelaket";
import Services from "./services/Services";
import ConsultationForm from "./consultation/ConsultationForm";
import Footer from "./footer/Footer";
import FollowInstagram from "./Instagram/FollowInstagram";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <>
      <Rolls3dBackground />
      <div className="w-full absolute top-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgb(255,65,65)] to-[rgb(0,0,0)]">
        <Header />
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
          <ConsultationForm />
          <FollowInstagram />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
