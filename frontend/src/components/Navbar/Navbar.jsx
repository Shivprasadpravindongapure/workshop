import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ activePage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Workshops' },
    { id: 'my-bookings', label: 'My Bookings' },
    { id: 'about', label: 'About' },
  ];

  const handleNav = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner container">
        <button
          id="nav-brand"
          className="navbar__brand"
          onClick={() => handleNav('home')}
          aria-label="Go to home"
        >
          🎓 FOSSEE Workshops
        </button>

        {/* Desktop nav */}
        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                id={`nav-${item.id}`}
                className={`navbar__link ${activePage === item.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(item.id)}
                aria-current={activePage === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          id="nav-menu-toggle"
          className="navbar__hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="mobile-menu" className="navbar__mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              className={`navbar__mobile-link ${activePage === item.id ? 'navbar__mobile-link--active' : ''}`}
              onClick={() => handleNav(item.id)}
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
