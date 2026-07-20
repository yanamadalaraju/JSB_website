import StandardPage from '../components/StandardPage';
import { Link } from 'react-router-dom';
import { SERVICES_TREE } from '../data';
import { ArrowRight } from 'lucide-react';
import Studentshero from '../components/StudentsHubcombo/studentshero';
import StudentServices from '../components/StudentsHubcombo/StudentServices';
import StressBustersLanding from '../components/StudentsHubcombo/StudentServices';

export default function StudentsHub() {
  const items = SERVICES_TREE['For Students'].items;
  return (
    <StandardPage
      eyebrow="For Students"
      title="Student Wellness"
      subtitle="Bringing joy, energy, and stress-busting activities to schools and educational institutions."
    >
      <Studentshero />

      <StressBustersLanding />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {items.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            data-reveal
            className="group glass rounded-3xl p-8 hover:border-accent-from/30 transition-colors block"
          >
            <div className="font-mono text-xs text-accent-from mb-3">{`0${i + 1}`}</div>
            <h3 className="font-display font-bold text-white text-2xl tracking-tight mb-3 group-hover:text-accent-from transition-colors">
              {item.label}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {i === 0
                ? 'Storytelling, Zumba, mime, magic, karaoke, and Bushie Day — six ways to help students bust stress.'
                : 'Sports Day, Annual Day, Festive Events, Carnival, Graduation, and PTM — full-scale school event management.'}
            </p>
            <div className="flex items-center gap-1 text-xs text-accent-from font-mono">
              Explore <ArrowRight size={12} />
            </div>
          </Link>
        ))}
      </div>

      {/* Key facts */}
      <div data-reveal className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: 'Schools', value: '1,000+' },
          { label: 'Activities', value: '6' },
          { label: 'Events', value: '6' },
          { label: 'Smiles', value: '∞' },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-display font-bold gradient-text text-3xl md:text-4xl">{s.value}</div>
            <div className="eyebrow mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </StandardPage>
  );
}
