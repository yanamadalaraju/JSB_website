import { useEffect, useState } from 'react';
import StandardPage from '../../components/StandardPage';
import { Mail, Phone, User, Clock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  is_read: number;
  created_at: string;
}

const API_BASE = 'http://localhost:5000/api';

export default function Notifications() {
  const { token } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`${API_BASE}/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (!res.ok) {
          setError(data.message || 'Could not load messages.');
          return;
        }

        setMessages(data.messages);
      } catch (err) {
        setError('Could not reach the server. Is the backend running on port 5000?');
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchMessages();
  }, [token]);

  return (
    <StandardPage
      eyebrow="Admin"
      title="Notifications"
      subtitle="Messages submitted through the contact form."
    >
      {loading && <p className="text-gray-400">Loading messages...</p>}

      {error && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      {!loading && !error && messages.length === 0 && (
        <p className="text-gray-400">No messages yet.</p>
      )}

      <div className="space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            data-reveal
            className={`glass rounded-2xl p-6 ${!m.is_read ? 'border border-accent-from/40' : ''}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <User size={16} className="text-accent-from" />
                {m.name}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={12} />
                {new Date(m.created_at).toLocaleString()}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
              <a
                href={`mailto:${m.email}`}
                className="flex items-center gap-1.5 hover:text-accent-from transition-colors"
              >
                <Mail size={14} />
                {m.email}
              </a>
              {m.phone && (
                <a
                  href={`tel:${m.phone}`}
                  className="flex items-center gap-1.5 hover:text-accent-from transition-colors"
                >
                  <Phone size={14} />
                  {m.phone}
                </a>
              )}
            </div>

            <p className="text-white text-sm leading-relaxed">{m.message}</p>
          </div>
        ))}
      </div>
    </StandardPage>
  );
}