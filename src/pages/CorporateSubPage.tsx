import StandardPage from '../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CORPORATE_ACTIVITIES } from '../data';

interface CorporateSubPageProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  features: string[];
  description: string;
  showActivities?: boolean;
}

export default function CorporateSubPage({
  eyebrow = 'Corporates',
  title,
  subtitle,
  imageUrl,
  features,
  description,
  showActivities = false,
}: CorporateSubPageProps) {
  return (
    <StandardPage eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div data-reveal className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div data-reveal>
          <div className="eyebrow mb-3">Overview</div>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">{description}</p>
          <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
        <div data-reveal>
          <div className="eyebrow mb-3">What's included</div>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <CheckCircle size={18} className="text-accent-from shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showActivities && (
        <div className="mb-16">
          <div data-reveal className="text-center mb-8">
            <div className="eyebrow mb-2">Activities</div>
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight">12 activity formats</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CORPORATE_ACTIVITIES.map((act, i) => (
              <div key={i} data-reveal className="glass rounded-xl p-4 flex items-center gap-2">
                <CheckCircle size={16} className="text-accent-from shrink-0" />
                <span className="text-sm text-gray-300">{act}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key facts */}
      <div data-reveal className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: 'Team Outings', value: '50' },
          { label: 'Clients', value: '20' },
          { label: 'Formats', value: '10' },
          { label: 'Cities', value: '5' },
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
