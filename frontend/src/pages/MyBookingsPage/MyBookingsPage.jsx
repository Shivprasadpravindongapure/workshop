import React from 'react';
import './MyBookingsPage.css';

/**
 * MyBookingsPage — placeholder for displaying the user's confirmed bookings.
 * In a real app, this would fetch bookings from the Django backend.
 */
const MyBookingsPage = () => {
  return (
    <main className="my-bookings-page page-content">
      <div className="container">
        <header className="my-bookings-page__header">
          <h1 className="my-bookings-page__title">My Bookings</h1>
          <p className="my-bookings-page__subtitle">
            Your registered workshops will appear here.
          </p>
        </header>

        <div className="my-bookings-page__empty" role="status">
          <span className="empty-icon" aria-hidden="true">📋</span>
          <p>No bookings yet.</p>
          <p className="empty-hint">Browse workshops and make your first booking!</p>
        </div>
      </div>
    </main>
  );
};

export default MyBookingsPage;
