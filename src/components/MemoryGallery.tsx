import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages, type GalleryImage } from '../data/captions';

const MemoryGallery = () => {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #fff9f0 60%, #fce8ed 100%)' }}
    >
      {/* Soft blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f9d9e3, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8aad8a, transparent)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="petal-divider mb-4">📸 ✦ 📸</div>
          <h2 className="font-dancing text-4xl md:text-6xl gradient-text mb-3">
            Little Moments, Big Love ♡
          </h2>
          <p className="font-playfair italic text-amber-700 text-base">
            A scrapbook of beautiful moments ✨
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50, rotate: img.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: img.rotation }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="polaroid cursor-pointer"
              onClick={() => setSelected(img)}
              style={{
                transform: `rotate(${img.rotation}deg)`,
                width: 'clamp(200px, 40vw, 240px)',
              }}
            >
              {/* Photo */}
              <div className="overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '4px' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ objectPosition: 'center top' }}
                />
              </div>

              {/* Caption area */}
              <div className="pt-3 pb-1 px-1">
                <p className="font-dancing text-amber-800 text-center text-base leading-tight">
                  {img.accent} {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 font-lato text-amber-600 text-sm"
        >
          Click any photo to view it up close 💕
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur rounded-full p-2 text-amber-800 hover:bg-rose-50 hover:text-rose-500 transition-colors"
              >
                <X size={20} />
              </button>
              <div style={{ aspectRatio: '4/5' }}>
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="p-5 text-center bg-white">
                <p className="font-dancing text-rose-400 text-xl">{selected.accent} {selected.caption}</p>
                <p className="font-lato text-amber-600 text-xs mt-1">💕</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallery;
