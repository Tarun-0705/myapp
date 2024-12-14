// src/components/Footer.jsx
import React from 'react';
import './Footer.css';  // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2 className="footer-brand">FOODOMETRY</h2>
        </div>
        <div className="footer-links">
        <a href="/about" className="footer-link" aria-label="About Us">About</a>
        <a href="/contact" className="footer-link" aria-label="Contact Us">Contact</a>
        <a href="/privacy" className="footer-link" aria-label="Privacy Policy">Privacy</a>
        <a href="/terms" className="footer-link" aria-label="Terms of Service">Terms</a>

        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2024 FOODOMETRY. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
