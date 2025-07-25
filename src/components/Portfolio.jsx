// src/components/Portfolio.jsx
import React from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Hackathon Tracker',
    image: '/assets/hackathon.jpg',
    description: 'A platform to discover and manage hackathons.',
    link: 'https://example.com/hackathon'
  },
  {
    id: 2,
    title: 'Weather App',
    image: '/assets/weather.jpg',
    description: 'A weather forecasting app using OpenWeather API.',
    link: 'https://example.com/weather'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    image: '/assets/portfolio.jpg',
    description: 'My personal portfolio built with React and Bootstrap.',
    link: 'https://example.com/portfolio'
  }
];

const Portfolio = ({ darkMode }) => {
  return (
    <section id="portfolio" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Here are some of the projects I've worked on recently.</p>
        </div>

        <div className="row">
          {portfolioItems.map((item) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={item.id * 100}
            >
              <div className={`card h-100 shadow-sm ${darkMode ? 'bg-secondary text-light' : ''}`}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text flex-grow-1">{item.description}</p>
                  <a
                    href={item.link}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
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
