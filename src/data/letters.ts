// ============================================================
// OPEN WHEN LETTERS DATA FILE
// ============================================================
// Edit the messages inside each envelope here.
// 
// HOW TO EDIT:
// - Change the "title" to change what the envelope says.
// - Change the "message" to your personal note.
// - You can use \n for new paragraphs in the message.
// - Change the "emoji" to any emoji you like.
// - Change the "color" to any Tailwind color class you like.
// ============================================================

export interface Letter {
  id: number;
  title: string;
  emoji: string;
  color: string;
  sealColor: string;
  message: string[];
}

export const letters: Letter[] = [
  {
    id: 1,
    title: "Open when you miss each other",
    emoji: "🌙",
    color: "from-rose-100 to-pink-50",
    sealColor: "bg-rose-300",
    message: [
      "Hey you two 💕",
      "Missing someone is just love with nowhere to go for a little while. And that feeling? That tiny ache in your chest? That's proof of something beautiful.",
      "Think about the last time they made you laugh so hard your stomach hurt. The way they look when they're sleepy. The way they always know exactly what you need without asking.",
      "You are each other's home. And home isn't a place — it's a person.",
      "The distance (even if it's just a room apart) will pass. And when you're together again, it'll feel like the sun came back out.",
      "Now go find each other. Hug extra tight. 🤗",
      "With all the love in the world, Anusha ♡",
    ],
  },
  {
    id: 2,
    title: "Open when you have a silly fight",
    emoji: "🌧️",
    color: "from-blue-100 to-indigo-50",
    sealColor: "bg-blue-300",
    message: [
      "Oh dear. You two are fighting again? 😂",
      "Okay first — BREATHE. Whatever it is, I promise it is not worth the drama you're both creating right now.",
      "Real talk: Every couple fights. The good ones fight about truly ridiculous things. 'Why did you eat my chocolate?' 'You said left, not LEFT left!' 'You ALWAYS do this!' (Do they? Really?)",
      "Here's what I want you to do: Look at your partner. Like, really look at them.",
      "Now remember why you chose them. On your wedding day. And every single day after that.",
      "Is this fight worth your peace? Worth your cuddles? Worth your inside jokes?",
      "I didn't think so. 😄",
      "One of you say sorry first. Order food. Watch something funny. Be soft with each other.",
      "Love wins. Always.",
      "— Your sister who is extremely entertained by your arguments 😂♡",
    ],
  },
  {
    id: 3,
    title: "Open when you need a good laugh",
    emoji: "😂",
    color: "from-yellow-100 to-amber-50",
    sealColor: "bg-yellow-300",
    message: [
      "Congratulations! You have unlocked: THE FUNNY LETTER. 🎉",
      "Since you need cheering up, here are some certified facts about being married:",
      "✨ 'What do you want to eat?' is now the hardest question in your relationship.",
      "✨ You will spend 45 minutes deciding what to watch and then fall asleep in 10 minutes.",
      "✨ One of you has a 'side of the bed' and nobody talks about it but GOD HELP ANYONE WHO CROSSES THAT LINE.",
      "✨ 'Fine' never actually means fine.",
      "✨ Whoever is driving will always question the other person's GPS directions.",
      "✨ At some point you will have an entire conversation through just eyebrow raises.",
      "Here's the best joke I know: Two people got married thinking they were each other's perfect match. One year later: 'You LEFT THE CAP OFF THE TOOTHPASTE AGAIN!'",
      "And they lived happily ever after. The end. 😂",
      "Still smiling? Good. That's what you do with the people you love.",
      "— Anusha, your personal stand-up comedian ♡",
    ],
  },
  {
    id: 4,
    title: "Open when you feel low",
    emoji: "🌸",
    color: "from-purple-100 to-pink-50",
    sealColor: "bg-purple-300",
    message: [
      "Hey. I see you. 💜",
      "Whatever you're feeling right now — tired, lost, overwhelmed, sad — it's okay. You're allowed to have hard days.",
      "You don't have to be okay all the time.",
      "But I want you to know something: You are not alone. You have someone right beside you who chose you. Who woke up today and decided: yes, this person, still.",
      "On the days when you feel like you're not enough, remember: someone out there thinks you're their entire world.",
      "And you are.",
      "Take a deep breath. Let yourself feel what you feel. Then lean into the person next to you.",
      "You are loved more than words can say.",
      "You are stronger than you know.",
      "And this season — whatever it is — will pass.",
      "I'm rooting for you, always. 🌸",
      "— With the biggest hug, Anusha ♡",
    ],
  },
  {
    id: 5,
    title: "Open when you need a reminder of how special you are",
    emoji: "⭐",
    color: "from-orange-100 to-rose-50",
    sealColor: "bg-orange-300",
    message: [
      "Let me tell you something beautiful. 🌟",
      "Out of eight billion people on this planet — EIGHT BILLION — you two found each other. You chose each other. You built something together.",
      "Think about everything you've done in one year:",
      "🌸 Learned each other's quirks and loved them anyway.",
      "🌸 Laughed until you couldn't breathe.",
      "🌸 Held each other on the hard nights.",
      "🌸 Made boring Tuesday evenings feel like something worth remembering.",
      "🌸 Argued, forgiven, and chosen each other again. Every single time.",
      "That is not ordinary. That is extraordinary.",
      "You are not just 'a couple'. You are each other's safe place. Each other's favourite story. Each other's reason to smile on random days.",
      "What you have? It's the kind of love people write songs about.",
      "Never forget how incredibly special that is. Never stop choosing each other.",
      "Happy Anniversary, my favourite people. 🥂✨",
      "— With all my love, Anusha ♡",
    ],
  },
];
