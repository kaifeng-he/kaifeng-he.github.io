import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am an undergraduate student at <strong>Sun Yat-sen University</strong> (School of Software Engineering, Zhuhai Campus). Currently based in <strong>Guangdong (Zhuhai / Shenzhen)</strong>, I am passionate about creating efficient, reliable, and meaningful software systems.
          </p>
          <p>
            My research interests lie in the intersection of <strong>Large Language Models (LLMs)</strong> and <strong>Software Engineering (SE)</strong>. I strive to improve the quality and robustness of AI-generated code through data-driven insights and systematic analysis.
          </p>
          
          <div className="research-interests">
            <h3>Research Interests</h3>
            <div className="interest-tags">
              <span>LLM4SE</span>
              <span>Code Generation</span>
              {/* <span>Data Quality Attribution</span> */}
              <span>Autonomous Agents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
