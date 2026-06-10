import { Mountain, Timer, Users } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#111315]/50 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <FadeIn delay={0.1} className="py-4 md:py-0">
            <div className="flex items-center justify-center gap-3 text-primary mb-2">
              <Mountain className="w-5 h-5" />
              <span className="text-4xl font-extrabold">52+</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Epic Races</div>
          </FadeIn>
          <FadeIn delay={0.2} className="py-4 md:py-0">
            <div className="flex items-center justify-center gap-3 text-primary mb-2">
              <Timer className="w-5 h-5" />
              <span className="text-4xl font-extrabold">∞</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Your Pace</div>
          </FadeIn>
          <FadeIn delay={0.3} className="py-4 md:py-0">
            <div className="flex items-center justify-center gap-3 text-primary mb-2">
              <Users className="w-5 h-5" />
              <span className="text-4xl font-extrabold">152+</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Community</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
