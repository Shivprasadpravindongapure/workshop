import React, { useState } from 'react';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import MyBookingsPage from './pages/MyBookingsPage/MyBookingsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';

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
    <div className="flex flex-col min-h-screen">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
