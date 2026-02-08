import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import userService from '../api/userService';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const profilePicUrl = user?.profilePicture
    ? userService.getProfilePictureUrl(user.profilePicture)
    : null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Social Media
        </Link>

        <div className="navbar-right">
          <Link to="/profile" className="navbar-profile">
            {profilePicUrl ? (
              <img
                src={profilePicUrl}
                alt="Profile"
                className="navbar-avatar"
              />
            ) : (
              <div className="navbar-avatar-placeholder">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="navbar-username">{user?.name}</span>
          </Link>

          <button onClick={handleLogout} className="navbar-logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
