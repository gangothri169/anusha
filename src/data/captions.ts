// ============================================================
// GALLERY CAPTIONS DATA FILE
// ============================================================
// Edit the captions for each of your 5 photos here.
//
// HOW TO EDIT:
// - Change the "caption" text to whatever you want to write.
// - Change the "rotation" value (small numbers like -3 to 3)
//   to tilt the polaroid slightly. Negative = tilt left.
// - Change the "accent" to any emoji decoration you like.
// ============================================================

export interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  rotation: number;  // degrees to rotate polaroid (e.g., -2, 1, -3)
  accent: string;    // decorative emoji/text
  alt: string;
}

// Import images - Vite handles these at build time
import couple1 from '../assets/images/couple1.jpg';
import couple2 from '../assets/images/couple2.jpg';
import couple3 from '../assets/images/couple3.jpg';
import couple4 from '../assets/images/couple4.jpg';
import couple5 from '../assets/images/couple5.jpg';

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: couple1,
    caption: "Some moments don't need words ♡",   // ← CHANGE THIS CAPTION
    rotation: -2,
    accent: "🌸",
    alt: "Couple photo 1",
  },
  {
    id: 2,
    src: couple2,
    caption: "Better things ahead, together 🌿",   // ← CHANGE THIS CAPTION
    rotation: 1.5,
    accent: "✨",
    alt: "Couple photo 2",
  },
  {
    id: 3,
    src: couple3,
    caption: "My favourite kind of quiet ♡",        // ← CHANGE THIS CAPTION
    rotation: -1,
    accent: "🍃",
    alt: "Couple photo 3",
  },
  {
    id: 4,
    src: couple4,
    caption: "Wherever we go, we go together 💙",   // ← CHANGE THIS CAPTION
    rotation: 2,
    accent: "🌊",
    alt: "Couple photo 4",
  },
  {
    id: 5,
    src: couple5,
    caption: "Blessed & together ✨",               // ← CHANGE THIS CAPTION
    rotation: -1.5,
    accent: "🪔",
    alt: "Couple photo 5",
  },
];
