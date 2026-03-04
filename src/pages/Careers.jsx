import React from "react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Travel Team ✈️
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Build your career in the exciting world of tourism and explore opportunities with us.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Work With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🌍 Travel Opportunities</h3>
            <p className="text-gray-600">
              Experience destinations worldwide while building your career.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🚀 Growth & Learning</h3>
            <p className="text-gray-600">
              Continuous learning programs and career advancement opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🤝 Friendly Culture</h3>
            <p className="text-gray-600">
              Work in a collaborative and innovative environment.
            </p>
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Openings
          </h2>

          <div className="space-y-6">

            {/* Job 1 */}
            <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">
                Tour Manager
              </h3>
              <p className="text-gray-600 mt-2">
                Manage tour operations and coordinate with customers and partners.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>

            {/* Job 2 */}
            <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">
                Travel Consultant
              </h3>
              <p className="text-gray-600 mt-2">
                Help customers plan vacations and suggest the best travel packages.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>

            {/* Job 3 */}
            <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">
                Digital Marketing Executive
              </h3>
              <p className="text-gray-600 mt-2">
                Promote travel packages through social media and online campaigns.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-6">
          Send your resume to careers@yourtravelwebsite.com
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact HR
        </button>
      </div>

    </div>
  );
}