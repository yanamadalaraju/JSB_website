import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CORPORATE_ACTIVITIES } from '../../data';

const CorporateDayOut = () => {
  return (
    <StandardPage
      eyebrow="Corporates"
      title="Corporate Day Out"
      subtitle="Unforgettable team outings that build bonds and bust stress."
    >
      {/* Image */}
      <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
          alt="Corporate Day Out"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Overview + Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
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
      </div>

      {/* Activities Section (Important Difference) */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <div className="eyebrow mb-2">Activities</div>
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl">
            12 activity formats
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {CORPORATE_ACTIVITIES.map((act, i) => (
            <div key={i} className="glass rounded-xl p-4 flex items-center gap-2">
              <CheckCircle size={16} className="text-accent-from" />
              <span className="text-sm text-gray-300">{act}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
    </StandardPage>
  );
};

export default CorporateDayOut;