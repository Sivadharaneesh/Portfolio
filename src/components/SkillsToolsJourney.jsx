// src/components/SkillsJourney.jsx
import React from 'react';
import '../style/SkillsToolsJourney.css';

const journey = [
  'Started with HTML, CSS, and JavaScript to build static websites.',
  'Explored React to create dynamic SPAs and components.',
  'Ventured into backend using Node.js and Express.',
  'Integrated MongoDB for full-stack development.',
  'Currently learning DevOps and improving API integration skills.',
];

const SkillsJourney = () => {
  return (
    <section id="skills-journey-section" className="skills-journey-section py-5">
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>My Learning Journey</h2>
          <p>Here's what I've learned and built so far.</p>
        </div>

        {/* Learning Journey */}
        <div className="journey-section mt-5" data-aos="fade-up">
          <h4 className="text-center mb-4">Learning Timeline</h4>
          <ul className="timeline">
            {journey.map((step, index) => (
              <li key={index}>
                <div className="timeline-content">
                  <h6>Step {index + 1}</h6>
                  <p>{step}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Card */}
        <div className="project-flip-container mt-5" data-aos="zoom-in">
          <h4 className="text-center mb-3">Current Project</h4>
          <div className="flip-card mx-auto">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h5>CampusConnect <hr />
                <p>A Collaboration Platform</p></h5>
                
              </div>
              <div className="flip-card-back">
                <h5>CampusConnect</h5>
                <p>A Reddit-style platform for students to team up for projects and events.</p>
                <p><strong>Stack:</strong> React, Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsJourney;
