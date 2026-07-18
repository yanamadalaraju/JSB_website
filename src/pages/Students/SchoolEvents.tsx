import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SCHOOL_EVENTS } from '../../data';

const SchoolEvents = () => {
  return (
    <StandardPage
      eyebrow="For Students"
      title="School Events"
      subtitle="Full-scale school events managed end-to-end by JSB."
    >
      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img
          src="https://images.pexels.com/photos/8434639/pexels-photo-8434639.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="School Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {SCHOOL_EVENTS.map((item, i) => {
          const Icon = (Icons as any)[item.icon] || Icons.Sparkles;

          return (
            <div
              key={i}
              className="glass rounded-2xl p-6 group hover:border-accent-from/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="text-accent-from" size={24} />
              </div>

              <h3 className="font-display font-bold text-white text-lg tracking-tight mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        {[
          { label: 'Event Types', value: SCHOOL_EVENTS.length.toString() },
          { label: 'Schools', value: '25+' },
          { label: 'Events Conducted', value: '120+' },
          { label: 'Students', value: '2000+' },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
              {stat.value}
            </div>
            <div className="eyebrow mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link to="/contact" className="btn-pill btn-pill-gradient">
          Book Now <ArrowRight size={14} />
        </Link>
      </div>
    </StandardPage>
  );
};

export default SchoolEvents;