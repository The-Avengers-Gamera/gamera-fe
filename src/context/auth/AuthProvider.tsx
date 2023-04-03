import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import AuthContext, { initAuthInfo } from './AuthContext';
import { login as loginService, getUserInfo } from '@/services/user';
import { AuthInfo, IUserLogin } from '@/interfaces/user';
import { Role } from '@/constants/role';

const TOKEN = 'token';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const localToken = localStorage.getItem(TOKEN) || undefined;

  const [auth, setAuth] = useState<AuthInfo>(initAuthInfo);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const getUserInfoByToken = async () => {
    try {
      const { data: userInfo } = await getUserInfo();
      const isEditor = userInfo.authorities.some(
        (role) => role.name === Role.EDITOR_REVIEW || role.name === Role.EDITOR_NEWS
      );
      setAuth({ user: userInfo, isLogin: true, isEditor });
    } catch (err) {
      if (err && isAxiosError(err)) {
        if ((err?.response?.status as number) >= 400) {
          localStorage.removeItem(TOKEN);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!localToken && auth.isLogin) {
      setAuth(initAuthInfo);
      navigate('/', { replace: true });
      return;
    }

    if (localToken && !auth.isLogin) {
      getUserInfoByToken();
      return;
    }
    setLoading(false);
  }, [localToken, auth]);

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
    setAuth(initAuthInfo);
    navigate('/', { replace: true });
  };

  const value = useMemo(() => ({ auth, login, logout, loading, error }), [auth, loading, error]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
