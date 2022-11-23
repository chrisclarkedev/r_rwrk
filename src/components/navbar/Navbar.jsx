import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

// Usage of BEM "Block Element Modifier"
const Navbar = () => {
  return (
    <div className="rwrks__navbar">
      <div className="rwrks__navbar-links">
        <div className="rwrks__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="rwrks__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#rwkrs">What is RWRKS?</a>
          </p>
          <p>
            <a href="#possible">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Study</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
