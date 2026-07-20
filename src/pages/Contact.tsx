import StandardPage from '../components/StandardPage';
import ContactForm from '../components/ContactForm';
import { CONTACT_INFO } from '../data';
import { Facebook, Twitter, Linkedin, Instagram, Navigation } from 'lucide-react';
import Prism from '../components/Prism';

export default function Contact() {
  // Direct Google Maps link to your listed business (from the place you shared)
  const googleMapsUrl =
    'https://www.google.com/maps?cid=580937969682524774&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed';

  // Keyless embed — uses your business's CID directly, no Maps API key required
  const embedMapUrl = 'https://www.google.com/maps?cid=580937969682524774&output=embed';

  // Social links — replace these '#' placeholders with your real profile URLs
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Prism Animation Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Prism
          animationType="rotate"
          timeScale={0.3}
          height={3.5}
          baseWidth={5.5}
          scale={4}
          hueShift={0.1}
          colorFrequency={1.2}
          noise={0.2}
          glow={0.8}
          transparent={true}
          bloom={0.5}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <StandardPage
          eyebrow="Get in touch"
          title="Contact Us"
          subtitle="Have a question or want to book an event? We'd love to hear from you."
        >
          {/* Torn-paper collage banner (your existing Contact-us.png asset) */}
          <div data-reveal className="glass rounded-2xl overflow-hidden mb-10">
            <img
              src="/Contact-us.png"
              alt="JSB - We Bring Happiness - Student Wellness, Employee Wellness, Corporate Gifting"
              className="w-full h-auto"
            />
          </div>

          {/* "Need any help?" section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: heading + contact details + socials */}
            <div data-reveal className="space-y-8">
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight leading-tight">
                Need any help?
                <br />
                Feel free to
                <br />
                contact us.
              </h2>

              <div>
                <h3 className="eyebrow mb-2">Phone</h3>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white text-lg hover:text-accent-from transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div>
                <h3 className="eyebrow mb-2">Email</h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white text-lg hover:text-accent-from transition-colors block"
                >
                  {CONTACT_INFO.email}
                </a>
                {CONTACT_INFO.email2 && (
                  <a
                    href={`mailto:${CONTACT_INFO.email2}`}
                    className="text-gray-400 text-sm hover:text-accent-from transition-colors"
                  >
                    {CONTACT_INFO.email2}
                  </a>
                )}
              </div>

              <div>
                <h3 className="eyebrow mb-2">Location</h3>
                <p className="text-white text-sm leading-relaxed max-w-xs">
                  {CONTACT_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-from/20 to-accent-to/20 flex items-center justify-center hover:from-accent-from/40 hover:to-accent-to/40 transition-colors"
                  >
                    <Icon className="text-accent-from" size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: contact form */}
            <div data-reveal>
              <div className="glass rounded-3xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map - clickable to open Google Maps at your exact listed business */}
          <div data-reveal className="mt-10 glass rounded-3xl overflow-hidden h-80 relative group">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <iframe
                title="JSB Location"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.9)' }}
                loading="lazy"
                src={embedMapUrl}
                className="pointer-events-none"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                <span className="text-white font-semibold px-4 py-2 bg-accent-from/80 rounded-full flex items-center gap-2">
                  <Navigation size={16} />
                  Open in Google Maps
                </span>
              </div>
            </a>
          </div>
        </StandardPage>
      </div>
    </div>
  );
}