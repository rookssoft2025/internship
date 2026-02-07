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
- Backend API running on `http://localhost:8080`

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

The frontend communicates with the backend API at `http://localhost:8080/api`. To change this, update the `API_BASE_URL` in `src/api/axios.js`.

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

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your backend has CORS enabled for `http://localhost:5173`.

### API Connection Failed
- Verify backend is running on `http://localhost:8080`
- Check network tab in browser DevTools for API responses
- Ensure MongoDB is running

### Images Not Loading
- Check that the backend `uploads/` directory exists
- Verify file paths in the API responses
- Check browser console for 404 errors

