import React from "react";
import Kelaket from "./3dModels/Kelaket";
import Footer from "./footer/Footer";
import Services from "./services/Services";
import Header from "./header/Header";

const Main = () => {
  return (
    <div className="w-full absolute top-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgb(255,65,65)] to-[rgb(0,0,0)]">
      <Header />
      <Kelaket />
      <Services />
      <Footer />
    </div>
  );
};

export default Main;
