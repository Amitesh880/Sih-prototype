import React from 'react';
import { MapPinIcon, ClockIcon, PhoneIcon, StarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { ArrowTopRightOnSquareIcon, ShareIcon } from '@heroicons/react/24/solid'; // For Directions icon

interface FacilityHeaderProps {
  name: string;
  distance: string;
  rating: number;
  status: 'Open' | 'Closed';
  hours: string;
  phone: string;
}

const FacilityHeader: React.FC<FacilityHeaderProps> = ({ name, distance, rating, status, hours, phone }) => {
  const statusClasses = status === 'Open' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100';

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${statusClasses}`}>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <MapPinIcon className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-800">{distance}</span>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <ClockIcon className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-800">{hours}</span>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <PhoneIcon className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-800">{phone}</span>
        </div>
      </div>

      {/* Directions and Rating buttons */}
      <div className="flex justify-between items-center">
        <button className="flex items-center bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition-colors">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 -rotate-45" /> {/* Rotated for compass look */}
          Directions
        </button>
        <button className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
          <StarIcon className="h-5 w-5 text-yellow-500 mr-2" />
          {rating}
          <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default FacilityHeader;