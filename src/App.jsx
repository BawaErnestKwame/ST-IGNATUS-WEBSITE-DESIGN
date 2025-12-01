import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages";       // lowercase folder now
import Branches from "./pages/Branches";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

// 🩵 Import About components (correct folder)
import HospitalOverview from "./pages/AboutComponents/HospitalOverview";
import WhoWeAre from "./pages/AboutComponents/WhoWeAre";
import Mission from "./pages/AboutComponents/Mission";
import Awards from "./pages/AboutComponents/Awards";
import Experience from "./pages/AboutComponents/Experience";
import SuccessStory from "./pages/AboutComponents/SuccessStory";

// Pages that were previously in uppercase folder
import Blog from "./pages/Blog";
import Berekum from "./pages/Berekum";
import Dormaa from "./pages/Dormaa";

// Service list pages
import Glaucoma from './pages/serviceList/Glaucoma';
import DvlEyeTeste from './pages/serviceList/DvlEyeTeste';
import EyeSurgeries from './pages/serviceList/EyeSurgeries';
import Refraction from './pages/serviceList/Refraction';
import InstitutionalEye from './pages/serviceList/InstitutionalEye';

import Team from "./pages/Team";
import DrIgnatus from "./Components/DrIgnatus";
import ScrollToTop from "./Components/ScrollToTop";


const App = () => {
  return (
      <div className="min-h-screen flex flex-col">
         <ScrollToTop />
         <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* 🩵 About section with nested routes */}
          <Route path="/about" element={<About />}>
            <Route index element={<WhoWeAre />} />
            <Route path="mission" element={<Mission />} />
            <Route path="awards" element={<Awards />} />
            <Route path="experience" element={<Experience />} />
            <Route path="success" element={<SuccessStory />} />
          </Route>

          {/* Services section with nested routes */}
          <Route path="/services" element={<Services/>}>
            <Route index element={<Glaucoma/>} />
            <Route path="dvlEyeTeste" element={<DvlEyeTeste/>} />
            <Route path="eyeSurgeries" element={<EyeSurgeries/>} />
            <Route path="refraction" element={<Refraction/>} />
            <Route path="institutionalEye" element={<InstitutionalEye/>} />
          </Route>

          <Route path="/pages" element={<Pages />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/drIgnatus" element={<DrIgnatus/> } />
          <Route path="/team" element={<Team/> } />
          <Route path="/dormaa" element={<Dormaa/> } />
          <Route path="/berekum" element={<Berekum/> } />
        </Routes>

        <Footer />
      </div>
  );
};

export default App;
