import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center font-display font-bold text-bg">
                JSB
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">Just Stress Busters</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-4">
              Welcome to our vibrant community dedicated to helping you manage and reduce stress. At Just Stress Busters, we cater to create exciting moments in corporate work spaces and educational institutions. Connect with us on a quick call to know more.
            </p>
            <a href={`tel:${CONTACT_INFO.phone}`} className="btn-pill btn-pill-gradient">
              <Phone size={14} /> Call Us: {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent-from shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-accent-from transition-colors">
                  <Mail size={16} className="text-accent-from" /> {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email2}`} className="flex items-center gap-2 hover:text-accent-from transition-colors">
                  <Mail size={16} className="text-accent-from" /> {CONTACT_INFO.email2}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-accent-from transition-colors">
                  <Phone size={16} className="text-accent-from" /> {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="eyebrow mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Blogs', path: '/blog' },
                { label: 'Feedback', path: '/contact' },
                { label: 'Contact', path: '/contact' },
                { label: 'Privacy Policy', path: '/contact' },
                { label: 'Terms & Conditions', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-400 hover:text-accent-from transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent-from transition-colors"><Facebook size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent-from transition-colors"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent-from transition-colors"><Youtube size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent-from transition-colors"><Linkedin size={14} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-mono">
            © Copyright 2025 – Just Stress Busters | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
