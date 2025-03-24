// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-primary">MovieRatings</h5>
            <p>Your ultimate destination for movie ratings and reviews. Discover, rate, and review your favorite films.</p>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none">Home</Link></li>
              <li><Link to="/movies" className="text-decoration-none">Movies</Link></li>
              <li><Link to="/about" className="text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><Link to="/terms" className="text-decoration-none">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-decoration-none">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <FaInstagram size={24} />
              </a>
              <a href="mailto:info@movieratings.com" className="text-decoration-none">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">© {currentYear} MovieRatings. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
