import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Brand</div>
      <div className={`navbar-links ${showMenu ? 'active' : ''}`}>
        <a href="#home" className="navbar-link active">Home</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="#collaboration" className="navbar-link">Collaboration</a>
        <a href="#contact" className="navbar-link">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
