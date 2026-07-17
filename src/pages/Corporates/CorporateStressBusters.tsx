import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CorporateStressBusters = () => {
  const features = [
    'Zumba sessions',
    'Yoga & meditation',
    'Quick team games',
    'Desk stretching',
    'Mindfulness workshops',
    'Laughter therapy',
  ];

  return (
    <StandardPage
      eyebrow="Corporates"
      title="Corporate Stress Busters"
      subtitle="Quick, effective stress-relief activities for the workplace."
    >
      {/* Image Section */}
      <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img
          src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Corporate Stress Busters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Overview */}
        <div>
          <div className="eyebrow mb-3">Overview</div>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Short, high-impact sessions designed to break up the workday. Zumba, yoga,
            meditation, and fun games that refresh minds and boost productivity.
          </p>
          <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>

        {/* Features */}
        <div>
          <div className="eyebrow mb-3">What's included</div>
          <ul className="space-y-3">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <CheckCircle size={18} className="text-accent-from shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: 'Sessions Conducted', value: '100+' },
          { label: 'Companies', value: '40+' },
          { label: 'Activities', value: '12+' },
          { label: 'Cities', value: '5' },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
              {stat.value}
            </div>
            <div className="eyebrow mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </StandardPage>
  );
};

export default CorporateStressBusters;