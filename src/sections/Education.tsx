import './Education.css';

const Education = () => (
  <section id="education" className="education-section" aria-labelledby="education-heading">
    <div className="container">
      <h2 id="education-heading">Education &amp; Experience</h2>
      <ol className="education-timeline">
        <li className="education-entry">
          <div className="education-period">
            <time dateTime="2026-11-16">16 Nov 2026</time>
            <span className="education-period-end">— Present</span>
          </div>
          <div className="education-emblem education-emblem-cuhk">
            <img src="/cuhk-shenzhen-emblem.png" alt="The Chinese University of Hong Kong, Shenzhen emblem" width="64" height="64" loading="lazy" />
          </div>
          <div className="education-content">
            <p className="education-role">Research Assistant</p>
            <h3>The Chinese University of Hong Kong, Shenzhen</h3>
            <p className="education-advisor">
              Advisor: <a href="https://pinjiahe.github.io/" target="_blank" rel="noopener noreferrer">Prof. Pinjia He</a>
            </p>
          </div>
        </li>
        <li className="education-entry">
          <div className="education-period">
            <time dateTime="2023-09">Sep 2023</time>
            <span className="education-period-end">— <time dateTime="2027-07">Jul 2027</time></span>
            <span className="education-expected">Expected graduation</span>
          </div>
          <div className="education-emblem">
            <img src="/sysu-emblem.png" alt="Sun Yat-sen University emblem" width="64" height="64" loading="lazy" />
          </div>
          <div className="education-content">
            <p className="education-role">Undergraduate · Software Engineering</p>
            <h3>Sun Yat-sen University</h3>
            <p className="education-advisor">
              Advisor: <a href="https://mingwei-liu.github.io/" target="_blank" rel="noopener noreferrer">Prof. Mingwei Liu</a>
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
);

export default Education;
