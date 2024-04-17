const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const createUser = payload => api.post(`/user`, payload);
export const getUsers = () => api.get(`/users`);
export const updateUserById = (id, payload) => api.put(`/users/${id}`, payload);
export const deleteUserById = id => api.delete(`/users/${id}`);