import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { config } from '../data/config';

interface Confetti {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  xVelocity: number;
  yVelocity: number;
  shape: 'circle' | 'rect' | 'heart';
}

const COLORS = ['#e8a0b0', '#f9d9e3', '#8aad8a', '#f9e4a0', '#c06070', '#d4a0d0', '#a0c0d0'];

const AnniversarySurprise = () => {
  const [celebrating, setCelebrating] = useState(false);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const rafRef = useRef<number | null>(null);

  const launchCelebration = () => {
    setCelebrating(true);
    const pieces: Confetti[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 10,
      rotation: Math.random() * 360,
      xVelocity: (Math.random() - 0.5) * 6,
      yVelocity: 2 + Math.random() * 5,
      shape: (['circle', 'rect', 'heart'] as const)[Math.floor(Math.random() * 3)],
    }));
    setConfetti(pieces);

    setTimeout(() => {
      setCelebrating(false);
      setConfetti([]);
    }, 4000);
  };

  return (
    <section
      id="wishes"
      className="section-padding relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #2d1b25 0%, #3d2535 30%, #4a2d3a 60%, #2d1b25 100%)',
      }}
    >
      {/* Soft overlay particles */}
      {Array.from({ length: 25 }, (_, i) => (
        <div
          key={i}
          className="absolute animate-twinkle text-yellow-200 select-none pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${0.5 + Math.random() * 1.2}rem`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1.5 + Math.random() * 3}s`,
          }}
        >
          ✦
        </div>
      ))}

      {/* Floating hearts */}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="absolute animate-float text-rose-300 select-none pointer-events-none"
          style={{
            left: `${(i * 9) % 100}%`,
            top: `${20 + (i * 7) % 60}%`,
            fontSize: `${0.8 + Math.random() * 1}rem`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
            opacity: 0.4,
          }}
        >
          ♡
        </div>
      ))}

      <div className="max-w-3xl mx-auto relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top decoration */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-3xl mb-6 select-none"
          >
            🌸 💕 🌸
          </motion.div>

          {/* Main heading */}
          <h2 className="font-dancing text-4xl md:text-6xl text-rose-200 mb-4 leading-tight">
            And This Is Just the Beginning...
          </h2>

          <div className="w-32 h-px bg-rose-400 mx-auto mb-8 opacity-50" />

          {/* Count */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-playfair italic text-rose-300 text-2xl md:text-3xl mb-6"
          >
            365 days down, forever to go. ♡
          </motion.p>

          {/* Messages */}
          <div className="space-y-5 mb-10">
            {[
              {
                text: "May your life together always be filled with laughter, little adventures, endless love and countless reasons to smile.",
                delay: 0.5,
              },
              {
                text: "May you always find each other in the chaos, hold each other in the quiet, and never stop choosing each other — today, tomorrow and every day after that.",
                delay: 0.7,
              },
              {
                text: `Happy First Anniversary to my favourite couple! 🥂✨`,
                delay: 0.9,
                special: true,
              },
            ].map((msg, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: msg.delay }}
                className={`leading-relaxed mx-auto max-w-xl ${
                  msg.special
                    ? 'font-dancing text-rose-200 text-2xl'
                    : 'font-lato text-rose-100/80 text-base md:text-lg'
                }`}
              >
                {msg.text}
              </motion.p>
            ))}
          </div>

          {/* From */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="glass rounded-2xl inline-block px-8 py-4 mb-8 border border-rose-300/20"
          >
            <p className="font-dancing text-rose-200 text-xl">
              With all the love in the world,
            </p>
            <p className="font-dancing text-rose-300 text-2xl font-bold mt-1">
              {config.FROM_NAME} 💕
            </p>
          </motion.div>

          {/* Celebrate button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={launchCelebration}
              className="btn-magical text-lg flex items-center gap-2 mx-auto"
            >
              <Sparkles size={20} />
              Celebrate Again ♡
              <Heart size={18} className="fill-white" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {celebrating && confetti.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{ x: piece.x, y: -20, rotate: 0, opacity: 1 }}
            animate={{
              x: piece.x + piece.xVelocity * 100,
              y: window.innerHeight + 50,
              rotate: 720,
              opacity: 0,
            }}
            transition={{ duration: 2.5 + Math.random(), ease: 'easeIn' }}
            className="fixed pointer-events-none z-50"
            style={{
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.shape !== 'heart' ? piece.color : 'transparent',
              borderRadius: piece.shape === 'circle' ? '50%' : piece.shape === 'rect' ? '2px' : 0,
              color: piece.color,
              fontSize: piece.shape === 'heart' ? piece.size : undefined,
              lineHeight: 1,
            }}
          >
            {piece.shape === 'heart' ? '♥' : ''}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Big hearts rain during celebration */}
      <AnimatePresence>
        {celebrating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.8, 0] }}
              transition={{ duration: 1.5 }}
              className="text-8xl select-none"
            >
              🎊💕🎊
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AnniversarySurprise;
