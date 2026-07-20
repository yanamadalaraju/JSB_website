import { Calendar, Users, MapPin, Package } from 'lucide-react';

const TIMELINE_STEPS = [
  { icon: Calendar, step: '01', title: 'Pick a date', desc: 'Tell us when your team is available.' },
  { icon: Users, step: '02', title: 'Choose activities', desc: 'Select from our 12 activity formats.' },
  { icon: MapPin, step: '03', title: 'Pick a venue', desc: 'We come to your location or suggest one.' },
  { icon: Package, step: '04', title: 'Enjoy the day', desc: 'We handle everything — you just show up.' },
];

export default function TimelineSteps() {
  return (
    <div className="mb-16">
      <div data-reveal className="text-center mb-8">
        <div className="eyebrow mb-2">How it works</div>
        <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight">Simple booking process</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {TIMELINE_STEPS.map((item, i) => (
          <div key={i} data-reveal className="glass rounded-2xl p-6">
            <div className="font-mono text-xs text-accent-from mb-3">{item.step}</div>
            <item.icon className="text-accent-from mb-3" size={28} />
            <h3 className="font-display font-bold text-white text-lg tracking-tight mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}