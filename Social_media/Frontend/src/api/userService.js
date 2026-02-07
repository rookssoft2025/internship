import axiosInstance from './axios';

const userService = {
  // Get current user profile
  getProfile: async () => {
    const response = await axiosInstance.get('/users/me');
    return response.data;
  },

  // Update user profile
  updateProfile: async (formData) => {
    const response = await axiosInstance.put('/users/me', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // Update user in localStorage
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  // Get profile picture URL
  getProfilePictureUrl: (fileName) => {
    if (!fileName) return null;
    return `http://localhost:8080/api/users/profile-pictures/${fileName}`;
  },
};

export default userService;
