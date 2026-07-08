import { ChevronRight, Bike, Dumbbell, PersonStanding, type LucideIcon } from 'lucide-react';
import FadeIn from './FadeIn';

type Quest = {
  name: string;
  location: string;
  distance: string;
  difficulty: string;
  progress: string;
  // Photo cards carry an image; sport cards carry a gradient + icon instead.
  image?: string;
  icon?: LucideIcon;
  // HSL accent (mirrors src/config/sports.ts). Defaults to the running/orange primary.
  color?: string;
};

const quests: Quest[] = [
  {
    name: "BADWATER 135",
    location: "Death Valley, USA",
    distance: "217 km",
    difficulty: "Extreme",
    progress: "33%",
    image: "/images/badwater_bg.png",
  },
  {
    name: "UTMB",
    location: "Chamonix, France",
    distance: "171 km",
    difficulty: "Expert",
    progress: "33%",
    image: "/images/utmb_bg.png",
  },
  {
    name: "KRAKONOŠOVA STOVKA",
    location: "Czech Republic",
    distance: "100 km",
    difficulty: "Hard",
    progress: "33%",
    image: "/images/krakonosova_bg.png",
  },
  {
    name: "EVERESTING",
    location: "Cycling",
    distance: "8,848 m ↑",
    difficulty: "Brutal",
    progress: "45%",
    icon: Bike,
    color: "199 92% 50%",
  },
  {
    name: "IRON GAUNTLET",
    location: "Weightlifting",
    distance: "100,000 kg",
    difficulty: "Savage",
    progress: "60%",
    icon: Dumbbell,
    color: "350 80% 55%",
  },
  {
    name: "1000 PULL-UP QUEST",
    location: "Calisthenics",
    distance: "1,000 reps",
    difficulty: "Relentless",
    progress: "52%",
    icon: PersonStanding,
    color: "96 60% 45%",
  },
];

export default function FeaturedRaces() {
  return (
    <section id="races" className="py-24 bg-gradient-to-b from-[#0d1512] to-[#0a0c0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-widest text-sm uppercase mb-4">
              <span className="w-8 h-px bg-primary" /> Roster
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              FEATURED <span className="text-white">QUESTS</span>
            </h2>
          </div>
          <button className="text-sm font-semibold tracking-widest uppercase flex items-center gap-1 hover:text-primary transition-colors">
            View all quests <ChevronRight className="w-4 h-4" />
          </button>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest, index) => {
            const accent = quest.color ?? '24 95% 53%';
            const Icon = quest.icon;
            return (
              <FadeIn
                key={index}
                delay={0.2 + (index % 3) * 0.1}
                className="group cursor-pointer relative overflow-hidden rounded-2xl bg-card border border-white/5 transition-all duration-300"
              >
                <div
                  className="aspect-[3/4] relative"
                  style={{ ['--accent' as string]: accent }}
                >
                  {quest.image ? (
                    <>
                      <img
                        src={quest.image}
                        alt={quest.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent" />
                    </>
                  ) : (
                    <>
                      {/* Sport-themed gradient stands in for a photo */}
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(160deg, hsl(var(--accent) / 0.35) 0%, #0a0c0e 70%)' }}
                      />
                      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
                      {Icon && (
                        <Icon
                          className="absolute -bottom-6 -right-4 w-48 h-48 opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"
                          style={{ color: 'hsl(var(--accent))' }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-transparent to-transparent" />
                    </>
                  )}

                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {quest.distance}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p
                      className="text-sm font-semibold uppercase tracking-widest mb-2"
                      style={{ color: 'hsl(var(--accent))' }}
                    >
                      {quest.location}
                    </p>
                    <h3
                      className="text-2xl font-semibold uppercase leading-tight mb-4 transition-colors group-hover:[color:hsl(var(--accent))]"
                    >
                      {quest.name}
                    </h3>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="h-full" style={{ width: quest.progress, backgroundColor: 'hsl(var(--accent))' }} />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">Difficulty: {quest.difficulty}</p>
                  </div>

                  {/* Accent border on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ borderColor: 'hsl(var(--accent) / 0.5)' }}
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
