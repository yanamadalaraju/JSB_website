import StandardPage from '../components/StandardPage';
import ContactForm from '../components/ContactForm';
import { CONTACT_INFO } from '../data';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <StandardPage
      eyebrow="Get in touch"
      title="Contact Us"
      subtitle="Have a question or want to book an event? We'd love to hear from you."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact details */}
        <div data-reveal className="space-y-6">
          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20 flex items-center justify-center shrink-0">
              <Phone className="text-accent-from" size={24} />
            </div>
            <div>
              <h3 className="eyebrow mb-1">Phone</h3>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-white text-lg hover:text-accent-from transition-colors">{CONTACT_INFO.phone}</a>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20 flex items-center justify-center shrink-0">
              <Mail className="text-accent-from" size={24} />
            </div>
            <div>
              <h3 className="eyebrow mb-1">Email</h3>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-white text-lg hover:text-accent-from transition-colors block">{CONTACT_INFO.email}</a>
              <a href={`mailto:${CONTACT_INFO.email2}`} className="text-gray-400 text-sm hover:text-accent-from transition-colors">{CONTACT_INFO.email2}</a>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20 flex items-center justify-center shrink-0">
              <MapPin className="text-accent-from" size={24} />
            </div>
            <div>
              <h3 className="eyebrow mb-1">Location</h3>
              <p className="text-white text-sm leading-relaxed">{CONTACT_INFO.address}</p>
            </div>
          </div>

          {/* Map */}
          <div className="glass rounded-3xl overflow-hidden h-64">
            <iframe
              title="JSB Location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.9)' }}
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dH7-VdA8Vc3MIk&q=Vidyaranyapura,Bengaluru,Karnataka"
            />
          </div>
        </div>

        {/* Form */}
        <div data-reveal>
          <h3 className="font-display font-bold text-white text-2xl tracking-tight mb-4">Send us a message</h3>
          <ContactForm />
        </div>
      </div>
    </StandardPage>
  );
}
