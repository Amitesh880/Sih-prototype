import React from 'react';
import { ArrowLeftIcon, TrashIcon, AcademicCapIcon } from '@heroicons/react/24/outline'; // Re-using icons for visual

const PageFooterNav: React.FC = () => {
  return (
    <div className="sticky bottom-0 bg-white p-4 shadow-xl flex justify-around items-center rounded-t-3xl border-t border-gray-100 mt-8">
      <button className="flex flex-col items-center text-gray-600 hover:text-green-700 transition-colors">
        <ArrowLeftIcon className="h-6 w-6" />
        <span className="text-xs mt-1">Go to Dashboard</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-green-700 transition-colors">
        <TrashIcon className="h-6 w-6" />
        <span className="text-xs mt-1">Report Waste</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-green-700 transition-colors">
        <AcademicCapIcon className="h-6 w-6" />
        <span className="text-xs mt-1">Training Modules</span>
      </button>
    </div>
  );
};

export default PageFooterNav;