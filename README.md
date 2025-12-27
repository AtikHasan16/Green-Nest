# 🌿 LeafStore – Indoor Plant Care & Store

**Live Link:** [Visit Live](https://green-earth-initiative-ai.netlify.app/)

LeafStore is a beautifully designed single-page web application (SPA) for plant lovers who wish to create greener, healthier, and more aesthetic living spaces. The platform helps users explore indoor plant collections, identify unknown plants using AI, learn plant care tips, and book consultations with plant experts.

---
## Preview --

![leafStore banner](https://raw.githubusercontent.com/AtikHasan16/GitHub-banner/refs/heads/main/green-earth-initiative-ai.netlify.app_ai-search.png)

## 🌱 Project Overview

**LeafStore** provides:

- **AI-Powered Plant Identification** powered by Google Gemini.
- A smooth, responsive, and nature-inspired user experience.
- Secure authentication using Firebase (Email/Password + Google Sign-In).
- Protected routes for viewing plant details and managing user profiles.
- Dynamic plant data fetched from JSON.
- Interactive maps for store location.

---

## 🎯 Core Features

### 🤖 AI Plant Identifier (New!)

- **Image Recognition:** Upload a photo of any plant to instantly identify it.
- **Smart Analysis:** Powered by **Google Gemini 2.5 Flash**, providing:
  - Plant Name & Scientific Name
  - Detailed Description
  - Specific Care Instructions
- **User-Friendly Interface:** Drag-and-drop upload with real-time preview and loading states.
- **Route:** `/ai-search`

### 🏠 Home Page

- **Hero Section:** Animated slider using _Swiper.js_ with plant imagery and motivational quotes.
- **Top Rated Indoor Plants:** Dynamic cards showing name, price, rating, and a _View Details_ button.
- **Plant Care Tips:** Essential guidance on watering, sunlight, and fertilizer.
- **Meet Our Green Experts:** Showcase of plant specialists.

### 🌿 Plants & Catalogue

- **Full Listing:** Browse all available plants on the `/plants` page.
- **Smart Sorting & Filtering:**
  - Sort by **Price** (Low to High / High to Low)
  - Sort by **Rating** (Ascending / Descending)
- **Responsive Grid:** Optimized layout for all screen sizes.

### 📍 Contact & Map

- **Interactive Map:** Leaflet-based map allowing users to find the collection center.
- **Contact Form:** Functional form for validation and user inquiries.
- **FAQ Section:** Expandable questions and answers.

### 🪴 Plant Details (Protected Route)

- **Comprehensive Info:** Large images, descriptions, price, stock, and provider details.
- **Booking System:** Consultation booking form accessible only to logged-in users.
- **Secure Access:** Redirects unauthenticated users to Login.

### 👤 My Profile Page

- **Dashboard:** View user details (Name, Email, Photo).
- **Edit Profile:** Real-time profile updates using Firebase `updateProfile`.

### 🔐 Authentication System

- **Firebase Auth:**
  - Login / Registration
  - Google Social Login
  - Password Reset
- **Security:** Password strength validation and protected route guards.

---

## 🛠 Technology Stack

- **Frontend:** React.js, React Router v7
- **Styling:** Tailwind CSS, DaisyUI
- **AI Integration:** Google Gemini API (`@google/genai` / REST)
- **Authentication:** Firebase Auth
- **Map:** React Leaflet
- **Animations:** Framer Motion, React Spinners
- **Notifications:** React Toastify

---

## 🚀 Getting Started

1.  **Clone the repository**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Setup Environment Variables:**
    Create a `.env.local` file with:
    ```env
    VITE_APIKEY=your_firebase_key
    VITE_AUTHDOMAIN=...
    VITE_GEMINI_API_KEY=your_gemini_key
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
