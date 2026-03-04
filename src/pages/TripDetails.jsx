import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function TripDetails() {
  const { destination } = useParams();
  const [persons, setPersons] = useState(1);

  const trips = {
    paris: {
      title: "Explore Beautiful Paris 🇫🇷",
      price: "₹1,25,000",
      hero:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      places: [
        {
          name: "Eiffel Tower",
          desc: "Iconic symbol of Paris.",
          img: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e",
        },
      ],
    },

    bali: {
      title: "Explore Beautiful Bali 🌴",
      price: "₹95,000",
      hero:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      places: [
        {
          name: "Uluwatu Temple",
          desc: "Beautiful cliffside temple.",
          img: "https://images.unsplash.com/photo-1583241800698-1e04cfe2dc45",
        },
      ],
    },

    greece: {
      title: "Explore Beautiful Greece 🇬🇷",
      price: "₹1,10,000",
      hero:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      places: [
        {
          name: "Santorini",
          desc: "White and blue paradise.",
          img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
        },
      ],
    },

    newyork: {
      title: "Explore New York 🗽",
      price: "₹1,35,000",
      hero:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      places: [
        {
          name: "Statue of Liberty",
          desc: "Iconic symbol of freedom in the USA.",
          img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
        },
        {
          name: "Times Square",
          desc: "The vibrant heart of Manhattan.",
          img: "https://images.unsplash.com/photo-1507914372368-b6c0a4b2f5c6",
        },
      ],
    },

    japan: {
      title: "Explore Beautiful Japan 🇯🇵",
      price: "₹1,45,000",
      hero:
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
      places: [
        {
          name: "Mount Fuji",
          desc: "Japan’s iconic snow-capped mountain.",
          img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
        },
      ],
    },

    peru: {
      title: "Explore Amazing Peru 🇵🇪",
      price: "₹1,20,000",
      hero:
        "https://images.unsplash.com/photo-1505765050516-f72dcac9c60f",
      places: [
        {
          name: "Machu Picchu",
          desc: "Ancient Incan city in the Andes.",
          img: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60f",
        },
      ],
    },
  };

  // ✅ Get selected trip
  const trip = trips[destination];

  // ✅ Safety check
  if (!trip) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Trip Not Found
      </h1>
    );
  }

  // ✅ NOW calculate price (after trip exists)
  const basePrice = Number(trip.price.replace(/[₹,]/g, ""));
  const totalAmount = basePrice * persons;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${trip.hero})` }}
      >
        <div className="bg-black/50 p-8 rounded-xl text-center text-white">
          <h1 className="text-4xl font-bold">{trip.title}</h1>
        </div>
      </section>

      {/* Price Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <div className="bg-white shadow-xl rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            Trip Package Price
          </h2>

          <p className="text-4xl font-extrabold text-green-600 mb-4">
            {trip.price} / Person
          </p>

          {/* Select Persons */}
          <div className="my-6">
            <label className="block mb-2 font-semibold">
              Number of Persons
            </label>

            <input
              type="number"
              min="1"
              value={persons}
              onChange={(e) =>
                setPersons(Number(e.target.value))
              }
              className="border p-3 rounded-lg w-40 text-center"
            />
          </div>

          {/* Total */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-lg">Total Amount</p>
            <p className="text-3xl font-bold text-green-600">
              ₹{totalAmount.toLocaleString()}
            </p>
          </div>

          <Link
            to={`/booking/${destination}`}
            state={{ persons, totalAmount, basePrice }}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Continue to Booking
          </Link>

        </div>
      </section>

      {/* Places */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Places to Explore
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {trip.places.map((place, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg">
              <img
                src={place.img}
                alt={place.name}
                className="h-48 w-full object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {place.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}