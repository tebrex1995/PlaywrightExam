export const ENDPOINTS = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
};

export const API_URL = 'https://automaticityacademy.ngrok.app/api/v1/auth';

export const API_ENDPOINTS = {
  API_URL,
  LOGIN_ENDPOINT: `${API_URL}${ENDPOINTS['LOGIN']}`,
};
