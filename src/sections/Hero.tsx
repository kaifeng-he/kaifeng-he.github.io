import React from 'react';
import scholarIcon from '../assets/google-scholar.svg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-top">
          <div className="hero-avatar">
            <div className="avatar-container">
              <img
                src="/avatar.jpg"
                alt="Portrait of He Kaifeng"
                width="220"
                height="260"
                fetchPriority="high"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
            <div className="hero-social-links">
              <a href="mailto:hekf5@mail2.sysu.edu.cn" title="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
                Email
              </a>
              <a href="https://github.com/kaifeng-he" target="_blank" rel="noopener noreferrer" title="GitHub">
                <span className="hero-github-icon" aria-hidden="true" />
                GitHub
              </a>
              <a href="https://scholar.google.com/citations?user=67fge3IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar">
                <img src={scholarIcon} alt="" />
                Scholar
              </a>
            </div>
          </div>
          <div className="hero-text-content">
            <h1 className="hero-title">
              He Kaifeng <span className="title-cn">何恺锋</span>
            </h1>
            <p className="hero-subtitle">
              Undergraduate Researcher @ <a href="https://sysuselab.github.io/" target="_blank" rel="noopener noreferrer" className="lab-link">SYSU SE Lab</a>
            </p>
            <div className="hero-description">
              Focused on Artificial Intelligence for Software Engineering (AI4SE).
              {' '}I explore how large language models can generate more reliable code and better support software development.
              {' '}My interests include reasoning and knowledge-augmented methods for tackling software engineering challenges.
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
