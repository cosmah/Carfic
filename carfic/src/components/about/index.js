import React from 'react';
import Index from '../footer';
import AboutUs from './about/about';
import Cardz from './about/cards';


const About = () => {
 return (
    <div>
      {/* <Header /> */}
      <AboutUs/> 
      <Cardz/>
      
      <Index/>
    </div>
 );
};

export default About;