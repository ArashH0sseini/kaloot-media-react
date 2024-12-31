import React from "react";
import Kelaket from "./3dModels/Kelaket";
import Services from "./services/Services";
import Arrows from "./header/Arrows";
import ConsultationForm from "./consultation/ConsultationForm";
import FollowInstagram from "./Instagram/FollowInstagram";
const Home = () => {
  return (
    <main>
      <Arrows />
      <Kelaket />
      <Services />
      <ConsultationForm />
      {/* <FollowInstagram /> */}
    </main>
  );
};

export default Home;
