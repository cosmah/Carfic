import React from 'react';
import Header from '../header';
import Index from '../footer';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React component for the home page.</p>
      <Index />
    </div>
  );
};

export default Home;