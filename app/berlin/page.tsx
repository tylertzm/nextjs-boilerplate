"use client";

import React from 'react';
import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';

const berlinCenter = { lat: 52.52, lng: 13.405 };
const mapContainerStyle = { width: '100%', height: '400px' };
const GOOGLE_MAPS_API_KEY = 'AIzaSyCjuYqAbBrtDyQ7x7Idey8S1-hJQb4_V-A';

const BerlinPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white font-geistSans">
      <div className="text-center">
        <h1 className="berlin text-4xl font-bold text-black mb-6">
          My Livelihood
        </h1>
        <div style={mapContainerStyle}>
          <APIProvider apiKey={GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
              defaultZoom={12}
              defaultCenter={berlinCenter}
              onCameraChanged={(ev: MapCameraChangedEvent) =>
                console.log('Camera changed:', ev.detail.center, 'Zoom:', ev.detail.zoom)
              }
              style={{ width: '100%', height: '100%' }}
            />
          </APIProvider>
        </div>
      </div>
    </div>
  );
};

export default BerlinPage;