import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CommunityEvent {
  title: string;
  desc: string;
  image: string;
}

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1200';

const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    title: 'Sports Day',
    desc: 'We organize engaging Sports Day events that bring students together, fostering teamwork, confidence, and healthy competition. Through these fun-filled activities, schools create memorable experiences while promoting physical fitness and overall well-being.',
    image:
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Festive Events',
    desc: 'We organize vibrant festive events like Holi, Republic Day, and Independence Day that bring students together in joyful celebration. These experiences foster creativity, teamwork, and a positive school environment, making learning more engaging and memorable.',
    image:
      'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Carnival',
    desc: 'We create engaging student carnivals that turn schools into lively hubs of fun, creativity, and exploration. These events leave a lasting impression on students and parents while showcasing the school\u2019s vibrant learning environment.',
    image:
      'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Promotional Events',
    desc: 'We create engaging promotional events that turn everyday spaces into lively hubs of fun, creativity, and exploration. These events leave a lasting impression on residents and visitors while showcasing the community\u2019s vibrant lifestyle and enhancing brand visibility.',
    image:
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Cultural Nights',
    desc: 'We host vibrant cultural nights featuring music, dance, and traditional performances that celebrate diversity and bring residents together. These evenings create a strong sense of community pride and shared identity.',
    image:
      'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Flea Market',
    desc: 'We organize community flea markets where residents can buy, sell, and discover unique finds. These events encourage local commerce, sustainability, and neighbourly interaction in a fun, market-day atmosphere.',
    image:
      'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

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
          src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Community Events"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {COMMUNITY_EVENTS.map((item, i) => (
          <div
            key={i}
            data-reveal
            className="rounded-2xl overflow-hidden bg-gray-50 group hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                }}
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display font-bold text-gray-900 text-2xl tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                {item.desc}
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-md underline w-fit transition-colors"
              >
                Sign Me Up
              </Link>
            </div>
          </div>
        ))}
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