import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline'; // For rating stars

interface SimilarFacility {
  name: string;
  address: string;
  distance: string;
  rating: number;
  status: 'Open' | 'Closed' | string; // status can vary
}

interface MapComponentProps {
  similarFacilities: SimilarFacility[];
}

const MapComponent: React.FC<MapComponentProps> = ({ similarFacilities }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Map</h3>
      {/* Map Placeholder */}
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
        {/* Replace with an actual map component (e.g., Google Maps, Leaflet) */}
        <img
          src="https://via.placeholder.com/600x400/e0e0e0/888888?text=Map+Placeholder"
          alt="Map"
          className="w-full h-full object-cover"
        />
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
                <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
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