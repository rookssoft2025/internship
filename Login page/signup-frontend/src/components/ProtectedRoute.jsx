import { useAuth } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const { user, initializing } = useAuth()
  if (initializing) return null
  if (!user) return <Navigate to="/login" replace />
  return children
}
