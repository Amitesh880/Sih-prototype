import React from 'react';
import { ChartBarSquareIcon, UserGroupIcon, MapIcon } from '@heroicons/react/24/outline';

const QuickLinks: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h3>
      <ul className="space-y-3">
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
            <ChartBarSquareIcon className="h-5 w-5 mr-3" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Citizen Training
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
            <MapIcon className="h-5 w-5 mr-3" />
            Collection Map
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;