// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-2">&copy; {new Date().getFullYear()} Siva Dharaneesh. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3 fs-4">
          <a
            href="https://github.com/Sivadharaneesh"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/siva-dharaneesh-980126340"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:sivadharaneesh017@gmail.com"
            className="text-white"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
