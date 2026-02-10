import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import postService from '../api/postService';
import userService from '../api/userService';
import '../styles/PostCard.css';

const PostCard = ({ post, onPostDeleted }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { user } = useAuth();

  const isOwner = user?.id === post.userId;

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await postService.deletePost(post.id);
      if (onPostDeleted) {
        onPostDeleted(post.id);
      }
    } catch (err) {
      alert('Failed to delete post');
      console.error(err);
    } finally {
      setDeleting(false);
      setShowDeleteConfirm(false);
    }
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    
    const istOffsetMs = 5.5 * 60 * 60 * 1000;
    const adjustedDate = new Date(date.getTime() + istOffsetMs);
    
    const diffInSeconds = Math.floor((now.getTime() - adjustedDate.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
   
  };


  const displayName = isOwner ? user.name : post.userName;
  const displayProfilePic = isOwner ? user.profilePicture : post.userProfilePicture;

  const profilePicUrl = displayProfilePic
    ? userService.getProfilePictureUrl(displayProfilePic)
    : null;

  const postImageUrl = post.imageFileName
    ? postService.getPostImageUrl(post.imageFileName)
    : null;

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-author">
          {profilePicUrl ? (
            <img
              src={profilePicUrl}
              alt={displayName}
              className="post-avatar"
            />
          ) : (
            <div className="post-avatar-placeholder">
              {displayName?.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="post-author-info">
            <h3>{displayName}</h3>
            <span className="post-time">{formatDate(post.createdAt)}</span>
          </div>
        </div>

        {isOwner && (
          <button
            className="post-delete-btn"
            onClick={() => setShowDeleteConfirm(true)}
          >
            🗑️
          </button>
        )}
      </div>

      {post.contentText && (
        <p className="post-content">{post.contentText}</p>
      )}

      {postImageUrl && (
        <div className="post-image">
          <img src={postImageUrl} alt="Post" />
        </div>
      )}

      {showDeleteConfirm && (
        <div className="delete-confirm-modal">
          <div className="delete-confirm-content">
            <h3>Delete Post?</h3>
            <p>Are you sure you want to delete this post?</p>
            <div className="delete-confirm-actions">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="cancel-btn"
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="confirm-delete-btn"
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
