import api from './api'

const register = async (payload) => {
  const res = await api.post('/api/auth/signup', payload)
  return res.data
}

const login = async (payload) => {
  const res = await api.post('/api/auth/login', payload)
  return res.data
}

const profile = async () => {
  const res = await api.get('/api/auth/profile')
  return res.data
}

export default { register, login, profile }
