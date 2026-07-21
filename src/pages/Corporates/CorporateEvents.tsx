// import StandardPage from '../../components/StandardPage';
// import { Link } from 'react-router-dom';
// import { ArrowRight, CheckCircle } from 'lucide-react';

// const CorporateEvents = () => {
//   return (
//     <StandardPage
//       eyebrow="Corporates"
//       title="Corporate Events"
//       subtitle="From conferences to celebrations — we make your events memorable."
//     >
//       {/* Image */}
//       <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
//         <img
//           src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
//           alt="Corporate Events"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
//       </div>

//       {/* Overview + Features */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
//         <div>
//           <div className="eyebrow mb-3">Overview</div>
//           <p className="text-gray-300 leading-relaxed text-lg mb-6">
//             Whether it's an annual conference, product launch, or team celebration,
//             JSB handles every detail. From planning to execution, we create events
//             that leave lasting impressions.
//           </p>

//           <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
//             Book Now <ArrowRight size={14} />
//           </Link>
//         </div>

//         <div>
//           <div className="eyebrow mb-3">What's included</div>
//           <ul className="space-y-3">
//             {[
//               'Event planning & management',
//               'Venue selection',
//               'Entertainment & activities',
//               'Catering coordination',
//               'AV & production support',
//               'On-site coordination',
//             ].map((item, i) => (
//               <li key={i} className="flex items-start gap-2 text-gray-300">
//                 <CheckCircle size={18} className="text-accent-from mt-0.5" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {[
//           { label: 'Events Hosted', value: '40+' },
//           { label: 'Clients', value: '20+' },
//           { label: 'Event Types', value: '15+' },
//           { label: 'Cities', value: '5+' },
//         ].map((s) => (
//           <div key={s.label}>
//             <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
//               {s.value}
//             </div>
//             <div className="eyebrow mt-1">{s.label}</div>
//           </div>
//         ))}
//       </div>
//     </StandardPage>
//   );
// };

// export default CorporateEvents;

import { useEffect, useRef, useState } from 'react';
import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface EventCard {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1200';

const HERO_IMAGE_FALLBACK =
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600';

// REPLACE with your real hosted video path (CDN, /public/videos/, etc.)
const BACKGROUND_VIDEO_SRC = '/assets/videos/hero-background.mp4';

// Top row — 3 cards
const TOP_EVENTS: EventCard[] = [
  {
    title: 'Marathon',
    paragraphs: [
      'We design Marathons in way so that it helps corporates inspire a culture of fitness, teamwork, and mental resilience among employees. Through collective movement and shared goals, employees step away from routine stress and reconnect with energy and motivation. The marathon encourages healthy competition, boosts morale, and strengthens inter-departmental bonding. It also reinforces the organization\u2019s commitment to employee wellbeing and an active workplace culture.',
    ],
    image:
      'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Corporate marathon runners',
  },
  {
    title: 'Carnival',
    paragraphs: [
      'We curate high-energy carnivals that transform the workplace into a vibrant zone of play, connection, and celebration. Through interactive games, music, and movement-based activities, we help employees unwind, recharge, and reconnect beyond work roles. These carnivals boost morale, strengthen team bonding, and create a positive emotional experience at the workplace.',
      'By bringing play into corporate spaces, we help organisations build happier, more engaged, and resilient teams.',
    ],
    image:
      'https://images.pexels.com/photos/1387577/pexels-photo-1387577.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Joy Carnival',
  },
  {
    title: 'Themed Party',
    paragraphs: [
      'We design themed parties that transform routine workdays into energising experiences, helping employees unwind and reconnect beyond roles and deadlines. Through music, movement, games, and creative engagement, these events reduce stress and spark genuine team bonding. The playful atmosphere boosts morale, improves communication, and reignites creativity at the workplace. A relaxed, happy workforce naturally leads to higher productivity and a stronger work culture.',
    ],
    image:
      'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Themed Party',
  },
];

// Bottom row — 2 larger cards
const BOTTOM_EVENTS: EventCard[] = [
  {
    title: 'Seminars',
    paragraphs: [
      'We conduct impactful wellness seminars that help corporates address stress, burnout, and mental fatigue in the workplace. Our sessions blend science-backed insights with practical tools that employees can apply immediately at work and in life. By fostering awareness, resilience, and healthier coping strategies, these seminars enhance focus, morale, and productivity. The result is a more engaged, balanced, and emotionally strong workforce.',
    ],
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Seminar - Elevate Your Team Leadership Skills',
  },
  {
    title: 'Conference',
    paragraphs: [
      'We conduct thoughtfully designed wellness conferences that help corporates address stress, engagement, and productivity challenges at the workplace. Our conferences combine expert insights, interactive sessions, and practical tools that employees can apply immediately. By creating a space for learning, movement, and mindful connection, we help teams reset, recharge, and perform better.',
    ],
    image:
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Business Conference',
  },
];

/* ---------------------------------------------------------- */
/*  Background video — always visible, always playing.          */
/*  (Scroll-gated play/pause removed per latest request:        */
/*  "background video visible" means it should just be there.)  */
/* ---------------------------------------------------------- */

const BackgroundVideo = () => (
  <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-black">
    <video
      src={BACKGROUND_VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover opacity-55"
    />
    {/* light scrim just enough to keep foreground text legible */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55" />
  </div>
);

/* ---------------------------------------------------------- */
/*  Sign-up button                                              */
/* ---------------------------------------------------------- */

const SignMeUpButton = () => (
  <Link
    to="/contact"
    className="group/btn relative inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm tracking-wide px-8 py-3 rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5"
  >
    <span className="relative underline decoration-2 underline-offset-2">SIGN ME UP</span>
    <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
  </Link>
);

/* ---------------------------------------------------------- */
/*  Scroll reveal wrapper (entrance when the card first          */
/*  scrolls into view, unrelated to the hover fly-in below)      */
/* ---------------------------------------------------------- */

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ---------------------------------------------------------- */
/*  Hover fly-in: card is always fully visible at rest. The     */
/*  instant the cursor lands on it, it re-plays a 3D entrance    */
/*  from the left or right (alternating per card) and settles    */
/*  back into its normal grid position.                          */
/* ---------------------------------------------------------- */

const useHoverFlyIn = (direction: 'left' | 'right') => {
  const [animKey, setAnimKey] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    // bump the key to force the fly-in keyframe animation to replay
    setAnimKey((k) => k + 1);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  const animationName = direction === 'left' ? 'fly-in-left' : 'fly-in-right';

  return { ref, animKey, animationName, tilt, onMouseEnter, onMouseMove, onMouseLeave };
};

const EventCardSmall = ({ event, direction }: { event: EventCard; direction: 'left' | 'right' }) => {
  const { ref, animKey, animationName, tilt, onMouseEnter, onMouseMove, onMouseLeave } =
    useHoverFlyIn(direction);

  return (
    <div style={{ perspective: '1200px' }}>
      <div
        key={animKey}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="rounded-2xl overflow-hidden bg-black/70 backdrop-blur-md border border-white/10 flex flex-col"
        style={{
          animation: `${animationName} 0.5s cubic-bezier(0.22,1,0.36,1)`,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          boxShadow: '0 10px 30px -12px rgba(0,0,0,0.5)',
        }}
      >
        <div className="h-56 overflow-hidden group">
          <img
            src={event.image}
            alt={event.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
            }}
          />
        </div>

        <div className="p-8 flex flex-col flex-1">
          <h3 className="font-display font-bold text-white text-3xl tracking-tight mb-4">
            {event.title}
          </h3>

          <div className="text-gray-300 leading-relaxed mb-8 flex-1 space-y-4">
            {event.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div>
            <SignMeUpButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCardLarge = ({ event, direction }: { event: EventCard; direction: 'left' | 'right' }) => {
  const { ref, animKey, animationName, tilt, onMouseEnter, onMouseMove, onMouseLeave } =
    useHoverFlyIn(direction);

  return (
    <div style={{ perspective: '1200px' }}>
      <div
        key={animKey}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="rounded-2xl overflow-hidden bg-black/70 backdrop-blur-md border border-white/10 flex flex-col"
        style={{
          animation: `${animationName} 0.5s cubic-bezier(0.22,1,0.36,1)`,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          boxShadow: '0 12px 34px -14px rgba(0,0,0,0.5)',
        }}
      >
        <div className="h-64 md:h-80 overflow-hidden">
          <img
            src={event.image}
            alt={event.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
            }}
          />
        </div>

        <div className="p-10 flex flex-col flex-1">
          <h3 className="font-display font-bold text-white text-4xl tracking-tight mb-6">
            {event.title}
          </h3>

          <div className="text-gray-300 leading-relaxed mb-8 flex-1 space-y-4 text-lg">
            {event.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div>
            <SignMeUpButton />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------- */
/*  Animated stat counter                                       */
/* ---------------------------------------------------------- */

const AnimatedStat = ({ label, value, delay }: { label: string; value: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  const numericTarget = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };

    const timeout = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(timeout);
  }, [inView, numericTarget, delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="eyebrow mt-1">{label}</div>
    </div>
  );
};

const CorporateEvents = () => {
  return (
    <div className="relative">
      <BackgroundVideo />

      <StandardPage
        eyebrow="Corporates"
        title="Corporate Events"
        subtitle="Team Building \u2022 Engagement \u2022 Outdoor Experiences"
      >
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16 overflow-hidden rounded-3xl bg-black/60 backdrop-blur-sm">
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={HERO_IMAGE_FALLBACK}
              alt="Team building tug of war"
              className="w-full h-full object-cover animate-hero-zoom"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
              }}
            />
          </div>

          <div
            className="flex flex-col justify-center px-10 md:px-16 py-16 md:py-0 min-h-[280px]"
            style={{
              background: 'linear-gradient(135deg, rgba(74,103,65,0.9) 0%, rgba(61,90,47,0.9) 100%)',
            }}
          >
            <div className="flex items-center gap-2 mb-6 self-end animate-fade-in-down">
              <span className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center text-white font-bold">
                J
              </span>
              <span className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                S
              </span>
              <span className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold">
                B
              </span>
            </div>
            <div className="text-white/80 text-xs uppercase tracking-widest mb-4 self-end animate-fade-in-down [animation-delay:100ms]">
              we bring happiness :)
            </div>

            <h1 className="font-display font-bold text-white text-4xl md:text-5xl leading-tight mb-4 uppercase text-right animate-fade-in-up [animation-delay:150ms]">
              Corporate Events
            </h1>
            <p className="text-white/90 text-base md:text-lg text-right animate-fade-in-up [animation-delay:250ms]">
              Team Building &bull; Engagement &bull; Outdoor Experiences
            </p>
          </div>
        </div>

        {/* Top row - 3 cards, alternating fly-in direction on hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {TOP_EVENTS.map((event, i) => (
            <Reveal key={event.title} delay={i * 120}>
              <EventCardSmall event={event} direction={i % 2 === 0 ? 'left' : 'right'} />
            </Reveal>
          ))}
        </div>

        {/* Bottom row - 2 larger cards, alternating fly-in direction on hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {BOTTOM_EVENTS.map((event, i) => (
            <Reveal key={event.title} delay={i * 150}>
              <EventCardLarge event={event} direction={i % 2 === 0 ? 'left' : 'right'} />
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-black/40 backdrop-blur-md">
          {[
            { label: 'Events Hosted', value: '40+' },
            { label: 'Clients', value: '20+' },
            { label: 'Event Types', value: '15+' },
            { label: 'Cities', value: '5+' },
          ].map((s, i) => (
            <AnimatedStat key={s.label} label={s.label} value={s.value} delay={i * 100} />
          ))}
        </div>

        <style>{`
          @keyframes hero-zoom {
            from { transform: scale(1.08); }
            to { transform: scale(1); }
          }
          .animate-hero-zoom {
            animation: hero-zoom 8s ease-out forwards;
          }
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.6s ease forwards;
            opacity: 0;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease forwards;
            opacity: 0;
          }

          /* Hover fly-in: card slides in from its side with a 3D
             rotation, then settles flat into its normal grid slot. */
          @keyframes fly-in-left {
            0% {
              transform: translateX(-90px) rotateY(-35deg) scale(0.96);
              opacity: 0.6;
            }
            100% {
              transform: translateX(0px) rotateY(0deg) scale(1);
              opacity: 1;
            }
          }
          @keyframes fly-in-right {
            0% {
              transform: translateX(90px) rotateY(35deg) scale(0.96);
              opacity: 0.6;
            }
            100% {
              transform: translateX(0px) rotateY(0deg) scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </StandardPage>
    </div>
  );
};

export default CorporateEvents;