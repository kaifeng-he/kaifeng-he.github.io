import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <h2>About</h2>
        <div className="about-content">
          <p>
            <strong>Kaifeng He (何恺锋)</strong> is an undergraduate student at the <strong><a href="https://sse.sysu.edu.cn/" target="_blank" rel="noopener noreferrer">School of Software Engineering, Sun Yat-sen University (中山大学)</a></strong>. Currently based in <strong>Guangdong (Zhuhai / Shenzhen)</strong>, he is passionate about creating efficient, reliable, and meaningful software systems.
          </p>

          <p>
            His research interests lie in the intersection of <strong>Large Language Models (LLMs)</strong> and <strong>Software Engineering (SE)</strong>. He strives to improve the quality and robustness of AI-generated code through data-driven insights and systematic analysis.
          </p>
          
          <div className="research-interests">
            <h3>Research Interests</h3>
            <div className="interest-tags">
              <span>LLM4SE</span>
              <span>Code Generation</span>
              {/* <span>Data Quality Attribution</span> */}
              <span>LLM-based Agents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
