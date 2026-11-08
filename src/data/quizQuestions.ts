// ============================================================
// QUIZ QUESTIONS DATA FILE
// ============================================================

export const PARTNER_A = "Anusha";
export const PARTNER_B = "Krishna";
export const PARTNER_A_NAME = "Anusha's";
export const PARTNER_B_NAME = "Krishna's";

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
      A: "Anusha is out before the first episode ends! 😴",
      B: "Krishna is snoring before she even picks a show! 😂",
    },
  },
  {
    id: 2,
    question: "Who is the official food thief at the dinner table?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "\"I just want a small bite\" — takes half of Krishna's plate! 🍽️",
      B: "\"That looks interesting\" — steals it straight from Anusha! 😆",
    },
  },
  {
    id: 3,
    question: "Who gets dramatic over the smallest things?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Anusha's drama level: Oscar-worthy performance 🎭✨",
      B: "Krishna once sulked because she ate the last snack 🍪😂",
    },
  },
  {
    id: 4,
    question: "Who takes longer to get ready to go out?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Anusha's \"5 more minutes\" is mathematically 45 minutes 😂",
      B: "Krishna says \"I'm ready\" while still looking for his watch 🕵️",
    },
  },
  {
    id: 5,
    question: "Who is more dramatic when sick?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "A tiny sniffle becomes a full-blown melodrama 🎬",
      B: "Man-flu hits Krishna like a category 5 storm 🤧",
    },
  },
  {
    id: 6,
    question: "Who always says sorry first after a silly fight?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "The queen with the bigger heart! Always Anusha 💖",
      B: "Krishna cracks first... usually by offering yummy food! 🍕",
    },
  },
  {
    id: 7,
    question: "Who is more likely to forget something important?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Heart of gold, memory of a cute goldfish! 🥰",
      B: "Krishna's keys and wallet are constantly on adventure quests 🗂️",
    },
  },
  {
    id: 8,
    question: "Who is the bigger foodie of the two?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Anusha plans entire trips around the restaurant menus 🍜",
      B: "Krishna's true love language is definitely delicious food 🍔❤️",
    },
  },
];

// ============================================================
// ROUND 2: HOW WELL DO YOU KNOW EACH OTHER?
// ============================================================
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
    options: ["Biryani 🍚", "Pizza & Pasta 🍕", "Crispy Dosa 🫓", "Whatever is on YOUR plate! 😂"],
    correctAnswer: -1,
    funnyFeedback: "Every couple should know this by heart! #Kranu 🍴",
  },
  {
    id: 2,
    question: "What instantly makes your partner happy?",
    options: ["Good food 🍜", "A tight warm hug 🤗", "A funny reel/meme 😂", "Uninterrupted sleep 😴"],
    correctAnswer: -1,
    funnyFeedback: "Love is knowing exactly what brings that sweet smile! 💡",
  },
  {
    id: 3,
    question: "What is your partner's dream holiday vibe?",
    options: ["Tropical beach relaxing 🏝️", "Misty mountains & tea estates 🏔️", "European city exploration ✈️", "Cozy staycation with great food ☕"],
    correctAnswer: -1,
    funnyFeedback: "Time to pack those bags for the next Kranu adventure! 🧳",
  },
  {
    id: 4,
    question: "What is your partner's most-used daily line?",
    options: ["\"Just 5 more minutes\" ⏰", "\"What should we order?\" 🍽️", "\"Where did I keep that?\" 🤔", "\"I told you so!\" 😏"],
    correctAnswer: -1,
    funnyFeedback: "One year of hearing this line every single day! 💬",
  },
  {
    id: 5,
    question: "What is one thing your partner absolutely cannot live without?",
    options: ["Their phone 📱", "Chai / Coffee ☕", "YOU! 💕", "Their pillow & blanket 😴"],
    correctAnswer: -1,
    funnyFeedback: "We all know the real answer is each other! (And maybe chai) 😏",
  },
  {
    id: 6,
    question: "What is your partner's favourite way to spend a lazy Sunday?",
    options: ["Binge-watching shows 📺", "Going for a fun drive 🚗", "A 3-hour afternoon nap 😪", "Cooking a feast together 🍳"],
    correctAnswer: -1,
    funnyFeedback: "Lazy Sundays together are what married life is made of! 😄",
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
    question: "Who would survive longer without their smartphone?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Anusha checking for notifications in her sleep: 0.5 hours 📵",
      B: "Krishna would last an hour before needing to Google something 😂",
    },
  },
  {
    id: 2,
    question: "Who would accidentally burn the food while cooking?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Smoke detector is not a fire alarm, it's Anusha's timer 🔥",
      B: "Krishna cooks with unstoppable confidence and high heat 🍳💀",
    },
  },
  {
    id: 3,
    question: "Who would win an argument even when they are totally wrong?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Anusha has never technically lost an argument in history 👑",
      B: "Krishna will pull out Wikipedia charts and still lose 😂",
    },
  },
  {
    id: 4,
    question: "Who is more likely to make random online purchases?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "\"It was 40% OFF, Krishna! I actually saved money!\" 🛍️",
      B: "Krishna bought another gadget that now lives in a drawer 🤦",
    },
  },
  {
    id: 5,
    question: "Who would panic about anniversary plans at the last minute?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Anusha with 14 open browser tabs 30 minutes before 🎁😅",
      B: "Krishna with that charming 'you are my gift' nervous smile 💝",
    },
  },
  {
    id: 6,
    question: "Who is the undisputed drama royalty in this marriage?",
    optionA: PARTNER_A,
    optionB: PARTNER_B,
    funnyFeedback: {
      A: "Filmfare Best Actress Award goes to... Anusha! 🎭👸",
      B: "Krishna when his favorite cricket match gets interrupted 👑😂",
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
    message: "Kranu is officially unbeatable! You two don't need relationship tutorials — you ARE the tutorial. Happy 1st Anniversary!",
    emoji: "🏆",
  },
  {
    minPercent: 70,
    maxPercent: 89,
    title: "Lovebirds! 🐦💕",
    message: "Kranu knows each other inside out! A year full of understanding, laughter, and unbreakable love.",
    emoji: "🌸",
  },
  {
    minPercent: 40,
    maxPercent: 69,
    title: "Interesting... 🤔",
    message: "Someone needs to start taking notes! Put the phone down and study your partner please! 😂",
    emoji: "👀",
  },
  {
    minPercent: 0,
    maxPercent: 39,
    title: "REMEDIAL CLASSES REQUIRED! 😂",
    message: "PLEASE ATTEND ANNIVERSARY REMEDIAL CLASSES! One year of Kranu and this is the score?! 😂 (We still love you both endlessly ♡)",
    emoji: "📚",
  },
];
