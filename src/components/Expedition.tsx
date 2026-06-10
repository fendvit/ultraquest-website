import { Target, Users, Trophy } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Expedition() {
  const cards = [
    {
      id: "01",
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "SET YOUR GOAL",
      description: "Choose from legendary ultramarathons like Badwater 135, UTMB, or Krakonošova stovka. Focus on one epic challenge at a time."
    },
    {
      id: "02",
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "RUN TOGETHER",
      description: "Compete on leaderboards, connect with friends, and stay motivated with the global running community. Create custom races for your crew."
    },
    {
      id: "03",
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "ACHIEVE GLORY",
      description: "Complete races to earn badges and climb the rankings. Join Medal Races to earn real physical medals shipped to your door."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0a0c0e] to-[#0d1512] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={0.1} className="text-center mb-16">
          <div className="inline-flex border border-primary/30 text-primary text-xs font-semibold uppercase px-3 py-1 rounded mb-4">
            THE JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            YOUR VIRTUAL RUNNING<br />
            <span className="text-primary">EXPEDITION</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Complete legendary ultramarathons from anywhere in the world. Track your daily runs and watch your progress accumulate toward epic finishes.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <FadeIn key={card.id} delay={0.2 + idx * 0.1}>
              <div className="bg-card border border-white/5 rounded-xl p-8 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,102,0,0.1)] transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-8">
                  {card.icon}
                </div>
                <div className="text-primary font-semibold text-sm mb-4">{card.id}</div>
                <h3 className="text-xl font-semibold uppercase mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-16 text-center">
          <button className="bg-primary hover:bg-[#e65c00] text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wide transition-all inline-flex items-center gap-2">
            Start running <span className="text-xl">→</span>
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
