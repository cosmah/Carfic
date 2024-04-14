import React from 'react';
import Index from '../footer';
import Form from './form/form';
import Info from './info/info';
import Locator from './map/map';
import './index.css'

const Contact = () => {
  const apiKey = 'AIzaSyB2zVgM_dD8x_Jt15NzU1fLN31DGD_8Rzg';
 return (
    <div>
      <div className="row">
        <div className="column">
          {/* Content for the first column */}
          <Info/>
        
        </div>
        <div className="column">
          {/* Content for the second column */}
          <Form />
        </div>
      </div>
     
      <Locator apiKey={apiKey} />
        <Index />
      
    </div>
 );
};

export default Contact;