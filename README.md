# 🌿 GreenEarth – Indoor Plant Care & Store

**Live Link:** [https://green-nest-planet.netlify.app/](https://green-nest-planet.netlify.app/)

GreenEarth is a beautifully designed single-page web application (SPA) for plant lovers who wish to create greener, healthier, and more aesthetic living spaces. The platform helps users explore indoor plant collections, learn plant care tips, and book consultations with plant experts — all in one place.

---

## 🌱 Project Overview

**GreenEarth** provides:

- A smooth, responsive, and nature-inspired user experience.
- Secure authentication using Firebase (Email/Password + Google Sign-In).
- Protected routes for viewing plant details and managing user profiles.
- Dynamic plant data fetched from JSON.
- A user-friendly SPA experience built with React Router.

---

## 🎯 Core Features

### 🏠 Home Page

- **Hero Section:** Animated slider using _Swiper.js / Framer Motion_ with plant imagery and motivational quotes.
- **Top Rated Indoor Plants:** Dynamic cards fetched from `plants.json`, showing name, price, rating, and a _View Details_ button.
- **Plant Care Tips:** Static or mock data about watering, sunlight, and fertilizer guidance.
- **Meet Our Green Experts:** A section showcasing plant experts with names, images, and specializations.
- **Extra Section:** “Plant of the Week” or “Eco Décor Ideas” – creative, optional extra section for added value.

### 🪴 Plant Details (Protected Route)

- Displays full details of a selected plant from `plants.json`.
- Accessible only to logged-in users. If not authenticated → redirects to Login.
- Includes:
  - Large plant image
  - Name, description, price, rating, stock, provider name
  - **Book Consultation** form (Name, Email, Book Now)
  - Success toast after booking confirmation.

### 👤 My Profile Page

- Displays logged-in user’s:
  - Name
  - Email
  - Profile photo
- “Update Profile” button allows real-time updates using Firebase’s `updateProfile()`.

### 🔐 Authentication System

- Firebase-based authentication with:
  - **Sign Up**
  - **Login**
  - **Google Sign-In**
  - **Forgot Password**
- Password validation:
  - Minimum 6 characters
  - At least one uppercase and one lowercase letter
- Password toggle (show/hide) for better UX.
- Redirects to the intended route after successful authentication.

### 🧩 JSON Data

`plants.json` file includes at least 6 plant objects with:

```json
[
  {
    "plantId": 1,
    "plantName": "Snake Plant",
    "category": "Air Purifier",
    "price": 18,
    "rating": 4.8,
    "availableStock": 10,
    "careLevel": "Easy",
    "description": "A hardy plant that purifies indoor air and thrives in low light.",
    "image": "https://i.postimg.cc/example1.png",
    "providerName": "UrbanGreen Studio"
  }
]
```
