import StandardPage from '../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ActivityPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { title: string; desc: string; icon: string }[];
  imageUrl: string;
  facts?: { label: string; value: string }[];
  ctaText?: string;
}

export default function ActivityPage({ eyebrow, title, subtitle, items, imageUrl, facts, ctaText }: ActivityPageProps) {
  return (
    <StandardPage eyebrow={eyebrow} title={title} subtitle={subtitle}>
      {/* Hero image */}
      <div data-reveal className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Activity grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {items.map((item, i) => {
          const Icon = (Icons as any)[item.icon] || Icons.Sparkles;
          return (
            <div key={i} data-reveal className="glass rounded-2xl p-6 group hover:border-accent-from/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="text-accent-from" size={24} />
              </div>
              <h3 className="font-display font-bold text-white text-lg tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Key facts */}
      {facts && (
        <div data-reveal className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
          {facts.map((f) => (
            <div key={f.label}>
              <div className="font-display font-bold gradient-text text-3xl md:text-4xl">{f.value}</div>
              <div className="eyebrow mt-1">{f.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div data-reveal className="text-center">
        <Link to="/contact" className="btn-pill btn-pill-gradient">
          {ctaText || 'Book Now'} <ArrowRight size={14} />
        </Link>
      </div>
    </StandardPage>
  );
}
