export const ENDPOINTS = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PRODUCTS: '/products',
  CUSTOMERS: '/customers',
  SHIPPING_INFO: '/shipping-info',
};

export const AUTH_URL = 'https://automaticityacademy.ngrok.app/api/v1/auth';
export const API_URL = 'https://automaticityacademy.ngrok.app/api/v1';

export const API_ENDPOINTS = {
  AUTH_URL,
  API_URL,
  LOGIN_ENDPOINT: `${AUTH_URL}${ENDPOINTS['LOGIN']}`,
  PRODUCTS_ENDPOINT: `${API_URL}${ENDPOINTS['PRODUCTS']}`,
  CUSTOMERS_ENDPOINT: `${API_URL}${ENDPOINTS['CUSTOMERS']}`,
};
