import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import DrIgnatus from "./components/DrIgnatus.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pages from "./pages/Pages.jsx";
import Branches from "./pages/Branches.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Berekum from "./pages/Berekum.jsx";
import Dormaa from "./pages/Dormaa.jsx";
import Team from "./pages/Team.jsx";

// About components
import HospitalOverview from "./pages/AboutComponents/HospitalOverview.jsx";
import WhoWeAre from "./pages/aboutcomponents/WhoWeAre.jsx";
import Mission from "./pages/aboutcomponents/Mission.jsx";
import Awards from "./pages/aboutcomponents/Awards.jsx";
import Experience from "./pages/aboutcomponents/Experience.jsx";
import SuccessStory from "./pages/aboutcomponents/SuccessStory.jsx";

// Service list components
import Glaucoma from "./pages/servicelist/Glaucoma.jsx";
import DvlEyeTeste from "./pages/servicelist/DvlEyeTeste.jsx";
import EyeSurgeries from "./pages/servicelist/EyeSurgeries.jsx";
import Refraction from "./pages/servicelist/Refraction.jsx";
import InstitutionalEye from "./pages/servicelist/InstitutionalEye.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* About section with nested routes */}
        <Route path="/about" element={<About />}>
          <Route index element={<WhoWeAre />} />
          <Route path="mission" element={<Mission />} />
          <Route path="awards" element={<Awards />} />
          <Route path="experience" element={<Experience />} />
          <Route path="success" element={<SuccessStory />} />
        </Route>

        {/* Services section with nested routes */}
        <Route path="/services" element={<Services />}>
          <Route index element={<Glaucoma />} />
          <Route path="dvleyeTeste" element={<DvlEyeTeste />} />
          <Route path="eyesurgeries" element={<EyeSurgeries />} />
          <Route path="refraction" element={<Refraction />} />
          <Route path="institutionaleye" element={<InstitutionalEye />} />
        </Route>

        <Route path="/pages" element={<Pages />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/drIgnatus" element={<DrIgnatus />} />
        <Route path="/team" element={<Team />} />
        <Route path="/dormaa" element={<Dormaa />} />
        <Route path="/berekum" element={<Berekum />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
