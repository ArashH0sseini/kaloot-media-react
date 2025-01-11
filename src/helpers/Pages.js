import React from "react";
import { Routes, Route } from "react-router-dom";
import App from '../App';
import Home from "../components/Home";
import VFXPage from "../components/pages/VFXPage";
import CampaignPage from "../components/pages/CampaignPage";
import VideoPage from "../components/pages/VideoPage";
import MotionGraphicsPage from "../components/pages/MotionGraphicsPage";
import ScrollToTop from "./ScrollToTop";

const Pages = () => {

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<CampaignPage />} />
          <Route path="/vfx" element={<VFXPage />} />
          <Route path="/Video" element={<VideoPage />} />
          <Route path="/motion" element={<MotionGraphicsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Pages;
