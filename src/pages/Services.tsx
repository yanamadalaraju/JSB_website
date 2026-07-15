import StandardPage from '../components/StandardPage';
import { Link } from 'react-router-dom';
import { SERVICES_TREE } from '../data';
import { Building2, GraduationCap, Home, ArrowRight } from 'lucide-react';

const CATEGORY_DETAILS = [
  { key: 'Corporates', icon: Building2, desc: 'Health camps, team outings, corporate events, stress busters, gifting, and refreshments.', img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'For Students', icon: GraduationCap, desc: 'Stress busters and school events designed for student wellness and joy.', img: 'https://images.pexels.com/photos/8434631/pexels-photo-8434631.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'For Apartments', icon: Home, desc: 'Community wellness activities and events that bring neighbors together.', img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Services() {
  return (
    <StandardPage
      eyebrow="What we do"
      title="Our Services"
      subtitle="Empowering well-being & meaningful connections across corporates, students, and communities."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {CATEGORY_DETAILS.map((cat) => {
          const data = SERVICES_TREE[cat.key as keyof typeof SERVICES_TREE];
          return (
            <div key={cat.key} data-reveal className="group glass rounded-3xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img src={cat.img} alt={cat.key} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <cat.icon className="absolute top-4 left-4 text-accent-from" size={28} />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-white text-2xl tracking-tight mb-2">{cat.key}</h3>
                <p className="text-sm text-gray-400 mb-4">{cat.desc}</p>
                <ul className="space-y-2">
                  {data.items.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="flex items-center justify-between text-sm text-gray-400 hover:text-accent-from transition-colors group/item">
                        {item.label}
                        <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Key facts strip */}
      <div data-reveal className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: 'Cities', value: '10+' },
          { label: 'Activities', value: '1,000+' },
          { label: 'Corporates', value: '600+' },
          { label: 'Schools', value: '1,000+' },
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
