import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API methods
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  verifyToken: (token) => api.post('/auth/verify', { token }),
};

export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData),
  getDashboard: () => api.get('/users/dashboard'),
};

export const qrAPI = {
  generateQR: (qrData) => api.post('/qr/generate', qrData),
  getQR: (id) => api.get(`/qr/${id}`),
  updateQR: (id, qrData) => api.put(`/qr/${id}`, qrData),
  deleteQR: (id) => api.delete(`/qr/${id}`),
  getQRAnalytics: (id) => api.get(`/qr/${id}/analytics`),
};

export const analyticsAPI = {
  getBusinessAnalytics: (businessId) => api.get(`/analytics/business/${businessId}`),
  getCustomerAnalytics: (businessId) => api.get(`/analytics/customers/${businessId}`),
  getRealtimeMetrics: (businessId) => api.get(`/analytics/realtime/${businessId}`),
  exportAnalytics: (businessId, format) => 
    api.get(`/analytics/export/${businessId}?format=${format}`),
};

export const contactAPI = {
  submitContact: (formData) => api.post('/contact/submit', formData),
};

export default api;