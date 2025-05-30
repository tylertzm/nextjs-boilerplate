"use client";
import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const berlinCenter = { lat: 52.52, lng: 13.405 };
const mapContainerStyle = { width: '100%', height: '500px' };
const GOOGLE_MAPS_API_KEY = 'AIzaSyCjuYqAbBrtDyQ7x7Idey8S1-hJQb4_V-A';

const MAP_ID = '43096236a2ba28fb61b6e900';

const MapsWithLocations: React.FC = () => {
  return (
    <div className="items-center justify-center h-screen  font-geistSans">
      <div className="text-center w-full">
        <h1 className="mylivelihood font-bold text-white mb-6">My Livelihood</h1>
        <div className="map" style={mapContainerStyle}>
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