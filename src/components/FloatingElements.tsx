import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  type: 'petal' | 'star' | 'heart' | 'butterfly';
  emoji: string;
}

const FloatingElements = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const emojis = {
      petal: ['🌸', '🌺', '🌷', '🪷'],
      star: ['✨', '⭐', '🌟', '💫'],
      heart: ['💕', '♡', '💗', '💝'],
      butterfly: ['🦋', '🌼', '🍃', '🌿'],
    };

    const created: Particle[] = Array.from({ length: 20 }, (_, i) => {
      const type = (['petal', 'star', 'heart', 'butterfly'] as const)[Math.floor(Math.random() * 4)];
      const emojiList = emojis[type];
      return {
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 20,
        size: 0.8 + Math.random() * 0.8,
        type,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
      };
    });
    setParticles(created);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal-fall select-none"
          style={{
            left: `${p.x}%`,
            top: '-40px',
            fontSize: `${p.size}rem`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.6,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
