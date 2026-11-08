import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages, type GalleryImage } from '../data/captions';

const MemoryGallery = () => {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #fff9f0 60%, #fce8ed 100%)' }}
    >
      {/* Soft blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f9d9e3, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8aad8a, transparent)' }}
      />

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
              className="polaroid cursor-pointer group relative"
              onClick={() => setSelected(img)}
              style={{
                transform: `rotate(${img.rotation}deg)`,
                width: 'clamp(200px, 40vw, 240px)',
              }}
            >
              {/* Photo */}
              <div className="overflow-hidden relative" style={{ aspectRatio: '4/5', borderRadius: '4px' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center top' }}
                />
                {/* Hover zoom hint icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-amber-900 rounded-full p-2 shadow-md">
                    <ZoomIn size={18} />
                  </span>
                </div>
              </div>

              {/* Caption area */}
              <div className="pt-3 pb-1 px-1">
                <p className="font-dancing text-amber-900 text-center text-base leading-tight font-medium">
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
          className="text-center mt-10 font-lato text-amber-700 text-sm"
        >
          Click any photo to view it up close 💕
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[92vh] flex flex-col my-auto border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar with Clear Close Button */}
              <div className="absolute top-3 right-3 z-20">
                <button
                  onClick={() => setSelected(null)}
                  className="bg-white/95 hover:bg-rose-100 text-amber-900 hover:text-rose-600 rounded-full p-2.5 shadow-lg border border-rose-200 transition-all flex items-center justify-center cursor-pointer"
                  title="Close (or press Esc)"
                  aria-label="Close photo"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
              </div>

              {/* Image container: clean, uncropped, auto-scaled */}
              <div className="flex-1 min-h-0 bg-stone-900/5 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="max-h-[64vh] w-auto max-w-full rounded-2xl object-contain shadow-inner"
                />
              </div>

              {/* Bottom Caption & Close button */}
              <div className="p-4 sm:p-5 text-center bg-white border-t border-rose-100">
                <p className="font-dancing text-rose-500 text-2xl font-semibold mb-1">
                  {selected.accent} {selected.caption}
                </p>
                <p className="font-lato text-amber-700 text-xs mb-3">
                  Anusha & Krishna • 1st Anniversary Memories ♡
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="btn-magical text-sm py-2 px-7 cursor-pointer"
                >
                  Close Photo ♡
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallery;
