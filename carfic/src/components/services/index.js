import React from 'react';
import Index from '../footer';
import Garage from './baner/garage';
import Serve from './service/serve';
import Carousel from './carousel/carousel';

const Services = () => {
 return (
    <div>
      <Garage/>
      <Serve/>
      <Carousel/>
      <Index />
    </div>
 );
};

export default Services;