// src/components/Header.jsx
import React from 'react';
import './Header.css';  // Import the CSS file for styling
import logo from '../Assets/logo.jpg';  // Assuming your logo is stored in the Assets folder
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {
  return (
    <div className="header1">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        {/* Wrap the "FOODOMETRY" text with Link to navigate to the main page */}
        <Link to="/" className="site-name">
          <h1>FOODOMETRY</h1>
        </Link>
      </div>
      {/* Additional header content can be added here */}
    </div>
  );
};

export default Header;
