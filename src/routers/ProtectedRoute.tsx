import { Navigate } from 'react-router-dom';
import useAuth from '@/context/auth';
import useToast from '@/context/notificationToast/';
import { ToastType } from '@/constants/notification';
import { Role } from '@/constants/role';

interface ProtectedRouteProps {
  allowedRoles: Role[];
  children: JSX.Element;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { setToastIsOpen, setToastContent } = useToast();
  const {
    auth: { user },
    loading,
  } = useAuth();

  const hasPermission = allowedRoles.some((role) =>
    user?.authorities.some((userRole) => userRole.name === role)
  );

  if (loading) {
    return <div>loading</div>;
  }

  if (!hasPermission) {
    setToastIsOpen(true);
    setToastContent({
      type: ToastType.ERROR,
      message: 'No permission to access this page',
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
