import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

export default function BookingPage() {
  const { destination } = useParams();
  const location = useLocation();

  const { persons, totalAmount } = location.state || {};

  if (!totalAmount) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">No booking data found</h1>
        <Link to={`/trip/${destination}`} className="text-blue-500">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Booking Summary
        </h1>

        <p className="mb-2">Destination: <strong>{destination}</strong></p>
        <p className="mb-2">Persons: <strong>{persons}</strong></p>
        <p className="mb-6 text-xl font-bold text-green-600">
          Total: ₹{totalAmount.toLocaleString()}
        </p>

        <Link
          to="/payment"
          state={{ totalAmount }}
          className="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
}