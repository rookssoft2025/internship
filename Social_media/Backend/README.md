Social Media Backend API

This is a Spring Boot REST API for a simple social media app.
It handles authentication, user profiles, posts, and image uploads.

Tech used

Java 21
Spring Boot
MongoDB
Spring Security + JWT
Maven
Lombok
Multipart file upload

API overview

Authentication

POST /api/auth/signup
POST /api/auth/login
User profile (JWT required)
GET /api/users/me
PUT /api/users/me (bio + profile picture)
GET /api/users/profile-pictures/{fileName}
Posts (JWT required)
POST /api/posts (text + image)
GET /api/posts (feed)
DELETE /api/posts/{postId}
GET /api/posts/images/{fileName}