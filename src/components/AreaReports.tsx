import React from 'react';
import { CheckCircleIcon, ExclamationCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

interface AreaReportItem {
  area: string;
  segregationRate: number;
  complaints: number;
  creditsEarned: number;
  alerts: 'Pending Transfers' | 'Good' | 'Segregation gap';
}

interface AreaReportsProps {
  data: AreaReportItem[];
}

const getAlertIcon = (alertStatus: AreaReportItem['alerts']) => {
  switch (alertStatus) {
    case 'Pending Transfers':
      return <ClockIcon className="h-5 w-5 text-yellow-600" />;
    case 'Good':
      return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
    case 'Segregation gap':
      return <ExclamationCircleIcon className="h-5 w-5 text-red-600" />;
    default:
      return null;
  }
};

const getAlertClasses = (alertStatus: AreaReportItem['alerts']) => {
  switch (alertStatus) {
    case 'Pending Transfers':
      return 'bg-yellow-100 text-yellow-700';
    case 'Good':
      return 'bg-green-100 text-green-700';
    case 'Segregation gap':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const AreaReports: React.FC<AreaReportsProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Area/Colony Reports</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Area/Ward
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Segregation Rate
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Complaints
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Credits Earned
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Alerts
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((report, index) => (
              <tr key={index}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {report.area}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  {report.segregationRate}%
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  {report.complaints}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  {report.creditsEarned}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getAlertClasses(report.alerts)}`}>
                    {getAlertIcon(report.alerts)}
                    <span className="ml-1">{report.alerts}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AreaReports;