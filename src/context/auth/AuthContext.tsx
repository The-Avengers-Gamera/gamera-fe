import { createContext } from 'react';
import { IUserLogin } from '@/interfaces/user';

type AuthContextType = {
  auth: unknown | null;
  login({ email, password }: IUserLogin): Promise<void>;
  logout(): void;
  loading: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextType>({
  auth: null,
  login: async () => {},
  logout: () => {},
  loading: false,
  error: null,
});

export default AuthContext;
