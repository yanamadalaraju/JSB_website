import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 space-y-5">
      {submitted && (
        <div className="flex items-center gap-2 text-green-400 bg-green-400/10 rounded-xl p-3 mb-2">
          <CheckCircle size={18} />
          <span className="text-sm">Thank you! We'll be in touch shortly.</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="eyebrow block mb-2">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent-from focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="eyebrow block mb-2">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent-from focus:outline-none transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label className="eyebrow block mb-2">Phone</label>
        <input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent-from focus:outline-none transition-colors"
          placeholder="+91 ..."
        />
      </div>
      <div>
        <label className="eyebrow block mb-2">Message</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent-from focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your event..."
        />
      </div>
      <button type="submit" className="btn-pill btn-pill-gradient w-full justify-center">
        <Send size={14} /> Send Message
      </button>
    </form>
  );
}
