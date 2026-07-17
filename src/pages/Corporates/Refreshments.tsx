import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Refreshments = () => {
  const features = [
    'Healthy snack platters',
    'Fresh juice & smoothies',
    'Tea & coffee stations',
    'Custom menus',
    'Dietary accommodations',
    'On-time delivery',
  ];

  return (
    <StandardPage
      eyebrow="Corporates"
      title="Refreshments"
      subtitle="Healthy, delicious refreshments for your events and meetings."
    >
      {/* Image Section */}
      <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Refreshments"
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
            From healthy snack platters to indulgent treats, our refreshment service keeps your team fueled and happy.
            Perfect for meetings, events, and day-outs.
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
          { label: 'Events Served', value: '80+' },
          { label: 'Clients', value: '30+' },
          { label: 'Menu Options', value: '25+' },
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

export default Refreshments;