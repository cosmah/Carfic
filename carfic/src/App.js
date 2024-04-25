
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
import AboutUs from "./components/about/about/about";
import Slide from "./components/about/about/slider";
import Cardz from "./components/about/about/cards";
import Form from "./components/contact/form/form";
import SimpleMap from "./components/contact/map/map";
import Info from "./components/contact/info/info";
import Baner from "./components/spares/hello/banner";
import Parts from "./components/spares/spare/about";
import Order from "./components/spares/order/order";
import Garage from "./components/services/baner/garage";
import Serve from "./components/services/service/serve";
import Carousel from "./components/services/carousel/carousel";

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
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/slider" element={<Slide/>}/>
        <Route path="/cards" element={<Cardz/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/map" element={<SimpleMap/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/baner" element={<Baner/>}/>
        <Route path="/parts" element={<Parts/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/garage" element={<Garage/>}/>
        <Route path="/serve" element={<Serve/>}/>
        <Route path="/carousel" element={<Carousel/>}/>

      </Routes>
  
      {isMobile && <div>This is a mobile device.</div>}
    </Router>
 );
}

export default App;