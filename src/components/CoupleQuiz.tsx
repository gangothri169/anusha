import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RotateCcw, Trophy, Heart } from 'lucide-react';
import {
  round1Questions,
  round2Questions,
  round3Questions,
  quizResults,
  PARTNER_A,
  PARTNER_B,
} from '../data/quizQuestions';

type GamePhase = 'intro' | 'round1' | 'round2' | 'round3' | 'results';

const totalQuestions = round1Questions.length + round2Questions.length + round3Questions.length;

const CoupleQuiz = () => {
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [r1Index, setR1Index] = useState(0);
  const [r2Index, setR2Index] = useState(0);
  const [r3Index, setR3Index] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const getProgress = () => {
    const done =
      phase === 'round1' ? r1Index :
      phase === 'round2' ? round1Questions.length + r2Index :
      phase === 'round3' ? round1Questions.length + round2Questions.length + r3Index :
      phase === 'results' ? totalQuestions : 0;
    return Math.round((done / totalQuestions) * 100);
  };

  const handleR1Answer = (choice: 'A' | 'B') => {
    const q = round1Questions[r1Index];
    const fb = q.funnyFeedback[choice];
    setFeedback(fb);
    setSelectedAnswer(choice);
    setShowFeedback(true);
    setAnswered((p) => p + 1);
    setScore((s) => s + 1); // Round 1 is opinion-based — everyone gets a point!

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      setFeedback(null);
      if (r1Index < round1Questions.length - 1) {
        setR1Index((i) => i + 1);
      } else {
        setPhase('round2');
        setR2Index(0);
      }
    }, 2200);
  };

  const handleR2Answer = (optionIndex: number) => {
    const q = round2Questions[r2Index];
    const isCorrect = q.correctAnswer === -1 || optionIndex === q.correctAnswer;
    setSelectedAnswer(String(optionIndex));
    setFeedback(q.funnyFeedback);
    setShowFeedback(true);
    setAnswered((p) => p + 1);
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      setFeedback(null);
      if (r2Index < round2Questions.length - 1) {
        setR2Index((i) => i + 1);
      } else {
        setPhase('round3');
        setR3Index(0);
      }
    }, 2200);
  };

  const handleR3Answer = (choice: 'A' | 'B') => {
    const q = round3Questions[r3Index];
    const fb = q.funnyFeedback[choice];
    setFeedback(fb);
    setSelectedAnswer(choice);
    setShowFeedback(true);
    setAnswered((p) => p + 1);
    setScore((s) => s + 1); // Opinion-based

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      setFeedback(null);
      if (r3Index < round3Questions.length - 1) {
        setR3Index((i) => i + 1);
      } else {
        setPhase('results');
      }
    }, 2200);
  };

  const restart = () => {
    setPhase('intro');
    setR1Index(0);
    setR2Index(0);
    setR3Index(0);
    setScore(0);
    setAnswered(0);
    setFeedback(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const percent = Math.round((score / totalQuestions) * 100);
  const result = quizResults.find((r) => percent >= r.minPercent && percent <= r.maxPercent) ?? quizResults[quizResults.length - 1];

  const roundLabel = phase === 'round1' ? 'Round 1' : phase === 'round2' ? 'Round 2' : phase === 'round3' ? 'Round 3' : '';
  const roundTitle =
    phase === 'round1' ? '🎯 Who is More Likely To?' :
    phase === 'round2' ? '🧠 How Well Do You Know Each Other?' :
    phase === 'round3' ? '😂 Funny Couple Challenges' : '';

  return (
    <section
      id="quiz"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff0f5 0%, #fff9f0 50%, #f0f4ff 100%)' }}
    >
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="petal-divider mb-4">💗 ✦ 💗</div>
          <h2 className="font-dancing text-4xl md:text-5xl gradient-text mb-2">
            HOW WELL DO YOU KNOW YOUR PARTNER?
          </h2>
          <p className="font-playfair italic text-amber-700 text-base">
            Three rounds. Zero mercy. Maximum fun. 💕
          </p>
        </motion.div>

        {/* Quiz Card */}
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass rounded-3xl p-8 text-center shadow-lg"
            >
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="font-playfair text-2xl text-amber-900 mb-4">The Anniversary Quiz</h3>
              <div className="space-y-3 mb-8 text-left">
                {[
                  { emoji: '🎯', text: `Round 1: Who is More Likely To? (${round1Questions.length} questions)` },
                  { emoji: '🧠', text: `Round 2: How Well Do You Know Each Other? (${round2Questions.length} questions)` },
                  { emoji: '😂', text: `Round 3: Funny Couple Challenges (${round3Questions.length} questions)` },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/60 rounded-2xl p-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <p className="font-lato text-amber-800 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setPhase('round1')}
                className="btn-magical flex items-center gap-2 mx-auto"
              >
                Let's Play! 💗 <ChevronRight size={18} />
              </motion.button>
            </motion.div>
          )}

          {/* ROUND 1 */}
          {phase === 'round1' && (
            <motion.div
              key={`r1-${r1Index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass rounded-3xl p-6 md:p-8 shadow-lg"
            >
              <RoundHeader label={roundLabel} title={roundTitle} progress={getProgress()} current={r1Index + 1} total={round1Questions.length} />
              <p className="font-playfair text-xl md:text-2xl text-amber-900 text-center my-6 leading-relaxed">
                {round1Questions[r1Index].question}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(['A', 'B'] as const).map((choice) => (
                  <motion.button
                    key={choice}
                    whileHover={{ scale: showFeedback ? 1 : 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => !showFeedback && handleR1Answer(choice)}
                    disabled={showFeedback}
                    className={`rounded-2xl py-4 px-4 font-playfair text-lg font-semibold transition-all border-2 ${
                      selectedAnswer === choice
                        ? 'bg-rose-400 text-white border-rose-400 shadow-lg'
                        : 'bg-white/70 text-amber-900 border-rose-200 hover:border-rose-400 hover:bg-rose-50'
                    }`}
                  >
                    {choice === 'A' ? PARTNER_A : PARTNER_B}
                    {choice === 'A' ? ' 👩' : ' 👨'}
                  </motion.button>
                ))}
              </div>
              <FeedbackBubble text={feedback} visible={showFeedback} />
            </motion.div>
          )}

          {/* ROUND 2 */}
          {phase === 'round2' && (
            <motion.div
              key={`r2-${r2Index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass rounded-3xl p-6 md:p-8 shadow-lg"
            >
              <RoundHeader label={roundLabel} title={roundTitle} progress={getProgress()} current={r2Index + 1} total={round2Questions.length} />
              <p className="font-playfair text-xl md:text-2xl text-amber-900 text-center my-6 leading-relaxed">
                {round2Questions[r2Index].question}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {round2Questions[r2Index].options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: showFeedback ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => !showFeedback && handleR2Answer(i)}
                    disabled={showFeedback}
                    className={`rounded-2xl py-3 px-5 font-lato text-base text-left transition-all border-2 ${
                      selectedAnswer === String(i)
                        ? round2Questions[r2Index].correctAnswer === -1 || round2Questions[r2Index].correctAnswer === i
                          ? 'bg-green-400 text-white border-green-400'
                          : 'bg-rose-400 text-white border-rose-400'
                        : 'bg-white/70 text-amber-900 border-rose-100 hover:border-rose-300 hover:bg-rose-50'
                    }`}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
              <FeedbackBubble text={feedback} visible={showFeedback} />
            </motion.div>
          )}

          {/* ROUND 3 */}
          {phase === 'round3' && (
            <motion.div
              key={`r3-${r3Index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass rounded-3xl p-6 md:p-8 shadow-lg"
            >
              <RoundHeader label={roundLabel} title={roundTitle} progress={getProgress()} current={r3Index + 1} total={round3Questions.length} />
              <p className="font-playfair text-xl md:text-2xl text-amber-900 text-center my-6 leading-relaxed">
                {round3Questions[r3Index].question}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(['A', 'B'] as const).map((choice) => (
                  <motion.button
                    key={choice}
                    whileHover={{ scale: showFeedback ? 1 : 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => !showFeedback && handleR3Answer(choice)}
                    disabled={showFeedback}
                    className={`rounded-2xl py-4 px-4 font-playfair text-lg font-semibold transition-all border-2 ${
                      selectedAnswer === choice
                        ? 'bg-purple-400 text-white border-purple-400 shadow-lg'
                        : 'bg-white/70 text-amber-900 border-purple-200 hover:border-purple-400 hover:bg-purple-50'
                    }`}
                  >
                    {choice === 'A' ? round3Questions[r3Index].optionA : round3Questions[r3Index].optionB}
                    {choice === 'A' ? ' 👩' : ' 👨'}
                  </motion.button>
                ))}
              </div>
              <FeedbackBubble text={feedback} visible={showFeedback} />
            </motion.div>
          )}

          {/* RESULTS */}
          {phase === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-8 text-center shadow-lg"
            >
              <div className="text-5xl mb-2 animate-heartbeat">{result.emoji}</div>
              <Trophy className="text-yellow-500 mx-auto mb-4" size={36} />
              <h3 className="font-dancing text-3xl gradient-text mb-2">{result.title}</h3>
              <div className="text-4xl font-playfair font-bold text-amber-900 mb-1">{percent}%</div>
              <div className="bg-rose-100 rounded-full h-3 mb-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="progress-bar h-3"
                />
              </div>
              <p className="font-lato text-amber-800 leading-relaxed mb-6 text-base">{result.message}</p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Heart className="text-rose-400 fill-rose-300" size={16} />
                <span className="font-dancing text-rose-400 text-lg">Score: {score} / {totalQuestions}</span>
                <Heart className="text-rose-400 fill-rose-300" size={16} />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={restart}
                className="btn-magical flex items-center gap-2 mx-auto"
              >
                <RotateCcw size={16} /> Play Again!
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Helper: Round header with progress
const RoundHeader = ({
  label, title, progress, current, total,
}: {
  label: string; title: string; progress: number; current: number; total: number;
}) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="font-dancing text-rose-400 text-lg">{label}</span>
      <span className="font-lato text-xs text-amber-600">{current}/{total}</span>
    </div>
    <div className="bg-rose-100 rounded-full h-2 mb-3 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        className="progress-bar h-2"
      />
    </div>
    <p className="font-playfair italic text-center text-rose-400 text-sm mb-2">{title}</p>
  </div>
);

// Helper: Funny feedback bubble
const FeedbackBubble = ({ text, visible }: { text: string | null; visible: boolean }) => (
  <AnimatePresence>
    {visible && text && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center"
      >
        <p className="font-lato text-amber-800 text-sm italic">😄 {text}</p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default CoupleQuiz;
