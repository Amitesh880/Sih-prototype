import { useEffect, useState } from 'react';
import L, { Map, Marker } from 'leaflet';



interface Facility {
  name: string;
  address: string;
  distance: string;
  rating: number;
  status?: string;
}

interface MapComponentProps {
  similarFacilities: Facility[];
}

const MapComponent: React.FC<MapComponentProps> = ({ similarFacilities }) => {
  const [mymap, setMymap] = useState<Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [marker, setMarker] = useState<Marker | null>(null);
  const [shareableLink, setShareableLink] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mapContainer = document.getElementById('mapid') as HTMLElement & { _leaflet_id?: number };
    if (mapContainer && !mapContainer._leaflet_id) {
      const initialMap = L.map('mapid').setView([37.3861, -122.0839], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(initialMap);
      setMymap(initialMap);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (mymap) {
        mymap.remove();
      }
    };
  }, [mymap]);

  const shareLocation = () => {
    if (!mymap) return;

    setIsLocating(true);
    setLocationError(null);
    setShareableLink('');
    setCopied(false);

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
      const newMarker = L.marker(userLocation)
        .addTo(mymap)
        .bindPopup("You are here!").openPopup();
      setMarker(newMarker);
    }
  }, [mymap, userLocation]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareableLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Map</h3>

      <button
        onClick={shareLocation}
        aria-label="Share your current location"
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
            aria-label="Open shareable map link"
            className="text-indigo-600 hover:text-indigo-800 break-words underline text-sm"
          >
            {shareableLink}
          </a>
          <button
            onClick={copyToClipboard}
            className="ml-2 text-sm text-indigo-500 hover:underline"
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      )}

      <div id="mapid" className="w-full h-64 rounded-lg border border-gray-300" />

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Similar Nearby Facilities</h4>
        <div className="space-y-4">
          {similarFacilities.map((facility, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-800">{facility.name}</p>
                <p className="text-sm text-gray-600">
                  {facility.address} • {facility.distance} {facility.status && `• ${facility.status}`}
                </p>
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

export default MapComponent;