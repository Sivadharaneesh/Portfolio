// src/components/Hero.jsx
import React from 'react';
import '../style/Hero.css'; // 👈 Import the CSS file

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-gradient d-flex align-items-center min-vh-100 text-white text-center"
      data-aos="fade-in"
    >
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="text-center flex-grow-1">
          <h1>Hi, I'm Siva Dharaneesh</h1>
          <h4 className="fw-light">
            Aspiring Full Stack Developer | Innovator | Learner
          </h4>

          {/* Resume Button */}
          <a
            href="https://github.com/Sivadharaneesh/Resume/blob/main/Resume.pdf"
            className="btn btn-outline-light mt-4 px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-4 fs-4">
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

        <img
          src={process.env.PUBLIC_URL + "/assets/profile.png"}
          alt="Profile"
          width="350"
          className="rounded mb-4"
        />
      </div>
    </section>
  );
};

export default Hero;
