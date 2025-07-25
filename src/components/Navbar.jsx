// src/components/Navbar.jsx
import React from 'react';
import '../style/Navbar.css'; // make sure this path is correct

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow-sm ${darkMode ? 'navbar-dark custom-dark-navbar' : 'navbar-light bg-light'}`}>
      <div className="container">
        <a className="navbar-brand" href="#hero">MyPortfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills-journey-section">My Journey</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
