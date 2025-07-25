// src/components/About.jsx
import React from 'react';
import '../style/About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        {/* Title */}
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>About Me</h2>
          <p className="lead">
            I'm a passionate full-stack developer focused on building web applications that are
            intuitive, performant, and solve real-world problems.
          </p>
        </div>

        {/* Personal Info Card */}
        <div className="row justify-content-center mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="col-md-8">
            <div className="card glass-pink px-4 py-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item glass-item"><strong>Name:</strong> Siva Dharaneesh A R</li>
                <li className="list-group-item glass-item"><strong>Education:</strong> B.Tech in Computer Science</li>
                <li className="list-group-item glass-item"><strong>Passions:</strong> Web Development, AI Integration, Hackathons</li>
                <li className="list-group-item glass-item"><strong>Location:</strong> India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-10">
            <div className="card glass-pink p-4">
              <h3 className="text-center mb-4 text-purple">Skills</h3>
              <div className="row text-center">
                {[
                  'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
                  'MongoDB', 'MySQL', 'C#', '.NET Core', 'Python', 'Git', 'REST APIs'
                ].map((skill, idx) => (
                  <div key={idx} className="col-6 col-sm-4 col-md-3 mb-3">
                    <span className="badge skill-badge px-3 py-2 hover-scale">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <a href="#portfolio" className="btn btn-blue btn-lg shadow-sm hover-scale">
  Explore My Work
</a>

        </div>
      </div>
    </section>
  );
};

export default About;
