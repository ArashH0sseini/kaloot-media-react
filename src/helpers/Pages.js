import React from "react";
import { Routes, Route } from "react-router-dom";
import App from '../App';
import Home from "../components/Home";
import VFXPage from "../components/pages/VFXPage";
import CampaignPage from "../components/pages/CampaignPage";
import VideoPage from "../components/pages/VideoPage";
import MotionGraphicsPage from "../components/pages/MotionGraphicsPage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<CampaignPage />} />
        <Route path="/vfx" element={<VFXPage />} />
        <Route path="/Video" element={<VideoPage />} />
        <Route path="/motion" element={<MotionGraphicsPage />} />
      </Route>
    </Routes>
  );
};

export default Pages;
