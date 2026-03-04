import React, { useState } from "react";

export default function HelpCenter() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a trip?",
      answer:
        "Go to your desired destination page, select the number of persons, and click 'Continue to Booking' to complete your reservation.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, bookings can be cancelled up to 48 hours before departure for a full refund.",
    },
    {
      question: "Are flights included in the package?",
      answer:
        "Some packages include flights. Please check the trip details section for complete information.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@wanderlust.com or call us at +91 98765 43210.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-lg">How can we help you today?</p>

        {/* Search Bar */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-80 p-3 rounded-xl text-black shadow-md"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-3 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 text-center shadow-inner">
        <h2 className="text-3xl font-bold mb-4">
          Still Need Help?
        </h2>
        <p className="text-gray-600 mb-6">
          Our support team is available 24/7 to assist you.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"> Contact Support
</button>
          <button className="bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 transition">
            Live Chat
          </button>
        </div>
      </section>

    </div>
  );
}