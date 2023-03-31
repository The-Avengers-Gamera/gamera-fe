import { Navigate } from 'react-router-dom';
import useAuth from '@/context/auth';
import useToast from '@/context/notificationToast/';
import { ToastType } from '@/constants/notification';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { auth } = useAuth();
  const { setToastIsOpen, setToastContent } = useToast();

  if (!auth) {
    setToastIsOpen(true);
    setToastContent({
      type: ToastType.ERROR,
      message: 'Please Login First',
      duration: 3000,
    });
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
