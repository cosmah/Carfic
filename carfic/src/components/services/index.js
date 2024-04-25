import React from 'react';
import Index from '../footer';
import Garage from './baner/garage';
import Serve from './service/serve';

const Services = () => {
 return (
    <div>
      <Garage/>
      <Serve/>
      <p>This is a simple React component for the services page.</p>
      <Index />
    </div>
 );
};

export default Services;