import { useRoutes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import routes from '@/routers';
import { AuthProvider } from '@/context/auth';
import { ModalProvider } from '@/context/loginModal';

const App = () => {
  const queryClient = new QueryClient();

  const element = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>{element}</ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
