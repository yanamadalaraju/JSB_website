import StandardPage from '../../components/StandardPage';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Coffee, 
  Users, 
  Calendar, 
  Star, 
  Briefcase,
  Clock,
  Award,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import CorporateHero from '../../components/CorporatespageCompo/CorporateHero';
import ServiceCards from '../../components/CorporatespageCompo/ServiceCards';

const Corporatespage = () => {
  const services = [
    {
      icon: Coffee,
      title: 'Refreshments',
      description: 'Healthy snacks, fresh juices, and premium coffee stations for meetings and events.',
      link: '/corporates/refreshments'
    },
    {
      icon: Briefcase,
      title: 'Corporate Catering',
      description: 'Full-service catering for board meetings, conferences, and corporate celebrations.',
      link: '/corporates/catering'
    },
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'End-to-end event management from venue selection to on-site coordination.',
      link: '/corporates/events'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Engaging team building activities and workshops to boost morale and collaboration.',
      link: '/corporates/team-building'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Director, TechCorp',
      content: 'The refreshment service has been a game-changer for our meetings. The team is professional and the food is always fresh.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'We\'ve used their corporate catering for multiple events and the quality is consistently outstanding. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Office Manager, FinanceHub',
      content: 'From team building to event planning, they handle everything with perfection. Our team loves working with them.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Corporate Clients', value: '150+', icon: Users },
    { label: 'Events Delivered', value: '2,500+', icon: Calendar },
    { label: 'Satisfaction Rate', value: '98%', icon: Star },
    { label: 'Years Experience', value: '8+', icon: Award },
  ];

  return (
    <StandardPage
      eyebrow="Corporate Solutions"
      title="Elevate Your Workplace Experience"
      subtitle="Comprehensive corporate services designed to enhance productivity, engagement, and employee satisfaction."
    >
      
      <CorporateHero />

      <ServiceCards />

      {/* Services Grid */}
      <div className="mb-16 mt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-from/10 border border-accent-from/20 mb-3">
              <Briefcase size={14} className="text-accent-from" />
              <span className="eyebrow !mb-0">Our Services</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Comprehensive Corporate Solutions</h3>
          </div>
          <Link 
            to="/corporates/services" 
            className="text-accent-from hover:text-accent-to transition-colors flex items-center gap-2 text-sm font-medium"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              key={service.title}
              to={service.link}
              className="glass rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 border border-white/5 hover:border-accent-from/20 hover:shadow-xl hover:shadow-accent-from/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-from/10 flex items-center justify-center mb-4 group-hover:bg-accent-from/20 transition-colors">
                <service.icon size={24} className="text-accent-from" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center text-accent-from text-sm font-medium">
                Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-from/10 border border-accent-from/20 mb-3">
            <Star size={14} className="text-accent-from" />
            <span className="eyebrow !mb-0">Testimonials</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-accent-from/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
              <div>
                <p className="text-white font-medium text-sm">{testimonial.name}</p>
                <p className="text-gray-400 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-accent-from/20 to-accent-to/20 border border-white/10">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-from/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-to/10 rounded-full blur-3xl" />
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Transform Your Workplace?
            </h3>
            <p className="text-gray-300">
              Get in touch with our corporate team for a customized solution.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/corporates/contact" 
              className="btn-pill btn-pill-gradient group"
            >
              Contact Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/corporates/booking" 
              className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="relative mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-gray-300">
            <Mail size={18} className="text-accent-from" />
            <span className="text-sm">corporate@yourcompany.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Phone size={18} className="text-accent-from" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <MapPin size={18} className="text-accent-from" />
            <span className="text-sm">123 Business Ave, NYC</span>
          </div>
        </div>
      </div>
    </StandardPage>
  );
};

export default Corporatespage;