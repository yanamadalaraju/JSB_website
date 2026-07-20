import { CheckCircle } from 'lucide-react';
import { CORPORATE_ACTIVITIES } from '../../data';

export default function ActivitiesList() {
  return (
    <div className="mb-16">
      <div data-reveal className="text-center mb-8">
        <div className="eyebrow mb-2">Pick your activities</div>
        <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight">12 activity formats</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {CORPORATE_ACTIVITIES.map((act, i) => (
          <div key={i} data-reveal className="glass rounded-xl p-4 flex items-center gap-2 hover:border-accent-from/30 transition-colors">
            <CheckCircle size={16} className="text-accent-from shrink-0" />
            <span className="text-sm text-gray-300">{act}</span>
          </div>
        ))}
      </div>
    </div>
  );
}