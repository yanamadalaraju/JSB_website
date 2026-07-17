import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JoinCTA() {
  return (
    <div data-reveal className="text-center sunset-bg rounded-3xl p-12">
      <Users className="text-accent-from mx-auto mb-4" size={40} />
      <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight mb-4">
        Join JSB team now
      </h2>
      <p className="text-gray-400 mb-6 max-w-lg mx-auto">
        Want to spread happiness for a living? We're always looking for passionate people.
      </p>
      <Link to="/contact" className="btn-pill btn-pill-gradient">
        Get in touch <ArrowRight size={14} />
      </Link>
    </div>
  );
}