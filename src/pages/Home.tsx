import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { STATS, BENEFITS, TESTIMONIALS, GOOGLE_REVIEWS, GALLERY_IMAGES, CONTACT_INFO } from '../data';
import ContactForm from '../components/ContactForm';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReduced) {
      // Simple fade-up fallback, no pinning
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
          gsap.fromTo(el, { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.8,
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          });
        });
      }, root);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      // --- ACT 1: HERO ---
      const heroSection = root.current!.querySelector('.act-hero') as HTMLElement;
      const heroHeadlines = gsap.utils.toArray<HTMLElement>('.hero-headline');
      const scrollCta = root.current!.querySelector('.scroll-cta') as HTMLElement;

      // Parallax layers
      gsap.to('.hero-glow', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero-particles', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: true },
      });

      // Headline swap
      gsap.set(heroHeadlines, { opacity: 0, y: 30 });
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: isMobile ? '+=150%' : '+=200%',
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });
      heroHeadlines.forEach((h, i) => {
        if (i === 0) {
          heroTl.to(h, { opacity: 1, y: 0, duration: 0.3 });
          heroTl.to(h, { opacity: 0, y: -30, duration: 0.3 }, '+=0.4');
        } else {
          heroTl.fromTo(h, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3 });
          if (i < heroHeadlines.length - 1) {
            heroTl.to(h, { opacity: 0, y: -30, duration: 0.3 }, '+=0.4');
          }
        }
      });

      // Scroll CTA
      gsap.to(scrollCta, { opacity: 1, duration: 0.5, delay: 0.5 });
      gsap.to(scrollCta, {
        opacity: 0,
        scrollTrigger: { trigger: heroSection, start: 'top top', end: '10% top', scrub: true },
      });

      // --- ACT 2: GROUND TRANSITION ---
      const groundContainer = root.current!.querySelector('.ground-container') as HTMLElement;
      gsap.to('.ground-layer', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: groundContainer, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      gsap.from('.clouds-layer', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: groundContainer, start: 'top bottom', end: 'bottom top', scrub: true },
      });

      // Act 2 pinned text
      const act2 = root.current!.querySelector('.act-ground') as HTMLElement;
      const act2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: act2,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });
      act2Tl.fromTo('.act2-line1', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.5 });
      act2Tl.to('.act2-line1', { opacity: 0, x: -60, duration: 0.3 }, '+=0.3');
      act2Tl.fromTo('.act2-line2', { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.5 });
      act2Tl.to('.act2-line2', { opacity: 0, duration: 0.3 }, '+=0.3');

      // --- ACT 3: BLUEPRINT STATS ---
      const blueprint = root.current!.querySelector('.act-blueprint') as HTMLElement;
      const blueprintTl = gsap.timeline({
        scrollTrigger: {
          trigger: blueprint,
          start: 'top top',
          end: '+=300%',
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      // SVG line draws
      gsap.utils.toArray<SVGPathElement>('.bp-line').forEach((line) => {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
      });
      gsap.utils.toArray<SVGCircleElement>('.bp-circle').forEach((c) => {
        const length = (c as any).getTotalLength();
        gsap.set(c, { strokeDasharray: length, strokeDashoffset: length });
      });

      blueprintTl.to('#bp-line-1', { strokeDashoffset: 0, duration: 0.5 });
      blueprintTl.fromTo('.stat-0', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.2 }, '-=0.2');
      blueprintTl.to('#bp-line-2', { strokeDashoffset: 0, duration: 0.5 });
      blueprintTl.fromTo('.stat-1', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.2 }, '-=0.2');
      blueprintTl.to('#bp-line-3', { strokeDashoffset: 0, duration: 0.5 });
      blueprintTl.fromTo('.stat-2', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.2 }, '-=0.2');
      blueprintTl.to('#bp-circle-1', { strokeDashoffset: 0, duration: 0.5 });
      blueprintTl.fromTo('.stat-3', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.2 }, '-=0.2');
      blueprintTl.to('#bp-line-4', { strokeDashoffset: 0, duration: 0.5 });
      blueprintTl.fromTo('.stat-4', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.2 }, '-=0.2');

      // Count up numbers
      STATS.forEach((stat, i) => {
        const obj = { val: 0 };
        blueprintTl.to(obj, {
          val: stat.value,
          duration: 0.5,
          onUpdate: () => {
            const el = root.current!.querySelector(`.stat-${i} .stat-num`);
            if (el) el.textContent = Math.floor(obj.val).toLocaleString();
          },
        }, `-=${0.3}`);
      });

      // --- ACT 4: BENTO REVEAL ---
      const bento = root.current!.querySelector('.act-bento') as HTMLElement;
      const bentoTl = gsap.timeline({
        scrollTrigger: {
          trigger: bento,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });
      gsap.utils.toArray<HTMLElement>('.bento-card').forEach((card, i) => {
        const rotateY = i % 2 === 0 ? -8 : 8;
        bentoTl.fromTo(card,
          { opacity: 0, rotateY, scale: 0.8 },
          { opacity: 1, rotateY: 0, scale: 1, duration: 0.5, ease: 'power2.out' },
          i * 0.15
        );
      });

      // --- ACT 5: TESTIMONIAL SUNSET ---
      const sunset = root.current!.querySelector('.act-sunset') as HTMLElement;
      const sunsetTl = gsap.timeline({
        scrollTrigger: {
          trigger: sunset,
          start: 'top top',
          end: '+=300%',
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });
      gsap.set('.testimonial', { opacity: 0, y: 40 });
      TESTIMONIALS.forEach((_, i) => {
        if (i === 0) {
          sunsetTl.to(`.testimonial-${i}`, { opacity: 1, y: 0, duration: 0.3 });
          sunsetTl.to(`.testimonial-${i}`, { opacity: 0, y: -40, duration: 0.3 }, '+=0.5');
        } else {
          sunsetTl.fromTo(`.testimonial-${i}`, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.3 });
          if (i < TESTIMONIALS.length - 1) {
            sunsetTl.to(`.testimonial-${i}`, { opacity: 0, y: -40, duration: 0.3 }, '+=0.5');
          }
        }
      });

      // After-act reveal
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      {/* ACT 1 — HERO */}
      <section className="act-hero relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Back glow */}
        <div className="hero-glow absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-from/20 to-transparent blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,154,68,0.15) 0%, transparent 60%)' }} />
        </div>

        {/* Particle field */}
        <div className="hero-particles absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-accent-from/30"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulseGlow ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Headlines */}
        <div className="relative z-10 text-center px-6">
          <div className="eyebrow mb-6">Just Stress Busters</div>
          <div className="relative h-[120px] md:h-[160px]">
            <h1 className="hero-headline absolute inset-0 font-display font-bold text-white text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]">
              Energize Your Workforce
            </h1>
            <h1 className="hero-headline absolute inset-0 font-display font-bold text-white text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]">
              Learning Beyond Books
            </h1>
            <h1 className="hero-headline absolute inset-0 font-display font-bold text-white text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]">
              Gifts That Spread Happiness
            </h1>
          </div>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-xl mx-auto">
            Bengaluru's premier wellness company for corporates, students, and communities.
          </p>
        </div>

        <div className="scroll-cta absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-sm text-gray-500 flex flex-col items-center gap-2 opacity-0">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent-from to-transparent" />
        </div>
      </section>

      {/* ACT 2 — GROUND TRANSITION */}
      <section className="act-ground relative h-screen w-full overflow-hidden flex items-center justify-center bg-bg">
        <div className="ground-container absolute inset-0">
          <div className="ground-layer absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600')" }} />
          <div className="clouds-layer absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(255,154,68,0.15) 0%, transparent 50%)' }} />
        </div>

        <div className="relative z-10 text-center px-6 space-y-12">
          <h2 className="act2-line1 font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl tracking-tight text-right max-w-3xl ml-auto">
            They show up stressed.
          </h2>
          <h2 className="act2-line2 font-display font-bold gradient-text text-4xl md:text-6xl lg:text-7xl tracking-tight text-left max-w-3xl">
            They leave smiling.
          </h2>
        </div>
      </section>

      {/* ACT 3 — BLUEPRINT STATS */}
      <section className="act-blueprint relative h-screen w-full overflow-hidden blueprint-grid bg-[#131C2A]">
        {/* SVG line draws */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path id="bp-line-1" className="bp-line" d="M10 80 L30 20" stroke="#ff9a44" strokeWidth="0.3" fill="none" />
          <path id="bp-line-2" className="bp-line" d="M30 20 L50 70" stroke="#ff9a44" strokeWidth="0.3" fill="none" />
          <path id="bp-line-3" className="bp-line" d="M50 70 L70 15" stroke="#ff9a44" strokeWidth="0.3" fill="none" />
          <circle id="bp-circle-1" className="bp-circle" cx="70" cy="15" r="8" stroke="#ff9a44" strokeWidth="0.3" fill="none" />
          <path id="bp-line-4" className="bp-line" d="M70 15 L90 60" stroke="#ff9a44" strokeWidth="0.3" fill="none" />
        </svg>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="eyebrow mb-4 text-white/60">The facts and figures</div>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight mb-12 text-center">
            Numbers that speak.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-5xl">
            {STATS.map((stat, i) => (
              <div key={stat.label} className={`stat-${i} text-center`}>
                <div className="stat-num font-display font-bold gradient-text text-4xl md:text-6xl tracking-tight">0</div>
                <div className="eyebrow text-white/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT 4 — BENTO REVEAL */}
      <section className="act-bento relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-bg px-6">
        <div className="text-center mb-10">
          <div className="eyebrow mb-3">Benefits of our programs</div>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight">
            What we bring to the table.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl w-full">
          {BENEFITS.map((benefit) => (
            <div key={benefit.num} className="bento-card flip-card group relative h-64 rounded-2xl overflow-hidden">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-face absolute inset-0 rounded-2xl overflow-hidden">
                  <img src={benefit.img} alt={benefit.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="font-mono text-xs text-accent-from mb-1">{benefit.num}</div>
                    <h3 className="font-display font-bold text-white text-xl tracking-tight">{benefit.title}</h3>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-face flip-card-back absolute inset-0 rounded-2xl bg-surface-2 border border-accent-from/20 p-5 flex flex-col justify-center">
                  <div className="font-mono text-xs text-accent-from mb-2">{benefit.num}</div>
                  <h3 className="font-display font-bold text-white text-xl tracking-tight mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACT 5 — TESTIMONIAL SUNSET */}
      <section className="act-sunset relative h-screen w-full overflow-hidden sunset-bg flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,138,60,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl px-6 text-center w-full">
          <div className="eyebrow mb-4 text-accent-from/80">What people say</div>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`testimonial testimonial-${i} absolute inset-0 flex flex-col items-center justify-center`}>
              <p className="font-display text-white text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 tracking-tight">
                "{t.text}"
              </p>
              <div className="eyebrow text-accent-from">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AFTER ACT 5 — NORMAL SCROLLABLE CONTENT */}

      {/* Client Logo Marquee */}
      <section className="py-16 px-6 overflow-hidden">
        <div data-reveal className="text-center mb-8">
          <div className="eyebrow">Trusted by</div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee w-max">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-32 h-16 rounded-xl glass flex items-center justify-center text-gray-500 font-display font-bold text-sm shrink-0">
                Client {(i % 12) + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div data-reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow mb-2">Google Reviews</div>
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight">12 Google reviews</h2>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-accent-from fill-accent-from" />)}
                </div>
                <span className="text-gray-400 text-sm">5.0 rating</span>
              </div>
            </div>
            <button className="btn-pill btn-pill-outline">Write a review</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {GOOGLE_REVIEWS.map((review, i) => (
              <div key={i} data-reveal className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center text-bg font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{review.name}</div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, j) => <Star key={j} size={10} className="text-accent-from fill-accent-from" />)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Masonry */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div data-reveal className="text-center mb-10">
            <div className="eyebrow mb-2">Gallery</div>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight">Moments we've created.</h2>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} data-reveal className="break-inside-avoid relative rounded-2xl overflow-hidden group">
                <img src={img.src} alt={img.tag} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-bg to-transparent">
                  <span className="eyebrow text-white/70 text-[0.65rem]">{img.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map + Contact Form */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div data-reveal>
            <div className="eyebrow mb-2">Find us</div>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight mb-6">Visit our HQ.</h2>
            <div className="glass rounded-3xl overflow-hidden h-80 mb-6">
              <iframe
                title="JSB Location"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.9)' }}
                loading="lazy"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dH7-VdA8Vc3MIk&q=Vidyaranyapura,Bengaluru,Karnataka"
              />
            </div>
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={18} className="text-accent-from shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
          <div data-reveal>
            <div className="eyebrow mb-2">Get in touch</div>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight mb-6">Let's talk.</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div data-reveal>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight mb-4">
            Ready to <span className="gradient-text">bust some stress?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Book your next wellness event with JSB today.</p>
          <Link to="/contact" className="btn-pill btn-pill-gradient">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
