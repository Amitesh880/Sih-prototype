import React from 'react';
import { CheckCircleIcon, CubeIcon, TruckIcon, SunIcon, TrashIcon } from '@heroicons/react/24/outline';
// import { ExclamationCircleIcon } from '@heroicons/react/24/solid'; // For 'Watch' status

interface StatusItemProps {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  status: 'Good' | 'On track' | 'Moderate' | 'Watch' | 'Pending Transfers' | 'Segregation gap';
}

const getStatusClasses = (status: StatusItemProps['status']) => {
  switch (status) {
    case 'Good':
    case 'On track':
      return 'bg-green-100 text-green-700';
    case 'Moderate':
    case 'Pending Transfers':
    case 'Segregation gap':
      return 'bg-yellow-100 text-yellow-700';
    case 'Watch':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const StatusItem: React.FC<StatusItemProps> = ({ icon: Icon, title, value, description, status }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <Icon className="h-8 w-8 text-green-600 mb-2" />
      <h4 className="text-md font-semibold text-gray-800">{title}</h4>
      <p className="text-xl font-bold text-gray-900 mt-1">{value}</p>
      <p className="text-sm text-gray-500">{description}</p>
      <span className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(status)}`}>
        {status}
      </span>
    </div>
  );
};

interface MonitoringStatusProps {
  data: {
    segregation: { value: string; description: string; status: StatusItemProps['status'] };
    collection: { value: string; description: string; status: StatusItemProps['status'] };
    transport: { value: string; description: string; status: StatusItemProps['status'] };
    treatment: { value: string; description: string; status: StatusItemProps['status'] };
    disposal: { value: string; description: string; status: StatusItemProps['status'] };
  };
}

const MonitoringStatus: React.FC<MonitoringStatusProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Monitoring Status Overview</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatusItem
          icon={CubeIcon}
          title="Source Segregation"
          value={data.segregation.value}
          description={data.segregation.description}
          status={data.segregation.status}
        />
        <StatusItem
          icon={CheckCircleIcon}
          title="Collection"
          value={data.collection.value}
          description={data.collection.description}
          status={data.collection.status}
        />
        <StatusItem
          icon={TruckIcon}
          title="Transport"
          value={data.transport.value}
          description={data.transport.description}
          status={data.transport.status}
        />
        <StatusItem
          icon={SunIcon}
          title="Treatment"
          value={data.treatment.value}
          description={data.treatment.description}
          status={data.treatment.status}
        />
        <StatusItem
          icon={TrashIcon}
          title="Disposal"
          value={data.disposal.value}
          description={data.disposal.description}
          status={data.disposal.status}
        />
      </div>
    </div>
  );
};

export default MonitoringStatus;