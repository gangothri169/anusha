import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { letters, type Letter } from '../data/letters';

const OpenWhen = () => {
  const [openLetter, setOpenLetter] = useState<Letter | null>(null);
  const [openingId, setOpeningId] = useState<number | null>(null);

  const handleOpen = (letter: Letter) => {
    setOpeningId(letter.id);
    setTimeout(() => {
      setOpenLetter(letter);
      setOpeningId(null);
    }, 600);
  };

  return (
    <section
      id="letters"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fce8ed 0%, #fff9f0 50%, #f0f4ff 100%)' }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="petal-divider mb-4">💌 ✦ 💌</div>
          <h2 className="font-dancing text-4xl md:text-6xl gradient-text mb-3">
            Little Letters for You Two
          </h2>
          <p className="font-playfair italic text-amber-700 text-base">
            Open them when the moment is right ✉️
          </p>
        </motion.div>

        {/* Envelopes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {letters.map((letter, i) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="envelope"
            >
              <motion.button
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleOpen(letter)}
                className={`w-full text-left rounded-3xl overflow-hidden bg-gradient-to-br ${letter.color} shadow-md border border-white/50 transition-shadow hover:shadow-xl`}
              >
                {/* Envelope flap */}
                <div className={`${letter.sealColor} bg-opacity-30 relative flex items-center justify-center py-5`}
                  style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))` }}>
                  {/* Flap triangle */}
                  <div className="absolute inset-x-0 top-0 h-0 border-l-[200px] border-r-[200px] border-t-[50px] border-l-transparent border-r-transparent"
                    style={{ borderTopColor: 'rgba(255,255,255,0.4)' }} />
                  {/* Opening animation */}
                  <AnimatePresence>
                    {openingId === letter.id && (
                      <motion.div
                        initial={{ rotateX: 0 }}
                        animate={{ rotateX: -180 }}
                        className="absolute inset-x-0 top-0 h-12 bg-white/30"
                        style={{ transformOrigin: 'top', transformStyle: 'preserve-3d' }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="text-4xl relative z-10 mt-4">{letter.emoji}</span>
                </div>

                {/* Seal dot */}
                <div className="flex justify-center -mt-4 relative z-10">
                  <div className={`w-8 h-8 ${letter.sealColor} rounded-full flex items-center justify-center shadow-md`}>
                    <Mail size={14} className="text-white" />
                  </div>
                </div>

                {/* Label */}
                <div className="p-5 pt-3 text-center">
                  <p className="font-dancing text-amber-900 text-lg leading-tight">{letter.title}</p>
                  <p className="font-lato text-amber-600 text-xs mt-2 italic">tap to open ✨</p>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Letter modal */}
      <AnimatePresence>
        {openLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setOpenLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className={`relative max-w-lg w-full mx-4 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${openLetter.color}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`${openLetter.sealColor} bg-opacity-40 p-6 text-center relative`}
                style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.15))` }}>
                <span className="text-4xl">{openLetter.emoji}</span>
                <h3 className="font-dancing text-amber-900 text-xl mt-2 leading-tight">{openLetter.title}</h3>
                <button
                  onClick={() => setOpenLetter(null)}
                  className="absolute top-4 right-4 bg-white/60 rounded-full p-1.5 text-amber-800 hover:bg-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {openLetter.message.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`font-lato text-amber-900 leading-relaxed mb-3 text-sm ${
                      i === 0 ? 'font-dancing text-lg text-rose-500' :
                      i === openLetter.message.length - 1 ? 'font-dancing text-base text-rose-400 italic mt-4' : ''
                    }`}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Close button */}
              <div className="p-4 text-center border-t border-white/30">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpenLetter(null)}
                  className="btn-magical text-sm py-2 px-6"
                >
                  Close with love 💕
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OpenWhen;
