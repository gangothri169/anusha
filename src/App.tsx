import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingElements from './components/FloatingElements';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurLittleWorld from './components/OurLittleWorld';
import CoupleQuiz from './components/CoupleQuiz';
import MemoryGallery from './components/MemoryGallery';
import OpenWhen from './components/OpenWhen';
import AnniversarySurprise from './components/AnniversarySurprise';
import MusicPlayer from './components/MusicPlayer';
import './index.css';

function App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Global floating petals — always visible */}
      {entered && <FloatingElements />}

      {/* Opening Hero Screen */}
      <Hero onEnter={handleEnter} visible={!entered} />

      {/* Main website — revealed after clicking */}
      <AnimatePresence>
        {entered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            {/* Navbar */}
            <Navbar visible={entered} />

            {/* Home / Welcome section */}
            <section
              id="home"
              className="min-h-screen flex items-center justify-center section-padding"
              style={{
                background: 'linear-gradient(135deg, #fdf6ec 0%, #fce8ed 40%, #fff9f0 70%, #f0f4ff 100%)',
              }}
            >
              <div className="text-center max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="text-5xl mb-6 select-none animate-float">🌸 💕 🌸</div>
                  <h1 className="font-dancing text-5xl md:text-7xl gradient-text mb-6 leading-tight">
                    Welcome to Your Love Story ♡
                  </h1>
                  <p className="font-playfair italic text-amber-800 text-xl md:text-2xl mb-4 leading-relaxed">
                    "In all the world, there is no heart for me like yours."
                  </p>
                  <p className="font-lato text-amber-700 text-base mb-8 leading-relaxed">
                    One year. 365 days. 8,760 hours of choosing each other. <br />
                    Here's to forever. ✨
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center text-sm font-lato text-amber-700">
                    {['🎯 Take the Quiz', '📸 View Gallery', '💌 Open Letters', '🎊 Anniversary Wishes'].map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/60 border border-rose-200 rounded-full px-4 py-1.5 hover:bg-rose-50 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* All sections */}
            <OurLittleWorld />
            <CoupleQuiz />
            <MemoryGallery />
            <OpenWhen />
            <AnniversarySurprise />

            {/* Footer */}
            <footer className="py-8 text-center" style={{ background: '#2d1b25' }}>
              <p className="font-dancing text-rose-300 text-lg">
                Made with 💕 by your sister, with all the love in the world.
              </p>
              <p className="font-lato text-rose-400/50 text-xs mt-2">
                Happy 1st Anniversary ✨
              </p>
            </footer>

            {/* Optional music player */}
            <MusicPlayer visible={entered} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
