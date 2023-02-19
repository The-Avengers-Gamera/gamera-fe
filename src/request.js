/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
import axios from 'axios';

const service = axios.create({ baseURL: 'http://apiurl', timeout: 5000 });

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers['token'] = localStorage.getItem('token');
    }
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
