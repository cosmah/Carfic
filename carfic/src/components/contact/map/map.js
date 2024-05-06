import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function Locator() {
  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: "AIzaSyB2zVgM_dD8x_Jt15NzU1fLN31DGD_8Rzg",
  });

  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 0.3461378,
    lng: 32.6467837,
  });
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: markerPosition,
          zoom: 15,
        }
      );
      setMap(mapInstance);
    }
  }, [isLoaded, markerPosition]);

  return (
    <div id="map" style={{ width: "100%", height: "100vh" }}>
      {isLoaded && map && (
        <GoogleMap map={map} center={markerPosition} zoom={15}>
          <Marker
            position={markerPosition}
            onClick={() => setShowInfoWindow(true)}
          >
            {showInfoWindow && (
              <InfoWindow
                position={markerPosition}
                onCloseClick={() => setShowInfoWindow(false)}
              >
                <div>
                  <h3>Carfic Automotive Services and spare parts</h3>
                  <p>Location: 0.3461378, 32.6467837</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      )}
    </div>
  );
}

export default Locator;
