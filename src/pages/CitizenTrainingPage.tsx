import React from 'react';
import TrainingModuleCard from '../components/TrainingModuleCard';
import SupportResourcesCard from '../components/SupportResourcesCard';
import InteractiveToolCard from '../components/InteractiveToolCard';
import LeaderboardSection from '../components/LeaderboardSection';
import RewardsSection from '../components/RewardsSection';
import CompletionBanner from '../components/CompletionBanner';

const CitizenTrainingPage: React.FC = () => {
  // Dummy data for training modules
  const trainingModules: {
    title: string;
    subtitle: string;
    contentType: string;
    status: "Not started" | "In progress" | "Completed";
    credits: number;
  }[] = [
    {
      title: 'Types of Waste',
      subtitle: 'Dry, Wet, Hazardous',
      contentType: 'Short Video / Infographic',
      status: 'Not started',
      credits: 20,
    },
    {
      title: 'Source Segregation',
      subtitle: 'How to use 3 dustbins',
      contentType: 'Infographic + demo',
      status: 'In progress',
      credits: 30,
    },
    {
      title: 'Composting at Home',
      subtitle: 'Using compost kits',
      contentType: 'Video tutorial',
      status: 'Completed',
      credits: 50,
    },
    {
      title: 'Plastic Reuse & Reduction',
      subtitle: 'Alternatives to single-use plastics',
      contentType: 'Tips & checklist',
      status: 'Not started',
      credits: 25,
    },
    {
      title: 'Safe Disposal of Hazardous Waste',
      subtitle: 'E-waste, batteries, medicines',
      contentType: 'Drop-off map & steps',
      status: 'Not started',
      credits: 30,
    },
    {
      title: 'Community Responsibilities',
      subtitle: 'Regularity waste & public cleaning drives',
      contentType: 'How-to + examples',
      status: 'In progress',
      credits: 20,
    },
  ];

  // Dummy data for interactive tools
  const interactiveTools = [
    {
      title: 'Waste Sorting Game',
      description: 'Drag banana peel, glass bottle, battery into correct bins.',
      action: 'Play Game',
      info: 'Earn bonus credits for perfect score.',
    },
    {
      title: 'Composting Simulator',
      description: 'Virtual demo of making compost at home',
      action: 'Start Simulator',
      info: 'Simulate 7-day compost cycle.',
    },
  ];

  // Dummy data for leaderboard
  const leaderboardData = [
    { rank: 1, name: 'Gandhi Nagar - Riya', points: 980 },
    { rank: 2, name: 'Indira Nagar - Arjun', points: 940 },
    { rank: 3, name: 'MG Road - Sanya', points: 900 },
  ];

  // Dummy data for rewards
  const rewardsData = {
    creditsEarned: [
      '50 credits for completing Composting Training',
      '30 credits for Source Segregation Quiz',
      '20 credits for Types of Waste',
    ],
    badgesEarned: ['Waste Segregation Certified', 'Plastic Free Hero', 'Compost Pro'],
  };

  return (
    <div className="p-8 bg-gray-50 flex-1 overflow-y-auto">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Citizen Training - Learn Waste Management</h1>
          <p className="text-gray-600 mt-1">Mandatory training modules for every Citizen to become a responsible Green Champion.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">40%</p>
          <p className="font-semibold text-green-700">complete</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Training Modules & Interactive Tools) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Training Modules */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Training Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trainingModules.map((module, index) => (
                <TrainingModuleCard key={index} {...module} />
              ))}
            </div>
          </div>

          {/* Interactive Learning Tools */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Interactive Learning Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interactiveTools.map((tool, index) => (
                <InteractiveToolCard key={index} {...tool} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Support & Resources, FAQ) */}
        <div className="lg:col-span-1 space-y-6">
          <SupportResourcesCard />
        </div>
      </div>

      {/* Leaderboard and Rewards */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeaderboardSection data={leaderboardData} />
        <RewardsSection data={rewardsData} />
      </div>

      {/* Completion Banner */}
      <div className="mt-8">
        <CompletionBanner />
      </div>
    </div>
  );
};

export default CitizenTrainingPage;