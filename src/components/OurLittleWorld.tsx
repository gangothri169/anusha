import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

const OurLittleWorld = () => {
  return (
    <section
      id="our-world"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff9f0 0%, #fce8ed 50%, #fff0f5 100%)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-10 left-[-100px] w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e8a0b0, transparent)' }}
      />
      <div
        className="absolute bottom-10 right-[-80px] w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8aad8a, transparent)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Petal divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="petal-divider mb-6"
        >
          🌸 ✦ 🌸
        </motion.div>

        {/* Main heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          className="font-dancing text-4xl md:text-6xl text-center gradient-text mb-4"
        >
          Two Weirdos. One Beautiful Story. ♡
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          className="font-playfair italic text-center text-amber-700 text-lg mb-12"
        >
          A love story, one year in the making 🌿
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            {
              emoji: '🍽️',
              title: 'Professional Food Thieves',
              text: "One year of being each other's favourite person, professional food thief, personal therapist and occasional headache. The kind of love that says 'I'll have whatever you're having' — and then eats it all.",
              color: 'from-rose-50 to-pink-50',
              border: 'border-rose-200',
            },
            {
              emoji: '💬',
              title: 'The Grand Gestures? Optional.',
              text: "Love is not always about grand gestures. Sometimes it's just annoying each other and still choosing to stay. It's the 'What do you want to eat?' conversation at 9pm. That's real love.",
              color: 'from-amber-50 to-yellow-50',
              border: 'border-yellow-200',
            },
            {
              emoji: '🌙',
              title: 'Perfectly Imperfect',
              text: "They say marriage is 50/50. That's a myth. Sometimes it's 80/20. Sometimes 100/0. What matters is you keep showing up for each other — in the glamorous moments AND the messy ones.",
              color: 'from-purple-50 to-pink-50',
              border: 'border-purple-200',
            },
            {
              emoji: '🏡',
              title: 'Home is a Person',
              text: "They found something rare — a person who feels like home. No matter where you go, no matter what happens, you have a soft place to land. And that is everything.",
              color: 'from-green-50 to-emerald-50',
              border: 'border-green-200',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i + 3}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-3xl p-6 shadow-sm transition-all`}
            >
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="font-playfair font-semibold text-amber-900 text-lg mb-2">{card.title}</h3>
              <p className="font-lato text-amber-800 text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={7}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-8 inline-block max-w-2xl">
            <Heart className="text-rose-400 fill-rose-300 mx-auto mb-3 animate-heartbeat" size={28} />
            <p className="font-dancing text-2xl text-rose-500 leading-relaxed">
              "Here's to a year of choosing each other — on the great days, the grey days, and all the delicious, ridiculous days in between."
            </p>
            <p className="font-lato text-amber-600 text-sm mt-3">— Your sister, forever cheering you on 🌸</p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={8}
          viewport={{ once: true }}
          className="petal-divider mt-10"
        >
          🌿 ✦ 🌿
        </motion.div>
      </div>
    </section>
  );
};

export default OurLittleWorld;
