import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <p>
            Whether you're interested in his research, have a question, or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:hekaifeng70@gmail.com" className="contact-link">
              Email
            </a>
            <a href="https://github.com/kaifeng-he" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="https://scholar.google.com/citations?user=67fge3IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="contact-link">
              Google Scholar
            </a>
            {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
