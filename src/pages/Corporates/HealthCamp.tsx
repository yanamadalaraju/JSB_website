import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import ClientTestimonials from '../../pages/Corporates/Clienttestimonials';

gsap.registerPlugin(ScrollTrigger);

/* ---------- shared: respect reduced-motion ---------- */
const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
};

/* ---------- Full-page scroll journey: camera flies through a field of
   glassy orb clusters + a drifting starfield. One fixed canvas covers the
   whole viewport for the entire page; scroll position drives the camera's
   forward dolly (camera.position.z), so each section's cluster "arrives"
   as you scroll past it — the same trick the Wix "cosmic scroll journey"
   reference page uses with its planets/asteroids/spacecraft. ---------- */
const ScrollSpace3D = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const host = hostRef.current;
    const container = containerRef.current;
    if (!host || !container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 220);
    camera.position.set(0, 0, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const keyLight = new THREE.PointLight(0xff7a2e, 5, 70);
    keyLight.position.set(6, 4, 12);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0x3b82f6, 3, 70);
    fillLight.position.set(-8, -4, 6);
    scene.add(fillLight);

    // Drifting starfield spanning the whole scroll depth
    const starGeo = new THREE.BufferGeometry();
    const starCount = 600;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 70;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 60 + Math.random() * 90;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.11, transparent: true, opacity: 0.55 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // One orb cluster per major section, staged at increasing depth (-Z)
    // so the camera "arrives" at each cluster as the matching section scrolls by.
    const palette = [0xff8a3d, 0xff6a1a, 0x3b82f6, 0xffffff, 0xff9d5c];
    type Orb = { mesh: THREE.Mesh; speed: number; radius: number; offset: number };
    const orbs: Orb[] = [];
    const waypointZ = [10, -6, -20, -34, -48, -62]; // hero, intro, sessions, content, stats, testimonials

    waypointZ.forEach((z, wIdx) => {
      const clusterCount = 4 + (wIdx % 3);
      for (let i = 0; i < clusterCount; i++) {
        const radius = 0.4 + Math.random() * 0.75;
        const geometry = new THREE.IcosahedronGeometry(radius, wIdx % 2 === 0 ? 3 : 1);
        const material = new THREE.MeshPhysicalMaterial({
          color: palette[(i + wIdx) % palette.length],
          roughness: 0.28,
          metalness: 0.15,
          transmission: 0.5,
          thickness: 1.1,
          clearcoat: 0.55,
          clearcoatRoughness: 0.2,
          transparent: true,
          opacity: 0.82,
        });
        const mesh = new THREE.Mesh(geometry, material);
        const orbitRadius = 3 + Math.random() * 6.5;
        const angle = Math.random() * Math.PI * 2;
        mesh.position.set(
          Math.cos(angle) * orbitRadius,
          Math.sin(angle) * orbitRadius * 0.6,
          z + (Math.random() - 0.5) * 4
        );
        scene.add(mesh);
        orbs.push({ mesh, speed: 0.08 + Math.random() * 0.18, radius: orbitRadius, offset: angle });
      }
    });

    let frameId: number;
    let camZ = 20;
    let targetCamZ = 20;
    let camTilt = 0;
    let targetTilt = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!reducedMotion) {
        orbs.forEach((o) => {
          const angle = o.offset + t * o.speed;
          o.mesh.position.x = Math.cos(angle) * o.radius;
          o.mesh.position.y = Math.sin(angle) * o.radius * 0.6;
          o.mesh.rotation.x += 0.004;
          o.mesh.rotation.y += 0.005;
        });
        stars.rotation.y += 0.0002;

        // Smoothly ease the camera toward the scroll-driven target so the
        // "flight" through the cluster field feels continuous, not stepped.
        camZ += (targetCamZ - camZ) * 0.055;
        camTilt += (targetTilt - camTilt) * 0.055;
        camera.position.z = camZ;
        camera.rotation.z = camTilt;
        camera.position.x = Math.sin(t * 0.05) * 0.6;
      }

      renderer.render(scene, camera);
    };
    animate();

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        targetCamZ = 20 - self.progress * 84; // dolly from 20 down to -64
        targetTilt = Math.sin(self.progress * Math.PI * 3) * 0.025;
      },
    });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      st.kill();
      window.removeEventListener('resize', handleResize);
      orbs.forEach((o) => {
        o.mesh.geometry.dispose();
        (o.mesh.material as THREE.Material).dispose();
      });
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, [reducedMotion, containerRef]);

  return (
    <div
      ref={hostRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.85 }}
    />
  );
};

const HealthCamp = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroGridRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const sessionsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsSectionRef = useRef<HTMLDivElement>(null);
  const sessionPhotoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero: staggered depth-of-field entrance for the photo grid tiles
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40, filter: 'blur(14px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' }
      );

      if (heroGridRef.current) {
        gsap.fromTo(
          heroGridRef.current.children,
          { opacity: 0, y: 30, rotateX: -25, scale: 0.94, filter: 'blur(10px)', transformPerspective: 900 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.12,
            delay: 0.15,
          }
        );
      }

      // Gentle continuous parallax while scrolling past the hero
      gsap.to(heroGridRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      const revealBlocks = [introRef, sessionsRef, contentRef, statsRef, testimonialsSectionRef];
      revealBlocks.forEach((ref) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 60, filter: 'blur(10px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Session photos: true 3D swing-in, like panels rotating into place,
      // then a slow scroll-scrubbed parallax drift for depth.
      const validPhotos = sessionPhotoRefs.current.filter(Boolean) as HTMLDivElement[];
      gsap.fromTo(
        validPhotos,
        { opacity: 0, rotateY: (i) => (i % 2 === 0 ? -70 : 70), z: -200, filter: 'blur(10px)', transformPerspective: 1000 },
        {
          opacity: 1,
          rotateY: 0,
          z: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.16,
          scrollTrigger: {
            trigger: sessionsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      validPhotos.forEach((photo, i) => {
        gsap.to(photo, {
          y: i % 2 === 0 ? -24 : 24,
          ease: 'none',
          scrollTrigger: {
            trigger: sessionsRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      });

      // Stats: pop with a light 3D rotation, like tiles flipping up
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, scale: 0.7, rotateX: -40, filter: 'blur(6px)', transformPerspective: 600 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, pageRef);

    // Refresh ScrollTrigger once layout has settled so the full-page 3D
    // journey's start/end bounds match the actual rendered page height.
    const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshId);
      ctx.revert();
    };
  }, []);

  const sessionImages = [
    'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
    'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  ];

  return (
    <StandardPage
      eyebrow="Corporates"
      title="Health Camp"
      subtitle="Comprehensive wellness health camps for your employees."
    >
      {/* Fixed full-page 3D scroll journey: camera flies past orb clusters
          staged at increasing depth as the whole page scrolls. */}
      <ScrollSpace3D containerRef={pageRef} />

      <div ref={pageRef} className="relative" style={{ zIndex: 1 }}>
        {/* Hero image grid + Book Now */}
        <div ref={heroRef} className="relative grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-center mb-16">
          <div ref={heroGridRef} className="grid grid-cols-3 grid-rows-2 gap-3 rounded-3xl overflow-hidden" style={{ perspective: 1200 }}>
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden h-64 md:h-80">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg"
                alt="Doctor consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-30 md:h-36">
              <img
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg"
                alt="Blood pressure check"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-30 md:h-36">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Wellness team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-6">Health Checkup</h3>
            <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
              Book Now <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Intro copy */}
        <div ref={introRef} className="mb-10">
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Stay healthy, prevent future worries
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Our Health Checkup sessions are designed to ensure participants stay aware of
            their well-being while learning simple ways to manage stress. These checkups
            provide basic assessments and guidance, helping both corporate employees and
            school kids monitor their physical health in a friendly, supportive environment.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            For <strong className="text-white">corporate employees</strong>, it's an
            opportunity to pause, evaluate, and take small steps toward a healthier
            lifestyle amid busy workdays. By combining{' '}
            <strong className="text-white">preventive care with stress management</strong>,
            our Health Checkup sessions help participants feel more energized, balanced,
            and ready to enjoy every activity to the fullest.
          </p>
        </div>

        {/* Session photos: 3D swing-in + parallax drift */}
        <div ref={sessionsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16" style={{ perspective: 1200 }}>
          {sessionImages.map((src, i) => (
            <div
              key={i}
              ref={(el) => (sessionPhotoRefs.current[i] = el)}
              className="rounded-2xl overflow-hidden h-56 md:h-64"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={src}
                alt={`Health checkup session ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="eyebrow mb-3">Overview</div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Our Health Camp brings medical professionals, fitness experts, and wellness
              coaches directly to your office. Employees get free health check-ups,
              consultations, and personalized wellness plans.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-3">What's included</div>
            <ul className="space-y-3">
              {[
                'Free health check-ups',
                'BMI & fitness assessment',
                'Nutrition consultation',
                'Mental health screening',
                'On-site doctor consultation',
                'Wellness goodie bags',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle size={18} className="text-accent-from mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16"
          style={{ perspective: 900 }}
        >
          {[
            { label: 'Camps Conducted', value: '50+' },
            { label: 'Companies Served', value: '20+' },
            { label: 'Doctors', value: '15+' },
            { label: 'Cities', value: '5+' },
          ].map((s) => (
            <div key={s.label} className="stat-item">
              <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
                {s.value}
              </div>
              <div className="eyebrow mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Client Testimonials - shared component */}
        <div ref={testimonialsSectionRef}>
          <ClientTestimonials />
        </div>
      </div>
    </StandardPage>
  );
};

export default HealthCamp;