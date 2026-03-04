import React from "react";
import { Link } from "react-router-dom";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Cancellation Policy
        </h1>
        <p className="text-lg">
          Please review our cancellation and refund terms carefully.
        </p>
      </section>

      {/* Policy Content */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        {/* Refund Timeline */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-red-500">
            Refund Timeline
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li className="flex justify-between border-b pb-2">
              <span>30+ Days Before Departure</span>
              <span className="font-semibold text-green-600">100% Refund</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>15–29 Days Before Departure</span>
              <span className="font-semibold text-yellow-500">50% Refund</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>7–14 Days Before Departure</span>
              <span className="font-semibold text-orange-500">25% Refund</span>
            </li>
            <li className="flex justify-between">
              <span>Less Than 7 Days</span>
              <span className="font-semibold text-red-600">No Refund</span>
            </li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Important Notes
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Refunds are processed within 7–10 business days.</li>
            <li>Flight tickets may have separate airline cancellation policies.</li>
            <li>Processing charges may apply for payment gateway fees.</li>
            <li>In case of natural disasters or government restrictions, special policies may apply.</li>
          </ul>
        </div>

        {/* How to Cancel */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6">
            How to Cancel Your Booking
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Login to your Wanderlust account.</li>
            <li>Go to “My Bookings”.</li>
            <li>Select the trip you want to cancel.</li>
            <li>Click on “Cancel Booking” and confirm.</li>
          </ol>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Need Assistance?
          </h3>

          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to help you.
          </p>

          <Link
            to="/Contect"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
          >
            Contact Support
          </Link>
        </div>

      </section>
    </div>
  );
}