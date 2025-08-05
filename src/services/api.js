import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchTelemetry = () => api.get('/telemetry');
export const fetchLogs = () => api.get('/logs');
export const fetchGyro = () => api.get('/gyro');
export const login = (username, password) =>
  api.post('/login', { username, password });