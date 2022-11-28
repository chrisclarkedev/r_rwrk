import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

// Creation of Menu component to be used in both desktop and mobile viewing
const Menu = () => (
  <>
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
  </>
);

// Usage of BEM "Block Element Modifier"
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rwrks__navbar">
      <div className="rwrks__navbar-links">
        <div className="rwrks__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="rwrks__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="rwrks__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="rwrks__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="rwrks__navbar-menu_container scale-up-center">
            <div className="rwrks__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
