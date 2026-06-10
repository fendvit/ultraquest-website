import { ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function FeaturedRaces() {
  const races = [
    {
      name: "BADWATER 135",
      location: "Death Valley, USA",
      elevation: "+4,450m",
      distance: "217 km",
      desc: "The world's toughest foot race through Death Valley",
      difficulty: "Extreme",
      image: "/images/badwater_bg.png"
    },
    {
      name: "UTMB",
      location: "Chamonix, France",
      elevation: "+10,000m",
      distance: "171 km",
      desc: "Ultra-Trail du Mont-Blanc around the iconic massif",
      difficulty: "Expert",
      image: "/images/utmb_bg.png"
    },
    {
      name: "KRAKONOŠOVA STOVKA",
      location: "Czech Republic",
      elevation: "+3,500m",
      distance: "100 km",
      desc: "Legendary ultra from Czech republic through the Krkonoše mountains",
      difficulty: "Hard",
      image: "/images/krakonosova_bg.png"
    },
    {
      name: "BACKYARD ULTRA",
      location: "Worldwide",
      elevation: "Varies",
      distance: "∞ km",
      desc: "Last person standing format - run until you can't",
      difficulty: "Mental",
      image: "/images/backyard_bg.png"
    }
  ];

  return (
    <section id="races" className="py-24 bg-gradient-to-b from-[#0d1512] to-[#0a0c0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-widest text-sm uppercase mb-4">
              <span className="w-8 h-px bg-primary" /> Roster
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              FEATURED <span className="text-white">RACES</span>
            </h2>
          </div>
          <button className="text-sm font-semibold tracking-widest uppercase flex items-center gap-1 hover:text-primary transition-colors">
            View all races <ChevronRight className="w-4 h-4" />
          </button>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {races.map((race, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} className="group cursor-pointer relative overflow-hidden rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <img 
                  src={race.image} 
                  alt={race.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {race.distance}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">{race.location}</p>
                  <h3 className="text-2xl font-semibold uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
                    {race.name}
                  </h3>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-primary w-1/3 h-full" />
                  </div>
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">Difficulty: {race.difficulty}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
