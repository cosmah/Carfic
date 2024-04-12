import React from 'react';
import Index from '../footer';
import Form from './form/form';
import Info from './info/info';
import MapContainer from './map/map';
import './index.css'

const Contact = () => {
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
      <MapContainer className="map-container" />
      <Index />
    </div>
 );
};

export default Contact;