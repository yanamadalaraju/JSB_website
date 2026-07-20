import { useState } from 'react';
import { Send } from 'lucide-react';

const API_BASE = 'http://localhost:5000/api';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      // If the person is logged in, attach their token so the message links to their account
      const token = localStorage.getItem('jsb_token');

      const res = await fetch(`${API_BASE}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      setError('Could not reach the server. Is the backend running on port 5000?');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="eyebrow mb-2 block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors"
          />
        </div>
        <div>
          <label className="eyebrow mb-2 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@email.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="eyebrow mb-2 block">Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 ..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors"
        />
      </div>

      <div>
        <label className="eyebrow mb-2 block">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Tell us about your event..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors resize-none"
        />
      </div>

      {status === 'success' && (
        <p className="text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
          Message sent! We'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-accent-from to-accent-to text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        <Send size={16} />
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}