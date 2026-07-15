import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Instagram, Youtube, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';
import { NAV_LINKS, SERVICES_TREE, CONTACT_INFO } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs font-mono text-gray-400">
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1.5 hover:text-accent-from transition-colors">
              <Mail size={12} /> {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1.5 hover:text-accent-from transition-colors">
              <Phone size={12} /> {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent-from transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-accent-from transition-colors"><Instagram size={14} /></a>
            <a href="#" className="hover:text-accent-from transition-colors"><Youtube size={14} /></a>
            <a href="#" className="hover:text-accent-from transition-colors"><Linkedin size={14} /></a>
            <a href="https://wa.me/916366870253" className="btn-pill btn-pill-gradient !py-1.5 !px-4 !text-[0.7rem]">
              <MessageCircle size={12} /> Chat Now
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'top-0' : 'top-9 md:top-9'}`}>
        <div className={`max-w-7xl mx-auto px-4 md:px-6 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
          <div className={`glass rounded-full flex items-center justify-between px-4 md:px-6 py-2.5 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center font-display font-bold text-bg text-sm">
                JSB
              </div>
              <span className="font-display font-bold text-white text-sm hidden sm:block tracking-tight">
                Just Stress Busters
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        location.pathname.startsWith('/services') || location.pathname.startsWith('/corporates') || location.pathname.startsWith('/for-')
                          ? 'text-accent-from'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-[520px]">
                        <div className="glass-strong rounded-2xl p-4 grid grid-cols-3 gap-4 shadow-2xl">
                          {Object.entries(SERVICES_TREE).map(([cat, data]) => (
                            <div key={cat}>
                              <Link to={data.path} className="eyebrow block mb-2 hover:text-white transition-colors">
                                {cat}
                              </Link>
                              <ul className="space-y-1.5">
                                {data.items.map((item) => (
                                  <li key={item.path}>
                                    <Link
                                      to={item.path}
                                      className="text-xs text-gray-400 hover:text-accent-from transition-colors block"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      location.pathname === link.path ? 'text-accent-from' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <Link to="/contact" className="btn-pill btn-pill-gradient hidden md:inline-flex !py-2 !px-5 !text-[0.72rem]">
                Book Now
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-white"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-20 left-4 right-4 glass-strong rounded-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="space-y-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between py-3 text-white font-medium"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pb-2 space-y-3">
                        {Object.entries(SERVICES_TREE).map(([cat, data]) => (
                          <div key={cat}>
                            <Link to={data.path} className="eyebrow block mb-1">{cat}</Link>
                            {data.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block py-1.5 text-sm text-gray-400 hover:text-accent-from"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="block py-3 text-white font-medium border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <Link to="/contact" className="btn-pill btn-pill-gradient w-full justify-center mt-4">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
