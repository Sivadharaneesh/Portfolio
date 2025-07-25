// src/components/Skills.jsx
import React from 'react';

const skills = [
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 85 },
  { name: 'React', value: 80 },
  { name: 'Node.js', value: 75 },
  { name: 'MongoDB', value: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>Skills</h2>
          <p>A quick overview of the technologies I use regularly.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-3" data-aos="fade-right" data-aos-delay={index * 100}>
                <div className="d-flex justify-content-between">
                  <strong>{skill.name}</strong>
                  <span>{skill.value}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${skill.value}%` }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
