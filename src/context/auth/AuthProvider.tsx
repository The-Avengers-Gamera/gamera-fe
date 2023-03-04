import { ReactNode, useEffect, useMemo, useState } from 'react';
import { isAxiosError } from 'axios';
import AuthContext from './AuthContext';
import { login as loginService } from '@/services/user';
import { IUserLogin } from '@/interfaces/user';

const TOKEN = 'token';
const USER_INFO = 'user';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const localStorageAuth = localStorage.getItem(TOKEN);
  const [auth, setAuth] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!localStorageAuth || auth) {
      return;
    }

    // TODO get user info by token from back end
    setAuth(localStorageAuth);
  }, [localStorageAuth, auth]);

  const login = async ({ email, password }: IUserLogin) => {
    try {
      setLoading(true);
      const { status, headers, data: user } = await loginService({ email, password });
      if (status === 200) {
        const token = headers.authorization;
        localStorage.setItem(USER_INFO, JSON.stringify(user));
        localStorage.setItem(TOKEN, token);
      }
      setAuth(user);
    } catch (err) {
      if (isAxiosError(err)) {
        if (err?.response?.status === 401) {
          setError(error);
        }
      }
      // TODO notification error
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER_INFO);
    setAuth(null);
  };

  const authValue = useMemo(
    () => ({ auth, login, logout, loading, error }),
    [auth, loading, error]
  );
  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
