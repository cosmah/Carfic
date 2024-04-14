import React, { useEffect, useState } from 'react';
import { GmpxApiLoader, GmpxStoreLocator } from '@googlemaps/extended-component-library'; // Import components directly

const Locator = ({ apiKey }) => {
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        await GmpxApiLoader.load(apiKey);
        setApiLoaded(true);
      } catch (error) {
        console.error('Error loading Google Maps API:', error);
      }
    };

    loadGoogleMaps();
  }, [apiKey]);

  return (
    <div>
      <GmpxApiLoader apiKey={apiKey} />
      {apiLoaded && <GmpxStoreLocator mapId="f573af87ada0a299" />}
    </div>
  );
};

export default Locator;
