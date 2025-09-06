import React from 'react';
// import { ChartBarIcon } from '@heroicons/react/24/outline'; // Re-using an icon for visual

interface Committee {
  name: string;
  points: number;
}

interface CommunityParticipationProps {
  data: Committee[];
}

const CommunityParticipation: React.FC<CommunityParticipationProps> = ({ data }) => {
  const maxPoints = Math.max(...data.map(item => item.points));

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Community Participation</h3>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Committee List */}
        <div className="md:w-1/2 space-y-4">
          {data.map((committee, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-green-600 font-bold">{index + 1}</span>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{committee.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${(committee.points / maxPoints) * 100}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-gray-600 text-sm">{committee.points} pts</span>
            </div>
          ))}
        </div>

        {/* Right: Best Performing Colony */}
        <div className="md:w-1/2 bg-green-50 p-6 rounded-2xl flex flex-col justify-between items-start text-green-800">
          <p className="text-sm font-medium mb-2">This week's best performing colony</p>
          <h4 className="text-2xl font-bold mb-4">Ward 5 - Gandhi Nagar</h4>
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
            95% segregation
          </span>
          {/* A small chart icon could go here if desired */}
          {/* <ChartBarIcon className="h-10 w-10 text-green-400 mt-4" /> */}
        </div>
      </div>
    </div>
  );
};

export default CommunityParticipation;