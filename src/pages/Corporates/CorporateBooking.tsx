import StandardPage from '../../components/StandardPage';
import { CORPORATE_ACTIVITIES, CORPORATE_STATS } from '../../data';
import { CheckCircle, Calendar, Users, MapPin, Package } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export default function CorporateBooking() {
  return (
    <StandardPage
      eyebrow="Corporates"
      title="Corporate Day Out Booking"
      subtitle="Plan an unforgettable team outing. Pick your activities, set your date, and let us handle the rest."
    >
      {/* Stats */}
      <div data-reveal className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        {CORPORATE_STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display font-bold gradient-text text-3xl md:text-4xl">{s.value}</div>
            <div className="eyebrow mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Activities list */}
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

      {/* Timeline */}
      <div className="mb-16">
        <div data-reveal className="text-center mb-8">
          <div className="eyebrow mb-2">How it works</div>
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight">Simple booking process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { icon: Calendar, step: '01', title: 'Pick a date', desc: 'Tell us when your team is available.' },
            { icon: Users, step: '02', title: 'Choose activities', desc: 'Select from our 12 activity formats.' },
            { icon: MapPin, step: '03', title: 'Pick a venue', desc: 'We come to your location or suggest one.' },
            { icon: Package, step: '04', title: 'Enjoy the day', desc: 'We handle everything — you just show up.' },
          ].map((item, i) => (
            <div key={i} data-reveal className="glass rounded-2xl p-6">
              <div className="font-mono text-xs text-accent-from mb-3">{item.step}</div>
              <item.icon className="text-accent-from mb-3" size={28} />
              <h3 className="font-display font-bold text-white text-lg tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Booking form */}
      <div data-reveal className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <div className="eyebrow mb-2">Book now</div>
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight">Reserve your date</h2>
        </div>
        <ContactForm />
      </div>
    </StandardPage>
  );
}
