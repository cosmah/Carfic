import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

const Locator = () => {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const markerPosition = useState({ lat: 0.3461648898330333, lng: 32.646774982820716 })[0];

  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
          center: markerPosition,
          zoom: 15,
        });
  
        new window.google.maps.Marker({
          position: markerPosition,
          map: mapInstance,
          title: "Carfic Automotive Services and spare parts",
        });
  
        const directionsRequest = {
          origin: 'Kireka, Kampala, Uganda',
          destination: 'Kampala, Uganda',
          travelMode: 'driving',
        };

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(directionsRequest, (response, status) => {
          if (status === 'OK') {
            setDirectionsResponse(response);
          } else {
            console.error('Error getting directions:', status);
          }
        });

        setMap(mapInstance);
      } catch (error) {
        console.error('Error loading Google Maps API:', error);
      }
    };

    loadGoogleMaps();
  }, [markerPosition]);

  return (
    <div id="map" style={{ width: '100%', height: '100vh' }}>
      {map && (
        <GoogleMap
          map={map}
          center={{ lat: 0.3461648898330333, lng: 32.646774982820716 }}
          zoom={15}
        >
          {markerPosition && (
            <Marker position={markerPosition} />
          )}
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default Locator;