import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CorporateEvents = () => {
  return (
    <StandardPage
      eyebrow="Corporates"
      title="Corporate Events"
      subtitle="From conferences to celebrations — we make your events memorable."
    >
      {/* Image */}
      <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img
          src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
          alt="Corporate Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Overview + Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div>
          <div className="eyebrow mb-3">Overview</div>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Whether it's an annual conference, product launch, or team celebration,
            JSB handles every detail. From planning to execution, we create events
            that leave lasting impressions.
          </p>

          <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>

        <div>
          <div className="eyebrow mb-3">What's included</div>
          <ul className="space-y-3">
            {[
              'Event planning & management',
              'Venue selection',
              'Entertainment & activities',
              'Catering coordination',
              'AV & production support',
              'On-site coordination',
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
      <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: 'Events Hosted', value: '40+' },
          { label: 'Clients', value: '20+' },
          { label: 'Event Types', value: '15+' },
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

export default CorporateEvents;