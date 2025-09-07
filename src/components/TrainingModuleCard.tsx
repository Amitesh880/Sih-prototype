import React from 'react';
import { PlayCircleIcon, BookOpenIcon, CheckCircleIcon,ClockIcon } from '@heroicons/react/24/outline'; // Re-using icons

interface TrainingModuleCardProps {
  title: string;
  subtitle: string;
  contentType: string;
  status: 'Not started' | 'In progress' | 'Completed';
  credits: number;
}

const TrainingModuleCard: React.FC<TrainingModuleCardProps> = ({
  title,
  subtitle,
  contentType,
  status,
  credits,
}) => {
  const statusClasses = {
    'Not started': 'bg-gray-100 text-gray-700',
    'In progress': 'bg-yellow-100 text-yellow-700',
    'Completed': 'bg-green-100 text-green-700',
  };

  const statusButtonClasses = {
    'Not started': 'bg-green-600 hover:bg-green-700 text-white',
    'In progress': 'bg-yellow-500 hover:bg-yellow-600 text-white',
    'Completed': 'bg-green-600 text-white cursor-not-allowed', // Completed might not have an active button
  };

  const getActionIcon = (moduleStatus: typeof status) => {
    switch (moduleStatus) {
      case 'Not started': return <PlayCircleIcon className="h-5 w-5 mr-2" />;
      case 'In progress': return <ClockIcon className="h-5 w-5 mr-2" />;
      case 'Completed': return <CheckCircleIcon className="h-5 w-5 mr-2" />;
      default: return null;
    }
  };

  const getActionText = (moduleStatus: typeof status) => {
    switch (moduleStatus) {
      case 'Not started': return 'Start';
      case 'In progress': return 'Continue';
      case 'Completed': return 'Review';
      default: return '';
    }
  };

  return (
    <div className="border border-gray-200 p-5 rounded-2xl flex flex-col justify-between">
      <div>
        <p className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusClasses[status]} mb-2`}>
          {status}
        </p>
        <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <BookOpenIcon className="h-4 w-4 mr-2" />
          <span>{contentType}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-green-600 font-semibold">+ {credits} credits</span>
        <div className="flex space-x-2">
          <button className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${statusButtonClasses[status]}`}>
            {getActionIcon(status)}
            {getActionText(status)}
          </button>
          {status !== 'Completed' && ( // Only show Quiz/Guide if not completed
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              {contentType.includes('Infographic') || contentType.includes('Video') ? 'Guide' : 'Quiz'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingModuleCard;