import FadeIn from './FadeIn';

const steps = [
  {
    title: 'CREATE YOUR ACCOUNT',
    desc: 'Sign up in seconds and set up your runner profile. Connect your Strava for automatic syncing or use built-in GPS tracking.',
  },
  {
    title: 'CHOOSE YOUR CHALLENGE',
    desc: 'Pick one legendary ultramarathon to focus on. Complete it or leave to start a new adventure—one race at a time.',
  },
  {
    title: 'TRACK YOUR RUNS',
    desc: 'Use the built-in GPS tracker or sync from Strava. Every kilometer counts toward your active race.',
  },
  {
    title: 'FINISH & EARN REWARDS',
    desc: 'Complete races to unlock achievements. Join Medal Races to earn real physical medals shipped to your door.',
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0d1512] bg-grid-pattern relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <div className="inline-block border border-primary/30 text-primary text-[10px] font-semibold tracking-widest px-3 py-1 rounded uppercase mb-4">
            Mission Brief
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-gray-400">Simple, straightforward, and designed to keep you motivated every step of the way.</p>
        </FadeIn>

        <div className="relative pl-4 md:pl-0">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8 mb-12 relative group">
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
