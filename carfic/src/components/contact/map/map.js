/* global google */
import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Locator = ({ apiKey }) => {
 const [map, setMap] = useState(null);

 useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
        });

        await loader.load();
        const mapInstance = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
        setMap(mapInstance);
      } catch (error) {
        console.error('Error loading Google Maps API:', error);
      }
    };

    loadGoogleMaps();
 }, [apiKey]);

 return (
    <div id="map" style={{ width: '100%', height: '100vh' }}></div>
 );
};

export default Locator;
