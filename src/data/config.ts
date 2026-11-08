// ============================================================
// WEBSITE CONFIGURATION FILE
// ============================================================
// All personal details are here. Edit this file to customise
// the website with your couple's information.
//
// HOW TO EDIT:
// - PARTNER_1_NAME: Your sister's name
// - PARTNER_2_NAME: Her husband's name
// - ANNIVERSARY_DATE: Their wedding date (shown on the site)
// - FROM_NAME: Your name (shown in the final message)
// ============================================================

export const config = {
  // 🌸 Names of the couple (change these!)
  PARTNER_1_NAME: "Her",           // ← Your sister's name e.g. "Priya"
  PARTNER_2_NAME: "Him",           // ← Her husband's name e.g. "Arjun"

  // 📅 Anniversary information
  ANNIVERSARY_DATE: "November 2025",  // ← Their wedding date e.g. "15 November 2025"
  ANNIVERSARY_YEAR: "1st",            // e.g. "1st", "2nd", "Silver (25th)"

  // 💌 Your name (the gift-giver!)
  FROM_NAME: "Anusha",             // ← Your name

  // 🎵 Music (optional)
  // If you have a music file, place it in src/assets/ and change this path
  // Leave as null if you don't want background music
  MUSIC_SRC: null as string | null,   // e.g. "/music/love-song.mp3"
};
