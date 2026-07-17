// import { Star } from 'lucide-react';
// import { GOOGLE_REVIEWS } from '../../data';

// export default function GoogleReviewsSection() {
//   return (
//     <div className="mb-20">
//       <div data-reveal className="flex items-center gap-4 mb-8">
//         <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight">12 Google reviews</h2>
//         <div className="flex gap-1">
//           {[...Array(5)].map((_, i) => (
//             <Star key={i} size={18} className="text-accent-from fill-accent-from" />
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {GOOGLE_REVIEWS.map((r, i) => (
//           <div key={i} data-reveal className="glass rounded-2xl p-5">
//             <div className="flex items-center gap-2 mb-3">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center text-bg font-bold text-xs">
//                 {r.name[0]}
//               </div>
//               <span className="text-white text-sm font-medium">{r.name}</span>
//             </div>
//             <p className="text-sm text-gray-400">{r.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { Star } from "lucide-react";
import { GOOGLE_REVIEWS } from "../../data";

export default function GoogleReviewsSection() {
  return (
    <section className="mb-24">
      {/* Heading */}
      <div
        data-reveal
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1 text-sm font-medium text-yellow-300">
            ⭐ Trusted by our customers
          </span>

          <h2 className="mt-4 text-4xl font-display font-bold text-white">
            ! 12 Google Reviews
          </h2>

          <p className="mt-2 text-gray-400">
            Real feedback from our happy customers.
          </p>
        </div>

        <div className="glass rounded-2xl px-6 py-5 flex items-center gap-5">
          <div>
            <p className="text-5xl font-bold text-white">4.9</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>

          <div className="h-12 w-px bg-white/10"></div>

          <div>
            <p className="text-white font-semibold text-lg">
              {GOOGLE_REVIEWS.length}+ Reviews
            </p>
            <p className="text-gray-400 text-sm">
              Average rating on Google
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {GOOGLE_REVIEWS.map((review, index) => (
          <div
            key={index}
            data-reveal
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-[0_20px_60px_rgba(255,196,0,0.18)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-500/10"></div>

            <div className="relative z-10">
              {/* User */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 flex items-center justify-center text-black font-bold text-lg shadow-lg">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      {review.name}
                    </h4>

                    <p className="text-xs text-gray-400">
                      Google Reviewer
                    </p>
                  </div>
                </div>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="h-6 object-contain opacity-80"
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-7 text-[15px]">
                "{review.text}"
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500">
                  Verified Review
                </span>

                <span className="text-xs text-gray-500">
                  ★★★★★
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}