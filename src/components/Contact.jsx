import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import '../style/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light-blue text-dark">
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>Contact Me</h2>
          <p className="lead">Have a question or want to work together? I'd love to hear from you.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="glass-form p-4 rounded shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control form-control-lg" id="name" required placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control form-control-lg" id="email" required placeholder="enterur@mail.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <input className="form-control form-control-lg" id="message" rows="5" required placeholder="Type your message..."></input>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-blue px-4 py-2 hover-scale">
                  <FaPaperPlane className="me-2" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
