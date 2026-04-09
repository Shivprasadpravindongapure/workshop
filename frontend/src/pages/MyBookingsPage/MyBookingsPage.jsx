import React from 'react';

// Placeholder page — will fetch bookings from Django API when integrated
const MyBookingsPage = () => {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-20 pb-10">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">My Bookings</h1>
        <p className="text-sm text-gray-400 mt-1">Your registered workshops will appear here.</p>
      </div>

      <div className="flex flex-col items-center py-16 text-center text-gray-400" role="status">
        <span className="text-5xl mb-3" aria-hidden="true">📋</span>
        <p className="text-sm">No bookings yet.</p>
        <p className="text-xs mt-1">Browse workshops and make your first booking!</p>
      </div>
    </main>
  );
};

export default MyBookingsPage;
