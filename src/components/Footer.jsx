// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Siva Dharaneesh. All rights reserved.</p>
        <div>
          <a href="https://github.com/" className="text-white me-3">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" className="text-white me-3">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:you@example.com" className="text-white">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
