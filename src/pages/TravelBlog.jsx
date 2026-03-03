import React from "react";

const blogPosts = [
  {
    id: 1,
    category: "Travel Tips",
    title: "The Ultimate Packing Guide for Long-Term Travel",
    description:
      "Everything you need to know about packing light while still being prepared for any adventure.",
    image:
      "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4",
    date: "January 10, 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Sustainability",
    title: "Sustainable Travel: How to Explore Responsibly",
    description:
      "Learn how to minimize your environmental impact while maximizing your travel experiences.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    date: "January 5, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    category: "Destinations",
    title: "Best Time to Visit Japan: A Season-by-Season Guide",
    description:
      "From cherry blossoms to autumn leaves, discover the perfect time for your Japanese adventure.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    date: "December 28, 2024",
    readTime: "10 min read",
  },
];

const TravelBlog = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-md"></div>
            <h1 className="text-xl font-bold text-gray-800">Wanderlust</h1>
          </div>

          <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <li className="hover:text-teal-600 cursor-pointer">Destinations</li>
            <li className="hover:text-teal-600 cursor-pointer">Tours</li>
            <li className="hover:text-teal-600 cursor-pointer">About</li>
            <li className="hover:text-teal-600 cursor-pointer">Resources</li>
            <li className="hover:text-teal-600 cursor-pointer">Contact</li>
          </ul>

          <button className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition">
            Book Now
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-teal-700 to-green-600 text-white py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Travel Blog
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Stories, tips, and inspiration for your next adventure
        </p>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 transition">
            All
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
            Destinations
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
            Travel Tips
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
            Sustainability
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
            Food & Culture
          </button>
        </div>
      </section>

      {/* ================= BLOG CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  {post.description}
                </p>

                <div className="text-gray-400 text-xs flex gap-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default TravelBlog;
