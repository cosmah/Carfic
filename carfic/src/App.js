// App.js
import React from "react";
import "./App.css";
import RoutingComponent from "./components/nav/routes";
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Footer from "./components/footer";
import Spare from "./components/spares";
import Banner from "./components/home/banner/banner";
import Cards from "./components/home/cards/card";
import Service from "./components/home/services";
import Lounge from "./components/home/lounge/lounge";

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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
        <Route path="*">"404 Not Found"</Route>
        <Route path="/banner" element={<Banner/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/card" element={<Cards/>}/>
        <Route path="/lounge" element={<Lounge/>}/>
      </Routes>
      {isMobile && <div>This is a mobile device.</div>}
    </Router>
 );
}

export default App;