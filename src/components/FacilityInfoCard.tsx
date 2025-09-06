import React from 'react';
import { InformationCircleIcon, MapPinIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid'; // For community notes

interface FacilityInfoCardProps {
  about: string;
  location: string;
  estimatedTravel: string;
  acceptedMaterials: string[];
  communityNotes: string;
}

const FacilityInfoCard: React.FC<FacilityInfoCardProps> = ({
  about,
  location,
  estimatedTravel,
  acceptedMaterials,
  communityNotes,
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg space-y-6">
      {/* About Section */}
      <div>
        <div className="flex items-center text-lg font-semibold text-gray-900 mb-2">
          <InformationCircleIcon className="h-6 w-6 text-green-600 mr-2" />
          About
        </div>
        <p className="text-gray-700">{about}</p>
      </div>

      {/* Location Section */}
      <div>
        <div className="flex items-center text-lg font-semibold text-gray-900 mb-2">
          <MapPinIcon className="h-6 w-6 text-green-600 mr-2" />
          Location
        </div>
        <p className="text-gray-700">{location}</p>
        <p className="text-sm text-gray-500 mt-1">Estimated travel: {estimatedTravel}</p>
      </div>

      {/* Accepted Materials Section */}
      <div>
        <div className="flex items-center text-lg font-semibold text-gray-900 mb-2">
          <PaperClipIcon className="h-6 w-6 text-green-600 mr-2 rotate-45" /> {/* Rotated for 'clip' look */}
          Accepted Materials
        </div>
        <ul className="space-y-2">
          {acceptedMaterials.map((material, index) => (
            <li key={index} className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
              {material}
            </li>
          ))}
        </ul>
      </div>

      {/* Community Notes Section */}
      <div>
        <div className="flex items-center text-lg font-semibold text-gray-900 mb-2">
          <ChatBubbleLeftIcon className="h-6 w-6 text-green-600 mr-2" />
          Community Notes
        </div>
        {communityNotes.split('\n').map((note, index) => (
          <p key={index} className="text-gray-700 mt-1 first:mt-0 italic">"{note}"</p>
        ))}
      </div>

      {/* Report Issue / Get Directions buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="flex-1 bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition-colors">
          Get Directions
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
          Report Issue
        </button>
      </div>
    </div>
  );
};

export default FacilityInfoCard;