import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CorporateGifting = () => {
  return (
    <StandardPage
      eyebrow="Corporates"
      title="Corporate Gifting"
      subtitle="Thoughtful, personalized gifts that employees actually love."
    >
      {/* Image */}
      <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
        <img
          src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg"
          alt="Corporate Gifting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Overview + Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div>
          <div className="eyebrow mb-3">Overview</div>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Curated gift hampers for every occasion — Diwali, New Year, employee
            milestones. Sweet boxes, snack hampers, and wellness kits personalized
            with your company branding.
          </p>

          <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>

        <div>
          <div className="eyebrow mb-3">What's included</div>
          <ul className="space-y-3">
            {[
              'Personalized branding',
              'Festive hampers',
              'Wellness kits',
              'Sweet & snack boxes',
              'Custom packaging',
              'Bulk ordering',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <CheckCircle size={18} className="text-accent-from mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: 'Gifts Delivered', value: '10K+' },
          { label: 'Companies Served', value: '30+' },
          { label: 'Gift Options', value: '100+' },
          { label: 'Cities', value: '5+' },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
              {s.value}
            </div>
            <div className="eyebrow mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </StandardPage>
  );
};

export default CorporateGifting;