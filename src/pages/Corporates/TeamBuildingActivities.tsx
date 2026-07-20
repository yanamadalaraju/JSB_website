import React from 'react';
import { 
  Target, 
  Shield, 
  Activity, 
  Wind, 
  Zap, 
  Trees, 
  Puzzle,
  Star,
  Sparkles,
  Users,
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  Building,
  ChevronRight} from 'lucide-react';

// Types
interface Activity {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  tag?: string;
  participants?: string;
  duration?: string;
  color: string;
  bgColor: string;
}

interface Venue {
  id: string;
  name: string;
  location: string;
  capacity: string;
  image: string;
  rating: number;
  price: string;
}

// Activity Data with Images
const ACTIVITIES: Activity[] = [
  {
    id: 'squid-games',
    title: 'Squid Games',
    category: 'Trending',
    description: 'Sharpen focus, boost coordination, and bring out your team\'s competitive spirit in a fun, low-pressure setup.',
    icon: <Target size={24} />,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    tag: 'Trending',
    participants: '10-50',
    duration: '2-3 hrs',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10'
  },
  {
    id: 'soft-archery',
    title: 'Soft Archery',
    category: 'Popular',
    description: 'Sharpen focus, boost coordination, and bring out your team\'s competitive spirit in a fun, low-pressure setup.',
    icon: <Shield size={24} />,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=400&fit=crop',
    tag: 'Popular',
    participants: '8-40',
    duration: '1.5-2 hrs',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'mini-golf',
    title: 'Mini Golf',
    category: 'Popular',
    description: 'Light-hearted competition that gets everyone involved—perfect for breaking the ice and building connections.',
    icon: <Activity size={24} />,
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&h=400&fit=crop',
    tag: 'Popular',
    participants: '6-30',
    duration: '1.5-2 hrs',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10'
  },
  {
    id: 'balloon-blast',
    title: 'Balloon Blast',
    category: 'Unique',
    description: 'Fast, fun, and chaotic—this game sparks energy, laughter, and instant team bonding.',
    icon: <Wind size={24} />,
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop',
    tag: 'Unique',
    participants: '10-60',
    duration: '1-1.5 hrs',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'beat-buzzer',
    title: 'Beat Buzzer',
    category: 'Team Fav',
    description: 'Test reflexes and teamwork under pressure—great for energizing the group and encouraging quick thinking.',
    icon: <Zap size={24} />,
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&h=400&fit=crop',
    tag: 'Team Fav',
    participants: '8-40',
    duration: '1-2 hrs',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    id: 'snake-pit',
    title: 'Snake Pit',
    category: 'Outdoor',
    description: 'A strategy-driven activity that builds communication, patience, and problem-solving within teams.',
    icon: <Trees size={24} />,
    image: 'https://juststressbusters.com/wp-content/uploads/2026/03/BALOON-BLAST.png',
    tag: 'Outdoor',
    participants: '10-50',
    duration: '2-3 hrs',
    color: 'from-green-600 to-teal-500',
    bgColor: 'bg-green-600/10'
  },
  {
    id: 'giant-jenga',
    title: 'Giant Jenga',
    category: 'High Energy',
    description: 'A simple game with big impact—encourages collaboration, planning, and shared moments of tension and fun.',
    icon: <Puzzle size={24} />,
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop',
    tag: 'High Energy',
    participants: '6-30',
    duration: '1-1.5 hrs',
    color: 'from-amber-500 to-red-500',
    bgColor: 'bg-amber-500/10'
  }
];

// Venue Data with Images
const VENUES: Venue[] = [
  {
    id: '1',
    name: 'The Royal Orchid',
    location: 'Koramangala, Bangalore',
    capacity: '200+',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.8,
    price: '₹2,500/person'
  },
  {
    id: '2',
    name: 'Eco Space Retreat',
    location: 'Whitefield, Bangalore',
    capacity: '150+',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
    rating: 4.6,
    price: '₹1,800/person'
  },
  {
    id: '3',
    name: 'The Glass House',
    location: 'Indiranagar, Bangalore',
    capacity: '100+',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop',
    rating: 4.9,
    price: '₹3,200/person'
  },
  {
    id: '4',
    name: 'Rooftop Vista',
    location: 'MG Road, Bangalore',
    capacity: '80+',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
    rating: 4.7,
    price: '₹2,200/person'
  }
];



const CorporateTeamActivities: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      
      {/* Hero Section with Image Background */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&h=600&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
              <Building size={16} className="text-purple-400" />
              <span className="text-sm text-gray-300">100+ Venues Available</span>
            </div>
            
            <h1 className="font-bold text-4xl md:text-6xl tracking-tight mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Team Building Activities
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">
              Your Team Will Actually Enjoy
            </p>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore the most sought-after experiences hitting Bangalore's corporate scene — 
              where fun meets real teamwork, and nobody wants to go home.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                <Calendar size={20} />
                Book Now
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-3 rounded-xl transition-all duration-300">
                <Building size={20} />
                Explore Venues
              </button>
            </div>
          </div>
        </div>
      </div>

    

      {/* Activities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Choose Your Activity
          </h2>
          <p className="text-gray-400">
            Pick from 7 exciting activities designed for every team dynamic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((activity) => (
            <div
              key={activity.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 cursor-pointer"
            >
              {/* Activity Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                {activity.tag && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                    <Sparkles size={12} />
                    {activity.tag}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${activity.color} text-white`}>
                    {activity.icon}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Users size={14} />
                    <span>{activity.participants}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {activity.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Clock size={14} />
                    <span>{activity.duration}</span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm font-medium group-hover:gap-2">
                    Book Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Venues Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium mb-3 border border-purple-500/20">
            <Building size={16} />
            100+ Venues Available
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Choose from 100+ venues for your corporate day out experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the perfect venue that matches your team size, budget, and activity preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VENUES.map((venue) => (
            <div
              key={venue.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={venue.image} 
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white">{venue.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-white text-lg mb-1">{venue.name}</h4>
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
                  <MapPin size={14} />
                  <span>{venue.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users size={14} />
                    <span>Up to {venue.capacity}</span>
                  </div>
                  <div className="text-purple-400 font-semibold text-sm">
                    {venue.price}
                  </div>
                </div>
                <button className="w-full mt-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-colors border border-white/5">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium">
            View All 100+ Venues
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

    
    </div>
  );
};

export default CorporateTeamActivities;