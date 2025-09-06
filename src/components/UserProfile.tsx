import React from 'react';

interface UserProfileProps {
  name: string;
  ward: string;
  area: string;
  role: string;
  avatar: string; // URL to avatar image
}

const UserProfile: React.FC<UserProfileProps> = ({ name, ward, area, role, avatar }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-4">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-green-400" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{ward} - {area}</p>
        <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
          {role}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;