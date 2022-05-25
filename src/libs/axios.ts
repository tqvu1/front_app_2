import axiosBase, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

const config: AxiosRequestConfig = {
  baseURL:
    'http://localhost:3000',
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
