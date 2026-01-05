import React from 'react';
import '../style/Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Management System',
    description: 'A platform to manage people efficiently.',
    link: 'https://github.com/Sivadharaneesh/Management-system'
  },
  {
    id: 2,
    title: 'Dynamic Route Optimization',
    description: 'Pathfinding visualization platform simulating intelligent urban navigation.',
    link: 'https://github.com/sanjjiiev/Dynamic-Route-Optimization-System'
  },
  {
    id: 3,
    title: 'E-commerce Website',
    description: 'A full-fledged online shopping platform with cart and purchase flow.',
    link: 'https://github.com/sanjjiiev/E-commerce-Website'
  },
  {
    id: 4,
    title: 'Precision-Line-Guided-Autonomous-Robot',
    description: 'Precision-Line-Guided-Autonomous-Robot with c++.',
    link: 'https://github.com/sanjjiiev/Precision-Line-Guided-Autonomous-Robot'
  },
  {
    id: 5,
    title: 'CampusConnect',
    description: 'A Reddit-style platform for students to team up for projects and events with React,Node.js,Express,MongoDb.',
    link: 'https://github.com/Sivadharaneesh/Campus-Connect'
  },
  {
    id: 6,
    title: 'Internships',
    description: 'A one month internship in shlok informations on webdevelopment and UI design ',
    link: 'https://github.com/Sivadharaneesh/shlokInternship/blob/main/SHLOK_INTERNSHIP.pdf'
  }
];

const Portfolio = ({ darkMode }) => {
  return (
    <section id="portfolio" className="colorful-gradient py-5 text-white">
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>Projects</h2>
          <p id="a">Here are some of the projects I've worked on recently.</p>
        </div>

        <div className="row">
          {portfolioItems.map((item) => (
            <div className="col-md-6 col-lg-4 mb-4" key={item.id} data-aos="flip-left">
              <div className="flip-card glass-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="flip-card-back">
                    <p>{item.description}</p>
                    <a
                      href={item.link}
                      className="btn btn-light mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
