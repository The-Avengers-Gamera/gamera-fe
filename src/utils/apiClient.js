import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api/v1';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token');
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
    if (response.status === 200) {
      // TODO handle 200
      return Promise.resolve(response);
    }
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
