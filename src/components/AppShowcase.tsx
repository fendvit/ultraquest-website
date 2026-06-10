import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import FadeIn from './FadeIn';
import 'swiper/css';
import 'swiper/css/pagination';

export default function AppShowcase() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#000]">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn delay={0.1} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
            HOW IT LOOKS <span className="text-primary">INSIDE</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            A sleek, powerful interface designed for runners who demand more from their training
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          
          {/* Phone 1: Dashboard */}
          <FadeIn delay={0.2} direction="up" className="flex flex-col items-center">
            <div className="w-[300px] h-[610px] bg-[#000] rounded-[48px] p-2 border-[2px] border-[#222] shadow-[0_0_60px_rgba(255,102,0,0.15)] hover:shadow-[0_0_80px_rgba(255,102,0,0.3)] hover:-translate-y-4 transition-all duration-500 relative group cursor-grab active:cursor-grabbing">
              {/* Dynamic Island */}
              <div className="absolute top-4 inset-x-0 z-20 flex justify-center">
                <div className="w-24 h-7 bg-black rounded-full flex items-center justify-between px-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-900/30 border border-blue-800/30" />
                </div>
              </div>
              
              <div className="w-full h-full rounded-[40px] overflow-hidden bg-background relative z-10 border border-white/10">
                <Swiper
                  pagination={{ el: '.custom-pagination-1', clickable: true, bulletClass: 'swiper-custom-bullet', bulletActiveClass: 'swiper-custom-bullet-active' }}
                  modules={[Pagination]}
                  className="w-full h-full"
                >
                  <SwiperSlide>
                    <img src="/images/app-screen-1.jpg" alt="App Dashboard 1" className="w-full h-full object-cover" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/app-screen-2.jpg" alt="App Dashboard 2" className="w-full h-full object-cover" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="custom-pagination-1 flex justify-center gap-2 mt-6 h-4" />

            <div className="mt-4 text-center">
              <h3 className="font-semibold text-xl">Dashboard</h3>
              <p className="text-gray-400 text-sm mt-1">Track your progress</p>
            </div>
          </FadeIn>

          {/* Phone 2: Community */}
          <FadeIn delay={0.4} direction="up" className="flex flex-col items-center">
            <div className="w-[300px] h-[610px] bg-[#000] rounded-[48px] p-2 border-[2px] border-[#222] shadow-[0_0_60px_rgba(255,102,0,0.15)] hover:shadow-[0_0_80px_rgba(255,102,0,0.3)] hover:-translate-y-4 transition-all duration-500 relative group cursor-grab active:cursor-grabbing">
              {/* Dynamic Island */}
              <div className="absolute top-4 inset-x-0 z-20 flex justify-center">
                <div className="w-24 h-7 bg-black rounded-full flex items-center justify-between px-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-900/30 border border-blue-800/30" />
                </div>
              </div>
              
              <div className="w-full h-full rounded-[40px] overflow-hidden bg-background relative z-10 border border-white/10">
                <Swiper
                  pagination={{ el: '.custom-pagination-2', clickable: true, bulletClass: 'swiper-custom-bullet', bulletActiveClass: 'swiper-custom-bullet-active' }}
                  modules={[Pagination]}
                  className="w-full h-full"
                >
                  <SwiperSlide>
                    <img src="/images/app-screen-3.jpg" alt="App Community 1" className="w-full h-full object-cover" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/app-screen-4.jpg" alt="App Community 2" className="w-full h-full object-cover" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="custom-pagination-2 flex justify-center gap-2 mt-6 h-4" />

            <div className="mt-4 text-center">
              <h3 className="font-semibold text-xl">Community</h3>
              <p className="text-gray-400 text-sm mt-1">Connect with runners</p>
            </div>
          </FadeIn>

        </div>
      </div>
      
      <style>{`
        .swiper-pagination-bullet { background: #555; opacity: 1; }
        .swiper-pagination-bullet-active { background: #ff6600; width: 16px; border-radius: 4px; }
      `}</style>
    </section>
  );
}
