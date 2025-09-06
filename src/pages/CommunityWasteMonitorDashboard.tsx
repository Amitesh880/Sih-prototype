import React from 'react';
// Import sub-components from the components folder
import UserProfile from '../components/UserProfile';
import MonitoringStatus from '../components/MonitoringStatus';
import QuickLinks from '../components/QuickLinks';
import Notices from '../components/Notices';
import AreaReports from '../components/AreaReports';
import CommunityParticipation from '../components/CommunityParticipation';
import ReportingPanel from '../components/ReportingPanel';

const CommunityWasteMonitorsDashboard: React.FC = () => {
  // Dummy data for demonstration purposes
  const userProfiles = [
    { name: 'Riya Sharma', ward: 'Ward 12', area: 'Indira Nagar', role: 'Lead Champion', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Arjun Verma', ward: 'Ward 5', area: 'Gandhi Nagar', role: 'Coordinator', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Sanya Iyer', ward: 'Ward 8', area: 'MG Road', role: 'Volunteer', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Mohit Kumar', ward: 'Ward 3', area: 'Lakshmi Nagar', role: 'Data Officer', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ];

  const monitoringStatusData: {
    segregation: { value: string; description: string; status: "Good" | "On track" | "Moderate" | "Watch" | "Pending Transfers" | "Segregation gap"; };
    collection: { value: string; description: string; status: "Good" | "On track" | "Moderate" | "Watch" | "Pending Transfers" | "Segregation gap"; };
    transport: { value: string; description: string; status: "Good" | "On track" | "Moderate" | "Watch" | "Pending Transfers" | "Segregation gap"; };
    treatment: { value: string; description: string; status: "Good" | "On track" | "Moderate" | "Watch" | "Pending Transfers" | "Segregation gap"; };
    disposal: { value: string; description: string; status: "Good" | "On track" | "Moderate" | "Watch" | "Pending Transfers" | "Segregation gap"; };
  } = {
    segregation: { value: '82%', description: 'Households compliant', status: 'Good' },
    collection: { value: "Today's collection complete", description: 'Citywide', status: 'On track' },
    transport: { value: '6/8 vehicles active', description: 'Live tracking', status: 'Moderate' },
    treatment: { value: 'Compost: 55%', description: 'Recycle: 35%', status: 'Good' },
    disposal: { value: 'Landfill use reduced by 28%', description: 'Quarterly', status: 'Watch' },
  };

  const areaReportsData: {
    area: string;
    segregationRate: number;
    complaints: number;
    creditsEarned: number;
    alerts: "Good" | "Pending Transfers" | "Segregation gap";
  }[] = [
    { area: 'Ward 12 - Indira Nagar', segregationRate: 82, complaints: 3, creditsEarned: 1200, alerts: 'Pending Transfers' },
    { area: 'Ward 5 - Gandhi Nagar', segregationRate: 95, complaints: 1, creditsEarned: 1800, alerts: 'Good' },
    { area: 'Ward 8 - MG Road', segregationRate: 76, complaints: 4, creditsEarned: 980, alerts: 'Segregation gap' },
  ];

  const communityParticipationData = [
    { name: 'Gandhi Nagar Committee', points: 1800 },
    { name: 'Indira Nagar Committee', points: 1700 },
    { name: 'MG Road Committee', points: 1400 },
    { name: 'Lakshmi Nagar Committee', points: 1200 },
    { name: 'Rajaji Puram Committee', points: 1100 },
  ];

  return (
    <div className="p-8 bg-gray-50">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Green Champions - Community Waste Monitors</h1>
        <p className="text-gray-600 mt-1">Decentralized committees ensuring waste management at every step.</p>
      </div>

      {/* User Profiles */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {userProfiles.map((user, index) => (
          <UserProfile key={index} {...user} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Column (Left - 2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          <MonitoringStatus data={monitoringStatusData} />
          <AreaReports data={areaReportsData} />
          <CommunityParticipation data={communityParticipationData} />
          <ReportingPanel />
        </div>

        {/* Sidebar Column (Right - 1/3 width on large screens) */}
        <div className="lg:col-span-1 space-y-6">
          <QuickLinks />
          <Notices />
        </div>
      </div>
    </div>
  );
};

export default CommunityWasteMonitorsDashboard;