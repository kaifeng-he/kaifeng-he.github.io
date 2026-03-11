import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-avatar">
          <img src="public/avatar.png" alt="He Kaifeng" onError={(e) => (e.currentTarget.style.display = 'none')} />
          {/* If no image, a subtle placeholder appears via CSS */}
        </div>
        <div className="hero-text-content">
          <h1 className="hero-title">
            He Kaifeng <span className="title-cn">何恺锋</span>
          </h1>
          <p className="hero-subtitle">
            Undergraduate Researcher @ <a href="https://sysuselab.github.io/" target="_blank" rel="noreferrer" className="lab-link">SYSU SE Lab</a>
          </p>
          <div className="hero-description">
            Focused on <strong>LLM4SE</strong>, Code Generation, and Autonomous Agents. 
            Advised by <a href="https://mingwei-liu.github.io/" target="_blank" rel="noreferrer">Prof. Mingwei Liu</a>.
          </div>
          <div className="hero-cta">
            <a href="#research" className="btn-academic">View Publications</a>
            <a href="#grants" className="btn-academic">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
