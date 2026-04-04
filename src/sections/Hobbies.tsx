import React from 'react';
import './Hobbies.css';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="section-alt">
      <div className="container">
        <h2>Hobbies & Interests</h2>
        <div className="hobbies-grid">
          <div className="hobby-card">
            <div className="hobby-icon">🎱</div>
            <h3>Snooker</h3>
            <p>A dedicated fan of <strong>Mark Selby</strong>.</p>
            <blockquote className="hobby-quote">
              "Hard work beats talent when talent doesn't work hard."
            </blockquote>
          </div>
          
          <div className="hobby-card">
            <div className="hobby-icon">🗣️</div>
            <h3>Debate</h3>
            <p>Active in campus debate competitions. Our team has achieved <strong>Champion</strong>, <strong>Runner-up</strong>, and <strong>Third Place</strong> in various university tournaments.</p>
          </div>

          <div className="hobby-card">
            <div className="hobby-icon">✈️</div>
            <h3>Travel</h3>
            <p>Enjoy exploring new places and experiencing different cultures during my time away from study.</p>
          </div>

          <div className="hobby-card">
            <div className="hobby-icon">💪</div>
            <h3>Fitness</h3>
            <p>An entry-level fitness enthusiast, maintaining a healthy balance between study and physical well-being.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
