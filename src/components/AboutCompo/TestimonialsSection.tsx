// import { TESTIMONIALS } from '../../data';

// export default function TestimonialsSection() {
//   return (
//     <div className="mb-20">
//       <div data-reveal className="text-center mb-10">
//         <div className="eyebrow mb-2">Testimonials</div>
//         <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight">Kind words.</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         {TESTIMONIALS.map((t, i) => (
//           <div key={i} data-reveal className="glass rounded-2xl p-6">
//             <p className="text-gray-300 leading-relaxed mb-4">"{t.text}"</p>
//             <div className="eyebrow text-accent-from">{t.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { TESTIMONIALS } from "../../data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  return (
    <section className="mb-20">
      <div className="text-center mb-10">
        <div className="eyebrow mb-2">Testimonials</div>

        <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight">
          Kind words.
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="glass rounded-2xl p-6 h-full border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="font-semibold text-orange-400">
                {t.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}