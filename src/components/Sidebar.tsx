import React from 'react';
import {
  HomeIcon,
  CreditCardIcon,
  ExclamationCircleIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-lg flex flex-col justify-between">
      <div>
        {/* Logo and App Name */}
        <div className="flex items-center mb-10">
          <div className="bg-green-600 p-2 rounded-lg mr-3">
            <span className="text-white text-xl font-bold">G</span>
          </div>
          <h1 className="text-xl font-semibold">Green Champions</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center p-3 text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors duration-200"
          >
            <HomeIcon className="h-6 w-6 mr-4" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center p-3 text-green-700 bg-green-50 rounded-xl transition-colors duration-200"
          >
            <CreditCardIcon className="h-6 w-6 mr-4" />
            <span className="font-medium">Green Credits</span>
          </a>
          <a
            href="#"
            className="flex items-center p-3 text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors duration-200"
          >
            <ExclamationCircleIcon className="h-6 w-6 mr-4" />
            <span className="font-medium">Report Issue</span>
          </a>
          <a
            href="#"
            className="flex items-center p-3 text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors duration-200"
          >
            <Cog6ToothIcon className="h-6 w-6 mr-4" />
            <span className="font-medium">Settings</span>
          </a>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        <a
          href="#"
          className="flex items-center p-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors duration-200"
        >
          <ArrowRightStartOnRectangleIcon className="h-6 w-6 mr-4" />
          <span className="font-medium">Log out</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;