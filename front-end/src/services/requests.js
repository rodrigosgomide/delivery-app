import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestRegister = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestPut = async (endpoint) => {
  const { data } = await api.put(endpoint, {});
  return data;
};

export const requestPatchStatus = async (endpoint, newStatus) => {
  const { data } = await api.patch(endpoint, { status: newStatus });
  return data;
};

export default api;
