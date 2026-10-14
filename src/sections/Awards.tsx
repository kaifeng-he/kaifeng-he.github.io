import React from 'react';
import './Awards.css';

const awards = [
  {
    title: 'China National-Level Innovation Project',
    details: 'Project Leader · 5 out of 90 · CNY 24,000',
    period: '2026–2027',
  },
  {
    title: 'National Scholarship',
    details: 'Top 2%',
    period: '2025–2026',
  },
  {
    title: 'SYSU First-Class Outstanding Student Scholarship',
    details: 'Top 5%',
    period: '2025–2026',
  },
  {
    title: 'Honorable Mention (H Award)',
    details: 'Mathematical Contest in Modeling (MCM/ICM)',
    period: '2025',
  },
];

const Awards: React.FC = () => (
  <section id="awards" className="awards-section" aria-labelledby="awards-heading">
    <div className="container">
      <h2 id="awards-heading">Honors &amp; Awards</h2>
      <ul className="awards-list">
        {awards.map(({ title, details, period }) => (
          <li className="award-item" key={title}>
            <div className="award-info">
              <h3>{title}</h3>
              <p>{details}</p>
            </div>
            <span className="award-period">{period}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Awards;
