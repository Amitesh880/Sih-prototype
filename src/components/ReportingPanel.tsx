import React from 'react';
// ADD THIS IMPORT LINE
import { PlusIcon, PhotoIcon, PaperAirplaneIcon, StarIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';


const ReportingPanel: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Reporting Panel</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Report an Issue */}
        <div className="border border-gray-200 p-5 rounded-2xl">
          <div className="flex items-center mb-4">
            {/* THIS IS WHERE ExclamationCircleIcon WAS USED WITHOUT IMPORT */}
            <ExclamationCircleIcon className="h-6 w-6 text-red-500 mr-3" />
            <h4 className="text-lg font-semibold text-gray-800">Report an Issue</h4>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category:
            </label>
            <select
              id="category"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
              defaultValue="Overflowing bin"
            >
              <option>Overflowing bin</option>
              <option>Illegal dumping</option>
              <option>Broken facility</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="issue-description" className="block text-sm font-medium text-gray-700 mb-1">
              Describe the issue...
            </label>
            <textarea
              id="issue-description"
              rows={3}
              className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              placeholder="e.g., Bin near park is overflowing for two days."
            ></textarea>
          </div>
          <button className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors mb-4">
            <PhotoIcon className="h-5 w-5 mr-2" />
            Add photo
          </button>
          <button className="flex items-center justify-center w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
            <PaperAirplaneIcon className="h-5 w-5 mr-2 rotate-90" />
            Submit Report
          </button>
        </div>

        {/* Reward a Household/Area */}
        <div className="border border-gray-200 p-5 rounded-2xl">
          <div className="flex items-center mb-4">
            <StarIcon className="h-6 w-6 text-yellow-500 mr-3" />
            <h4 className="text-lg font-semibold text-gray-800">Reward a Household/Area</h4>
          </div>
          <div className="mb-4">
            <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
              Recipient:
            </label>
            <input
              type="text"
              id="recipient"
              className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              placeholder="Ward 5 - Gandhi Nagar"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="credits" className="block text-sm font-medium text-gray-700 mb-1">
              Credits:
            </label>
            <input
              type="number"
              id="credits"
              className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              value="100"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
              Reason for reward...
            </label>
            <textarea
              id="reason"
              rows={3}
              className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              placeholder="e.g., Exemplary waste segregation practices."
            ></textarea>
          </div>
          <button className="flex items-center justify-center w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition-colors">
            <PlusIcon className="h-5 w-5 mr-2" />
            Allocate Credits
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportingPanel;