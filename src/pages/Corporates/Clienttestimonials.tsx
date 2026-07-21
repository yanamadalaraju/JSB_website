import { useRef, useEffect } from 'react';
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ---------- Tilt-on-hover wrapper with a real specular glare layer ---------- */
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    const glare = glareRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rotateX = (py - 0.5) * -14;
    const rotateY = (px - 0.5) * 14;

    gsap.to(el, {
      rotateX,
      rotateY,
      scale: 1.04,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    });

    if (glare) {
      gsap.to(glare, {
        opacity: 0.35,
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    const glare = glareRef.current;
    if (!el) return;
    gsap.to(el, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.6, ease: 'power3.out' });
    if (glare) gsap.to(glare, { opacity: 0, duration: 0.5 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform overflow-hidden ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        ref={glareRef}
        className="pointer-events-none absolute w-40 h-40 rounded-full bg-white blur-2xl opacity-0"
        style={{ top: '50%', left: '50%', marginTop: '-80px', marginLeft: '-80px' }}
      />
      {children}
    </div>
  );
};

export type Testimonial = {
  name: string;
  initial: string;
  color: string;
  time: string;
  text: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sharan Gowda',
    initial: 'S',
    color: 'bg-orange-600',
    time: '1 year ago',
    text: "I love being part of JSB! The company's dedication to wellness extends not only to clients but to employees as well, making it a...",
  },
  {
    name: 'preetham bhatt',
    initial: 'P',
    color: 'bg-blue-500',
    time: '1 year ago',
    text: 'JSB Corporate Wellness offers a positive, inclusive culture where employees feel appreciated and motivated to give their best eve...',
  },
  {
    name: 'Abhishek',
    initial: 'A',
    color: 'bg-gray-600',
    time: '1 year ago',
    text: 'JSB values both personal and professional development. The team is collaborative, and the leadership genuinely cares about...',
  },
  {
    name: 'Sangeetha Param',
    initial: 'S',
    color: 'bg-emerald-600',
    time: '1 year ago',
    text: 'It is great collaborating with JSB. Hoping to make differences in all aspects by sharing experiences and people engagement',
  },
  {
    name: 'Kajal Kumari',
    initial: 'K',
    color: 'bg-pink-500',
    time: '1 year ago',
    text: 'Working at JSB has been an incredible experience! The supportive environment and focus on employee well-being...',
  },
];

export type ClientTestimonialsProps = {
  /** Optional override for the testimonial list. Defaults to the JSB set. */
  testimonials?: Testimonial[];
  /** Company/brand name shown in the left-hand info column. */
  brandName?: string;
  /** Google review count shown under the brand name. */
  reviewCount?: number;
};

/**
 * Self-contained "Client Testimonials" section: left info column (brand,
 * rating, review count) + a horizontally scrollable row of glare-tilt
 * testimonial cards that GSAP-reveal on scroll.
 *
 * Usage:
 *   import ClientTestimonials from '../../components/ClientTestimonials';
 *   ...
 *   <ClientTestimonials />
 */
const ClientTestimonials = ({
  testimonials = DEFAULT_TESTIMONIALS,
  brandName = 'Just Stress Busters',
  reviewCount = 12,
}: ClientTestimonialsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardRefs.current.filter(Boolean);
      gsap.fromTo(
        validCards,
        { opacity: 0, x: 60, rotateY: 35, filter: 'blur(8px)', transformPerspective: 900 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-black rounded-3xl p-8 md:p-14 mb-16 overflow-hidden">
      <div className="flex justify-center mb-10">
        <div className="border border-orange-500 rounded-full px-6 py-2 text-orange-500 font-semibold tracking-wide flex items-center gap-2">
          📣 CLIENT TESTIMONIALS
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex flex-col items-center text-center gap-3 text-white w-full lg:w-[220px] flex-shrink-0">
          <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-500" />
          </div>
          <div className="font-semibold">{brandName}</div>
          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <div className="text-gray-400 text-sm">{reviewCount} Google reviews</div>
          <button className="border border-white/40 rounded-full px-4 py-1.5 text-sm hover:bg-white/10 transition">
            Write a review
          </button>
        </div>

        <div className="relative flex-1 min-w-0">
          <div className="relative overflow-hidden rounded-2xl" style={{ perspective: 1000 }}>
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {testimonials.map((t, i) => (
                <TiltCard key={i} className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start">
                  <div
                    ref={(el) => (cardRefs.current[i] = el)}
                    className="bg-white/5 rounded-2xl p-5 text-white h-full"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-sm font-semibold flex-shrink-0`}
                        >
                          {t.initial}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{t.name}</div>
                          <div className="text-gray-400 text-xs">{t.time}</div>
                        </div>
                      </div>
                      <span className="text-lg flex-shrink-0">G</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 mb-3">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} size={14} fill="currentColor" />
                      ))}
                      <BadgeCheck size={14} className="text-blue-400 ml-1" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{t.text}</p>
                    <button className="text-gray-400 text-xs mt-2 hover:text-white transition">
                      Read more
                    </button>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/80 border border-white/20 items-center justify-center text-white hover:bg-white/20 transition shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;