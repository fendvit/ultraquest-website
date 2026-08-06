import FadeIn from './FadeIn';

const steps = [
  {
    title: 'CREATE YOUR ACCOUNT',
    desc: 'Sign up in seconds, pick your sport, and connect Strava or use built-in GPS.',
  },
  {
    title: 'CHOOSE YOUR QUEST',
    desc: 'Pick one Quest to focus on — a legendary ultra, a cycling epic or a strength challenge.',
  },
  {
    title: 'LOG YOUR SESSIONS',
    desc: 'Track with built-in GPS — it keeps recording with the screen off — sync from Strava, or log sets and reps.',
  },
  {
    title: 'FINISH & EARN REWARDS',
    desc: 'Unlock tiered badges and level up. Join Medal Races to earn real medals shipped to your door.',
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-[#0d1512] bg-grid-pattern relative border-t border-white/5">
      <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <div className="inline-block border border-primary/30 text-primary text-[10px] font-semibold tracking-widest px-3 py-1 rounded uppercase mb-4">
            Mission Brief
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 uppercase">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-gray-400">Four steps from signup to your first finish.</p>
        </FadeIn>

        <div className="relative pl-4 md:pl-0">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 relative group">
              {/* Vertical line connecting steps */}
              {index !== steps.length - 1 && (
                <div className="absolute top-12 bottom-[-48px] left-[23px] w-[2px] bg-gradient-to-b from-primary/50 to-transparent z-0"></div>
              )}
              
              {/* Number box */}
              <FadeIn delay={0.2 + index * 0.1} direction="up" className="relative z-10 shrink-0">
                <div className="w-12 h-10 bg-primary flex items-center justify-center text-white font-extrabold text-lg shadow-[0_0_20px_rgba(255,102,0,0.4)] rounded-sm group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,102,0,0.6)] transition-all duration-300">
                  0{index + 1}
                </div>
              </FadeIn>
              
              {/* Content */}
              <FadeIn delay={0.3 + index * 0.1} direction="left" className="pt-1">
                <h3 className="text-xl font-semibold uppercase mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-2xl text-sm md:text-base">
                  {step.desc}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
