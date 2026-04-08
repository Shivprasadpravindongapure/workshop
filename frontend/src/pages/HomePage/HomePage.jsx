import React, { useState } from 'react';
import WorkshopCard from '../../components/WorkshopCard/WorkshopCard';
import BookingForm from '../../components/BookingForm/BookingForm';
import workshops from '../../data/workshops';

const HomePage = () => {
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState('');

  const handleBook = (workshop) => {
    setSelected(workshop);
    setConfirmed('');
  };

  const handleSubmit = (formData, workshop) => {
    setSelected(null);
    setConfirmed(`Booked "${workshop.title}" — confirmation sent to ${formData.email}`);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 pt-20 pb-10">

      {/* Page heading */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Workshops</h1>
        <p className="text-sm text-gray-400 mt-1">Browse and register for upcoming sessions</p>
      </div>

      {/* Success message */}
      {confirmed && (
        <div role="status" aria-live="polite" className="mb-4 px-4 py-3 bg-green-50 border border-green-200 rounded text-sm text-green-700">
          ✅ {confirmed}
        </div>
      )}

      {/* Workshop grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            workshop={workshop}
            onBook={handleBook}
          />
        ))}
      </div>

      {/* Booking form */}
      {selected && (
        <BookingForm
          workshop={selected}
          onSubmit={handleSubmit}
          onCancel={() => setSelected(null)}
        />
      )}
    </main>
  );
};

export default HomePage;
