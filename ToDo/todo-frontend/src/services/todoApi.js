import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllTodos = async () => {
  const response = await api.get('');
  return response.data;
};

export const createTodo = async (todoData) => {
  const response = await api.post('', todoData);
  return response.data;
};

export const updateTodo = async (id, todoData) => {
  const response = await api.put(`/${id}`, todoData);
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/${id}`);
};
