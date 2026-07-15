import StandardPage from '../components/StandardPage';
import { TEAM_MEMBERS, TESTIMONIALS, GOOGLE_REVIEWS } from '../data';
import { Star, Target, Eye, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <StandardPage
      eyebrow="Our Story"
      title="The Happiness Headquarters"
      subtitle="We're on a mission to make every workspace, school, and community a little less stressed and a lot more joyful."
    >
      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div data-reveal className="glass rounded-3xl p-8">
          <Target className="text-accent-from mb-4" size={32} />
          <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-tight">Our Mission</h3>
          <p className="text-gray-400 leading-relaxed">
            To create meaningful, joyful experiences that reduce stress, build community, and inspire people across corporates, schools, and neighborhoods — one smile at a time.
          </p>
        </div>
        <div data-reveal className="glass rounded-3xl p-8">
          <Eye className="text-accent-from mb-4" size={32} />
          <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-tight">Our Vision</h3>
          <p className="text-gray-400 leading-relaxed">
            To be India's most loved wellness company — where every event is an unforgettable experience that leaves people energized, connected, and smiling.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="mb-20">
        <div data-reveal className="text-center mb-10">
          <div className="eyebrow mb-2">Meet the team</div>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight">The people behind the smiles.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} data-reveal className="group">
              <div className="rounded-2xl overflow-hidden mb-3 aspect-square">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-display font-bold text-white text-sm tracking-tight">{member.name}</h3>
              <p className="text-xs text-accent-from font-mono mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client marquee */}
      <div data-reveal className="mb-20 overflow-hidden">
        <div className="flex gap-12 animate-marquee w-max">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-32 h-16 rounded-xl glass flex items-center justify-center text-gray-500 font-display font-bold text-sm shrink-0">
              Client {(i % 12) + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        <div data-reveal className="text-center mb-10">
          <div className="eyebrow mb-2">Testimonials</div>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight">Kind words.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} data-reveal className="glass rounded-2xl p-6">
              <p className="text-gray-300 leading-relaxed mb-4">"{t.text}"</p>
              <div className="eyebrow text-accent-from">{t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Reviews */}
      <div className="mb-20">
        <div data-reveal className="flex items-center gap-4 mb-8">
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight">12 Google reviews</h2>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-accent-from fill-accent-from" />)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GOOGLE_REVIEWS.map((r, i) => (
            <div key={i} data-reveal className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center text-bg font-bold text-xs">{r.name[0]}</div>
                <span className="text-white text-sm font-medium">{r.name}</span>
              </div>
              <p className="text-sm text-gray-400">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join CTA */}
      <div data-reveal className="text-center sunset-bg rounded-3xl p-12">
        <Users className="text-accent-from mx-auto mb-4" size={40} />
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight mb-4">Join JSB team now</h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">Want to spread happiness for a living? We're always looking for passionate people.</p>
        <Link to="/contact" className="btn-pill btn-pill-gradient">Get in touch <ArrowRight size={14} /></Link>
      </div>
    </StandardPage>
  );
}
