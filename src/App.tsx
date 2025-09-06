import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link, useLocation } from 'react-router-dom';
import GreenCreditsDashboard from './pages/GreenCreditsDashboard';
import CommunityWasteMonitorsDashboard from './pages/CommunityWasteMonitorDashboard';
import CompostHubDetailsPage from './pages/CompostHubDetailsPage';
import CitizenTrainingPage from './pages/CitizenTrainingPage';
import LandingPage from './pages/LandingPage';
import ReportWastePage from './pages/ReportWastePage';
import './index.css';

// Import icons for the common sidebar navigation
import {
  CreditCardIcon,
  ExclamationCircleIcon,
  MagnifyingGlassIcon,
  ChartBarSquareIcon,
  AcademicCapIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';


const App: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // The sidebar will only be shown on internal pages, not on the landing page
  const showSidebar = location.pathname !== '/';

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Conditional Sidebar Rendering */}
      {showSidebar && (
        <aside className="w-64 bg-white p-6 shadow-lg flex flex-col">
          {/* Logo/App Title */}
          <div className="flex items-center mb-10">
            <div className="bg-green-600 p-2 rounded-lg mr-3">
              <span className="text-white text-xl font-bold">G</span>
            </div>
            <h1 className="text-xl font-semibold">Green Champions</h1>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
                isActive('/dashboard') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
              }`}
            >
              <ChartBarSquareIcon className="h-6 w-6 mr-4" />
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              to="/report-waste"
              className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
                isActive('/report-waste') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
              }`}
            >
              <ExclamationCircleIcon className="h-6 w-6 mr-4" />
              <span className="font-medium">Report Waste</span>
            </Link>
            <Link
              to="/facilities"
              className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
                isActive('/facilities') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
              }`}
            >
              <MagnifyingGlassIcon className="h-6 w-6 mr-4" />
              <span className="font-medium">Facilities Finder</span>
            </Link>
            <Link
              to="/training"
              className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
                isActive('/training') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
              }`}
            >
              <AcademicCapIcon className="h-6 w-6 mr-4" />
              <span className="font-medium">Citizen Training</span>
            </Link>
            <Link
              to="/credits"
              className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
                isActive('/credits') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
              }`}
            >
              <CreditCardIcon className="h-6 w-6 mr-4" />
              <span className="font-medium">Green Credits</span>
            </Link>
          </nav>
        </aside>
      )}

      {/* Main content area where routes are rendered */}
      <main className={`flex-1 ${showSidebar ? '' : 'flex flex-col items-center justify-center'}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<CommunityWasteMonitorsDashboard />} />
          <Route path="/report-waste" element={<ReportWastePage />} />
          <Route path="/facilities" element={<CompostHubDetailsPage />} />
          <Route path="/training" element={<CitizenTrainingPage />} />
          <Route path="/credits" element={<GreenCreditsDashboard />} />
        </Routes>
      </main>
    </div>
  );
};

// export default App;
const RootApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;








// import React from 'react';
// import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// // Import your page components
// import GreenCreditsDashboard from './pages/GreenCreditsDashboard';
// import CommunityWasteMonitorsDashboard from './pages/CommunityWasteMonitorDashboard';
// import CompostHubDetailsPage from './pages/CompostHubDetailsPage';
// import CitizenTrainingPage from './pages/CitizenTrainingPage';
// import LandingPage from './pages/LandingPage'; // Import the new Landing Page

// // Import your main CSS (for Tailwind)
// import './index.css';

// // Import your Heroicons
// import {
//   CreditCardIcon,
//   ExclamationCircleIcon,
//   MagnifyingGlassIcon,
//   ChartBarSquareIcon,
//   AcademicCapIcon,
//   HomeIcon
// } from '@heroicons/react/24/outline';


// const App: React.FC = () => {
//   const location = useLocation();
//   const isLandingPage = location.pathname === '/'; // Check if we are on the landing page

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     // Conditional rendering for the main layout based on whether it's the landing page
//     <div className={`flex min-h-screen bg-gray-50 text-gray-800 ${isLandingPage ? 'flex-col' : ''}`}>

//       {/* Sidebar - Conditionally rendered */}
//       {!isLandingPage && (
//         <aside className="w-64 bg-white p-6 shadow-lg flex flex-col">
//           {/* Logo/Title */}
//           <div className="flex items-center mb-10">
//             <div className="bg-green-600 p-2 rounded-lg mr-3">
//               <span className="text-white text-xl font-bold">G</span>
//             </div>
//             <h1 className="text-xl font-semibold">Green Champions</h1>
//           </div>

//           {/* Navigation Links */}
//           <nav className="space-y-4">
//             <Link
//               to="/" // Link to the landing page
//               className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
//                 isActive('/') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
//               }`}
//             >
//               <HomeIcon className="h-6 w-6 mr-4" />
//               <span className="font-medium">Home</span>
//             </Link>
//             <Link
//               to="/dashboard"
//               className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
//                 isActive('/dashboard') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
//               }`}
//             >
//               <ChartBarSquareIcon className="h-6 w-6 mr-4" />
//               <span className="font-medium">Dashboard</span>
//             </Link>
//             <Link
//               to="/report-waste"
//               className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
//                 isActive('/report-waste') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
//               }`}
//             >
//               <ExclamationCircleIcon className="h-6 w-6 mr-4" />
//               <span className="font-medium">Report Waste</span>
//             </Link>
//             <Link
//               to="/facilities"
//               className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
//                 isActive('/facilities') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
//               }`}
//             >
//               <MagnifyingGlassIcon className="h-6 w-6 mr-4" />
//               <span className="font-medium">Facilities Finder</span>
//             </Link>
//             <Link
//               to="/training"
//               className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
//                 isActive('/training') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
//               }`}
//             >
//               <AcademicCapIcon className="h-6 w-6 mr-4" />
//               <span className="font-medium">Citizen Training</span>
//             </Link>
//             <Link
//               to="/credits"
//               className={`flex items-center p-3 text-gray-600 rounded-xl transition-colors duration-200 ${
//                 isActive('/credits') ? 'bg-green-50 text-green-700 font-medium' : 'hover:bg-green-50 hover:text-green-700'
//               }`}
//             >
//               <CreditCardIcon className="h-6 w-6 mr-4" />
//               <span className="font-medium">Green Credits</span>
//             </Link>
//           </nav>
//         </aside>
//       )}

//       {/* Main content area where routes are rendered */}
//       <main className={`flex-1 ${isLandingPage ? 'w-full' : ''}`}> {/* Take full width on landing page */}
//         <Routes>
//           {/* Set the root path to the new LandingPage */}
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/dashboard" element={<CommunityWasteMonitorsDashboard />} />
//           <Route path="/report-waste" element={<div>Report Waste Page Content Here</div>} />
//           <Route path="/facilities" element={<CompostHubDetailsPage />} />
//           <Route path="/training" element={<CitizenTrainingPage />} />
//           <Route path="/credits" element={<GreenCreditsDashboard />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// // export default App;
// const RootApp: React.FC = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default RootApp;







