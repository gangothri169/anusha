import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/hero.jpg';
import { config } from '../data/config';

interface HeroProps {
  onEnter: () => void;
  visible: boolean;
}

const petal = (delay: number, x: number) => (
  <div
    key={delay}
    className="absolute animate-petal-fall text-2xl pointer-events-none select-none"
    style={{
      left: `${x}%`,
      top: '-30px',
      animationDuration: `${8 + Math.random() * 10}s`,
      animationDelay: `${delay}s`,
      opacity: 0.7,
    }}
  >
    {['🌸', '✨', '🌺', '💫', '🌷'][Math.floor(Math.random() * 5)]}
  </div>
);

const Hero = ({ onEnter, visible }: HeroProps) => {
  const petals = Array.from({ length: 15 }, (_, i) => petal(i * 1.2, (i * 7) % 100));

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          id="hero-opening"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #fdf6ec 0%, #fce8ed 40%, #f0e6f6 70%, #fdf6ec 100%)',
          }}
        >
          {/* Background petals */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {petals}
          </div>

          {/* Twinkling stars background */}
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-twinkle text-yellow-300 pointer-events-none select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${0.5 + Math.random() * 1}rem`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
              }}
            >
              ✦
            </div>
          ))}

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto"
          >
            {/* Top decoration */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-3xl mb-3 select-none"
            >
              🌸 ✨ 🌸
            </motion.div>

            {/* Anniversary Tag */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-dancing text-rose-500 text-xl md:text-2xl mb-1"
            >
              {config.ANNIVERSARY_DATE}
            </motion.p>

            {/* Happy Anniversary */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-dancing gradient-text text-4xl md:text-6xl font-bold mb-1"
            >
              Happy 1st Anniversary! 🎊
            </motion.h1>

            {/* Couple Name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="font-playfair text-xl md:text-2xl text-amber-900 font-semibold mb-5 tracking-wide"
            >
              {config.PARTNER_1_NAME} & {config.PARTNER_2_NAME} <span className="text-rose-400 font-dancing">({config.COUPLE_NAME} ♡)</span>
            </motion.p>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.9 }}
              className="relative mb-5 animate-glow"
              style={{
                borderRadius: '60% 40% 55% 45% / 40% 55% 45% 60%',
                overflow: 'hidden',
                border: '4px solid rgba(232, 160, 176, 0.5)',
                width: 'clamp(210px, 50vw, 300px)',
                aspectRatio: '3/4',
              }}
            >
              <img
                src={heroImg}
                alt="Anusha & Krishna"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
              {/* Sparkle overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {[{ top: '10%', left: '10%' }, { top: '15%', right: '12%' }, { bottom: '12%', left: '8%' }, { bottom: '20%', right: '10%' }].map((pos, i) => (
                  <Sparkles
                    key={i}
                    size={16}
                    className="absolute text-yellow-300 animate-twinkle"
                    style={{ ...pos, animationDelay: `${i * 0.5}s` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Story text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="font-playfair italic text-amber-900 text-lg md:text-xl mb-2 leading-relaxed"
            >
              "Once upon a time, two people found each other..."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="font-lato text-amber-800 text-sm md:text-base mb-6 leading-relaxed max-w-md"
            >
              365 days of love, laughter, arguments over silly things and choosing each other every single day.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              onClick={onEnter}
              className="btn-magical flex items-center gap-2 text-base md:text-lg"
            >
              <Heart size={18} className="fill-white" />
              Open Your Little Love Story ♡
            </motion.button>

            {/* Bottom sparkles */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="mt-5 text-2xl select-none"
            >
              💕 🌸 💕
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Hero;
