import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Research from './sections/Research';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Contact />
      </main>
      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} Arw-Wow. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
