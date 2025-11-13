import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
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

const App = () => {
  return (
   
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* 🩵 About section with nested routes */}
          <Route path="/about" element={<About />}>
            <Route index  element={<WhoWeAre />} />
            <Route path="mission" element={<Mission />} />
            <Route path="awards" element={<Awards />} />
            <Route path="experience" element={<Experience />} />
            <Route path="success" element={<SuccessStory />} />
          </Route>

          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    
  );
};

export default App;
