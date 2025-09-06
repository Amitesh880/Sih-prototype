import React from 'react';
import { CreditCardIcon, ExclamationCircleIcon, HomeIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const GreenCreditsDashboard: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-green-50">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Your Green Credits 🌿</h2>
        <p className="text-gray-600 mt-1">Earn rewards for managing waste responsibly.</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column (Main Content) */}
        <div className="md:col-span-2 space-y-6">
          {/* Credits Summary Card */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Current Balance</h3>
              <div className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                <span>This week</span>
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center mb-6">
              <CreditCardIcon className="h-10 w-10 text-green-600 mr-4" />
              <div className="text-4xl font-bold text-green-700">2,350 credits</div>
            </div>
            {/* You would add a chart or graph here */}
            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
              Chart placeholder
            </div>
          </div>

          {/* Redeem Credits Card */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Redeem Credits</h3>
            <div className="flex border-b border-gray-200 mb-6">
              <button className="pb-2 px-4 text-green-700 border-b-2 border-green-600 font-medium">Vouchers & Coupons</button>
              <button className="pb-2 px-4 text-gray-500 hover:text-green-700 transition-colors">Utility Discounts</button>
            </div>
            
            {/* Vouchers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center text-center">
                <span className="text-4xl mb-2">🛍️</span>
                <p className="font-semibold text-gray-700">Grocery Voucher</p>
                <p className="text-sm text-gray-500 mb-4">500 credits</p>
                <button className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700">Redeem</button>
              </div>
              <div className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center text-center">
                <span className="text-4xl mb-2">🚇</span>
                <p className="font-semibold text-gray-700">Metro Pass Recharge</p>
                <p className="text-sm text-gray-500 mb-4">300 credits</p>
                <button className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700">Redeem</button>
              </div>
              <div className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center text-center">
                <span className="text-4xl mb-2">🍽️</span>
                <p className="font-semibold text-gray-700">Restaurant Discount</p>
                <p className="text-sm text-gray-500 mb-4">400 credits</p>
                <button className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700">Redeem</button>
              </div>
            </div>
          </div>

          {/* Recent Activities Card */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-gray-700">
                <span>Segregated waste correctly</span>
                <span className="text-green-600 font-medium">+50</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span>Reported a new dumping site</span>
                <span className="text-green-600 font-medium">+30</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span>Completed a training module</span>
                <span className="text-green-600 font-medium">+100</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column (Side Cards) */}
        <div className="md:col-span-1 space-y-6">
          {/* Report/Reward Card */}
          <div className="bg-white p-6 rounded-3xl shadow-lg space-y-4">
            <button className="w-full flex items-center justify-center bg-red-100 text-red-700 py-3 rounded-xl font-medium hover:bg-red-200 transition-colors">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" /> Report an Issue
            </button>
            <button className="w-full flex items-center justify-center bg-yellow-100 text-yellow-700 py-3 rounded-xl font-medium hover:bg-yellow-200 transition-colors">
              <HomeIcon className="h-5 w-5 mr-2" /> Reward Household
            </button>
          </div>

          {/* Tips to Earn Card */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Tips to Earn</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Follow waste segregation guides, report illegal dumping, and complete
              training modules to boost your credits.
            </p>
          </div>

          {/* Support Card */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Need help with redemptions or have a query about your credits?
              Contact our community support for assistance.
            </p>
          </div>

          {/* Leaderboard Card */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Leaderboard & Badges</h3>
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-medium text-gray-700">Rank #12 in Ward 5</p>
              <span className="bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Top 20%
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">Segregation Hero</span>
              <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Top Reporter</span>
              <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Composting Champion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenCreditsDashboard;