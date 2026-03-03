import React from "react";
import { Search } from "lucide-react";

const FAQ = () => {
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

          {/* Right Side */}
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
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Find answers to common questions about booking, traveling, and more
        </p>
      </section>

      {/* ================= SEARCH BOX ================= */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto relative">

          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full py-4 pl-12 pr-4 border-2 border-teal-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />

        </div>
      </section>

    </div>
  );
};

export default FAQ;