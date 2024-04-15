/* global google */
import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Locator = ({ apiKey }) => {
 const [map, setMap] = useState(null);
 const [infoWindow, setInfoWindow] = useState(null);

 useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
        });

        await loader.load();
        const mapInstance = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 0.3461648898330333, lng: 32.646774982820716 },
          zoom: 15,
        });

        // Create a marker at the specified location
        const marker = new google.maps.Marker({
          position: { lat: 0.3461648898330333, lng: 32.646774982820716 },
          map: mapInstance,
          title: "Carfic Automotive Services and spare parts",
        });

        // Create an InfoWindow
        const infoWindowInstance = new google.maps.InfoWindow({
          content: '<div><h2>Carfic Automotive Services and spare parts</h2><p>Kireka, opposite Kireka police station, Kampala, Uganda</p></div>',
        });

        // Add a click event listener to the marker to open the InfoWindow
        marker.addListener('click', () => {
          infoWindowInstance.open({
            anchor: marker,
            map: mapInstance,
            shouldFocus: false,
          });
        });

        setMap(mapInstance);
        setInfoWindow(infoWindowInstance);
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
