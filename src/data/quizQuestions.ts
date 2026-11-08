// ============================================================
// QUIZ QUESTIONS DATA FILE
// ============================================================
// You can easily edit all quiz questions and answers here.
// 
// HOW TO EDIT:
// - Change the "question" text to your preferred question.
// - Change "optionA" and "optionB" to your couple's names.
// - For Round 2, change the "options" array.
// - For Round 2, set "correctAnswer" to the index (0, 1, 2, or 3)
//   of the correct option in the options array.
//   Example: correctAnswer: 1 means the second option is correct.
// - Change "funnyFeedback" to any funny response you want.
// ============================================================

// 🔧 CHANGE THESE NAMES to match the couple's names
export const PARTNER_A = "She";       // e.g., "Priya" or your sister's name
export const PARTNER_B = "He";        // e.g., "Arjun" or her husband's name
export const PARTNER_A_NAME = "Her";  // possessive form
export const PARTNER_B_NAME = "His";  // possessive form

// ============================================================
// ROUND 1: WHO IS MORE LIKELY TO?
// ============================================================
export interface Round1Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  funnyFeedback: {
    A: string;
    B: string;
  };
}

export const round1Questions: Round1Question[] = [
  {
    id: 1,
    question: "Who falls asleep first every night?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "She's out before the first episode ends! 😴",
      B: "He's snoring before she even picks a show! 😂",
    },
  },
  {
    id: 2,
    question: "Who is the official food thief at the dinner table?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "\"I just want a small bite\" — takes half the plate! 🍽️",
      B: "\"That looks interesting\" — it was YOUR food! 😆",
    },
  },
  {
    id: 3,
    question: "Who gets upset over the tiniest things?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "The drama level: Oscar-worthy performance 🎭",
      B: "He once sulked because she ate the last biscuit 🍪",
    },
  },
  {
    id: 4,
    question: "Who takes longer to get ready to go out?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "\"5 more minutes\" has a 45-minute hidden meaning 😂",
      B: "He's a mystery. No one knows what takes so long! 🕵️",
    },
  },
  {
    id: 5,
    question: "Who is more dramatic when sick?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "A tiny cold becomes a whole Netflix documentary 🎬",
      B: "Man-flu is REAL and very very serious 🤧",
    },
  },
  {
    id: 6,
    question: "Who always says sorry first after a fight?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "The bigger person. Always! 💖",
      B: "He cracks first. With food. Smart move! 🍕",
    },
  },
  {
    id: 7,
    question: "Who is more likely to forget something important?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Brain like a sieve, heart of gold! 🥰",
      B: "His memory has a unique filing system... mostly lost 🗂️",
    },
  },
  {
    id: 8,
    question: "Who is the bigger foodie of the two?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "She plans the trip around the restaurants 🗺️🍜",
      B: "His love language is definitely food 🍔❤️",
    },
  },
];

// ============================================================
// ROUND 2: HOW WELL DO YOU KNOW EACH OTHER?
// ============================================================
// correctAnswer: index of the correct option (0 = first, 1 = second, etc.)
// Set to -1 if you don't want any "correct" answer tracked.
export interface Round2Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  funnyFeedback: string;
}

export const round2Questions: Round2Question[] = [
  {
    id: 1,
    question: "What is your partner's absolute favourite food?",
    options: ["Biryani 🍚", "Pizza 🍕", "Dosa 🫓", "Anything free! 😂"],
    correctAnswer: -1, // set to 0, 1, 2, or 3 once you know!
    funnyFeedback: "Every couple should know this. EVERY. SINGLE. ONE. 🍴",
  },
  {
    id: 2,
    question: "What instantly makes your partner happy?",
    options: ["Good food 🍜", "A surprise hug 🤗", "A funny meme 😂", "Being left alone with Netflix 📺"],
    correctAnswer: -1,
    funnyFeedback: "Love is knowing exactly what button to press! 💡",
  },
  {
    id: 3,
    question: "What is your partner's dream holiday destination?",
    options: ["Beach in Maldives 🏝️", "Europe trip ✈️", "Mountains & trekking 🏔️", "Anywhere with good food 🌍"],
    correctAnswer: -1,
    funnyFeedback: "Start saving! Their dream trip isn't going to book itself! 🧳",
  },
  {
    id: 4,
    question: "What is your partner's most-used sentence?",
    options: ["\"Just 5 more minutes\" ⏰", "\"I'm hungry\" 🍽️", "\"What do you want to eat?\" 🤔", "\"Fine, whatever\" 😑"],
    correctAnswer: -1,
    funnyFeedback: "You finish each other's sentences. That's married life! 💬",
  },
  {
    id: 5,
    question: "What is one thing your partner absolutely cannot live without?",
    options: ["Their phone 📱", "Coffee/Tea ☕", "You! 💕", "Sleep 😴"],
    correctAnswer: -1,
    funnyFeedback: "Be honest. You know the real answer! 😏",
  },
  {
    id: 6,
    question: "What is your partner's favourite way to spend a lazy weekend?",
    options: ["Netflix binge 📺", "Going out exploring 🚗", "Long afternoon nap 😪", "Cooking and eating together 🍳"],
    correctAnswer: -1,
    funnyFeedback: "Weekends reveal your true personality. No filters! 😄",
  },
];

// ============================================================
// ROUND 3: FUNNY COUPLE CHALLENGES
// ============================================================
export interface Round3Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  funnyFeedback: {
    A: string;
    B: string;
  };
}

export const round3Questions: Round3Question[] = [
  {
    id: 1,
    question: "Who would survive longer without their phone?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "She'd last maybe 3 hours. Definitely not more 📵",
      B: "He'd somehow survive 2 hours before cracking 😂",
    },
  },
  {
    id: 2,
    question: "Who would accidentally burn the food while cooking?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "The smoke alarm is basically their kitchen timer 🔥",
      B: "He cooks with confidence. Dangerous confidence 🍳💀",
    },
  },
  {
    id: 3,
    question: "Who would win an argument even when they're completely wrong?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "She has never lost an argument. Technically. 👑",
      B: "He'll Google facts mid-argument. And still use them wrong 😂",
    },
  },
  {
    id: 4,
    question: "Who is more likely to make unnecessary purchases?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "\"It was on SALE!\" – the official justification 🛍️",
      B: "He bought a gadget he used once and forgot 🤦",
    },
  },
  {
    id: 5,
    question: "Who would forget an anniversary gift until the last minute?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "She panic-buys 30 minutes before the dinner 🎁😅",
      B: "His gift: 'I love you?' — delivered with a nervous smile 💝",
    },
  },
  {
    id: 6,
    question: "Who is the bigger drama royalty?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Academy Award waiting to happen 🎭👸",
      B: "One small inconvenience = full life crisis 👑😂",
    },
  },
];

// ============================================================
// QUIZ RESULTS
// ============================================================
export const quizResults = [
  {
    minPercent: 90,
    maxPercent: 100,
    title: "Soulmate Certified! 💍✨",
    message: "You two don't need relationship tutorials. You ARE the tutorial. Somebody put a trophy somewhere!",
    emoji: "🏆",
  },
  {
    minPercent: 70,
    maxPercent: 89,
    title: "Lovebirds! 🐦💕",
    message: "You know each other pretty well! A few blind spots, but nothing a little more couple-time can't fix.",
    emoji: "🌸",
  },
  {
    minPercent: 40,
    maxPercent: 69,
    title: "Interesting... 🤔",
    message: "Someone needs to start paying more attention! Put down your phone and look at your partner please!",
    emoji: "👀",
  },
  {
    minPercent: 0,
    maxPercent: 39,
    title: "REMEDIAL CLASSES REQUIRED! 😂",
    message: "PLEASE ATTEND ANNIVERSARY REMEDIAL CLASSES! One year together and this is the score?! For shame! 😂 (We still love you both though ♡)",
    emoji: "📚",
  },
];
