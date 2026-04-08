import React, { useState } from 'react';
import WorkshopCard from '../../components/WorkshopCard/WorkshopCard';
import BookingForm from '../../components/BookingForm/BookingForm';
import allWorkshops from '../../data/workshops';
import './HomePage.css';

const CATEGORIES = ['All', ...new Set(allWorkshops.map((w) => w.category))];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookingWorkshop, setBookingWorkshop] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const filtered =
    selectedCategory === 'All'
      ? allWorkshops
      : allWorkshops.filter((w) => w.category === selectedCategory);

  const handleBook = (workshop) => {
    setBookingWorkshop(workshop);
    setSuccessMessage('');
  };

  const handleFormSubmit = (formData, workshop) => {
    setBookingWorkshop(null);
    setSuccessMessage(
      `✅ You're booked for "${workshop.title}"! A confirmation will be sent to ${formData.email}.`
    );
  };

  const handleCancel = () => {
    setBookingWorkshop(null);
  };

  return (
    <main className="home-page page-content">
      <div className="container">
        {/* Page header */}
        <header className="home-page__header">
          <h1 className="home-page__title">Available Workshops</h1>
          <p className="home-page__subtitle">
            Free, hands-on FOSSEE workshops for students across India.
          </p>
        </header>

        {/* Success alert */}
        {successMessage && (
          <div
            id="booking-success-alert"
            className="home-page__alert"
            role="status"
            aria-live="polite"
          >
            {successMessage}
          </div>
        )}

        {/* Category filter */}
        <div className="home-page__filters" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              className={`filter-btn ${selectedCategory === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Workshop list */}
        {filtered.length === 0 ? (
          <p className="home-page__empty">No workshops found in this category.</p>
        ) : (
          <ul className="workshop-list" aria-label="Workshop list">
            {filtered.map((workshop) => (
              <li key={workshop.id}>
                <WorkshopCard workshop={workshop} onBook={handleBook} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Booking form modal */}
      {bookingWorkshop && (
        <BookingForm
          workshop={bookingWorkshop}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}
    </main>
  );
};

export default HomePage;
