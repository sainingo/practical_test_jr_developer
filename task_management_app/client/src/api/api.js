const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:8001/api',
});

export const createTask = payload => api.post(`/task`, payload);
export const getTasks = () => api.get(`/tasks`);
export const updateTaskById = (id, payload) => api.put(`/task/${id}`, payload);
export const deleteTaskById = id => api.delete(`/task/${id}`);