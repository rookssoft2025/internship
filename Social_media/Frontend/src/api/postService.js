import axiosInstance, { API_BASE_URL } from './axios';

const postService = {
  // Get all posts (feed)
  getAllPosts: async () => {
    const response = await axiosInstance.get('/posts');
    return response.data;
  },

  // Create a new post
  createPost: async (formData) => {
    const response = await axiosInstance.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete a post
  deletePost: async (postId) => {
    const response = await axiosInstance.delete(`/posts/${postId}`);
    return response.data;
  },

  // Get post image URL
  getPostImageUrl: (fileName) => {
    if (!fileName) return null;
    return `${API_BASE_URL}/posts/images/${fileName}`;
  },
};

export default postService;
