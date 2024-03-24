// App.js
import React from "react";
import "./App.css";
import RoutingComponent from "./components/nav/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Footer from "./components/footer";
import Spare from "./components/spares";

function App() {
 return (
    <Router>
      <RoutingComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/spares" element={<Spare />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
 );
}

export default App;