import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-top">
          <div className="hero-avatar">
            <div className="avatar-container">
              <img src="/avatar.jpg" alt="He Kaifeng" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <div className="hero-social-links">
              <a href="mailto:hekf5@mail2.sysu.edu.cn" title="Email">Email</a>
              <a href="https://github.com/kaifeng-he" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
              <a href="https://scholar.google.com/citations?user=67fge3IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar">Scholar</a>
            </div>
          </div>
          <div className="hero-text-content">
            <h1 className="hero-title">
              He Kaifeng <span className="title-cn">何恺锋</span>
            </h1>
            <p className="hero-subtitle">
              Undergraduate Researcher @ <a href="https://sysuselab.github.io/" target="_blank" rel="noreferrer" className="lab-link">SYSU SE Lab</a>
            </p>
            <div className="hero-description">
              Focused on the intersection of LLMs and Code Intelligence, with an emphasis on decoding strategies, reasoning enhancement, and knowledge-augmented methods. 
              Advised by <a href="https://mingwei-liu.github.io/" target="_blank" rel="noreferrer">Prof. Mingwei Liu</a> at Sun Yat-sen University.
            </div>
            <div className="hero-cta">
              <a href="#research" className="btn-academic">View Publications</a>
              <a href="#grants" className="btn-academic">View Projects</a>
            </div>
          </div>
        </div>
        
        <div className="hero-bottom">
          <div className="hero-interests">
            <h3>Research Interests</h3>
            <div className="interest-tags">
              <span>Large Language Models (LLMs)</span>
              <span>Reasoning</span>
              <span>Code Generation</span>
              <span>Knowledge-Augmented Methods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
