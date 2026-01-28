import { useAuth } from '../context/AuthProvider'

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="page-wrap">
      <div className="card">
        <h2>Dashboard</h2>
        <div className="dashboard-info">
          <p>Welcome, <strong>{user?.name || 'User'}</strong></p>
        </div>
        <button className="btn outline" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
