import { useEffect, useRef, useState } from 'react';
import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CommunityActivity {
  title: string;
  tagline: string;
  image: string;
}

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1200';

const COMMUNITY_ACTIVITIES: CommunityActivity[] = [
  {
    title: 'Opera',
    tagline: 'The Power of Dramatic Expression',
    image:
      'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Karaoke',
    tagline: 'Where music meets pure fun',
    image:
      'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Miracle',
    tagline: 'Fun, Magic & Wonder Miracle',
    image:
      'https://images.pexels.com/photos/8107964/pexels-photo-8107964.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Mime',
    tagline: 'Expressing everything, without saying anything',
    image:
      'https://images.pexels.com/photos/7991475/pexels-photo-7991475.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Bushie Day',
    tagline: 'The Ultimate Human Bush Prank',
    image:
      'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Zumba',
    tagline: 'Steps of joy, stress gone',
    image:
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

/**
 * Throttled scroll position hook (rAF-based) used to drive the
 * scroll-linked transforms on the 3D objects below.
 */
const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

/**
 * Decorative, pointer-events-none 3D shapes that spin continuously
 * (CSS keyframes) and additionally translate/rotate based on the
 * page's scroll position, so they visibly "move with" the page.
 */
const Floating3DObjects = () => {
  const scrollY = useScrollY();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Cube - top right */}
      <div
        className="absolute"
        style={{
          top: '4%',
          right: '6%',
          width: 60,
          height: 60,
          transformStyle: 'preserve-3d',
          transform: `translateY(${scrollY * 0.18}px) rotateX(${scrollY * 0.15}deg) rotateY(${scrollY * 0.1}deg)`,
        }}
      >
        <div
          className="w-full h-full"
          style={{ transformStyle: 'preserve-3d', animation: 'cube-spin 9s linear infinite' }}
        >
          {[
            { t: 'translateZ(30px)' },
            { t: 'rotateY(180deg) translateZ(30px)' },
            { t: 'rotateY(90deg) translateZ(30px)' },
            { t: 'rotateY(-90deg) translateZ(30px)' },
            { t: 'rotateX(90deg) translateZ(30px)' },
            { t: 'rotateX(-90deg) translateZ(30px)' },
          ].map((face, idx) => (
            <div
              key={idx}
              className="absolute inset-0 rounded-md border border-orange-300/60"
              style={{
                background:
                  'linear-gradient(135deg, rgba(251,146,60,0.35), rgba(249,115,22,0.15))',
                backdropFilter: 'blur(1px)',
                transform: face.t,
              }}
            />
          ))}
        </div>
      </div>

      {/* Sphere - mid left */}
      <div
        className="absolute rounded-full"
        style={{
          top: '32%',
          left: '4%',
          width: 90,
          height: 90,
          background:
            'radial-gradient(circle at 30% 30%, rgba(253,186,116,0.9), rgba(234,88,12,0.35) 60%, transparent 75%)',
          boxShadow: '0 20px 40px -10px rgba(234,88,12,0.35)',
          transform: `translateY(${scrollY * -0.12}px) translateX(${Math.sin(scrollY * 0.005) * 12}px) rotate(${scrollY * 0.08}deg)`,
          animation: 'float-bob 6s ease-in-out infinite',
        }}
      />

      {/* Diamond / pyramid-ish - bottom right */}
      <div
        className="absolute"
        style={{
          bottom: '10%',
          right: '10%',
          width: 50,
          height: 50,
          transformStyle: 'preserve-3d',
          transform: `translateY(${scrollY * 0.22}px) rotateZ(${45 + scrollY * 0.2}deg) rotateX(${scrollY * 0.12}deg)`,
        }}
      >
        <div
          className="w-full h-full border border-amber-300/70"
          style={{
            background:
              'linear-gradient(135deg, rgba(245,158,11,0.5), rgba(217,119,6,0.15))',
            animation: 'diamond-pulse 4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Small ring - center, subtle */}
      <div
        className="absolute rounded-full border-2 border-orange-300/50"
        style={{
          top: '58%',
          left: '48%',
          width: 40,
          height: 40,
          transform: `translate(-50%, -50%) translateY(${scrollY * -0.08}px) rotateX(${60 + scrollY * 0.1}deg)`,
        }}
      />

      <style>{`
        @keyframes cube-spin {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        @keyframes float-bob {
          0%, 100% { margin-top: 0px; }
          50% { margin-top: -14px; }
        }
        @keyframes diamond-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const CommunityStressBusters = () => {
  return (
    <div className="relative">
      <Floating3DObjects />

      <StandardPage
        eyebrow="For Corporates"
        title="Corporate Stress Busters"
        subtitle="Stress relief programs & team building activities."
      >
        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
          <img
            src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Corporate Stress Busters"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {COMMUNITY_ACTIVITIES.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white border border-orange-300 group hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-gray-800 leading-relaxed mb-6 flex-1">
                  {item.tagline}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-bold text-sm uppercase tracking-wide w-fit transition-colors"
                >
                  Explore More »
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
          {[
            { label: 'Activities', value: COMMUNITY_ACTIVITIES.length.toString() },
            { label: 'Corporates', value: '30+' },
            { label: 'Events Hosted', value: '150+' },
            { label: 'Participants', value: '3000+' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="eyebrow mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="btn-pill btn-pill-gradient">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </StandardPage>
    </div>
  );
};

export default CommunityStressBusters;




// import { useEffect, useRef, useState } from 'react';
// import StandardPage from '../../components/StandardPage';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// interface CommunityActivity {
//   title: string;
//   tagline: string;
//   image: string;
// }

// const FALLBACK_IMAGE =
//   'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1200';

// const COMMUNITY_ACTIVITIES: CommunityActivity[] = [
//   {
//     title: 'Opera',
//     tagline: 'The Power of Dramatic Expression',
//     image:
//       'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   },
//   {
//     title: 'Karaoke',
//     tagline: 'Where music meets pure fun',
//     image:
//       'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   },
//   {
//     title: 'Miracle',
//     tagline: 'Fun, Magic & Wonder Miracle',
//     image:
//       'https://images.pexels.com/photos/8107964/pexels-photo-8107964.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   },
//   {
//     title: 'Mime',
//     tagline: 'Expressing everything, without saying anything',
//     image:
//       'https://images.pexels.com/photos/7991475/pexels-photo-7991475.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   },
//   {
//     title: 'Bushie Day',
//     tagline: 'The Ultimate Human Bush Prank',
//     image:
//       'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   },
//   {
//     title: 'Zumba',
//     tagline: 'Steps of joy, stress gone',
//     image:
//       'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   },
// ];

// /**
//  * Throttled scroll position hook (rAF-based) used to drive the
//  * scroll-linked transforms on the 3D objects below.
//  */
// const useScrollY = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const ticking = useRef(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ticking.current) {
//         window.requestAnimationFrame(() => {
//           setScrollY(window.scrollY);
//           ticking.current = false;
//         });
//         ticking.current = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return scrollY;
// };

// /**
//  * Decorative, pointer-events-none 3D shapes that spin continuously
//  * (CSS keyframes) and additionally translate/rotate based on the
//  * page's scroll position, so they visibly "move with" the page.
//  */
// const Floating3DObjects = () => {
//   const scrollY = useScrollY();

//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 overflow-hidden"
//       style={{ perspective: '1200px' }}
//     >
//       {/* Cube - top right */}
//       <div
//         className="absolute"
//         style={{
//           top: '4%',
//           right: '6%',
//           width: 60,
//           height: 60,
//           transformStyle: 'preserve-3d',
//           transform: `translateY(${scrollY * 0.18}px) rotateX(${scrollY * 0.15}deg) rotateY(${scrollY * 0.1}deg)`,
//         }}
//       >
//         <div
//           className="w-full h-full"
//           style={{ transformStyle: 'preserve-3d', animation: 'cube-spin 9s linear infinite' }}
//         >
//           {[
//             { t: 'translateZ(30px)' },
//             { t: 'rotateY(180deg) translateZ(30px)' },
//             { t: 'rotateY(90deg) translateZ(30px)' },
//             { t: 'rotateY(-90deg) translateZ(30px)' },
//             { t: 'rotateX(90deg) translateZ(30px)' },
//             { t: 'rotateX(-90deg) translateZ(30px)' },
//           ].map((face, idx) => (
//             <div
//               key={idx}
//               className="absolute inset-0 rounded-md border border-orange-300/60"
//               style={{
//                 background:
//                   'linear-gradient(135deg, rgba(251,146,60,0.35), rgba(249,115,22,0.15))',
//                 backdropFilter: 'blur(1px)',
//                 transform: face.t,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Sphere - mid left */}
//       <div
//         className="absolute rounded-full"
//         style={{
//           top: '32%',
//           left: '4%',
//           width: 90,
//           height: 90,
//           background:
//             'radial-gradient(circle at 30% 30%, rgba(253,186,116,0.9), rgba(234,88,12,0.35) 60%, transparent 75%)',
//           boxShadow: '0 20px 40px -10px rgba(234,88,12,0.35)',
//           transform: `translateY(${scrollY * -0.12}px) translateX(${Math.sin(scrollY * 0.005) * 12}px) rotate(${scrollY * 0.08}deg)`,
//           animation: 'float-bob 6s ease-in-out infinite',
//         }}
//       />

//       {/* Diamond / pyramid-ish - bottom right */}
//       <div
//         className="absolute"
//         style={{
//           bottom: '10%',
//           right: '10%',
//           width: 50,
//           height: 50,
//           transformStyle: 'preserve-3d',
//           transform: `translateY(${scrollY * 0.22}px) rotateZ(${45 + scrollY * 0.2}deg) rotateX(${scrollY * 0.12}deg)`,
//         }}
//       >
//         <div
//           className="w-full h-full border border-amber-300/70"
//           style={{
//             background:
//               'linear-gradient(135deg, rgba(245,158,11,0.5), rgba(217,119,6,0.15))',
//             animation: 'diamond-pulse 4s ease-in-out infinite',
//           }}
//         />
//       </div>

//       {/* Small ring - center, subtle */}
//       <div
//         className="absolute rounded-full border-2 border-orange-300/50"
//         style={{
//           top: '58%',
//           left: '48%',
//           width: 40,
//           height: 40,
//           transform: `translate(-50%, -50%) translateY(${scrollY * -0.08}px) rotateX(${60 + scrollY * 0.1}deg)`,
//         }}
//       />

//       <style>{`
//         @keyframes cube-spin {
//           from { transform: rotateX(0deg) rotateY(0deg); }
//           to { transform: rotateX(360deg) rotateY(360deg); }
//         }
//         @keyframes float-bob {
//           0%, 100% { margin-top: 0px; }
//           50% { margin-top: -14px; }
//         }
//         @keyframes diamond-pulse {
//           0%, 100% { opacity: 0.7; }
//           50% { opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// };

// const CommunityStressBusters = () => {
//   return (
//     <div className="relative">
//       <Floating3DObjects />

//       <StandardPage
//         eyebrow="For Corporates"
//         title="Corporate Stress Busters"
//         subtitle="Stress relief programs & team building activities."
//       >
//         {/* Hero Image */}
//         <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
//           <img
//             src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1600"
//             alt="Corporate Stress Busters"
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
//         </div>

//         {/* Activities Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {COMMUNITY_ACTIVITIES.map((item, i) => (
//             <div
//               key={i}
//               className="rounded-2xl overflow-hidden bg-white border border-orange-300 group hover:shadow-lg transition-shadow flex flex-col"
//             >
//               <div className="h-56 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   onError={(e) => {
//                     (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
//                   }}
//                 />
//               </div>

//               <div className="p-6 flex flex-col flex-1">
//                 <h3 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm font-semibold text-gray-800 leading-relaxed mb-6 flex-1">
//                   {item.tagline}
//                 </p>

//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-bold text-sm uppercase tracking-wide w-fit transition-colors"
//                 >
//                   Explore More »
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
//           {[
//             { label: 'Activities', value: COMMUNITY_ACTIVITIES.length.toString() },
//             { label: 'Corporates', value: '30+' },
//             { label: 'Events Hosted', value: '150+' },
//             { label: 'Participants', value: '3000+' },
//           ].map((stat) => (
//             <div key={stat.label}>
//               <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
//                 {stat.value}
//               </div>
//               <div className="eyebrow mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <Link to="/contact" className="btn-pill btn-pill-gradient">
//             Book Now <ArrowRight size={14} />
//           </Link>
//         </div>
//       </StandardPage>
//     </div>
//   );
// };

// export default CommunityStressBusters;