import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';

// Usage of BEM "Block Element Modifier"
const Navbar = () => {
  return (
    <div className="rwrks__navbar">
      <div className="rwrks__navbar-links">
        <div className="rwrks__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
