# Backend Configuration Summary

## ✅ Configuration Complete!

Your frontend has been configured to work with the deployed backend at:
**https://social-media-backend-production-8924.up.railway.app**

---

## 📝 Changes Made

### 1. **API Configuration Files Updated**

#### `src/api/axios.js`
- ✅ Updated base URL to use environment variable
- ✅ Falls back to production URL if no env var is set
- ✅ Exports `API_BASE_URL` for other services to use
- 🔧 Configuration: `VITE_API_BASE_URL` from `.env`

#### `src/api/postService.js`
- ✅ Updated to use dynamic `API_BASE_URL` for image URLs
- ✅ Imports `API_BASE_URL` from axios.js

#### `src/api/userService.js`
- ✅ Updated to use dynamic `API_BASE_URL` for profile picture URLs
- ✅ Imports `API_BASE_URL` from axios.js

### 2. **Environment Configuration**

#### `.env` (Created)
```env
VITE_API_BASE_URL=https://social-media-backend-production-8924.up.railway.app/api
```

#### `.env.example` (Created)
- Template file showing available configuration options
- Includes both production and local development URLs
- Safe to commit to git

#### `.gitignore` (Updated)
- ✅ Added `.env` to prevent committing sensitive data
- ✅ Added `.env.local` and `.env.production`

### 3. **Documentation**

#### `README.md` (Updated)
- ✅ Added backend configuration section
- ✅ Added instructions for switching between production and local backend
- ✅ Added backend connection testing guide
- ✅ Enhanced troubleshooting section
- ✅ Updated API integration details

#### `test-backend.html` (Created)
- ✅ Standalone HTML file to test backend connectivity
- ✅ Tests signup, login, and basic connection
- ✅ Visual feedback with success/error messages
- ✅ Can be opened directly in browser

---

## 🚀 Next Steps

### 1. **Test the Backend Connection**

Open the test page in your browser:
```bash
# Just open this file in any browser
test-backend.html
```

Or run the quick browser console test (once your app is running):
```javascript
fetch('https://social-media-backend-production-8924.up.railway.app/api/auth/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    name: 'Test User', 
    email: 'test@example.com', 
    password: 'test123' 
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

### 2. **Start the Development Server**

```bash
npm install  # If you haven't already
npm run dev
```

### 3. **Test the Application**

1. Open http://localhost:5173
2. Click "Sign Up" and create a new account
3. After signup, you'll be automatically logged in
4. Try creating a post with an image
5. Visit your profile and update it

---

## 🔧 Configuration Options

### Use Production Backend (Default)
No configuration needed! The app is already set up.

### Use Local Backend
1. Create/update `.env`:
   ```env
   VITE_API_BASE_URL=http://localhost:8081/api
   ```
2. Make sure your local backend is running on port 8081
3. Restart the dev server: `npm run dev`

---

## 🐛 Troubleshooting

### Backend Not Responding
- Check if the Railway URL is accessible in your browser
- Verify the backend is deployed and running
- Check for CORS errors in browser console

### CORS Errors
The backend must allow requests from:
- `http://localhost:5173` (development)
- Your production frontend domain (if deployed)

Backend CORS configuration should be in `SecurityConfig.java`:
```java
.cors(cors -> cors.configurationSource(request -> {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOrigins(Arrays.asList(
        "http://localhost:5173",
        "https://your-frontend-domain.com"
    ));
    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    config.setAllowedHeaders(Arrays.asList("*"));
    config.setAllowCredentials(true);
    return config;
}))
```

### Images Not Loading
- Verify the backend is serving images from `/api/posts/images/` and `/api/users/profile-pictures/`
- Check browser console for 404 errors
- Ensure backend `uploads/` directory exists with proper permissions

### Token Issues
Clear your browser's localStorage:
```javascript
localStorage.clear()
```
Then try logging in again.

---

## 📊 API Endpoints (Backend)

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login to account

### User Profile
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update profile (multipart/form-data)
- `GET /api/users/profile-pictures/{fileName}` - Get profile picture

### Posts
- `GET /api/posts` - Get all posts (feed)
- `POST /api/posts` - Create new post (multipart/form-data)
- `DELETE /api/posts/{postId}` - Delete post
- `GET /api/posts/images/{fileName}` - Get post image

---

## 📦 File Structure

```
Frontend/
├── .env                        # Environment variables (git-ignored)
├── .env.example                # Environment template
├── test-backend.html           # Backend testing utility
├── README.md                   # Updated documentation
└── src/
    └── api/
        ├── axios.js            # ✅ Updated - Dynamic URL
        ├── postService.js      # ✅ Updated - Dynamic URLs
        └── userService.js      # ✅ Updated - Dynamic URLs
```

---

## ✨ Features Enabled

- ✅ User authentication (signup/login)
- ✅ JWT token management
- ✅ User profiles with bio and profile pictures
- ✅ Create posts with text and images
- ✅ View posts feed
- ✅ Delete your own posts
- ✅ Image upload (max 10MB)
- ✅ Protected routes
- ✅ Automatic token refresh handling
- ✅ Error handling and user feedback

---

## 🎯 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📞 Support

If you encounter any issues:

1. Check browser console for errors
2. Use the test-backend.html tool
3. Verify backend is running and accessible
4. Check CORS configuration
5. Review the troubleshooting section in README.md

---

**Configuration completed successfully! 🎉**

You can now start developing and testing your social media application!
