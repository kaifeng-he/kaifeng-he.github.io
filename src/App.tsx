import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Education from './sections/Education';
import Research from './sections/Research';
import Awards from './sections/Awards';
import Hobbies from './sections/Hobbies';
import Contact from './sections/Contact';

const lastUpdated = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Asia/Shanghai',
}).format(new Date(__SITE_UPDATED_AT__));

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-layout">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Education />
        <Research />
        <Awards />
        <Hobbies />
        <Contact />
      </main>
      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} kaifeng-he. All rights reserved.</p>
        <p className="last-updated">
          Last updated: <time dateTime={__SITE_UPDATED_AT__}>{lastUpdated}</time> (UTC+8)
        </p>
      </footer>
    </div>
  )
}

export default App
