import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Users, Sparkles } from 'lucide-react';
import type { SearchFilters } from '../types'

const HomePage = () => {
  const navigate = useNavigate();
  const [showAISearch, setShowAISearch] = useState(false);
  const [aiQuery, setAiQuery] = useState('');

  const [filters, setFilters] = useState<Partial<SearchFilters>>({
    location: '',
    guests: 2,
  });

  const handleSearch = () => {
    navigate('/search', { state: { filters } });
  };

  const handleAISearch = () => {
    // TODO: Implement AI search processing
    navigate('/search', { state: { aiQuery } });
  };

  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find your perfect stay
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Compare prices from multiple booking sites to find the best deals on hotels worldwide.
          </p>
        </div>
      </div>

      {/* Search Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32 bg-white rounded-lg shadow-xl p-6">
          {!showAISearch ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Where are you going?"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Check-in</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Check-out</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    value={filters.guests}
                    onChange={(e) => setFilters({ ...filters, guests: parseInt(e.target.value) })}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Tell us what you're looking for</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="E.g., Find me a budget-friendly 5-star hotel near Mumbai with a pool"
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowAISearch(!showAISearch)}
              className="inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              {showAISearch ? 'Switch to Regular Search' : 'Try AI Search'}
            </button>

            <button
              type="button"
              onClick={showAISearch ? handleAISearch : handleSearch}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Search Hotels
            </button>
          </div>
        </div>
      </div>
            {/* Hot Hotel Deals Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold mb-6">Hot hotel deals right now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            name: "Taj Fort Aguada Resort & Spa",
            rating: "9.1 - Excellent",
            reviews: "13,596",
            location: "Goa, India",
            discount: "13% Less than usual",
            price: "₹18,744",
            provider: "Prestigia",
            cancellation: "Free cancellation",
            date: "4 May - 8 May",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206386163.jpg?k=87d7f3d3eae1040e22ccf31da1c9ac9a9e1e27ea520ee15ebfcc507202bef18f&o=&hp=1",
          }, {
            name: "Anandha Inn Convention Centre",
            rating: "7.8 - Good",
            reviews: "10,052",
            location: "Pondicherry, India",
            discount: "19% Less than usual",
            price: "₹4,031",
            provider: "Booking.com",
            cancellation: "Free cancellation",
            date: "24 May - 25 May",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/111556745.jpg?k=2d363408221e9091007f0e64d0051b1d6db2dfefef0c22e0fb22cca7597d3d1c&o=&hp=1",
          }, {
            name: "Kurumba Maldives",
            rating: "9.3 - Excellent",
            reviews: "10,445",
            location: "Medhu-Uthuru, Maldives",
            discount: "40% Less than usual",
            price: "₹22,374",
            provider: "Prestigia",
            cancellation: "Free cancellation",
            date: "12 May - 13 May",
            image: "https://images.trvl-media.com/lodging/2000000/1120000/1118600/1118581/07d2546c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          }, {
            name: "Furaveri Island Resort",
            rating: "9.1 - Excellent",
            reviews: "12,960",
            location: "Furaveri, Maldives",
            discount: "30% Less than usual",
            price: "₹22,333",
            provider: "Prestigia",
            cancellation: "Free cancellation",
            date: "11 May - 13 May",
            image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201612240402252330-17918-0c75a9a66e1811ec823f0a58a9feac02.jpg",
          }, {
            name: "Taj Hotel",
            rating: "9.1 - Excellent",
            reviews: "12,960",
            location: "Bombay, India",
            discount: "30% Less than usual",
            price: "₹26,369",
            provider: "Prestigia",
            cancellation: "Free cancellation",
            date: "11 May - 13 May",
            image: "https://www.ihcltata.com/content/dam/tajhotels/ihcl/taj/Taj-banner.jpg",
          }].map((hotel, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <p className="text-gray-500 text-sm">{hotel.rating} ({hotel.reviews})</p>
                <p className="text-gray-600 text-sm">📍 {hotel.location}</p>
                <span className="text-red-500 font-semibold text-sm">{hotel.discount}</span>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xl font-bold">{hotel.price}</span>
                  <span className="text-gray-600 text-sm">{hotel.provider}</span>
                </div>
                <p className="text-green-500 text-sm">{hotel.cancellation}</p>
                <p className="text-gray-500 text-sm">{hotel.date}</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Check deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
          {/* Footer Section */}
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-2 text-gray-400">We help you find the best hotel deals from multiple booking sites.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white">Help Center</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-3 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} StayScape. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
};
export default HomePage;
