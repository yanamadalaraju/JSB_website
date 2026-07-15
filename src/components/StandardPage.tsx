import { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StandardPageProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function StandardPage({ eyebrow, title, subtitle, children }: StandardPageProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative pt-32 md:pt-40 pb-20 px-6 min-h-screen">
      <div className="ambient-glow" style={{ top: '-200px', left: '-100px' }} />
      <div className="ambient-glow" style={{ bottom: '10%', right: '-200px' }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Hero banner */}
        <div className="text-center mb-16 md:mb-24">
          {eyebrow && (
            <div data-reveal className="eyebrow mb-4">{eyebrow}</div>
          )}
          <h1 data-reveal className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p data-reveal className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
