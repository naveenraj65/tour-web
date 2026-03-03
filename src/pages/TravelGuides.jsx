import React from "react";
import {
  FileText,
  Shield,
  ClipboardList,
  DollarSign,
  Mountain,
  Heart,
} from "lucide-react";

const TravelGuides = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-600 rounded-md"></div>
            <h1 className="text-xl font-bold text-gray-800">
              Wanderlust
            </h1>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <li className="hover:text-teal-600 cursor-pointer">Destinations</li>
            <li className="hover:text-teal-600 cursor-pointer">Tours</li>
            <li className="hover:text-teal-600 cursor-pointer">About</li>
            <li className="hover:text-teal-600 cursor-pointer">Resources</li>
            <li className="hover:text-teal-600 cursor-pointer">Contact</li>
          </ul>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 text-xl">🌙</button>
            <button className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition">
              Book Now
            </button>
          </div>

        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-teal-700 to-green-600 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Travel Guides
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Comprehensive destination guides to help you plan your perfect trip
        </p>
      </section>

      {/* ================= QUICK REFERENCE SECTION ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">

        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">
          Quick Reference Guides
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="bg-teal-100 w-16 h-16 mx-auto flex items-center justify-center rounded-xl mb-4">
              <FileText className="text-teal-600" size={28} />
            </div>
            <p className="font-medium text-gray-700">Visa Info</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="bg-teal-100 w-16 h-16 mx-auto flex items-center justify-center rounded-xl mb-4">
              <Shield className="text-teal-600" size={28} />
            </div>
            <p className="font-medium text-gray-700">Safety Tips</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="bg-teal-100 w-16 h-16 mx-auto flex items-center justify-center rounded-xl mb-4">
              <ClipboardList className="text-teal-600" size={28} />
            </div>
            <p className="font-medium text-gray-700">Checklist</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="bg-teal-100 w-16 h-16 mx-auto flex items-center justify-center rounded-xl mb-4">
              <DollarSign className="text-teal-600" size={28} />
            </div>
            <p className="font-medium text-gray-700">Budgeting</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="bg-teal-100 w-16 h-16 mx-auto flex items-center justify-center rounded-xl mb-4">
              <Mountain className="text-teal-600" size={28} />
            </div>
            <p className="font-medium text-gray-700">Activities</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="bg-teal-100 w-16 h-16 mx-auto flex items-center justify-center rounded-xl mb-4">
              <Heart className="text-teal-600" size={28} />
            </div>
            <p className="font-medium text-gray-700">Culture</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default TravelGuides;