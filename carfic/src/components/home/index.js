import React from 'react';
import Header from '../header';
import Index from '../footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner/banner';
import Cards from './cards/card';
import Service from './services';
import Lounge from './lounge/lounge';

const Home = () => {
 return (
    <div>
      <Header />
      <Cards />
      <Banner/>
      <Service/>
      <Lounge/>
      <Index />
    </div>
 );
};

export default Home;
