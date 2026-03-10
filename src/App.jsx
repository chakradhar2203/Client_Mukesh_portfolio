import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FilmTimeline from './components/FilmTimeline';
import MediaSection from './components/MediaSection';
import Passion from './components/Passion';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-orange-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

export default function App() {
  useEffect(() => {
    // Ensure page starts at top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0f0f0f] font-montserrat">
      {/* Reading progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <FilmTimeline />
        <MediaSection />
        <Passion />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
