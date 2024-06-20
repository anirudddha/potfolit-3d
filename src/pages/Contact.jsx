import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container mt-40">
      <h1 className="contact-title m-10">Contact Me</h1>
      <p className="contact-subtitle">Feel free to reach out to me for collaborations or just a friendly chat!</p>
      
      <div className="social-links">
        <a href="https://www.linkedin.com/in/aniruddha-pawar-067740215/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/anirudddha" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="mailto:aniruddha662003@gmail.com">
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
    </div>
  );
}

export default Contact;
