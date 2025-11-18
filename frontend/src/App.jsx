import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Openings from './components/Openings';
import Tactics from './components/Tactics';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-sky-950">
      <Navbar />
      <Hero />
      <Openings />
      <Tactics />
      <footer className="py-10 text-center text-sky-300/80 bg-sky-950 border-t border-white/10">
        Built with care for learners. © {new Date().getFullYear()} BlueChess
      </footer>
    </div>
  );
}
