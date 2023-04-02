import { createContext } from 'react';
import { AuthInfo, IUserLogin } from '@/interfaces/user';

type AuthContextType = {
  auth: AuthInfo;
  login({ email, password }: IUserLogin): Promise<void>;
  logout(): void;
  loading: boolean;
  error: string;
};

export const initAuthInfo: AuthInfo = { user: undefined, isLogin: false, isEditor: false };

const AuthContext = createContext<AuthContextType>({
  auth: initAuthInfo,
  login: async () => {
    //
  },
  logout: () => {
    //
  },
  loading: false,
  error: '',
});

export default AuthContext;
