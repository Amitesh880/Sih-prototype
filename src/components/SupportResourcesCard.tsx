import React from 'react';
import {DocumentTextIcon, BookOpenIcon } from '@heroicons/react/24/outline'; // Re-using icons

const SupportResourcesCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg space-y-6">
      {/* Support & Resources */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">Support & Resources</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
              <DocumentTextIcon className="h-5 w-5 mr-3" />
              Compost Kit Manual (PDF)
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
              <BookOpenIcon className="h-5 w-5 mr-3" />
              Buy Dustbins/Compost Kits
            </a>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">FAQ</h3>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold mb-1">What if I don't segregate waste?</p>
            <p className="text-gray-600">Incorrectly segregated waste will not be collected and can attract penalties. Segregation helps the community.</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Where does e-waste go?</p>
            <p className="text-gray-600">E-waste and batteries are collected at authorized collection centers listed in the app.</p>
          </div>
          <div>
            <p className="font-semibold mb-1">How do I earn Green Credits?</p>
            <p className="text-gray-600">Complete training, report issues, earn credits reflect on your Dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportResourcesCard;