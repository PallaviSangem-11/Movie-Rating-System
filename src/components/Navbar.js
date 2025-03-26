import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import AuthModal from './AuthModal';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, isAdmin, logout } = useAuth();
  const { theme } = useTheme();

  // Add effect to initialize Bootstrap dropdowns
  useEffect(() => {
    // Check if Bootstrap is loaded
    if (typeof window !== 'undefined' && typeof window.bootstrap !== 'undefined') {
      // Initialize all dropdowns
      const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
      dropdownElementList.forEach(dropdownToggleEl => {
        new window.bootstrap.Dropdown(dropdownToggleEl);
      });
    }
  }, []);

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} sticky-top shadow-sm`}>
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
          <div className="brand-logo ">
              <div className="d-flex justify-content-space-between align-items-center">
                <div className="bg-danger text-white p-2 rounded">
                  <strong>B</strong>
                </div>
                <div className="ms-2 text-white">
                  <strong>BLOCK BUSTER</strong>
                  <div>
                    <small>Film Review</small>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <form className="d-flex mx-auto position-relative" onSubmit={handleSearch} style={{ maxWidth: '500px' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search movies..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary position-absolute end-0" type="submit" style={{ borderRadius: '0 0.375rem 0.375rem 0' }}>
                <FaSearch />
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              {/* <li className="nav-item me-3">
                <ThemeToggle />
              </li> */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserCircle size={24} className={theme === 'light' ? 'text-dark' : 'text-light'} />
                </a>
                <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="navbarDropdown">
                  {user ? (
                    <>
                      <li>
                        <span className="dropdown-item-text">Hello, {user.email}</span>
                      </li>
                      {isAdmin && (
                        <li>
                          <Link className="dropdown-item" to="/admin">Admin Dashboard</Link>
                        </li>
                      )}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={logout}>Logout</button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <button className="dropdown-item" onClick={handleOpenAuthModal}>Login</button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleOpenAuthModal}>Sign Up</button>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
    </>
  );
};

export default Navbar;
