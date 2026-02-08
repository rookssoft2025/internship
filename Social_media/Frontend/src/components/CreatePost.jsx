import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import postService from '../api/postService';
import '../styles/CreatePost.css';

const CreatePost = ({ onPostCreated }) => {
  const [contentText, setContentText] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  

  const { user } = useAuth();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setError('');
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contentText.trim() && !image) {
      setError('Please add some text or an image');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('contentText', contentText);
      if (image) {
        formData.append('image', image);
      }

      const response = await postService.createPost(formData);

      // Clear form
      setContentText('');
      setImage(null);
      setImagePreview(null);
      
      // Notify parent
      if (onPostCreated) {
        onPostCreated(response);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="create-post">
      <h2>Create Post</h2>
      
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <textarea
          value={contentText}
          onChange={(e) => setContentText(e.target.value)}
          placeholder={`What's on your mind, ${user?.name}?`}
          rows="4"
          className="post-textarea"
        />

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
            <button
              type="button"
              onClick={removeImage}
              className="remove-image"
            >
              ×
            </button>
          </div>
        )}

        <div className="post-actions">
          <label className="image-upload-label">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="image-input"
            />
            <span>📷 Add Image</span>
          </label>

          <button
            type="submit"
            className="post-button"
            disabled={loading || (!contentText.trim() && !image)}
          >
            {loading ? 'Posting...' : 'Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
