import React, { useEffect, useId, useRef, useState } from 'react';
import './Hobbies.css';

const debateAwards = [
  {
    year: '2024',
    place: 'Champion',
    event: '3rd Wenzhu Cup',
    chineseName: '文珠杯',
    host: 'SYSU',
  },
  {
    year: '2024',
    place: 'Runner-up',
    event: '8th Shanzheng Cup Invitational',
    chineseName: '善政杯',
  },
  {
    year: '2023',
    place: 'Third Place',
    event: 'Xinxing Cup Freshman Tournament',
    chineseName: '新星杯',
    host: 'SYSU',
  },
];

interface HobbyDetailCardProps {
  title: string;
  icon: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}

const HobbyDetailCard: React.FC<HobbyDetailCardProps> = ({ title, icon, intro, children }) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsId = useId();
  const hoverTimer = useRef<number | null>(null);

  const cancelHover = () => {
    if (hoverTimer.current !== null) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  useEffect(() => () => {
    if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
  }, []);

  return (
    <div
      className={`hobby-card hobby-detail-card ${showDetails ? 'show-details' : ''}`}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
          cancelHover();
          hoverTimer.current = window.setTimeout(() => {
            hoverTimer.current = null;
            setShowDetails(true);
          }, 200);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') {
          cancelHover();
          setShowDetails(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          cancelHover();
          setShowDetails(false);
        }
      }}
    >
      <div className="hobby-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <div className="hobby-panels">
        <div className="hobby-panel hobby-intro" aria-hidden={showDetails}>
          {intro}
        </div>
        <div id={detailsId} className="hobby-panel hobby-details" aria-hidden={!showDetails}>
          {children}
        </div>
      </div>
      <button
        type="button"
        className="hobby-toggle"
        aria-expanded={showDetails}
        aria-controls={detailsId}
        aria-label={showDetails ? `Back to intro: ${title}` : `Details: ${title}`}
        onClick={() => {
          cancelHover();
          setShowDetails((previous) => !previous);
        }}
      >
        <span>{showDetails ? 'Back' : 'Details'}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

const DebateCard: React.FC = () => (
  <HobbyDetailCard
    title="Debate"
    icon="🗣️"
    intro={<p>Active in campus debate competitions. Our team has achieved <strong>Champion</strong>, <strong>Runner-up</strong>, and <strong>Third Place</strong> in various university tournaments.</p>}
  >
    <ul className="debate-awards-list" aria-label="Debate team awards">
      {debateAwards.map(({ year, place, event, chineseName, host }) => (
        <li className="debate-award" key={event}>
          <div className="debate-award-meta">
            <span className="debate-award-place">{place}</span>
            <span className="debate-award-year">{year}</span>
          </div>
          <p className="debate-award-event">
            {event} <span lang="zh-CN">({chineseName})</span>{host && `, ${host}`}
          </p>
        </li>
      ))}
    </ul>
  </HobbyDetailCard>
);

const SnookerCard: React.FC = () => (
  <HobbyDetailCard
    title="Snooker"
    icon="🎱"
    intro={
      <>
        <p>A dedicated fan of <strong>Mark Selby</strong>.</p>
        <blockquote className="hobby-quote">
          "Hard work beats talent when talent doesn't work hard."
        </blockquote>
      </>
    }
  >
    <ul className="hobby-details-list" aria-label="Snooker highlights">
      <li>
        <p><strong>Quarterfinalist</strong> in a friendly campus tournament at Sun Yat-sen University (Zhuhai Campus).</p>
      </li>
      <li>
        <p>Took a photo and had lunch with snooker player <strong>Chris Wakelin</strong>. 😁</p>
      </li>
    </ul>
  </HobbyDetailCard>
);

const TravelCard: React.FC = () => (
  <HobbyDetailCard
    title="Travel"
    icon="✈️"
    intro={<p>Enjoy exploring new places and experiencing different cultures during my time away from study.</p>}
  >
    <div className="hobby-details-copy">
      <p>I enjoy unhurried trips with no fixed agenda. I'm drawn more to simple experiences that let me get a feel for everyday life than to checking off popular sights.</p>
    </div>
  </HobbyDetailCard>
);

const FitnessCard: React.FC = () => (
  <HobbyDetailCard
    title="Fitness"
    icon="💪"
    intro={<p>An entry-level fitness enthusiast, seeking a healthy balance between study and physical well-being.</p>}
  >
    <div className="hobby-details-copy">
      <p>I recently learned to swim. I also go to the gym now and then, and sometimes head out for a run after a long day of studying.</p>
      <p>I'm not especially good at any of it, but it makes me happy.</p>
    </div>
  </HobbyDetailCard>
);

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="section-alt">
      <div className="container">
        <h2>Hobbies & Interests</h2>
        <div className="hobbies-grid">
          <SnookerCard />
          
          <DebateCard />

          <TravelCard />

          <FitnessCard />
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
