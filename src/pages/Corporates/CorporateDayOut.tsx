import { useEffect, useRef, useState } from 'react';
import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CORPORATE_ACTIVITIES } from '../../data';
import ClientTestimonials from '../../pages/Corporates/Clienttestimonials';

/* ------------------------------------------------------------------ */
/*  3D scroll-reveal: element flies in from left/right with a slight   */
/*  Y-axis rotation, then settles flat into place. Alternates by index. */
/* ------------------------------------------------------------------ */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const useInView = <T extends HTMLElement>(threshold = 0.2) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }
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

const ScrollReveal3D = ({
  children,
  direction = 'left',
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const offset = direction === 'left' ? -70 : 70;
  const rotate = direction === 'left' ? -18 : 18;

  return (
    <div style={{ perspective: '1000px' }}>
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView
            ? 'translateX(0px) rotateY(0deg) scale(1)'
            : `translateX(${offset}px) rotateY(${rotate}deg) scale(0.94)`,
          transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Hover tilt: subtle 3D pointer-follow tilt for cards.                */
/* ------------------------------------------------------------------ */

const usePointerTilt = (maxDeg = 8) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, active: false });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (0.5 - py) * maxDeg, ry: (px - 0.5) * maxDeg, active: true });
  };

  const onMouseLeave = () => setTilt({ rx: 0, ry: 0, active: false });

  return { ref, tilt, onMouseMove, onMouseLeave };
};

const TiltActivityChip = ({ label }: { label: string }) => {
  const { ref, tilt, onMouseMove, onMouseLeave } = usePointerTilt(10);

  return (
    <div style={{ perspective: '600px' }}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="glass rounded-xl p-4 flex items-center gap-2"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
          boxShadow: tilt.active
            ? `${-tilt.ry * 1.4}px ${tilt.rx * 1.4}px 24px -10px rgba(0,0,0,0.35)`
            : 'none',
        }}
      >
        <CheckCircle size={16} className="text-accent-from" />
        <span className="text-sm text-gray-300">{label}</span>
      </div>
    </div>
  );
};

const CorporateDayOut = () => {
  return (
    <StandardPage
      eyebrow="Corporates"
      title="Corporate Day Out"
      subtitle="Unforgettable team outings that build bonds and bust stress."
    >
      {/* Image */}
      <ScrollReveal3D direction="left">
        <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
            alt="Corporate Day Out"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        </div>
      </ScrollReveal3D>

      {/* Overview + Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <ScrollReveal3D direction="left">
          <div>
            <div className="eyebrow mb-3">Overview</div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              A full day of fun, games, and bonding. Choose from 12 activity formats
              including Squid Games, Soft Archery, Mini Golf, and Giant Jenga.
              Perfect for team building and stress relief.
            </p>

            <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
              Book Now <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal3D>

        <ScrollReveal3D direction="right">
          <div>
            <div className="eyebrow mb-3">What's included</div>
            <ul className="space-y-3">
              {[
                '12 activity formats',
                'Full-day event',
                'On-site or off-site',
                'Customizable packages',
                'Professional facilitators',
                'All equipment provided',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle size={18} className="text-accent-from mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal3D>
      </div>

      {/* Activities Section (Important Difference) */}
      <div className="mb-16">
        <ScrollReveal3D direction="left">
          <div className="text-center mb-8">
            <div className="eyebrow mb-2">Activities</div>
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl">
              12 activity formats
            </h2>
          </div>
        </ScrollReveal3D>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {CORPORATE_ACTIVITIES.map((act, i) => (
            <ScrollReveal3D
              key={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={(i % 4) * 60}
            >
              <TiltActivityChip label={act} />
            </ScrollReveal3D>
          ))}
        </div>
      </div>

      {/* Stats */}
      <ScrollReveal3D direction="right">
        <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
          {[
            { label: 'Team Outings', value: '50+' },
            { label: 'Clients', value: '20+' },
            { label: 'Formats', value: '12' },
            { label: 'Cities', value: '5+' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
                {s.value}
              </div>
              <div className="eyebrow mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal3D>

      {/* Client Testimonials - shared component */}
      <ClientTestimonials />
    </StandardPage>
  );
};

export default CorporateDayOut;