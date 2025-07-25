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
            href="https://github.com/Sivadharaneesh/Resume/blob/main/Resume.pdf" // 🔁 Replace with your actual resume link
            className="btn btn-outline-light mt-4 px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
          >Resume</a>
  </div>
  <img
    src="/assets/profile.png"
    className="rounded mb-4"
    width="250"
    alt="Profile"
  />
</div>

    </section>
  );
};

export default Hero;
