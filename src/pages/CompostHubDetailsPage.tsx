import React from 'react';
import FacilityHeader from '../components/FacilityHeader';
import FacilityInfoCard from '../components/FacilityInfoCard';
import MapComponent from '../components/MapComponent';
import QuickActions from '../components/QuickActions';
import PageFooterNav from '../components/PageFooterNav';
import { Link } from 'react-router-dom'; // For "Back to List"

const CompostHubDetailsPage: React.FC = () => {
  // Dummy data for the facility
  const facilityData: {
    name: string;
    distance: string;
    address: string;
    rating: number;
    status: 'Open' | 'Closed';
    hours: string;
    phone: string;
    about: string;
    estimatedTravel: string;
    acceptedMaterials: string[];
    communityNotes: string;
  } = {
    name: 'Urban Compost Hub',
    distance: '2.1 km',
    address: '42 Lake Rd, Ward 3',
    rating: 4.3,
    status: 'Open', // Could be 'Open' or 'Closed'
    hours: '8am-7pm',
    phone: '+91 98300 11223',
    about: 'Neighborhood composting facility accepting kitchen scraps and yard waste. Free drop-off for residents.',
    estimatedTravel: '8 min by bike',
    acceptedMaterials: ['Vegetable peels', 'Coffee grounds', 'Leaves', 'Paper towels'],
    communityNotes: 'Bins are clean and staff is helpful.\n"Busy on weekends; weekday mornings are best."',
  };

  const similarFacilities = [
    { name: 'Lakeview Compost Site', address: '48 Lake Rd', distance: '2.5 km', rating: 4.2, status: 'Open' },
    { name: 'Ward 3 BioBins', address: '2.6 km', distance: '2.6 km', rating: 4.1, status: 'Closes 6pm' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Bar for Hub Name and Back Link */}
      <div className="bg-white p-6 shadow-sm flex justify-between items-center sticky top-0 z-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{facilityData.name}</h2>
          <p className="text-sm text-gray-600">
            {facilityData.address} • {facilityData.distance} • Open — Community composting unit
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-700">Details</p>
          <Link to="/facilities-list" className="text-sm text-green-600 hover:underline">
            Back to List
          </Link>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-2 space-y-6">
            <FacilityHeader
              name={facilityData.name}
              distance={facilityData.distance}
              rating={facilityData.rating}
              status={facilityData.status}
              hours={facilityData.hours}
              phone={facilityData.phone}
            />
            <FacilityInfoCard
              about={facilityData.about}
              location={facilityData.address}
              estimatedTravel={facilityData.estimatedTravel}
              acceptedMaterials={facilityData.acceptedMaterials}
              communityNotes={facilityData.communityNotes}
            />
             {/* "Visited Urban Compost Hub?" section integrated here as per image */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between text-green-800 border border-green-200">
                <div>
                    <p className="font-semibold">Visited Urban Compost Hub?</p>
                    <p className="text-sm text-gray-600">Share feedback & earn credits</p>
                </div>
                <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors">
                    Submit Feedback
                </button>
            </div>
          </div>

          {/* Right Column (Map and Similar Facilities) */}
          <div className="lg:col-span-1 space-y-6">
            <MapComponent similarFacilities={similarFacilities} />
          </div>
        </div>

        {/* Quick Actions (bottom left) */}
        <div className="mt-8">
            <QuickActions />
        </div>
      </div>

      {/* Page Footer Navigation */}
      <PageFooterNav />
    </div>
  );
};

export default CompostHubDetailsPage;
























// import React, { useState, useEffect, useRef } from 'react';
// import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
// import { PlaceResult, DirectionsResult } from '@googlemaps/types';
// import { TrashIcon, BeakerIcon, ArrowRightIcon, ArrowPathIcon, MapPinIcon } from '@heroicons/react/24/outline';
// import { motion, Variants } from 'framer-motion';

// // NOTE: For local development, you need a valid Google Maps API Key here.
// // On the platform, this will be handled automatically.
// const GOOGLE_MAPS_API_KEY = ""; // Replace with your Google Maps API Key

// const CompostHubDetailsPage: React.FC = () => {
//   const [selectedPlace, setSelectedPlace] = useState<PlaceResult | null>(null);
//   const [searchResults, setSearchResults] = useState<PlaceResult[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [directions, setDirections] = useState<DirectionsResult | null>(null);
//   const [mapZoom, setMapZoom] = useState(12);
//   const [isSearching, setIsSearching] = useState<boolean>(false);

//   // Animation variants
//   const sidebarVariants: Variants = {
//     hidden: { x: '-100%' },
//     visible: { x: '0%', transition: { type: 'tween', duration: 0.5 } },
//   };

//   const buttonVariants: Variants = {
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 },
//   };

//   // Internal component to handle search and directions
//   const MapLogic = () => {
//     const map = useMap();
//     const places = useMapsLibrary('places');
//     const routes = useMapsLibrary('routes');

//     const directionsService = useRef<google.maps.DirectionsService | null>(null);
//     const placesService = useRef<google.maps.places.PlacesService | null>(null);
    
//     useEffect(() => {
//       if (map && !placesService.current) {
//         placesService.current = new google.maps.places.PlacesService(map);
//       }
//       if (!directionsService.current && routes) {
//           directionsService.current = new routes.DirectionsService();
//       }
//     }, [map, places, routes]);

//     const handleSearch = () => {
//       if (!placesService.current || !map || !searchQuery) return;
      
//       setIsSearching(true);
//       setSearchResults([]);
//       setDirections(null);

//       const request: google.maps.places.PlaceSearchRequest = {
//         query: searchQuery,
//         locationBias: map.getCenter()!,
//         radius: 50000,
//       };
      
//       placesService.current.textSearch(request, (results, status) => {
//         setIsSearching(false);
//         if (status === google.maps.places.PlaceSearchStatus.OK && results) {
//           setSearchResults(results.slice(0, 10));
//           map.setCenter(results[0].geometry?.location!);
//           map.setZoom(13);
//         } else {
//           console.error('Places Search failed:', status);
//           setSearchResults([]);
//         }
//       });
//     };

//     const getDirections = (placeId: string) => {
//       if (!directionsService.current || !selectedPlace) return;

//       const request: google.maps.DirectionsRequest = {
//         origin: map!.getCenter()!, 
//         destination: { placeId },
//         travelMode: google.maps.TravelMode.DRIVING,
//       };

//       directionsService.current.route(request, (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK && result) {
//           setDirections(result);
//         } else {
//           console.error('Directions request failed:', status);
//           setDirections(null);
//         }
//       });
//     };

//     return (
//       <>
//         {/* Sidebar for Search and Details */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={sidebarVariants}
//           className="w-full md:w-1/3 lg:w-1/4 p-6 bg-white shadow-xl flex flex-col z-10"
//         >
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Facilities Finder</h1>
//           <p className="text-gray-600 mb-6">Find nearby recycling centers and compost units.</p>

//           {/* Search Bar */}
//           <div className="mb-4">
//             <input
//               type="text"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
//               placeholder="Search for facilities..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') handleSearch();
//               }}
//             />
//             <button
//               onClick={handleSearch}
//               disabled={isSearching}
//               className={`w-full mt-2 px-4 py-3 font-bold rounded-lg transition-colors ${
//                 isSearching ? 'bg-gray-400 text-gray-100 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'
//               }`}
//             >
//               {isSearching ? <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin inline" /> : null}
//               Search
//             </button>
//           </div>
          
//           {/* Search Results / Selected Place Details */}
//           <div className="flex-1 overflow-y-auto pr-2">
//             {selectedPlace ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-green-50 p-6 rounded-xl border border-green-200"
//               >
//                 <h2 className="text-xl font-bold text-green-800 mb-2">{selectedPlace.name}</h2>
//                 <p className="text-sm text-green-700">{selectedPlace.formatted_address}</p>
//                 <div className="mt-4 space-y-2">
//                   <button
//                     onClick={() => getDirections(selectedPlace.place_id!)}
//                     className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                   >
//                     <ArrowRightIcon className="w-5 h-5 mr-2" /> Get Directions
//                   </button>
//                   <button
//                     onClick={() => { setDirections(null); setSelectedPlace(null); }}
//                     className="w-full flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
//                   >
//                     <TrashIcon className="w-5 h-5 mr-2" /> Clear
//                   </button>
//                 </div>
//               </motion.div>
//             ) : (
//               searchResults.length > 0 ? (
//                 <ul className="space-y-4">
//                   {searchResults.map((result) => (
//                     <motion.li
//                       key={result.place_id}
//                       onClick={() => setSelectedPlace(result)}
//                       className="p-4 bg-gray-100 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
//                       variants={buttonVariants}
//                       whileHover="hover"
//                       whileTap="tap"
//                     >
//                       <h3 className="font-semibold text-gray-900">{result.name}</h3>
//                       <p className="text-sm text-gray-600">{result.formatted_address}</p>
//                     </motion.li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-center text-gray-500 mt-4">Search results will appear here.</p>
//               )
//             )}
//           </div>
          
//           {/* CRUD Operations (Placeholders) */}
//           <div className="mt-6 pt-6 border-t border-gray-200">
//             <h2 className="text-xl font-bold text-gray-900 mb-4">Facility Management</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <button
//                 className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 Add
//               </button>
//               <button
//                 className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
//               >
//                 Update
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//               >
//                 Remove
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               These features require a backend (like Firestore) to manage facilities.
//             </p>
//           </div>
//         </motion.div>

//         {/* Map Container */}
//         <div className="flex-1 w-full h-full">
//           <Map
//             defaultCenter={{ lat: 28.7041, lng: 77.1025 }} // Default to Delhi
//             defaultZoom={mapZoom}
//             mapId="DEMO_MAP_ID"
//           >
//             {searchResults.map((result, index) => (
//               <AdvancedMarker
//                 key={index}
//                 position={result.geometry?.location}
//                 onClick={() => setSelectedPlace(result)}
//               >
//                 <Pin
//                   background={'#10B981'}
//                   glyphColor={'#ffffff'}
//                   borderColor={'#047857'}
//                   scale={1.5}
//                 />
//               </AdvancedMarker>
//             ))}
//             {selectedPlace && (
//               <InfoWindow position={selectedPlace.geometry?.location}>
//                 <div className="p-2">
//                   <h3 className="font-semibold text-gray-900">{selectedPlace.name}</h3>
//                   <p className="text-sm text-gray-600">{selectedPlace.formatted_address}</p>
//                 </div>
//               </InfoWindow>
//             )}
//             {directions && (
//               <DirectionsRenderer directions={directions} />
//             )}
//           </Map>
//         </div>
//       </>
//     )
//   }

//   // Component to render directions on the map
//   const DirectionsRenderer: React.FC<{ directions: DirectionsResult }> = ({ directions }) => {
//     const map = useMap();
//     const routesLibrary = useMapsLibrary('routes');
//     const renderer = useRef<google.maps.DirectionsRenderer | null>(null);

//     useEffect(() => {
//       if (!renderer.current && map && routesLibrary) {
//         renderer.current = new routesLibrary.DirectionsRenderer({ map });
//       }
//       if (renderer.current) {
//         renderer.current.setDirections(directions);
//       }
//     }, [directions, map, routesLibrary]);

//     return null;
//   }
  
//   return (
//     <div className="flex w-full h-screen bg-gray-50 overflow-hidden">
//         {GOOGLE_MAPS_API_KEY ? (
//           <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
//             <MapLogic />
//           </APIProvider>
//         ) : (
//           <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600">
//             <h2 className="text-lg font-semibold">Please provide a Google Maps API Key to display the map.</h2>
//           </div>
//         )}
//     </div>
//   );
// };
// export default CompostHubDetailsPage;
