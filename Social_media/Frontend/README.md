# Social Media Frontend

A modern React frontend for the social media application with authentication, user profiles, and post management.

## Features

- 🔐 **User Authentication** - Signup and login with JWT
- 👤 **User Profiles** - View and edit profile with picture upload
- 📝 **Create Posts** - Share text and images
- 🖼️ **Image Upload** - Upload and display images
- 📱 **Responsive Design** - Mobile-friendly interface
- 🔒 **Protected Routes** - Secure pages with authentication
- 🎨 **Modern UI** - Clean and intuitive design

## Tech Stack

- **React 19** - UI library
- **React Router 6** - Navigation and routing
- **Axios** - HTTP client for API calls
- **Vite** - Fast build tool
- **CSS3** - Modern styling

## Prerequisites

- Node.js 18+ and npm
- Backend API (deployed or running locally)

## Backend Configuration

This frontend is configured to work with the deployed backend at:
**https://social-media-backend-production-8924.up.railway.app**

### Using the Deployed Backend (Default)

The application is pre-configured to use the production backend. No additional setup needed!

### Switching to Local Backend

If you want to use a local backend instead:

1. **Create/Update `.env` file:**
   ```bash
   VITE_API_BASE_URL=http://localhost:8081/api
   ```

2. **Make sure your local backend is running on port 8081**

3. **Restart the development server** (if running)

The `.env.example` file shows all available configuration options.

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173
   ```

## Project Structure

```
Frontend/
├── src/
│   ├── api/                    # API service layer
│   │   ├── axios.js           # Axios instance with interceptors
│   │   ├── authService.js     # Authentication API calls
│   │   ├── userService.js     # User profile API calls
│   │   └── postService.js     # Post API calls
│   ├── components/            # Reusable components
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── CreatePost.jsx     # Post creation form
│   │   ├── PostCard.jsx       # Individual post display
│   │   └── ProtectedRoute.jsx # Route protection wrapper
│   ├── context/               # React context
│   │   └── AuthContext.jsx    # Authentication state management
│   ├── pages/                 # Page components
│   │   ├── Login.jsx          # Login page
│   │   ├── Signup.jsx         # Signup page
│   │   ├── Home.jsx           # Feed/home page
│   │   └── Profile.jsx        # User profile page
│   ├── styles/                # CSS stylesheets
│   │   ├── Auth.css           # Authentication pages styling
│   │   ├── Navbar.css         # Navigation bar styling
│   │   ├── Home.css           # Home page styling
│   │   ├── CreatePost.css     # Post creation styling
│   │   ├── PostCard.css       # Post card styling
│   │   └── Profile.css        # Profile page styling
│   ├── App.jsx                # Main app component with routing
│   ├── App.css                # Global app styles
│   ├── main.jsx               # React entry point
│   └── index.css              # Global CSS reset
├── public/                    # Static assets
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Authentication
- **Signup**: Create a new account with name, email, and password
- **Login**: Authenticate with email and password
- **Auto-login**: Automatic login after signup
- **JWT Storage**: Token stored in localStorage
- **Protected Routes**: Automatic redirect to login if not authenticated

### User Profile
- **View Profile**: Display user information and profile picture
- **Edit Profile**: Update bio and profile picture
- **Image Upload**: Upload profile pictures (max 10MB)
- **Real-time Updates**: Profile updates reflected across the app

### Posts
- **Create Posts**: Share text content with optional images
- **View Feed**: See all posts in chronological order
- **Delete Posts**: Remove your own posts
- **Image Display**: Full-size image viewing
- **Post Metadata**: Author info, timestamps, and profile pictures

### UI/UX
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Modern Design**: Clean gradient aesthetics
- **Smooth Transitions**: Polished animations and hover effects

## API Integration

The frontend is configured to work with the deployed backend or a local backend via environment variables.

### Current Configuration
- **Production Backend**: https://social-media-backend-production-8924.up.railway.app/api
- **Configuration File**: `.env` (create from `.env.example`)

### Authentication Flow
1. User logs in or signs up
2. Backend returns JWT token
3. Token stored in localStorage
4. Token added to all subsequent requests via Axios interceptor
5. On 401 error, user is automatically logged out and redirected

### File Upload
- Uses FormData for multipart/form-data requests
- Supports image preview before upload
- File size validation (max 10MB)
- Automatic cleanup on cancellation

## Testing the Backend Connection

### Quick Test in Browser Console

Once the app is running, open the browser console and run:

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

### Expected Response
You should see either:
- ✅ Success: User object with `id`, `name`, `email`
- ⚠️ Error: "Email already exists" (if test user was already created)

### Testing Workflow
1. **Start the frontend**: `npm run dev`
2. **Open**: http://localhost:5173
3. **Try Signup**: Create a new account
4. **Try Login**: Login with your credentials
5. **Create a Post**: Upload an image and text
6. **View Profile**: Check your profile and edit it

## Troubleshooting

### Backend Connection Issues
- **Check the deployed backend URL** is accessible
- **Verify CORS is enabled** on the backend for your frontend domain
- Check browser console for specific error messages

### CORS Issues
If you encounter CORS errors:
- Backend must allow requests from `http://localhost:5173` (dev) or your deployed frontend domain
- Spring Boot backend should have proper CORS configuration in `SecurityConfig.java`

### API Connection Failed
- **Production**: Check if Railway backend is running and accessible
- **Local**: Verify backend is running on `http://localhost:8081`
- Check network tab in browser DevTools for API responses
- Ensure MongoDB is properly configured

### Images Not Loading
- Check that the backend `uploads/` directory exists and has proper permissions
- Verify file paths in the API responses
- Check browser console for 404 errors
- Ensure backend is serving static files correctly

### Authentication Issues
- Clear localStorage: `localStorage.clear()` in browser console
- Check token is being sent in request headers
- Verify JWT secret matches between backend configuration

