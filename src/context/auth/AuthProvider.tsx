import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import AuthContext from './AuthContext';
import { login as loginService, getUserInfo } from '@/services/user';
import { IUseDetailedInfo, IUserLogin } from '@/interfaces/user';

const TOKEN = 'token';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const localToken = localStorage.getItem(TOKEN);
  const [auth, setAuth] = useState<IUseDetailedInfo | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const getUserInfoByToken = async () => {
    try {
      const { data: userInfo } = await getUserInfo();
      setAuth(userInfo);
    } catch {
      localStorage.removeItem(TOKEN);
    }
  };

  useEffect(() => {
    if (!localToken && auth) {
      setAuth(undefined);
      navigate('/', { replace: true });
      return;
    }

    if (localToken && !auth) {
      getUserInfoByToken();
    }
  }, [localToken]);

  const login = async ({ email, password }: IUserLogin) => {
    try {
      setLoading(true);
      const { status, headers } = await loginService({ email, password });
      if (status === 200) {
        const token = headers.authorization;
        localStorage.setItem(TOKEN, token);
        getUserInfoByToken();
      }
    } catch (err) {
      if (isAxiosError(err)) {
        if (err?.response?.status === 401) {
          setError(error);
        }
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN);
    setAuth(undefined);
    navigate('/', { replace: true });
  };

  const authValue = useMemo(
    () => ({ auth, login, logout, loading, error }),
    [auth, loading, error]
  );
  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
