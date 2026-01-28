import { createContext, useContext, useEffect, useState } from 'react'
import authService from '../services/auth'

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const init = async () => {
      if (token) {
        try {
          const data = await authService.profile()
          setUser(data.user || { name: data.name || '' })
        } catch (err) {
          setUser(null)
          setToken(null)
          localStorage.removeItem('token')
        }
      }
      setInitializing(false)
    }
    init()
  }, [token])

  const login = async (credentials) => {
    const data = await authService.login(credentials)
    if (data && data.token) {
      localStorage.setItem('token', data.token)
      setToken(data.token)
      const profile = await authService.profile()
      setUser(profile.user || { name: profile.name || '' })
    }
    return data
  }

  const register = async (payload) => {
    const data = await authService.register(payload)
    if (data && data.token) {
      localStorage.setItem('token', data.token)
      setToken(data.token)
      const profile = await authService.profile()
      setUser(profile.user || { name: profile.name || '' })
    }
    return data
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
    window.location.href = '/login'
  }

  return (
    <AuthContext.Provider
      value={{ user, token, initializing, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
