import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import userService from '../api/userService';
import '../styles/Profile.css';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setName(user?.name || '');
    setBio(user?.bio || '');
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {

      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      setProfilePicture(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('bio', bio);
      if (profilePicture) {
        formData.append('profilePicture', profilePicture);
      }

      const response = await userService.updateProfile(formData);
      updateUser(response.user);
      setSuccess('Profile updated successfully!');
      setEditing(false);
      setProfilePicture(null);
      setPreviewUrl(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setName(user?.name || '');
    setBio(user?.bio || '');
    setProfilePicture(null);
    setPreviewUrl(null);
    setError('');
  };

  const currentProfilePicUrl = user?.profilePicture
    ? userService.getProfilePictureUrl(user.profilePicture)
    : null;

  const displayPicUrl = previewUrl || currentProfilePicUrl;

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <h1>My Profile</h1>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="profile-header">
            <div className="profile-pic-section">
              {displayPicUrl ? (
                <img
                  src={displayPicUrl}
                  alt="Profile"
                  className="profile-picture"
                />
              ) : (
                <div className="profile-picture-placeholder">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}

              {editing && (
                <label className="change-pic-label">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input"
                  />
                  📷 Change Photo
                </label>
              )}
            </div>

            <div className="profile-info">
              <h2>{user?.name}</h2>
              <p className="profile-email">{user?.email}</p>
            </div>
          </div>

          {!editing ? (
            <>
              <div className="profile-details">
                <div className="detail-group">
                  <label>Bio</label>
                  <p>{user?.bio || 'No bio added yet'}</p>
                </div>
              </div>

              <button
                onClick={() => setEditing(true)}
                className="edit-profile-btn"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself..."
                  rows="4"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="cancel-btn"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="save-btn"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
