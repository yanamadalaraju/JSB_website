// import StandardPage from '../../components/StandardPage';
// import { Link } from 'react-router-dom';
// import { ArrowRight, CheckCircle } from 'lucide-react';

// const Refreshments = () => {
//   const features = [
//     'Healthy snack platters',
//     'Fresh juice & smoothies',
//     'Tea & coffee stations',
//     'Custom menus',
//     'Dietary accommodations',
//     'On-time delivery',
//   ];

//   return (
//     <StandardPage
//       eyebrow="Corporates"
//       title="Refreshments"
//       subtitle="Healthy, delicious refreshments for your events and meetings."
//     >
//       {/* Image Section */}
//       <div className="rounded-3xl overflow-hidden h-64 md:h-80 mb-16 relative">
//         <img
//           src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt="Refreshments"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
//         {/* Overview */}
//         <div>
//           <div className="eyebrow mb-3">Overview</div>
//           <p className="text-gray-300 leading-relaxed text-lg mb-6">
//             From healthy snack platters to indulgent treats, our refreshment service keeps your team fueled and happy.
//             Perfect for meetings, events, and day-outs.
//           </p>
//           <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient">
//             Book Now <ArrowRight size={14} />
//           </Link>
//         </div>

//         {/* Features */}
//         <div>
//           <div className="eyebrow mb-3">What's included</div>
//           <ul className="space-y-3">
//             {features.map((item, i) => (
//               <li key={i} className="flex items-start gap-2 text-gray-300">
//                 <CheckCircle size={18} className="text-accent-from shrink-0 mt-0.5" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {[
//           { label: 'Events Served', value: '80+' },
//           { label: 'Clients', value: '30+' },
//           { label: 'Menu Options', value: '25+' },
//           { label: 'Cities', value: '5' },
//         ].map((stat) => (
//           <div key={stat.label}>
//             <div className="font-display font-bold gradient-text text-3xl md:text-4xl">
//               {stat.value}
//             </div>
//             <div className="eyebrow mt-1">{stat.label}</div>
//           </div>
//         ))}
//       </div>
//     </StandardPage>
//   );
// };

// export default Refreshments;



import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Coffee, Sparkles, Clock } from 'lucide-react';

const Refreshments = () => {
  const features = [
    'Healthy snack platters',
    'Fresh juice & smoothies',
    'Tea & coffee stations',
    'Custom menus',
    'Dietary accommodations',
    'On-time delivery',
  ];

  return (
    <StandardPage
      eyebrow="Corporates"
      title="Refreshments"
      subtitle="Healthy, delicious refreshments for your events and meetings."
    >
      {/* Hero Image with decorative elements */}
      <div className="relative rounded-3xl overflow-hidden h-72 md:h-96 mb-16 group">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Refreshments"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
        
        {/* Floating decorative elements */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div className="flex gap-3">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/10">
              ☕ Fresh Brew
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/10">
              🥗 Healthy Options
            </span>
          </div>
          <div className="flex gap-1 text-white/60">
            <Clock size={18} />
            <span className="text-sm">30 min delivery</span>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Overview */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-from/10 border border-accent-from/20">
            <Sparkles size={14} className="text-accent-from" />
            <span className="eyebrow !mb-0">Overview</span>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            From healthy snack platters to indulgent treats, our refreshment service keeps your team fueled and happy.
            Perfect for meetings, events, and day-outs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/corporates/corporate-booking" className="btn-pill btn-pill-gradient group">
              Book Now 
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="px-6 py-2.5 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
              <Coffee size={16} />
              View Menu
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-from/10 border border-accent-from/20">
            <CheckCircle size={14} className="text-accent-from" />
            <span className="eyebrow !mb-0">What's included</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((item, i) => (
              <li 
                key={i} 
                className="flex items-center gap-3 text-gray-300 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-accent-from/20 group"
              >
                <CheckCircle size={18} className="text-accent-from shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
    </StandardPage>
  );
};

export default Refreshments;