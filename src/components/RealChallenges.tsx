import { Timer, Repeat, Users } from 'lucide-react';
import FadeIn from './FadeIn';

const challenges = [
  {
    icon: <Repeat className="w-8 h-8 text-primary" />,
    title: '4×4×48',
    meta: '48 hours · 12 rounds',
    description: 'Run 4 miles every 4 hours for 48 hours straight. The app tracks each window live and pushes a reminder before every round begins.',
  },
  {
    icon: <Timer className="w-8 h-8 text-primary" />,
    title: 'Backyard Ultra',
    meta: 'Last one standing',
    description: 'Complete a loop on the hour, every hour. Miss the start and you\'re out. Run until only one athlete remains — there is no finish line, only survival.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Cohort Events',
    meta: 'Everyone on one clock',
    description: 'Register for a scheduled event and start together with athletes worldwide. Watch the survivors board in real time as competitors drop out one by one.',
  },
];

export default function RealChallenges() {
  return (
    <section id="real-challenges" className="py-24 bg-gradient-to-b from-[#0a0c0e] to-[#0d1512] border-t border-white/5 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,102,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn delay={0.1} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary/30 text-primary text-xs font-semibold uppercase px-3 py-1 rounded mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Real Challenges
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            RACE THE <span className="text-primary">CLOCK</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Not every Quest is at your own pace. Real Challenges are real-time endurance events where everyone competes on the same clock — miss a window and you&apos;re out. Grit decides who survives.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, idx) => (
            <FadeIn key={challenge.title} delay={0.2 + idx * 0.1} direction="up">
              <div className="bg-card border border-white/5 rounded-xl p-8 h-full hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,102,0,0.1)] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-8">
                  {challenge.icon}
                </div>
                <div className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">{challenge.meta}</div>
                <h3 className="text-2xl font-semibold uppercase mb-4">{challenge.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {challenge.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Survive a Real Challenge and earn a <span className="text-primary font-semibold">Battle-Forged</span> badge — a permanent mark that you made it through.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
