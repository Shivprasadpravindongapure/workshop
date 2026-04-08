import React, { useState } from 'react';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import MyBookingsPage from './pages/MyBookingsPage/MyBookingsPage';
import AboutPage from './pages/AboutPage/AboutPage';

/**
 * App — root component.
 * Uses simple state-based routing (no external router dependency).
 * Swap with React Router when the project scales.
 */
function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'my-bookings':
        return <MyBookingsPage />;
      case 'about':
        return <AboutPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      {renderPage()}
    </>
  );
}

export default App;
