"use client";
import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const berlinCenter = { lat: 52.52, lng: 13.405 };
const mapContainerStyle = { width: '100%', height: '500px' };
const GOOGLE_MAPS_API_KEY = 'AIzaSyCjuYqAbBrtDyQ7x7Idey8S1-hJQb4_V-A';

// 🔥 Paste your MapId here
const MAP_ID = '1228b90159890bac98703c1c';

const MapsWithLocations: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white font-geistSans">
      <div className="text-center w-full">
        <h1 className="text-4xl font-bold text-black mb-6">Our Locations</h1>
        <div style={mapContainerStyle}>
          <APIProvider apiKey={GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>            
            <Map
              defaultZoom={10}
              defaultCenter={berlinCenter}
              mapId={MAP_ID}
              style={{ width: '100%', height: '100%' }}
            >
              {/* Add your marker data here */}
            </Map>
          </APIProvider>
        </div>
      </div>
    </div>
  );
};

export default MapsWithLocations;