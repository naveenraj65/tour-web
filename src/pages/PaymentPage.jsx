import React from "react";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const { totalAmount } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Payment Page</h1>

        <p className="text-xl mb-6">
          Amount to Pay:
          <span className="font-bold text-green-600">
            {" "}₹{totalAmount?.toLocaleString()}
          </span>
        </p>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Pay Now
        </button>
      </div>
    </div>
  );
}