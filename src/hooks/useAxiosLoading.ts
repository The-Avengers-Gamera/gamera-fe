import { useCallback, useEffect, useMemo, useState } from 'react';
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import apiClient from '@/utils/apiClient';

const useAxiosLoading = () => {
  const [counter, setCounter] = useState(0);

  const inc = useCallback(() => setCounter((preCounter) => preCounter + 1), [setCounter]);
  const dec = useCallback(() => setCounter((preCounter) => preCounter - 1), [setCounter]);

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
      interceptors.error
    );
    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
    };
  }, [interceptors]);

  return [counter > 0];
};

export default useAxiosLoading;
