import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import FadeIn from './FadeIn';
import { useIsDesktop } from '../lib/useIsDesktop';
import 'swiper/css';
import 'swiper/css/pagination';

type Screen = { src: string; alt: string };

const screens: (Screen & { title: string; caption: string })[] = [
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

function PhoneFrame({
  slides,
  paginationClass,
  sizeClass,
  hoverLift = false,
  onSlideChange,
}: {
  slides: Screen[];
  paginationClass: string;
  sizeClass: string;
  hoverLift?: boolean;
  onSlideChange?: (index: number) => void;
}) {
  return (
    <div
      className={`${sizeClass} bg-[#000] p-2 border-[2px] border-[#222] shadow-[0_0_60px_rgba(255,102,0,0.15)] relative cursor-grab active:cursor-grabbing ${
        hoverLift ? 'hover:shadow-[0_0_80px_rgba(255,102,0,0.3)] hover:-translate-y-4 transition-all duration-500' : ''
      }`}
    >
      {/* Dynamic Island */}
      <div className="absolute top-4 inset-x-0 z-20 flex justify-center">
        <div className="w-24 h-7 bg-black rounded-full flex items-center justify-between px-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111]" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-900/30 border border-blue-800/30" />
        </div>
      </div>

      <div className="w-full h-full rounded-[32px] sm:rounded-[40px] overflow-hidden bg-background relative z-10 border border-white/10">
        <Swiper
          pagination={{ el: `.${paginationClass}`, clickable: true, bulletClass: 'swiper-custom-bullet', bulletActiveClass: 'swiper-custom-bullet-active' }}
          modules={[Pagination]}
          onSlideChange={(swiper) => onSlideChange?.(swiper.activeIndex)}
          className="w-full h-full"
        >
          {slides.map((screen) => (
            <SwiperSlide key={screen.src}>
              <img src={screen.src} alt={screen.alt} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  const isDesktop = useIsDesktop();
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-[#000]">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <FadeIn delay={0.1} className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
            HOW IT LOOKS <span className="text-primary">INSIDE</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            {isDesktop
              ? 'A sleek, powerful interface designed for athletes who demand more from every session'
              : 'Built for athletes who demand more from every session.'}
          </p>
        </FadeIn>

        {isDesktop ? (
          /* Desktop keeps the original pair of phones, two screens each. */
          <div className="flex justify-center items-center gap-24">
            <FadeIn delay={0.2} direction="up" className="flex flex-col items-center">
              <PhoneFrame
                slides={screens.slice(0, 2)}
                paginationClass="custom-pagination-1"
                sizeClass="w-[300px] h-[610px] rounded-[48px] group"
                hoverLift
              />
              <div className="custom-pagination-1 flex justify-center gap-2 mt-6 h-4" />
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-xl">Home &amp; Quests</h3>
                <p className="text-gray-400 text-sm mt-1">Pick a quest, map your expedition</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" className="flex flex-col items-center">
              <PhoneFrame
                slides={screens.slice(2, 4)}
                paginationClass="custom-pagination-2"
                sizeClass="w-[300px] h-[610px] rounded-[48px] group"
                hoverLift
              />
              <div className="custom-pagination-2 flex justify-center gap-2 mt-6 h-4" />
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-xl">Community &amp; Profile</h3>
                <p className="text-gray-400 text-sm mt-1">Clubs, friends, badges &amp; levels</p>
              </div>
            </FadeIn>
          </div>
        ) : (
          /* Phones get one device holding all four screens. */
          <FadeIn delay={0.2} direction="up" className="flex flex-col items-center">
            <PhoneFrame
              slides={screens}
              paginationClass="app-pagination"
              sizeClass="w-[270px] h-[550px] rounded-[40px]"
              onSlideChange={setActive}
            />
            <div className="app-pagination flex justify-center gap-2 mt-6 h-4" />
            {/* Fixed height: the caption swaps per slide and would otherwise shift the page. */}
            <div className="mt-4 text-center h-16">
              <h3 className="font-semibold text-xl">{screens[active].title}</h3>
              <p className="text-gray-400 text-sm mt-1">{screens[active].caption}</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
