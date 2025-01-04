import React from "react";
import { Routes, Route } from "react-router-dom";
import App from '../App';
import VFXPage from "../components/pages/VFXPage";
import CampaignPage from "../components/pages/CampaignPage";
import VideographyPage from "../components/pages/VideographyPage";
import MotionGraphicsPage from "../components/pages/MotionGraphicsPage";
import Home from "../components/Home";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />                                                             
        <Route path="/campaigns" element={<CampaignPage />} />
        <Route path="/vfx" element={<VFXPage />} />
        <Route path="/videography" element={<VideographyPage />} />
        <Route path="/motion-graphics" element={<MotionGraphicsPage />} />
      </Route>
    </Routes>
  );
};

export default Pages;
