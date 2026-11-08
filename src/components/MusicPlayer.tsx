import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import { config } from '../data/config';

interface MusicPlayerProps {
  visible: boolean;
}

const MusicPlayer = ({ visible }: MusicPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // No music source configured? Don't render the player.
  if (!config.MUSIC_SRC) return null;
  if (!visible) return null;

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={config.MUSIC_SRC} loop preload="none" />
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={toggle}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full glass shadow-lg flex items-center justify-center hover:scale-110 transition-transform border border-rose-200"
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Music size={20} className="text-rose-400" />
          </motion.div>
        ) : (
          <VolumeX size={20} className="text-amber-500" />
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
