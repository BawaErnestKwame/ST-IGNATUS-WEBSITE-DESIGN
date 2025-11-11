import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

  );
};

export default App;
