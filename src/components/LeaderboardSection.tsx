import React from 'react';

interface LeaderboardItem {
  rank: number;
  name: string;
  points: number;
}

interface LeaderboardSectionProps {
  data: LeaderboardItem[];
}

const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({ data }) => {
  const maxPoints = Math.max(...data.map(item => item.points));

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Quiz Leaderboard</h3>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.rank} className="flex items-center space-x-3">
            <span className="text-green-600 font-bold w-6 text-center">{item.rank}</span>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{item.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(item.points / maxPoints) * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="text-gray-600 text-sm w-12 text-right">{item.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardSection;