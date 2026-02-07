import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import postService from '../api/postService';
import '../styles/Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await postService.getAllPosts();
      setPosts(data);
      setError('');
    } catch (err) {
      setError('Failed to load posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePostCreated = (newPost) => {
    setPosts([newPost.post, ...posts]);
  };

  const handlePostDeleted = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <div className="feed-container">
          <CreatePost onPostCreated={handlePostCreated} />

          {loading && (
            <div className="loading-posts">
              <div className="spinner"></div>
              <p>Loading posts...</p>
            </div>
          )}

          {error && <div className="error-message">{error}</div>}

          {!loading && posts.length === 0 && (
            <div className="no-posts">
              <p>No posts yet. Be the first to share something!</p>
            </div>
          )}

          <div className="posts-list">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onPostDeleted={handlePostDeleted}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
