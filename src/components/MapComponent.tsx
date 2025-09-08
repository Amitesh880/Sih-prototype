import React, { useEffect, useState } from 'react';

// This is a self-contained single-file React application.
// It includes a MapComponent that renders a real, interactive map using Leaflet.
// All styles are handled with Tailwind CSS classes.

// The Leaflet CSS and JS are loaded via the CDN links below.
// This is necessary to use the library within a single-file environment.
const leafletCss = document.createElement('link');
leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
leafletCss.rel = 'stylesheet';
document.head.appendChild(leafletCss);

const leafletJs = document.createElement('script');
leafletJs.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
document.head.appendChild(leafletJs);

// The MapComponent is defined inside the main App component to keep
// everything within a single file as required.
const MapComponent = ({ similarFacilities }) => {
  const [isLeafletLoaded, setIsLeafletLoaded] = useState(false);
  const [mymap, setMymap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [marker, setMarker] = useState(null);
  const [shareableLink, setShareableLink] = useState('');

  useEffect(() => {
    if (typeof window.L !== 'undefined') {
      setIsLeafletLoaded(true);
    } else {
      leafletJs.onload = () => setIsLeafletLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLeafletLoaded) {
      const mapContainer = document.getElementById('mapid');
      if (mapContainer && !mapContainer._leaflet_id) {
        const initialMap = window.L.map('mapid').setView([37.3861, -122.0839], 13);
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(initialMap);
        setMymap(initialMap);
      }
    }
  }, [isLeafletLoaded]);

  const shareLocation = () => {
    if (!mymap) return;

    setIsLocating(true);
    setLocationError(null);
    setShareableLink('');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setUserLocation([lat, lng]);
          setShareableLink(`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`);
          setIsLocating(false);
        },
        (error) => {
          setLocationError(error.message);
          setIsLocating(false);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser.");
      setIsLocating(false);
    }
  };

  useEffect(() => {
    if (mymap && userLocation) {
      mymap.setView(userLocation, 16);
      if (marker) {
        mymap.removeLayer(marker);
      }
      const newMarker = window.L.marker(userLocation)
        .addTo(mymap)
        .bindPopup("You are here!").openPopup();
      setMarker(newMarker);
    }
  }, [mymap, userLocation]);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Map</h3>
      
      <button
        onClick={shareLocation}
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
        disabled={isLocating}
      >
        {isLocating ? 'Locating...' : 'Share My Location'}
      </button>

      {locationError && (
        <p className="text-red-500 text-sm mt-2">{locationError}</p>
      )}

      {shareableLink && (
        <div className="mt-4">
          <p className="font-medium text-gray-700">Shareable Link:</p>
          <a
            href={shareableLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 break-words underline text-sm"
          >
            {shareableLink}
          </a>
        </div>
      )}

      {/* Interactive Leaflet map container */}
      <div id="mapid" className="w-full h-64 rounded-lg border border-gray-300">
        {!isLeafletLoaded && (
          <div className="flex items-center justify-center w-full h-full text-gray-500">
            Loading map...
          </div>
        )}
      </div>

      {/* Similar Nearby Facilities */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Similar Nearby Facilities</h4>
        <div className="space-y-4">
          {similarFacilities.map((facility, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-800">{facility.name}</p>
                <p className="text-sm text-gray-600">{facility.address} • {facility.distance} {facility.status && `• ${facility.status}`}</p>
              </div>
              <div className="flex items-center text-sm font-medium text-gray-700">
                <span className="text-yellow-500 mr-1">⭐</span>
                {facility.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App component
export default function App() {
  const [similarFacilities] = useState([
    { name: 'Mountain View Coffee', address: '123 E Cafe Ln', distance: '0.5 mi', rating: 4.8, status: 'Open' },
    { name: 'Starbucks', address: '456 N Coffee St', distance: '1.2 mi', rating: 4.5, status: 'Open' },
    { name: 'Local Brews', address: '789 W Java Ave', distance: '2.1 mi', rating: 4.9, status: 'Closed' },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Facility Locator</h1>
        <MapComponent similarFacilities={similarFacilities} />
      </div>
    </div>
  );
  }
