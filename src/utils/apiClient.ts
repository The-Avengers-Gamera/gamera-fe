import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080/api/v1';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const NON_TOKEN_URL_LIST = ['/users/login', '/users/register'];
const WITH_TOKEN_URL_LIST = ['/users/info'];

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      if (
        WITH_TOKEN_URL_LIST.includes(config.url as string) ||
        (config.method !== 'get' && !NON_TOKEN_URL_LIST.includes(config.url as string))
      ) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => {
    // TODO handle error for notification
    Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
