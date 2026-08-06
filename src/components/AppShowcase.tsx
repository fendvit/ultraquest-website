import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import FadeIn from './FadeIn';
import 'swiper/css';
import 'swiper/css/pagination';

const screens = [
  {
    src: '/images/app-screen-1.jpeg',
    alt: 'UltraQuest home screen with quests and stats',
    title: 'Home & Quests',
    caption: 'Pick a quest and watch your progress build',
  },
  {
    src: '/images/app-screen-2.jpeg',
    alt: 'UltraQuest virtual expedition map',
    title: 'Expedition Map',
    caption: 'Your route unfolding across the world',
  },
  {
    src: '/images/app-screen-3.jpeg',
    alt: 'UltraQuest community feed with clubs and friends',
    title: 'Community',
    caption: 'Clubs, friends and live activity',
  },
  {
    src: '/images/app-screen-4.jpeg',
    alt: 'UltraQuest athlete profile with badges and levels',
    title: 'Profile',
    caption: 'Badges, levels and personal records',
  },
];

export default function AppShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-[#000]">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <FadeIn delay={0.1} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
            HOW IT LOOKS <span className="text-primary">INSIDE</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Built for athletes who demand more from every session.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up" className="flex flex-col items-center">
          <div className="w-[270px] h-[550px] sm:w-[300px] sm:h-[610px] bg-[#000] rounded-[40px] sm:rounded-[48px] p-2 border-[2px] border-[#222] shadow-[0_0_60px_rgba(255,102,0,0.15)] relative cursor-grab active:cursor-grabbing">
            {/* Dynamic Island */}
            <div className="absolute top-4 inset-x-0 z-20 flex justify-center">
              <div className="w-24 h-7 bg-black rounded-full flex items-center justify-between px-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111]" />
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900/30 border border-blue-800/30" />
              </div>
            </div>

            <div className="w-full h-full rounded-[32px] sm:rounded-[40px] overflow-hidden bg-background relative z-10 border border-white/10">
              <Swiper
                pagination={{ el: '.app-pagination', clickable: true, bulletClass: 'swiper-custom-bullet', bulletActiveClass: 'swiper-custom-bullet-active' }}
                modules={[Pagination]}
                onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                className="w-full h-full"
              >
                {screens.map((screen) => (
                  <SwiperSlide key={screen.src}>
                    <img src={screen.src} alt={screen.alt} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="app-pagination flex justify-center gap-2 mt-6 h-4" />

          {/* Fixed height: the caption swaps per slide and would otherwise shift the page. */}
          <div className="mt-4 text-center h-16">
            <h3 className="font-semibold text-xl">{screens[active].title}</h3>
            <p className="text-gray-400 text-sm mt-1">{screens[active].caption}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
