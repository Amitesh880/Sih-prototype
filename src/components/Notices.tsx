import React from 'react';

const Notices: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Notices</h3>
      <div className="space-y-4">
        <div className="text-sm text-gray-700">
          <p className="font-semibold">Weekly clean-up drive this Saturday at 7 AM - MG Road Park.</p>
        </div>
        <div className="text-sm text-gray-700">
          <p className="font-semibold">E-waste collection camp on Sunday - Ward 12 Community Hall.</p>
        </div>
      </div>
    </div>
  );
};

export default Notices;