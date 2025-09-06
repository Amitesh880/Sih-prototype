// src/pages/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
   SparklesIcon, UsersIcon, LightBulbIcon, MapPinIcon, AcademicCapIcon, ExclamationCircleIcon, CreditCardIcon, HeartIcon, TrophyIcon, ChatBubbleBottomCenterTextIcon, HandRaisedIcon, CalendarDaysIcon, GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline';


const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800 overflow-hidden">

      {/* Hero Section */}
      <div className="relative h-[90vh] bg-gradient-to-br from-green-600 to-green-800 text-white flex flex-col items-center justify-center p-8 overflow-hidden">
        {/* Background Visual (Image/Video Placeholder) */}
        <div className="absolute inset-0 z-0">
          {/* Replace with your actual stunning image or video loop */}
          <img
            src="https://images.unsplash.com/photo-1542601906-66dac633c706?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lush green landscape with clean city skyline"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Header/Nav for Landing Page */}
        <header className="absolute top-0 left-0 right-0 z-20 p-8 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
          <div className="flex items-center">
            <div className="bg-green-400 p-2 rounded-lg mr-3">
              <span className="text-white text-3xl font-extrabold">G</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">CiviCoGreen</h1>
          </div>
          <nav className="space-x-8 text-lg font-medium hidden md:flex">
            <Link to="/dashboard" className="hover:text-green-300 transition-colors">Dashboard</Link>
            <Link to="/training" className="hover:text-green-300 transition-colors">Learn</Link>
            <Link to="/facilities" className="hover:text-green-300 transition-colors">Discover</Link>
            <Link to="/report-waste" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105">Report Waste</Link>
          </nav>
          {/* Mobile navigation (Hamburger menu can be added here) */}
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 pt-20 animate-fade-in-up">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter drop-shadow-xl animate-fade-in-up">
            Empower Your Green Future, Together.
          </h2>
          <p className="mt-6 mb-10 text-xl md:text-2xl font-light max-w-3xl drop-shadow-lg animate-fade-in-up delay-200">
            Join CiviCoGreen to transform waste, learn, and build a sustainable community for generations to come.
          </p>
          <div className="space-x-4 animate-fade-in-up delay-400">
            <Link to="/dashboard" className="bg-white text-green-700 hover:bg-gray-200 px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition-all transform hover:scale-105">
              Explore CiviCoGreen
            </Link>
            <Link to="/training" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition-all transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section (Scrollable) */}
      <section className="py-20 px-8 bg-white text-gray-800 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-extrabold mb-16 text-green-800 drop-shadow-sm">Our Mission: Cultivating a Greener Tomorrow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 group">
              <LightBulbIcon className="h-24 w-24 text-green-600 mb-6 drop-shadow-md group-hover:animate-bounce-y" />
              <h4 className="text-3xl font-bold mb-4 text-green-800">Educate</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Empowering citizens with the knowledge and tools to manage waste responsibly, from segregation to composting.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 group">
              <UsersIcon className="h-24 w-24 text-blue-600 mb-6 drop-shadow-md group-hover:animate-bounce-y" />
              <h4 className="text-3xl font-bold mb-4 text-blue-800">Unite</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Fostering a strong community bond through collective action, clean-up drives, and shared green initiatives.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 group">
              <TrophyIcon className="h-24 w-24 text-yellow-600 mb-6 drop-shadow-md group-hover:animate-bounce-y" />
              <h4 className="text-3xl font-bold mb-4 text-yellow-800">Inspire</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Celebrating achievements with Green Credits and badges, inspiring continuous engagement for a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-8 bg-gray-50 text-gray-800 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-extrabold mb-16 text-green-800 drop-shadow-sm">Your Journey to a Greener Planet</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border-t-4 border-green-500 transform hover:translate-y-[-5px] transition-transform duration-300">
              <AcademicCapIcon className="h-16 w-16 text-green-500 mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-gray-900">1. Learn & Grow</h4>
              <p className="text-gray-700">Engage with interactive modules on waste management.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border-t-4 border-blue-500 transform hover:translate-y-[-5px] transition-transform duration-300">
              <ExclamationCircleIcon className="h-16 w-16 text-blue-500 mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-gray-900">2. Act & Report</h4>
              <p className="text-gray-700">Report waste, find facilities, and participate in cleanups.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border-t-4 border-yellow-500 transform hover:translate-y-[-5px] transition-transform duration-300">
              <CreditCardIcon className="h-16 w-16 text-yellow-500 mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-gray-900">3. Earn & Inspire</h4>
              <p className="text-gray-700">Get Green Credits and badges for every sustainable step.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border-t-4 border-purple-500 transform hover:translate-y-[-5px] transition-transform duration-300">
              <GlobeAsiaAustraliaIcon className="h-16 w-16 text-purple-500 mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-gray-900">4. Community Impact</h4>
              <p className="text-gray-700">Contribute to a cleaner, healthier future for all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Community Voice Section */}
      <section className="py-20 px-8 bg-white text-gray-800 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-extrabold mb-16 text-green-800 drop-shadow-sm">Hear From Our Green Champions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-green-500 mb-6" />
              <p className="italic text-lg text-gray-700 mb-6">"CiviCoGreen has completely changed how I think about waste. The training modules are fantastic and so easy to follow!"</p>
              <p className="font-semibold text-green-800">- Priya S., Citizen</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-blue-500 mb-6" />
              <p className="italic text-lg text-gray-700 mb-6">"Reporting waste is so straightforward, and seeing my Green Credits grow motivates me to do even more. Highly recommend!"</p>
              <p className="font-semibold text-blue-800">- Arjun K., Community Volunteer</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-yellow-500 mb-6" />
              <p className="italic text-lg text-gray-700 mb-6">"The Facilities Finder helped me locate a compost hub just blocks away. CiviCoGreen makes sustainable living truly accessible."</p>
              <p className="font-semibold text-yellow-800">- Sanya R., Eco-Enthusiast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-8 bg-gradient-to-r from-green-500 to-teal-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-md">Ready to Make a Difference?</h3>
          <p className="text-xl md:text-2xl font-light mb-12">
            Join thousands of citizens contributing to a cleaner, greener, and more sustainable future.
          </p>
          <Link to="/dashboard" className="bg-white text-green-700 hover:bg-gray-200 px-12 py-5 rounded-full text-2xl font-semibold shadow-xl transition-all transform hover:scale-105">
            Start Your Green Journey Today!
          </Link>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-8 text-center">
        <p>&copy; {new Date().getFullYear()} CiviCoGreen. All rights reserved.</p>
        <div className="mt-4 space-x-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;