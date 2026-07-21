import { useEffect, useRef, useState } from 'react';
import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface StressBusterActivity {
  title: string;
  tagline: string;
  mainImage: string;
  insetImage?: string;
}

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1200';

const ACTIVITIES: StressBusterActivity[] = [
  {
    title: 'Opera',
    tagline: 'The Power of Dramatic Expression',
    mainImage:
      'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    insetImage:
      'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Karaoke',
    tagline: 'Where music meets pure fun',
    mainImage:
      'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Miracle',
    tagline: 'Fun, Magic & Wonder Miracle',
    mainImage:
      'https://images.pexels.com/photos/8107964/pexels-photo-8107964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    insetImage:
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Mime',
    tagline: 'Expressing everything, without saying anything',
    mainImage:
      'https://images.pexels.com/photos/7991475/pexels-photo-7991475.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Bushie Day',
    tagline: 'The Ultimate Human Bush Prank',
    mainImage:
      'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1200',
    insetImage:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Zumba',
    tagline: 'Steps of joy, stress gone',
    mainImage:
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const HERO_TEAM_IMAGE =
  'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1600';

/* ------------------------------------------------------------------ */
/*  Motion helpers                                                     */
/* ------------------------------------------------------------------ */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Tracks pointer position within an element as -1..1 on each axis. */
const usePointerTilt = (maxDeg = 14) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50, active: false });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (0.5 - py) * maxDeg;
    const ry = (px - 0.5) * maxDeg;
    setTilt({ rx, ry, mx: px * 100, my: py * 100, active: true });
  };

  const onMouseLeave = () => setTilt({ rx: 0, ry: 0, mx: 50, my: 50, active: false });

  return { ref, tilt, onMouseMove, onMouseLeave };
};

/** Fires a callback once an element scrolls into view. */
const useInView = <T extends HTMLElement>(threshold = 0.3) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

/** Animates a number counting up once it enters the viewport. */
const CountUp = ({ value, inView, duration = 1400 }: { value: string; inView: boolean; duration?: number }) => {
  const numericMatch = value.match(/[\d.]+/);
  const target = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = numericMatch ? value.slice(numericMatch.index! + numericMatch[0].length) : '';
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setDisplay(target);
      return;
    }
    let start: number | null = null;
    let frame: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

/** Splits a headline into characters for a staggered load-in reveal. */
const KineticText = ({ text, startDelay = 0 }: { text: string; startDelay?: number }) => (
  <span className="csb-kinetic-line">
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="csb-kinetic-char"
        style={{ animationDelay: `${startDelay + i * 0.035}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

/* ------------------------------------------------------------------ */
/*  Activity card — real 3D: perspective tilt + layered depth + glare  */
/* ------------------------------------------------------------------ */

const ActivityImageBlock = ({ activity }: { activity: StressBusterActivity }) => (
  <div className="relative h-56 overflow-hidden bg-[#3d5a2f]" style={{ transform: 'translateZ(20px)' }}>
    <img
      src={activity.mainImage}
      alt={activity.title}
      className="w-full h-full object-cover csb-card-image"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
      }}
    />
    {activity.insetImage && (
      <div
        className="absolute bottom-0 right-0 w-2/5 h-2/3 border-l-4 border-t-4 border-white overflow-hidden"
        style={{ transform: 'translateZ(35px)' }}
      >
        <img
          src={activity.insetImage}
          alt={`${activity.title} detail`}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
          }}
        />
      </div>
    )}
  </div>
);

const ActivityCard = ({ activity, index }: { activity: StressBusterActivity; index: number }) => {
  const { ref, tilt, onMouseMove, onMouseLeave } = usePointerTilt(10);
  const { ref: revealRef, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div
      ref={revealRef}
      className={`csb-reveal ${inView ? 'csb-reveal-in' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="csb-tilt-perspective">
        <div
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="csb-tilt-card rounded-2xl overflow-hidden bg-white border-2 border-orange-400 relative"
          style={{
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0px)`,
            boxShadow: tilt.active
              ? `${-tilt.ry * 1.6}px ${tilt.rx * 1.6}px 40px -12px rgba(0,0,0,0.45)`
              : '0 10px 25px -10px rgba(0,0,0,0.25)',
          }}
        >
          {/* Cursor-tracked glare */}
          <div
            className="csb-glare"
            style={{
              opacity: tilt.active ? 1 : 0,
              background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,0.55), transparent 55%)`,
            }}
          />

          <div className="p-2">
            <div className="rounded-xl overflow-hidden">
              <ActivityImageBlock activity={activity} />
            </div>
          </div>

          <div className="px-6 pb-6 pt-2" style={{ transform: 'translateZ(45px)' }}>
            <h3 className="font-display font-bold text-gray-900 text-3xl tracking-tight mb-4">
              {activity.title}
            </h3>

            <p className="text-sm font-semibold text-gray-800 leading-relaxed mb-6">
              {activity.tagline}
            </p>

            <Link
              to="/contact"
              className="csb-magnetic-link inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Explore More
              <ArrowRight className="w-4 h-4 csb-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Hero — parallax orbs + floating badge stack + kinetic headline     */
/* ------------------------------------------------------------------ */

const HeroSection = () => {
  const { ref, tilt, onMouseMove, onMouseLeave } = usePointerTilt(6);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="csb-hero-perspective grid grid-cols-1 md:grid-cols-2 mb-16 overflow-hidden rounded-3xl relative"
    >
      <div className="bg-black flex flex-col justify-center px-10 md:px-16 py-16 md:py-0 min-h-[320px] relative overflow-hidden">
        {/* Ambient gradient orbs, parallaxed opposite the cursor */}
        <div
          className="csb-orb csb-orb-orange"
          style={{ transform: `translate(${-tilt.ry * 3}px, ${-tilt.rx * 3}px)` }}
        />
        <div
          className="csb-orb csb-orb-emerald"
          style={{ transform: `translate(${tilt.ry * 2.2}px, ${tilt.rx * 2.2}px)` }}
        />

        <div
          className="flex items-center gap-2 mb-8 relative"
          style={{ transform: `translate(${tilt.ry * 1.5}px, ${tilt.rx * 1.5}px)` }}
        >
          <div className="flex items-center justify-center gap-1">
            <span className="csb-badge w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center text-white font-bold text-sm" style={{ animationDelay: '0s' }}>
              J
            </span>
            <span className="csb-badge w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm" style={{ animationDelay: '0.15s' }}>
              S
            </span>
            <span className="csb-badge w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-sm" style={{ animationDelay: '0.3s' }}>
              B
            </span>
          </div>
        </div>

        <h1
          className="font-display font-bold text-white text-4xl md:text-5xl leading-tight mb-4 uppercase relative"
          style={{ transform: `translate(${tilt.ry * 2}px, ${tilt.rx * 2}px)` }}
        >
          <KineticText text="Corporate" />
          <br />
          <KineticText text="Stress Busters" startDelay={0.3} />
        </h1>
        <p className="text-gray-300 text-base md:text-lg uppercase tracking-wide relative csb-fade-up" style={{ animationDelay: '0.9s' }}>
          Stress relief programs &amp; team building activities.
        </p>
      </div>

      <div className="h-64 md:h-auto relative overflow-hidden">
        <img
          src={HERO_TEAM_IMAGE}
          alt="Team collaborating on a puzzle"
          className="w-full h-full object-cover"
          style={{
            transform: `scale(1.12) translate(${-tilt.ry * 1.2}px, ${-tilt.rx * 1.2}px)`,
            transition: 'transform 0.2s ease-out',
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
          }}
        />
        <div className="csb-hero-image-fade" />
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Stats                                                               */
/* ------------------------------------------------------------------ */

const STATS = [
  { label: 'Sessions Conducted', value: '100+' },
  { label: 'Companies', value: '40+' },
  { label: 'Activities', value: '12+' },
  { label: 'Cities', value: '5' },
];

const StatsSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`csb-stat ${inView ? 'csb-stat-in' : ''}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
            <CountUp value={stat.value} inView={inView} />
          </div>
          <div className="eyebrow mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

const CorporateStressBusters = () => {
  return (
    <StandardPage
      eyebrow="Corporates"
      title="Corporate Stress Busters"
      subtitle="Stress relief programs & team building activities."
    >
      <style>{`
        @keyframes csbFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes csbCharIn {
          from { opacity: 0; transform: translateY(0.6em) rotateX(-60deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        @keyframes csbFloat {
          0%, 100% { transform: translateY(0) rotateY(0deg); }
          50% { transform: translateY(-6px) rotateY(180deg); }
        }
        @keyframes csbOrbDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(12px, -10px) scale(1.08); }
        }

        .csb-kinetic-line { display: inline-block; perspective: 400px; }
        .csb-kinetic-char {
          display: inline-block;
          opacity: 0;
          animation: csbCharIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .csb-fade-up { opacity: 0; animation: csbFadeUp 0.7s ease-out forwards; }

        .csb-badge {
          animation: csbFloat 3.2s ease-in-out infinite;
          box-shadow: 0 6px 16px -4px rgba(0,0,0,0.5);
        }

        .csb-hero-perspective { perspective: 1200px; }
        .csb-hero-image-fade {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.35), transparent 40%);
          pointer-events: none;
        }

        .csb-orb {
          position: absolute;
          width: 260px; height: 260px;
          border-radius: 9999px;
          filter: blur(70px);
          opacity: 0.35;
          pointer-events: none;
          transition: transform 0.2s ease-out;
          animation: csbOrbDrift 7s ease-in-out infinite;
        }
        .csb-orb-orange { background: #fb923c; top: -60px; left: -60px; }
        .csb-orb-emerald { background: #10b981; bottom: -80px; right: -40px; animation-delay: 1.5s; }

        .csb-tilt-perspective { perspective: 1000px; }
        .csb-tilt-card {
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
          will-change: transform;
        }
        .csb-tilt-card:hover .csb-card-image { transform: scale(1.08); }
        .csb-card-image { transition: transform 0.4s ease-out; }

        .csb-glare {
          position: absolute; inset: 0;
          mix-blend-mode: overlay;
          transition: opacity 0.2s ease-out;
          pointer-events: none;
          z-index: 5;
        }

        .csb-magnetic-link { transition: gap 0.2s ease-out, color 0.2s ease-out; }
        .csb-magnetic-link:hover { gap: 0.5rem; }
        .csb-arrow { transition: transform 0.2s ease-out; }
        .csb-magnetic-link:hover .csb-arrow { transform: translateX(3px); }

        .csb-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .csb-reveal-in { opacity: 1; transform: translateY(0); }

        .csb-stat {
          opacity: 0;
          transform: translateY(16px) scale(0.92);
          transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .csb-stat-in { opacity: 1; transform: translateY(0) scale(1); }

        @media (prefers-reduced-motion: reduce) {
          .csb-kinetic-char, .csb-fade-up, .csb-badge, .csb-orb, .csb-tilt-card,
          .csb-card-image, .csb-reveal, .csb-stat {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Hero */}
      <HeroSection />

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {ACTIVITIES.map((activity, i) => (
          <ActivityCard key={activity.title} activity={activity} index={i} />
        ))}
      </div>

      {/* Stats */}
      <StatsSection />
    </StandardPage>
  );
};

export default CorporateStressBusters;



// import StandardPage from '../../components/StandardPage';
// import { Link } from 'react-router-dom';
// import { ArrowRight, CheckCircle } from 'lucide-react';

// const CorporateStressBusters = () => {
//   const features = [
//     'Zumba sessions',
//     'Yoga & meditation',
//     'Quick team games',
//     'Desk stretching',
//     'Mindfulness workshops',
//     'Laughter therapy',
//   ];

//   return (
//     <StandardPage
//       eyebrow="Corporates"
//       title="Corporate Stress Busters"
//       subtitle="Quick, effective stress-relief activities for the workplace."
//     >
//       {/* Image Section */}
//       <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
//         <img
//           src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt="Corporate Stress Busters"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
//         {/* Overview */}
//         <div>
//           <div className="eyebrow mb-3">Overview</div>
//           <p className="text-gray-300 leading-relaxed text-lg mb-6">
//             Short, high-impact sessions designed to break up the workday. Zumba, yoga,
//             meditation, and fun games that refresh minds and boost productivity.
//           </p>
//           <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
//             Book Now <ArrowRight size={14} />
//           </Link>
//         </div>

//         {/* Features */}
//         <div>
//           <div className="eyebrow mb-3">What's included</div>
//           <ul className="space-y-3">
//             {features.map((item, i) => (
//               <li key={i} className="flex items-start gap-2 text-gray-300">
//                 <CheckCircle size={18} className="text-accent-from shrink-0 mt-0.5" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {[
//           { label: 'Sessions Conducted', value: '100+' },
//           { label: 'Companies', value: '40+' },
//           { label: 'Activities', value: '12+' },
//           { label: 'Cities', value: '5' },
//         ].map((stat) => (
//           <div key={stat.label}>
//             <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
//               {stat.value}
//             </div>
//             <div className="eyebrow mt-1">{stat.label}</div>
//           </div>
//         ))}
//       </div>
//     </StandardPage>
//   );
// };

// export default CorporateStressBusters;