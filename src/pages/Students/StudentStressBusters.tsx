import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { STUDENT_ACTIVITIES } from '../../data';

const IMAGE_MAP: Record<string, string> = {
  Magic: '/Magic.webp',
  Karaoke: '/Karaoke.webp',
  'Bushie Day': '/Bushie-day.webp',
  Mime: '/Mime.webp',
  'Story Telling': '/Story-telling.webp',
  Zumba: '/Zumba.webp',
};

const StudentStressBusters = () => {
  return (
    <StandardPage
      eyebrow="For Students"
      title="Stress Buster For Students"
      subtitle="Six fun activities that help students unwind, express themselves, and smile."
    >
      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img
          src="https://images.pexels.com/photos/8434631/pexels-photo-8434631.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Student Stress Busters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {STUDENT_ACTIVITIES.map((item, i) => (
          <div
            key={i}
            className="glass rounded-2xl overflow-hidden group hover:border-accent-from/30 transition-colors flex flex-col"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={IMAGE_MAP[item.title] || '/Magic.webp'}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display font-bold text-white text-lg tracking-tight mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                {item.desc}
              </p>

              <Link
                to="/contact"
                className="btn-pill btn-pill-gradient mt-5 self-start"
              >
                Sign Me Up <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        {[
          { label: 'Activities', value: STUDENT_ACTIVITIES.length.toString() },
          { label: 'Students Engaged', value: '500+' },
          { label: 'Sessions', value: '80+' },
          { label: 'Schools', value: '20+' },
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

export default StudentStressBusters;