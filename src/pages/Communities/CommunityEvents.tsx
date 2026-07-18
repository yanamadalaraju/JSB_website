import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { COMMUNITY_EVENTS } from '../../data';

const CommunityEvents = () => {
  return (
    <StandardPage
      eyebrow="For Apartments"
      title="Community Events"
      subtitle="Full-scale community events that create lasting memories."
    >
      {/* Hero Image */}
      <div
        data-reveal
        className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative"
      >
        <img
          src="https://images.pexels.com/photos/7045545/pexels-photo-7045545.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Community Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {COMMUNITY_EVENTS.map((item, i) => {
          const Icon = (Icons as any)[item.icon] || Icons.Sparkles;

          return (
            <div
              key={i}
              data-reveal
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

      {/* CTA */}
      <div data-reveal className="text-center">
        <Link to="/contact" className="btn-pill btn-pill-gradient">
          Book Now <ArrowRight size={14} />
        </Link>
      </div>
    </StandardPage>
  );
};

export default CommunityEvents;