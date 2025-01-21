import React from "react";
import { Routes, Route } from "react-router-dom";
import App from '../App';
import HomePage from "../components/HomePage";
import VFXPage from "../components/pages/VFXPage";
import CampaignPage from "../components/pages/CampaignPage";
import VideoPage from "../components/pages/VideoPage";
import MotionGraphicsPage from "../components/pages/MotionGraphicsPage";
import ScrollToTop from "./ScrollToTop";

const Pages = () => {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/campaigns" element={<CampaignPage />} />
          <Route path="/vfx" element={<VFXPage />} />
          <Route path="/imaging" element={<VideoPage />} />
          <Route path="/motion" element={<MotionGraphicsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
