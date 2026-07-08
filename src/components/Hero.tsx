import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import { AppStoreButton, GooglePlayButton } from './StoreButtons';

export default function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#111315]/80 via-[#111315]/60 to-[#111315] z-10" />
        <video 
          src="/videos/hero.mp4" 
          poster="/images/hero_bg.png"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center mt-[-4rem]">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 self-start">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            MULTI-SPORT CHALLENGE PLATFORM
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-7xl md:text-8xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
            TAKE ON<br/>
            <span className="text-primary">LEGENDARY</span><br/>
            QUESTS
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
            Run, ride, and lift your way through iconic challenges. Track every kilometer and every rep, compete with athletes worldwide, and conquer the impossible.
          </p>
        </FadeIn>        <FadeIn delay={0.4} direction="up" className="flex flex-col sm:flex-row items-center justify-start gap-4">
          <AppStoreButton />
          <GooglePlayButton />
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[26px] h-[42px] rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
