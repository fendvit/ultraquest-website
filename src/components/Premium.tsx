import { Check, X, ArrowRight, Brain, Users, Medal, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Premium() {
  return (
    <section id="premium" className="py-24 bg-[#0a0c0e] relative border-t border-white/5 overflow-hidden">
      {/* Orange Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,102,0,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary/30 text-primary text-[10px] font-bold tracking-widest px-3 py-1 rounded uppercase mb-6 bg-primary/10">
            <Sparkles className="w-3 h-3" /> PREMIUM
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tight leading-tight">
            Unlock Your <br/>
            <span className="text-primary">Full Potential</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Elevate your training across every sport with Premium at just $7.99/month.
          </p>
        </FadeIn>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <FadeIn delay={0.2} direction="up" className="h-full">
            <div className="bg-[#1c1f22]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 relative group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,102,0,0.15)] transition-all duration-500 overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-[9px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-2 py-1 rounded">Smart Coaching</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">AI Training Insights</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get personalized training recommendations powered by AI. Analyze your patterns, detect trends, and optimize recovery.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" className="h-full">
            <div className="bg-[#1c1f22]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 relative group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,102,0,0.15)] transition-all duration-500 overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-[9px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-2 py-1 rounded">Your Rules</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">Custom Quest Creation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Design your own Quests for any sport with custom distances, reps and descriptions. Share invite codes to compete with friends and clubs.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" className="h-full">
            <div className="bg-[#1c1f22]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 relative group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,102,0,0.15)] transition-all duration-500 overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-[9px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-2 py-1 rounded">Real Rewards</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Medal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">Free Medal Race Entries</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Join all Medal Races at no extra cost. Earn real physical medals shipped to your door when you finish.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Compare Plans Table */}
        <FadeIn delay={0.5} direction="up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold uppercase tracking-wider">Compare Features</h3>
          </div>
          <div className="bg-[#1c1f22]/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-3 border-b border-white/10 p-6 md:p-8 items-center bg-black/20">
              <div className="text-gray-400 font-semibold text-sm md:text-base">Feature</div>
              <div className="text-center text-white font-bold text-sm md:text-base">Free</div>
              <div className="text-center text-primary font-bold text-sm md:text-base">Premium</div>
            </div>

            <div className="divide-y divide-white/5">
              {[
                { name: 'Join Quests (all sports)', free: true, premium: true },
                { name: 'Log distance & strength manually', free: true, premium: true },
                { name: 'Strava sync', free: true, premium: true },
                { name: 'Leaderboards & badges', free: true, premium: true },
                { name: 'AI Training Insights', free: false, premium: true },
                { name: 'Create custom Quests', free: false, premium: true },
                { name: 'Medal Race entries', free: '$5/race', premium: 'Free', isText: true },
                { name: 'Price', free: '$0', premium: '$7.99/mo', isText: true, isLast: true },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 p-6 md:px-8 md:py-5 items-center hover:bg-white/5 transition-colors">
                  <div className={`text-sm md:text-base ${row.isLast ? 'font-bold' : 'text-gray-300'}`}>{row.name}</div>
                  <div className="flex justify-center text-sm md:text-base font-bold">
                    {row.isText ? (
                      <span>{row.free}</span>
                    ) : row.free ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div className="flex justify-center text-sm md:text-base font-bold text-primary">
                    {row.isText ? (
                      <span>{row.premium}</span>
                    ) : row.premium ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up" className="mt-12 text-center">
          <button className="bg-primary hover:bg-[#e65c00] text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,102,0,0.3)] transition-all">
            Get Premium <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-400 text-sm mt-4">Cancel anytime. No long-term commitment.</p>
        </FadeIn>
      </div>
    </section>
  );
}
