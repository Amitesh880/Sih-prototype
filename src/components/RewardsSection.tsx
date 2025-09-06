import React from 'react';
import { CreditCardIcon, TrophyIcon } from '@heroicons/react/24/outline'; // Re-using icons

interface RewardsData {
  creditsEarned: string[];
  badgesEarned: string[];
}

interface RewardsSectionProps {
  data: RewardsData;
}

const RewardsSection: React.FC<RewardsSectionProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Rewards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Credits Earned */}
        <div className="border border-gray-200 p-4 rounded-2xl">
          <div className="flex items-center mb-3">
            <CreditCardIcon className="h-5 w-5 text-green-600 mr-2" />
            <h4 className="font-semibold text-gray-900">Credits Earned</h4>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            {data.creditsEarned.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Badges Earned */}
        <div className="border border-gray-200 p-4 rounded-2xl">
          <div className="flex items-center mb-3">
            <TrophyIcon className="h-5 w-5 text-yellow-500 mr-2" />
            <h4 className="font-semibold text-gray-900">Badges</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.badgesEarned.map((badge, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsSection;