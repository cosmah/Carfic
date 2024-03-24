import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutingComponent from "./components/nav/routes"; // Corrected path
import Home from "./components/home/index"; // Corrected path
import About from "./components/about/index"; // Corrected path
import Contact from "./components/contact/index"; // Corrected path
import Services from "./components/services/index"; // Corrected path
import Header from "./components/header/index"; // Corrected path
import Footer from "./components/footer/index"; // Corrected path
import Spare from "./components/spares/index"; // Corrected path
import "./App.css";

function App() {
  return (
    <Router>
      <RoutingComponent />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/spares" element={<Spare />} />
          <Route path="*" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
