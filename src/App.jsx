import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
import ContactLenses from './pages/serviceList/ContactLenses';
import Diagnostics from './pages/serviceList/Diagnostics';
import Comprehensive from "./pages/serviceList/Comprehensive.jsx";

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0.7,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0.7,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Wrapper component for animated pages
const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          } />

          {/* About section with nested routes */}
          <Route path="/about" element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }>
            <Route index element={<WhoWeAre />} />
            <Route path="mission" element={<Mission />} />
            <Route path="awards" element={<Awards />} />
            <Route path="experience" element={<Experience />} />
            <Route path="success" element={<SuccessStory />} />
          </Route>

          {/* Services section with nested routes */}
          <Route path="/services" element={
            <AnimatedPage>
              <Services />
            </AnimatedPage>
          }>
            <Route index element={<Glaucoma />} />
            <Route path="eyeSurgeries" element={<EyeSurgeries />} />
            <Route path="refraction" element={<Refraction />} />
            <Route path="dvlEyeTeste" element={<DvlEyeTeste />} />
            <Route path="institutionalEye" element={<InstitutionalEye />} />
            <Route path="comprehensive" element={<Comprehensive />} />
            <Route path="diagnostics" element={<Diagnostics />} />
            <Route path="contactLenses" element={<ContactLenses />} />
          </Route>

          <Route path="/branches" element={
            <AnimatedPage>
              <Branches />
            </AnimatedPage>
          } />
          
          <Route path="/blog" element={
            <AnimatedPage>
              <Blog />
            </AnimatedPage>
          } />
          
          <Route path="/contact" element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          } />
          
          <Route path="/drIgnatus" element={
            <AnimatedPage>
              <DrIgnatus />
            </AnimatedPage>
          } />
          
          <Route path="/team" element={
            <AnimatedPage>
              <Team />
            </AnimatedPage>
          } />
          
          <Route path="/dormaa" element={
            <AnimatedPage>
              <Dormaa />
            </AnimatedPage>
          } />
          
          <Route path="/berekum" element={
            <AnimatedPage>
              <Berekum />
            </AnimatedPage>
          } />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;