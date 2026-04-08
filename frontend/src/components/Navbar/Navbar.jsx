import React, { useState } from 'react';

const Navbar = ({ activePage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'my-bookings', label: 'Bookings' },
  ];

  const handleNav = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* Brand */}
        <button
          id="nav-brand"
          onClick={() => handleNav('home')}
          className="text-blue-600 font-semibold text-base"
        >
          Workshop Booking
        </button>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                id={`nav-${item.id}`}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          id="nav-menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-gray-700 rounded" />
          <span className="block w-5 h-0.5 bg-gray-700 rounded" />
          <span className="block w-5 h-0.5 bg-gray-700 rounded" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="sm:hidden border-t border-gray-100 bg-white">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleNav(item.id)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                activePage === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
