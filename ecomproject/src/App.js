import React from "react";
import LandingPage from "./stores/pages/landingPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MobilePage from "./stores/pages/MobilePage";
import FridgePage from "./stores/pages/FridgePage";
import WatchPage from "./stores/pages/WatchPage";
import MenPage from "./stores/pages/MenPage";
import WomenPage from "./stores/pages/WomenPage";
import MobileSingle from "./Singles/MobileSingle";
const Hello = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Fridge" element={<FridgePage />} />
        <Route path="/Mobiles" element={<MobilePage />} />
        <Route path="/Watches" element={<WatchPage />} />
        <Route path="/Mens" element={<MenPage />} />
        <Route path="/Women" element={<WomenPage />} />
        <Route path='/Mobiles/:id'element={<MobileSingle />} />
      </Routes>
    </div>
  );
};
export default Hello;
