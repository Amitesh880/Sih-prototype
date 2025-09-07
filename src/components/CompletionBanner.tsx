import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const CompletionBanner: React.FC = () => {
  return (
    <div className="bg-green-600 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <div>
        <p className="text-lg font-semibold mb-2 md:mb-0">
          After full completion, a digital certificate will be generated and can be shared on the app.
        </p>
      </div>
      <button className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-colors mt-4 md:mt-0">
        <CheckCircleIcon className="h-6 w-6 mr-3" />
        Complete Training & Become a Certified Citizen
      </button>
    </div>
  );
};

export default CompletionBanner;