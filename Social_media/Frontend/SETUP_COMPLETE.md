# 🎯 Frontend Configuration Summary

## ✅ What Was Done

Your frontend has been successfully configured to connect with the deployed backend!

### Backend URL
```
https://social-media-backend-production-8924.up.railway.app/api
```

---

## 📋 Files Modified/Created

### ✏️ Modified Files

1. **`src/api/axios.js`**
   - Updated base URL to use environment variables
   - Falls back to production URL
   - Exports `API_BASE_URL` for other services

2. **`src/api/postService.js`**
   - Updated to use dynamic `API_BASE_URL` for image URLs

3. **`src/api/userService.js`**
   - Updated to use dynamic `API_BASE_URL` for profile picture URLs

4. **`.gitignore`**
   - Added `.env` files to prevent committing sensitive data

5. **`README.md`**
   - Added backend configuration instructions
   - Added troubleshooting guide
   - Added testing instructions

### 📄 New Files Created

1. **`.env`**
   - Environment configuration with backend URL
   ```env
   VITE_API_BASE_URL=https://social-media-backend-production-8924.up.railway.app/api
   ```

2. **`.env.example`**
   - Template for environment variables

3. **`test-backend.html`**
   - Standalone HTML testing tool for backend connectivity
   - Can be opened directly in a browser

4. **`test-backend.ps1`**
   - PowerShell script to test backend API

5. **`BACKEND_CONFIGURATION.md`**
   - Detailed configuration documentation

---

## ⚠️ Important Note: Backend Connectivity

**The backend URL appears to be unreachable at the moment.**

This could be because:
1. ❌ The backend is not deployed yet on Railway
2. ❌ The backend deployment is paused/stopped
3. ❌ The URL is incorrect
4. ❌ Network/DNS issues

### What You Should Do:

#### Option 1: Verify the Backend Deployment
1. Log into Railway dashboard
2. Check if the backend service is running
3. Verify the deployment URL matches:
   ```
   https://social-media-backend-production-8924.up.railway.app
   ```
4. Check the logs for any errors

#### Option 2: Use Local Backend Instead
If you have the backend running locally:

1. **Update `.env` file:**
   ```env
   VITE_API_BASE_URL=http://localhost:8081/api
   ```

2. **Start your local backend** (make sure it's on port 8081)

3. **Restart the frontend** if it's already running

#### Option 3: Deploy the Backend First
If the backend isn't deployed yet:

1. Deploy your Spring Boot backend to Railway
2. Get the deployment URL
3. Update `.env` with the correct URL
4. Restart the frontend development server

---

## 🚀 Next Steps

### Step 1: Verify Backend is Running

**Check if the backend URL is accessible:**
1. Open your browser
2. Navigate to: `https://social-media-backend-production-8924.up.railway.app`
3. You should see some response (even an error page means it's reachable)

### Step 2: Test Backend API

**Option A: Using Browser Console**
1. Open your browser console (F12)
2. Run this code:
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

**Option B: Using the Test Page**
1. Open `test-backend.html` in your browser
2. Click "Run All Tests"
3. Check the results

**Option C: Using PowerShell Script**
```powershell
.\test-backend.ps1
```

### Step 3: Start the Frontend

Once the backend is confirmed working:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Then open: http://localhost:5173

---

## 🧪 Testing the Application

### 1. Sign Up
- Navigate to the Signup page
- Enter name, email, and password
- Click "Sign Up"
- You should be automatically logged in

### 2. Create a Post
- From the Home page, use the Create Post form
- Add text content
- Optionally upload an image (max 10MB)
- Click "Post"

### 3. View Profile
- Click "Profile" in the navbar
- Edit your bio
- Upload a profile picture
- Click "Update Profile"

### 4. View Feed
- See all posts on the Home page
- View user names and profile pictures
- Delete your own posts

---

## 🔧 Configuration Reference

### Environment Variables

Create or edit `.env` in the project root:

```env
# Production Backend (Railway)
VITE_API_BASE_URL=https://social-media-backend-production-8924.up.railway.app/api

# OR Local Backend
# VITE_API_BASE_URL=http://localhost:8081/api
```

**Note:** After changing `.env`, you must restart the dev server!

### Switching Between Backends

**To use Production Backend:**
```env
VITE_API_BASE_URL=https://social-media-backend-production-8924.up.railway.app/api
```

**To use Local Backend:**
```env
VITE_API_BASE_URL=http://localhost:8081/api
```

---

## 🐛 Troubleshooting

### Problem: "Backend URL not reachable"

**Solutions:**
1. ✅ Verify backend is deployed and running
2. ✅ Check Railway deployment logs
3. ✅ Try accessing the URL in a browser
4. ✅ Check for typos in the URL
5. ✅ Use local backend instead (temporarily)

### Problem: CORS Errors

**Symptoms:**
- Requests blocked by browser
- Error: "Access-Control-Allow-Origin"

**Solutions:**
1. Backend must allow your frontend domain in CORS configuration
2. For local dev: `http://localhost:5173` must be allowed
3. Check backend `SecurityConfig.java` CORS settings

**Backend CORS Configuration (Spring Boot):**
```java
.cors(cors -> cors.configurationSource(request -> {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOrigins(Arrays.asList(
        "http://localhost:5173",  // Development
        "https://your-frontend.com"  // Production
    ));
    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    config.setAllowedHeaders(Arrays.asList("*"));
    config.setAllowCredentials(true);
    return config;
}))
```

### Problem: Images Not Loading

**Solutions:**
1. ✅ Check backend logs for file upload errors
2. ✅ Verify `uploads/` directory exists with write permissions
3. ✅ Check image URLs in browser network tab
4. ✅ Ensure backend serves static files from `/api/posts/images/` and `/api/users/profile-pictures/`

### Problem: Login/Signup Not Working

**Solutions:**
1. ✅ Open browser console and check for errors
2. ✅ Verify backend `/api/auth/signup` and `/api/auth/login` endpoints are working
3. ✅ Check MongoDB connection in backend
4. ✅ Clear localStorage: `localStorage.clear()` in browser console

---

## 📚 API Endpoints

All endpoints are prefixed with `/api`

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Create new account |
| POST | `/auth/login` | Login to account |

### User Profile
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users/me` | Get current user profile |
| PUT | `/users/me` | Update profile |
| GET | `/users/profile-pictures/{fileName}` | Get profile picture |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all posts (feed) |
| POST | `/posts` | Create new post |
| DELETE | `/posts/{postId}` | Delete post |
| GET | `/posts/images/{fileName}` | Get post image |

---

## 📦 Project Structure

```
Frontend/
├── .env                          # ✅ Your backend configuration
├── .env.example                  # ✅ Template
├── .gitignore                    # ✅ Updated
├── test-backend.html             # ✅ Testing tool
├── test-backend.ps1              # ✅ PowerShell test script
├── BACKEND_CONFIGURATION.md      # ✅ This guide
├── README.md                     # ✅ Updated
├── package.json
├── vite.config.js
└── src/
    ├── api/
    │   ├── axios.js              # ✅ Updated - Dynamic URL
    │   ├── authService.js
    │   ├── postService.js        # ✅ Updated
    │   └── userService.js        # ✅ Updated
    ├── components/
    ├── context/
    ├── pages/
    └── styles/
```

---

## ✨ Features Ready

Once the backend is running, you'll have:

- ✅ User authentication (signup/login)
- ✅ JWT token management
- ✅ User profiles with bio and pictures
- ✅ Create posts with text and images
- ✅ View posts feed
- ✅ Delete your own posts
- ✅ Image upload (max 10MB)
- ✅ Protected routes
- ✅ Automatic logout on token expiration
- ✅ Responsive mobile-friendly design

---

## 📝 Quick Command Reference

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Test backend API (PowerShell)
.\test-backend.ps1
```

---

## 🎓 Learning Resources

### Backend Documentation
- Railway Deployment Docs: https://docs.railway.app/
- Spring Boot Docs: https://spring.io/projects/spring-boot
- MongoDB Atlas: https://www.mongodb.com/docs/atlas/

### Frontend
- React: https://react.dev/
- React Router: https://reactrouter.com/
- Axios: https://axios-http.com/
- Vite: https://vitejs.dev/

---

## 🆘 Need Help?

### Checklist Before Starting

- [ ] Backend is deployed and accessible
- [ ] Railway deployment shows "Active" status
- [ ] MongoDB is connected (check backend logs)
- [ ] CORS is configured for `http://localhost:5173`
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created with correct URL
- [ ] Test script shows successful connection

### Still Having Issues?

1. **Check Railway Logs**
   - Go to Railway dashboard
   - Check deployment logs for errors

2. **Check Browser Console**
   - Open DevTools (F12)
   - Look for network errors
   - Check API request/response

3. **Use Test Tools**
   - Run `test-backend.ps1`
   - Open `test-backend.html`
   - Check specific error messages

4. **Verify Backend Health**
   - MongoDB connection
   - File upload directory permissions
   - JWT secret configuration
   - Port configuration (8081)

---

## ✅ Final Checklist

Before you start developing:

1. ✅ Frontend configured with backend URL
2. ⚠️ Backend deployed and accessible (NEEDS VERIFICATION)
3. ✅ Environment variables set up
4. ✅ Testing tools available
5. ✅ Documentation updated
6. ✅ Git configuration updated (.gitignore)

**Next Action:** Verify the backend deployment on Railway and ensure it's running!

---

**Configuration Complete! 🎉**

Once your backend is confirmed running, you're ready to start testing and developing!
