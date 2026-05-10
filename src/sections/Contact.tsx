import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <p>
            For research discussions, collaboration opportunities, or questions, feel free to reach out by email.
          </p>
          <div className="contact-links">
            <a href="mailto:hekf5@mail2.sysu.edu.cn" className="contact-link">
              Email
            </a>
            <a href="https://github.com/kaifeng-he" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="https://scholar.google.com/citations?user=67fge3IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="contact-link">
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
