import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Role = 'admin' | 'client';

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: Role;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  login: (user: AuthUser, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Restore session on page load
  useEffect(() => {
    const storedToken = localStorage.getItem('jsb_token');
    const storedUser = localStorage.getItem('jsb_user');
    if (storedToken && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch {
        localStorage.removeItem('jsb_token');
        localStorage.removeItem('jsb_user');
      }
    }
  }, []);

  const login = (newUser: AuthUser, newToken: string) => {
    localStorage.setItem('jsb_token', newToken);
    localStorage.setItem('jsb_user', JSON.stringify(newUser));
    setUser(newUser);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('jsb_token');
    localStorage.removeItem('jsb_user');
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}