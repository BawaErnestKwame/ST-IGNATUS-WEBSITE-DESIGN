import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import DrIgnatus from "./Components/DrIgnatus.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Branches from "./pages/Branches.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Berekum from "./pages/Berekum.jsx";
import Dormaa from "./pages/Dormaa.jsx";
import Team from "./pages/Team.jsx";

// AboutComponents
import HospitalOverview from "./pages/AboutComponents/HospitalOverview.jsx";
import WhoWeAre from "./pages/AboutComponents/WhoWeAre.jsx";
import Mission from "./pages/AboutComponents/Mission.jsx";
import Awards from "./pages/AboutComponents/Awards.jsx";
import Experience from "./pages/AboutComponents/Experience.jsx";
import SuccessStory from "./pages/AboutComponents/SuccessStory.jsx";

// Service list pages
import Glaucoma from './pages/serviceList/Glaucoma.jsx';
import DvlEyeTeste from './pages/serviceList/DvlEyeTeste.jsx';
import EyeSurgeries from './pages/serviceList/EyeSurgeries.jsx';
import Refraction from './pages/serviceList/Refraction.jsx';
import InstitutionalEye from './pages/serviceList/InstitutionalEye.jsx';

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
          <Route path="dvlEyeTeste" element={<DvlEyeTeste />} />
          <Route path="eyeSurgeries" element={<EyeSurgeries />} />
          <Route path="refraction" element={<Refraction />} />
          <Route path="institutionalEye" element={<InstitutionalEye />} />
        </Route>

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
