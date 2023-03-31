import { useCallback, useEffect, useMemo, useState } from 'react';
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/context/auth/useAuth';
import apiClients from '@/utils/apiClient';
import useToast from '@/context/notificationToast';
import { ToastType } from '@/constants/notification';

export const apiClient = apiClients;

const useAxiosLoading = () => {
  const [counter, setCounter] = useState(0);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { setToastIsOpen, setToastContent } = useToast();
  const inc = useCallback(() => setCounter((preCounter) => preCounter + 1), [setCounter]);
  const dec = useCallback(() => setCounter((preCounter) => preCounter - 1), [setCounter]);

  const handleError = (status: number | undefined) => {
    if (status === undefined) {
      return;
    }

    if (status === 401) {
      logout();
      navigate('/', { replace: true });
      setToastIsOpen(true);
      setToastContent({
        type: ToastType.WARNING,
        message: 'Your session has expired. Please login again.',
        duration: 3000,
      });
    }

    if (status === 403) {
      navigate('/', { replace: true });
      setToastIsOpen(true);
      setToastContent({
        type: ToastType.WARNING,
        message: 'You are not authorized to access this page.',
        duration: 3000,
      });
    }
  };

  const interceptors = useMemo(
    () => ({
      request: (config: InternalAxiosRequestConfig) => {
        inc();
        return config;
      },
      response: (response: AxiosResponse) => {
        dec();
        return response;
      },
      error: (error: AxiosError) => {
        dec();
        return Promise.reject(error);
      },
      responseError: (error: AxiosError) => {
        dec();
        const { status } = error.response || {};
        handleError(status);
        return Promise.reject(error);
      },
    }),
    [inc, dec]
  );

  useEffect(() => {
    const requestInterceptor = apiClient.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );
    const responseInterceptor = apiClient.interceptors.response.use(
      interceptors.response,
      interceptors.responseError
    );
    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
    };
  }, [interceptors]);

  return [counter > 0];
};

export default useAxiosLoading;
