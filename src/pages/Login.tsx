import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StandardPage from '../components/StandardPage';
import { User, Mail, Lock, Phone, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const API_BASE = 'http://localhost:5000/api/auth';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const switchMode = (next: 'login' | 'register') => {
    setMode(next);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'register' && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const endpoint = mode === 'login' ? '/login' : '/register';
      const body =
        mode === 'login' ? { email, password } : { name, email, phone, password };

      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      // Update auth context (this is what makes the Navbar / landing page react instantly)
      login(data.user, data.token);
      navigate(data.user.role === 'admin' ? '/admin/notifications' : '/');
    } catch (err) {
      setError('Could not reach the server. Is the backend running on port 5000?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <StandardPage
      eyebrow={mode === 'login' ? 'Welcome back' : 'Get started'}
      title={mode === 'login' ? 'Log In' : 'Create Account'}
      subtitle={
        mode === 'login'
          ? 'Log in to manage bookings and access your dashboard.'
          : 'Create your account to get started.'
      }
    >
      <div className="max-w-md mx-auto">
        <div data-reveal className="glass rounded-3xl p-6 md:p-8">
          {/* Mode toggle */}
          <div className="flex gap-2 mb-8 p-1 rounded-full bg-white/5">
            <button
              type="button"
              onClick={() => switchMode('login')}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-accent-from to-accent-to text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => switchMode('register')}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${
                mode === 'register'
                  ? 'bg-gradient-to-r from-accent-from to-accent-to text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              New User
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'register' && (
              <div>
                <label className="eyebrow mb-2 block">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-from" size={18} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="eyebrow mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-from" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors"
                />
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className="eyebrow mb-2 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-from" size={18} />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="eyebrow mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-from" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors"
                />
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className="eyebrow mb-2 block">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-from" size={18} />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-from transition-colors"
                  />
                </div>
              </div>
            )}

            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-accent-from to-accent-to text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {mode === 'login' ? <LogIn size={18} /> : <UserPlus size={18} />}
              {loading ? 'Please wait...' : mode === 'login' ? 'Log In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </StandardPage>
  );
}