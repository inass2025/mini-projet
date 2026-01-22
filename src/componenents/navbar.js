import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import nvLogo from './nvLogo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="luxe-header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          {/* Logo avec image */}
          <NavLink 
            to="/" 
            className="navbar-brand d-flex align-items-center" 
            onClick={closeMenu}
          >
            <img src={nvLogo} className="logo-car me-2" alt="Logo" />
            <div className="logo">
              YOUR<span>-LUXE</span>
            </div>
          </NavLink>

          {/* Bouton hamburger Bootstrap */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Bootstrap */}
          <div 
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} 
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  CONTACTS
                </NavLink>
              </li>
            </ul>

            {/* Bouton RENT */}
            <button 
              className="btn rent-btn ms-lg-3 mt-3 mt-lg-0"
              onClick={() => {
                closeMenu();
                // Votre logique de réservation
                alert('Fonctionnalité de réservation');
              }}
            >
              RENT
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}