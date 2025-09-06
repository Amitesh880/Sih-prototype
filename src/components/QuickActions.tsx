import React from 'react';
import { ShareIcon, HeartIcon, MapPinIcon } from '@heroicons/react/24/outline';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Actions</h3>
      <div className="flex flex-wrap gap-4">
        <button className="flex-1 min-w-0 md:min-w-[150px] flex items-center justify-center bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">
          <ShareIcon className="h-5 w-5 mr-2" />
          Share Location
        </button>
        <button className="flex-1 min-w-0 md:min-w-[150px] flex items-center justify-center bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">
          <HeartIcon className="h-5 w-5 mr-2" />
          Save to Favorites
        </button>
        <button className="flex-1 min-w-0 md:min-w-[150px] flex items-center justify-center bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors">
          <MapPinIcon className="h-5 w-5 mr-2" />
          Start Navigation
        </button>
      </div>
    </div>
  );
};

export default QuickActions;