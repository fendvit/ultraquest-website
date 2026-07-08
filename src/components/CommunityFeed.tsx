import { Flag, TrendingUp, Flame, Award } from 'lucide-react';
import FadeIn from './FadeIn';

const activities = [
  { user: 'Nina P.', text: 'reached <span class="text-primary font-semibold">75%</span> on <strong>UTMB</strong>', time: '32 min ago', icon: <Flag className="w-4 h-4 text-primary" />, initials: 'NP' },
  { user: 'James L.', text: 'logged <span class="text-primary font-semibold">42 km</span> on <strong>Everesting Ride</strong>', time: '25 min ago', icon: <TrendingUp className="w-4 h-4 text-gray-500" />, initials: 'JL' },
  { user: 'Elena R.', text: 'logged <span class="text-primary font-semibold">2,400 kg</span> on <strong>Iron Gauntlet</strong>', time: '18 min ago', icon: <Flame className="w-4 h-4 text-gray-400" />, initials: 'ER' },
  { user: 'Alex M.', text: 'completed <strong>Western States</strong>', time: '12 min ago', icon: <Award className="w-4 h-4 text-green-500" />, initials: 'AM' },
  { user: 'Sarah K.', text: 'reached <span class="text-primary font-semibold">50%</span> on <strong>1000 Pull-Up Quest</strong>', time: '5 min ago', icon: <Flag className="w-4 h-4 text-primary" />, initials: 'SK' },
];

export default function CommunityFeed() {
  return (
    <section className="py-24 bg-[#0a0c0e] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary/30 text-primary text-[10px] font-semibold tracking-widest px-3 py-1 rounded uppercase mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> LIVE ACTIVITY
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
            The Community in <span className="text-primary">Motion</span>
          </h2>
          <p className="text-gray-400">Watch athletes from around the world conquering their Quests across every sport in real-time.</p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up" className="bg-[#1c1f22] border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-400 uppercase">
              <div className="w-2 h-2 rounded-full bg-green-500" /> LIVE FEED
            </div>
            <div className="text-xs text-gray-500">Updated in real-time</div>
          </div>
          
          <div className="space-y-3">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-[#111315] hover:bg-white/5 border border-white/5 transition-colors group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#3e2c1e] flex items-center justify-center font-semibold text-sm text-orange-200 shrink-0">
                  {activity.initials}
                </div>
                <div className="flex-1">
                  <div className="text-sm">
                    <span className="font-semibold text-white">{activity.user}</span> <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: activity.text }} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                </div>
                <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                  {activity.icon}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
