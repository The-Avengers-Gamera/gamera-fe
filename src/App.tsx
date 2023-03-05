import { useRoutes } from 'react-router-dom';
import routes from '@/routers';
import { AuthProvider } from '@/context/auth';
import { ModalProvider } from '@/context/loginModal';

const App = () => {
  const element = useRoutes(routes);
  return (
    <AuthProvider>
      <ModalProvider>{element}</ModalProvider>
    </AuthProvider>
  );
};

export default App;
