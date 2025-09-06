import React from 'react';
import { PlayIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'; // Re-using icons

interface InteractiveToolCardProps {
  title: string;
  description: string;
  action: string;
  info: string;
}

const InteractiveToolCard: React.FC<InteractiveToolCardProps> = ({ title, description, action, info }) => {
  return (
    <div className="border border-gray-200 p-5 rounded-2xl flex flex-col justify-between">
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
      <div className="flex flex-col">
        <button className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors mb-2">
          {title.includes('Game') ? <PlayIcon className="h-5 w-5 mr-2" /> : <Cog6ToothIcon className="h-5 w-5 mr-2" />}
          {action}
        </button>
        <p className="text-xs text-gray-500 italic mt-1">{info}</p>
      </div>
    </div>
  );
};

export default InteractiveToolCard;