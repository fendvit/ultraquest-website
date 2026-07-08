import { Footprints, Bike, Dumbbell, PersonStanding } from 'lucide-react';
import FadeIn from './FadeIn';

const sports = [
  {
    name: 'Running',
    tagline: 'Chase the distance',
    metric: 'GPS distance',
    icon: <Footprints className="w-8 h-8" />,
    // HSL values mirror the in-app per-sport accents (src/config/sports.ts)
    color: '24 95% 53%',
  },
  {
    name: 'Cycling',
    tagline: 'Go the extra mile',
    metric: 'GPS distance',
    icon: <Bike className="w-8 h-8" />,
    color: '199 92% 50%',
  },
  {
    name: 'Weightlifting',
    tagline: 'Move heavy iron',
    metric: 'Volume lifted',
    icon: <Dumbbell className="w-8 h-8" />,
    color: '350 80% 55%',
  },
  {
    name: 'Calisthenics',
    tagline: 'Master your body',
    metric: 'Reps & sets',
    icon: <PersonStanding className="w-8 h-8" />,
    color: '96 60% 45%',
  },
];

export default function Sports() {
  return (
    <section className="py-24 bg-[#0a0c0e] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn delay={0.1} className="text-center mb-16">
          <div className="inline-flex border border-primary/30 text-primary text-xs font-semibold uppercase px-3 py-1 rounded mb-4">
            One App, Four Sports
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            PICK YOUR <span className="text-primary">SPORT</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Switch sports anytime and the whole app adapts — its own Quests, leaderboards, badges and theme for each. Train the way you want, all in one place.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport, idx) => (
            <FadeIn key={sport.name} delay={0.2 + idx * 0.1} direction="up">
              <div
                className="group relative h-full rounded-2xl border border-white/5 bg-card p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{ ['--sport' as string]: sport.color }}
              >
                {/* Sport-tinted glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top, hsl(var(--sport) / 0.14) 0%, transparent 70%)' }}
                />
                {/* Accent border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ borderColor: 'hsl(var(--sport) / 0.5)' }}
                />

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      color: 'hsl(var(--sport))',
                      backgroundColor: 'hsl(var(--sport) / 0.1)',
                      borderColor: 'hsl(var(--sport) / 0.25)',
                    }}
                  >
                    {sport.icon}
                  </div>
                  <h3 className="text-xl font-semibold uppercase mb-2">{sport.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{sport.tagline}</p>
                  <div
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest"
                    style={{ color: 'hsl(var(--sport))' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'hsl(var(--sport))' }} />
                    {sport.metric}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
