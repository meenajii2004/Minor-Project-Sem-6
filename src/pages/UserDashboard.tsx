import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { LogOut, Hotel, Calendar, CreditCard } from 'lucide-react';

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  // Placeholder data for demonstration
  const bookings = [
    {
      id: '1',
      hotelName: 'Grand Hotel',
      checkIn: '2024-03-20',
      checkOut: '2024-03-25',
      status: 'confirmed',
      price: 899
    },
    {
      id: '2',
      hotelName: 'Seaside Resort',
      checkIn: '2024-04-15',
      checkOut: '2024-04-20',
      status: 'pending',
      price: 1299
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* User Header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Welcome, {user.full_name || user.email}</h1>
              <p className="mt-1 text-blue-100">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Recently viewed</h2>
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{booking.hotelName}</h3>
                    <p className="text-sm text-gray-500">
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;