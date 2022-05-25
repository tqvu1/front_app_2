import axiosBase, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

const config: AxiosRequestConfig = {
  baseURL:
    'https://5e633910f48bc60014536a40.mockapi.io/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
  },
};

const axios = <T = any>(requestConfig: AxiosRequestConfig<T>) => {
  const instance: AxiosInstance = axiosBase.create(config);

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return instance(requestConfig);
};

export default axios;
