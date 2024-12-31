import React from "react";
import { Routes, Route } from "react-router-dom"; 
import CampaignPage from "./pages/CampaignPage";
import VFXPage from "./pages/VFXPage";
import VideographyPage from "./pages/VideographyPage";
import MotionGraphicsPage from "./pages/MotionGraphicsPage";
import Home from "./Home";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaigns" element={<CampaignPage />} />
      <Route path="/vfx" element={<VFXPage />} />
      <Route path="/videography" element={<VideographyPage />} />
      <Route path="/motion-graphics" element={<MotionGraphicsPage />} />
    </Routes>
  );
};

export default Pages;
