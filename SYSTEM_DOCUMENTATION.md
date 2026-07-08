# Invikt AI — Full System Documentation

> **Project:** Invikt AI Web Application  
> **Type:** AI-Powered Career Intelligence Platform  
> **Architecture:** Full-Stack MERN (MongoDB · Express · React · Node.js)  
> **Last Updated:** July 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Full Tech Stack](#2-full-tech-stack)
3. [System Architecture](#3-system-architecture)
4. [Frontend — Pages & Features](#4-frontend--pages--features)
5. [Backend — API & Controllers](#5-backend--api--controllers)
6. [Database — MongoDB Schemas](#6-database--mongodb-schemas)
7. [API Endpoint Reference](#7-api-endpoint-reference)
8. [Security Architecture](#8-security-architecture)
9. [Project Folder Structure](#9-project-folder-structure)
10. [Environment Configuration](#10-environment-configuration)
11. [Running the Application](#11-running-the-application)
12. [Roadmap — Next Steps](#12-roadmap--next-steps)

---

## 1. Project Overview

**Invikt AI** is a full-stack, AI-powered career platform designed to help students and job seekers manage every aspect of their career journey — from tracking job applications to following structured learning roadmaps, analyzing resumes, and identifying skill gaps.

The platform operates in two user modes:

| Mode | Description |
|---|---|
| **Student/User** | Access to the personal Dashboard, Job Tracker, Career Paths, Learning Hub, Resume Analyzer, and Settings |
| **Admin** | Access to a separate Admin Dashboard with user management, roadmap control, application monitoring, and security settings |

---

## 2. Full Tech Stack

### Frontend

| Technology | Version / Library | Purpose |
|---|---|---|
| **React** | v19+ | Core UI framework (Component-based SPA) |
| **React Router DOM** | v7+ | Client-side routing and navigation |
| **Vite** | v5+ | Build tool and local dev server |
| **Tailwind CSS** | v4.2+ | Utility-first CSS framework — all styling, dark/light mode, responsive design |
| **@tailwindcss/vite** | v4.2+ | Official Vite plugin that integrates Tailwind v4 into the build pipeline |
| **PostCSS + Autoprefixer** | Latest | CSS transformation pipeline used by Tailwind |
| **@xyflow/react** | v12+ | Interactive node-based diagrams for Career Roadmap visualization |
| **dagre** | v0.8+ | Graph layout algorithm used with xyflow for roadmap auto-layout |
| **html-to-image** | v1.11+ | Converts roadmap canvas to downloadable PNG images |
| **Google Material Symbols** | Icon Font | Icon system used throughout the entire UI |
| **Manrope + Inter** | Google Fonts | Premium typography — Manrope for headlines, Inter for body text |

> **Tailwind v4 Note:** This project uses the **new Tailwind CSS v4** architecture. It uses `@import "tailwindcss"` instead of the old `@tailwind base/components/utilities` directives, and `@theme {}` blocks instead of `tailwind.config.js` for design tokens.

### Backend

| Technology | Version / Library | Purpose |
|---|---|---|
| **Node.js** | v18+ | JavaScript runtime for the server |
| **Express.js** | v4+ | Web framework — handles routes, middleware, and REST API |
| **Mongoose** | v7+ | ODM (Object Document Mapper) for MongoDB |
| **CORS** | npm package | Cross-Origin Resource Sharing — allows frontend to call backend |
| **dotenv** | npm package | Loads environment variables from `.env` file securely |
| **nodemon** | Dev dependency | Auto-restarts server on file changes during development |
| **bcryptjs** | npm package | Hashes user passwords before storing in the database |
| **jsonwebtoken** | npm package | Creates and verifies JWT tokens for user authentication |
| **helmet** | npm package | Automatically sets secure HTTP headers to protect the API |
| **express-rate-limit** | npm package | Prevents brute force attacks by limiting repeated API requests |
| **express-validator** | npm package | Validates and sanitizes incoming request body data |
| **multer** | npm package | Handles multipart file uploads (Resume PDF/image uploads) |

### Database

| Technology | Details | Purpose |
|---|---|---|
| **MongoDB Atlas** | Cloud-hosted, M0 Free Tier | Primary database — NoSQL document store |
| **Cluster Name** | `invikt-cluster` | Dedicated isolated cluster |
| **Database Name** | `invikt_ai` | All collections stored in this isolated database |
| **Collections** | `users`, `jobapplications`, `roadmapprogresses` | Core data collections |

### Architecture Pattern

- **MVC (Model-View-Controller)** — Backend follows strict MVC separation
- **REST API** — Standard HTTP verbs (GET, POST, PUT, DELETE)
- **SPA (Single Page Application)** — Frontend is a React SPA using React Router for navigation
- **Isolated Database** — `invikt_ai` database is fully separate from any other projects

---

## 3. System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     USER BROWSER                             │
│  React Frontend (Vite Dev Server — localhost:5173)          │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  Pages/Views │  │  Components  │  │   React Router   │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└────────────────────────────┬────────────────────────────────┘
                             │  HTTP Fetch (REST API calls)
                             │  to http://localhost:5000/api/*
                             ▼
┌─────────────────────────────────────────────────────────────┐
│              Node.js + Express Backend                       │
│                  (Port 5000)                                 │
│                                                             │
│  ┌─────────────┐   ┌──────────────┐   ┌─────────────────┐  │
│  │   Routes    │──▶│  Controllers │──▶│  Mongoose Models│  │
│  │  /api/jobs  │   │jobController │   │ JobApplication  │  │
│  └─────────────┘   └──────────────┘   │ User            │  │
│                                        │ RoadmapProgress │  │
│  Middleware: CORS · express.json()     └────────┬────────┘  │
└────────────────────────────────────────────────┼───────────┘
                                                 │  Mongoose connect()
                                                 ▼
┌─────────────────────────────────────────────────────────────┐
│              MongoDB Atlas Cloud Cluster                     │
│              (invikt-cluster.6uidaje.mongodb.net)            │
│                                                             │
│  Database: invikt_ai                                        │
│  ├── Collection: jobapplications                            │
│  ├── Collection: users                                      │
│  └── Collection: roadmapprogresses                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Frontend — Pages & Features

### Public Routes

| Route | Page | Description |
|---|---|---|
| `/` | `LandingPage.jsx` | Public landing/marketing page |
| `/signin` | `SignInPage.jsx` | User login form with email/password |
| `/signup` | `SignUpPage.jsx` | User registration form |
| `/forgot-password` | `ResetPasswordPage.jsx` | Password reset flow |

### User Dashboard Routes (DashboardLayout)

| Route | Page | Key Features |
|---|---|---|
| `/dashboard` | `DashboardPage.jsx` | Overview metrics, active roadmap widget, quick actions, recent activity feed |
| `/job-tracker` | `JobTrackerPage.jsx` | **Core Feature** — Full Kanban & Table view job application manager |
| `/resume` | `ResumeAnalyzerPage.jsx` | Resume upload and AI-powered analysis |
| `/skill-gap` | `SkillGapPage.jsx` | Skill gap identification between user profile and job requirements |
| `/career-path` | `CareerPathPage.jsx` | Browse curated career roadmaps |
| `/career-path/:id` | `RoadmapDetail.jsx` | Individual interactive roadmap with node completion tracking |
| `/learning-hub` | `LearningHubPage.jsx` | Curated learning resources and courses |
| `/settings` | `SettingsPage.jsx` | Profile, preferences, and account settings |

### Admin Dashboard Routes (AdminLayout)

| Route | Page | Description |
|---|---|---|
| `/admin/dashboard` | `AdminDashboardPage.jsx` | Platform-wide metrics and health overview |
| `/admin/users` | `AdminUsersPage.jsx` | View, manage, and monitor all registered users |
| `/admin/roadmaps` | `AdminRoadmapsPage.jsx` | Create and manage career roadmap content |
| `/admin/applications` | `AdminApplicationsPage.jsx` | Monitor all job applications across users |
| `/admin/security` | `AdminSecurityPage.jsx` | Security logs, access control, user sessions |
| `/admin/settings` | `AdminSettingsPage.jsx` | Global platform settings and configuration |

---

### 4.1 Job Tracker — Detailed Feature Breakdown

The Job Tracker (`/job-tracker`) is the most feature-rich module in the platform, connected fully to the MongoDB backend.

**View Modes:**

| Mode | Component | Description |
|---|---|---|
| **Board View (Kanban)** | `KanbanBoard.jsx` | Drag-and-drop-style card columns per application stage |
| **Table View** | `TableView.jsx` | Spreadsheet-style list with bulk selection and delete |

**Application Stages (Pipeline):**

| Stage Key | Display Name | Color |
|---|---|---|
| `WISHLIST` | Wishlist | Gray |
| `APPLIED` | Applied | Cyan |
| `ASSESSMENT` | Assessment | Violet |
| `INTERVIEW` | Interview | Emerald |
| `FINAL_INTERVIEW` | Final Interview | Indigo |
| `OFFER` | Offer | Fuchsia |
| `REJECTED` | Rejected | Rose |

**Core Job Tracker Functions:**

| Function | How It Works |
|---|---|
| **Fetch All Jobs** | `useEffect` on mount → `GET /api/jobs` → renders jobs in Kanban or Table |
| **Add Application** | "Add Application" modal form → `POST /api/jobs` → adds to live state |
| **Edit Application** | Side drawer with inline edit → `PUT /api/jobs/:id` → updates MongoDB |
| **Delete Application** | Archive button in drawer → `DELETE /api/jobs/:id` → removes from DB |
| **Bulk Delete** | Checkbox selection in Table View → parallel `DELETE` requests for all selected |
| **Search** | Client-side filter on company name and job role |
| **Status Filter** | Client-side filter dropdown by pipeline stage |
| **Stats Panel** | Derived stats (total, in progress, interviews, offers, success rate) computed via `useMemo` |
| **Application Drawer** | Click any card → right-side detail panel with timeline and edit mode |
| **Timeline** | Auto-calculated applied/assessment/interview dates shown in drawer |

---

## 5. Backend — API & Controllers

### Server Entry Point: `server.js`

```
Express App Initialization
├── dotenv.config()           → Loads .env variables
├── connectDB()               → Connects to MongoDB Atlas
├── app.use(cors())           → Enables cross-origin requests
├── app.use(express.json())   → Parses JSON request bodies
└── app.use('/api/jobs', jobRoutes) → Mounts job API routes
```

### Database Config: `config/db.js`

Establishes the MongoDB connection using `mongoose.connect()` with the `MONGO_URI` from environment variables. If connection fails, the process exits with code 1.

### Job Controller: `controllers/jobController.js`

All CRUD operations for job applications:

| Function | HTTP Method | Route | Description |
|---|---|---|---|
| `getJobs` | `GET` | `/api/jobs` | Returns all job applications, sorted newest first |
| `addJob` | `POST` | `/api/jobs` | Creates a new job application in MongoDB |
| `updateJob` | `PUT` | `/api/jobs/:id` | Updates an existing job application by MongoDB `_id` |
| `deleteJob` | `DELETE` | `/api/jobs/:id` | Permanently deletes a job application by MongoDB `_id` |

**Note:** All operations currently use a `mockUserId` as a placeholder. This will be replaced with the authenticated user's real `_id` once JWT authentication is implemented.

---

## 6. Database — MongoDB Schemas

### `users` Collection — `models/User.js`

Stores registered user accounts.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | String | ✅ Yes | Full display name |
| `email` | String | ✅ Yes | Unique login email |
| `passwordHash` | String | ✅ Yes | Bcrypt-hashed password (never stored as plain text) |
| `profilePicture` | String | No | URL to avatar image (default: empty string) |
| `role` | String (enum) | No | `"student"` or `"admin"` (default: `"student"`) |
| `createdAt` | Date | Auto | Account creation timestamp |

---

### `jobapplications` Collection — `models/JobApplication.js`

Stores every job application entry linked to a user.

| Field | Type | Required | Description |
|---|---|---|---|
| `userId` | ObjectId (ref: User) | ✅ Yes | References the owning user account |
| `company` | String | ✅ Yes | Company name |
| `role` | String | ✅ Yes | Job title/position |
| `stage` | String (enum) | No | Pipeline stage — default: `"WISHLIST"` |
| `badge` | String | No | Badge label shown on the Kanban card |
| `source` | String | No | How the job was found (default: `"Direct"`) |
| `location` | String | No | Job location (city/remote) |
| `employmentType` | String | No | Full-time, Part-time, Contract, etc. |
| `jobUrl` | String | No | URL to the job listing |
| `dateApplied` | Date | No | Date the user applied |
| `notes` | String | No | Personal notes about the application |
| `info` | String | No | Urgency info (e.g., "Due: 24h") |
| `logoColor` | String | No | Tailwind CSS color classes for the logo avatar |
| `logoText` | String | No | 2-letter abbreviation shown in the logo avatar |
| `createdAt` | Date | Auto | Timestamp (via Mongoose `timestamps: true`) |
| `updatedAt` | Date | Auto | Last update timestamp |

---

### `roadmapprogresses` Collection — `models/RoadmapProgress.js`

Stores a user's completion progress for each career roadmap.

| Field | Type | Required | Description |
|---|---|---|---|
| `userId` | ObjectId (ref: User) | ✅ Yes | References the owning user account |
| `roadmapId` | String | ✅ Yes | Identifier for the specific career roadmap |
| `completedNodes` | [String] | No | Array of node IDs the user has completed |
| `progressPercentage` | Number | No | Computed progress % (default: `0`) |
| `lastUpdated` | Date | Auto | Timestamp of last progress update |

---

## 7. API Endpoint Reference

**Base URL (Development):** `http://localhost:5000`

| Method | Endpoint | Description | Request Body | Response |
|---|---|---|---|---|
| `GET` | `/api/jobs` | Get all job applications | None | `{ success, count, data[] }` |
| `POST` | `/api/jobs` | Create a new job application | Job object (JSON) | `{ success, data }` |
| `PUT` | `/api/jobs/:id` | Update a job application | Updated fields (JSON) | `{ success, data }` |
| `DELETE` | `/api/jobs/:id` | Delete a job application | None | `{ success, data: {} }` |
| `GET` | `/` | Health check | None | `"Invikt AI API is running..."` |

### Example POST Request Body

```json
{
  "company": "Google",
  "role": "UX Researcher",
  "stage": "APPLIED",
  "location": "Mountain View, CA",
  "employment": "Full-time",
  "jobUrl": "https://careers.google.com/...",
  "dateApplied": "2026-07-08",
  "notes": "Applied through referral",
  "badge": "APPLIED",
  "logoText": "GO",
  "logoColor": "bg-red-500/10 text-red-400"
}
```

### Standard Response Format

```json
{
  "success": true,
  "count": 5,
  "data": [ ... ]
}
```

### Error Response Format

```json
{
  "success": false,
  "error": "Error message here"
}
```

---

## 8. Security Architecture

### Current Security Measures (Implemented)

| Layer | Measure | Details |
|---|---|---|
| **Database Isolation** | Dedicated MongoDB Project | `invikt_ai` database lives in a completely separate Atlas project from all other projects |
| **Network Security** | MongoDB Atlas IP Allowlist | Only whitelisted IP addresses can connect to the cluster |
| **Database Auth** | Atlas Database User | Dedicated DB user (`nasikmohamednzk2020_invikt_user`) with `readWrite` role only — not admin |
| **Credential Security** | `.env` File | All secrets (connection strings, passwords, ports) stored in `.env` and NEVER committed to Git |
| **Git Protection** | `.gitignore` | The `.env` file is listed in `.gitignore` so credentials are never pushed to GitHub |
| **CORS Policy** | Express CORS middleware | Only configured origins can make API calls to the backend |
| **Password Storage** | `passwordHash` field | User model stores only the hashed version of passwords (bcrypt-ready schema) |
| **Input Validation** | Mongoose Schema Validation | `required` fields and `enum` restrictions prevent invalid data from entering the database |
| **Error Handling** | Try-catch in all controllers | Server errors return a clean JSON response and never expose stack traces to clients |

### Security Roadmap (Planned)

| Feature | Status | Description |
|---|---|---|
| **JWT Authentication** | 🔜 Planned | JSON Web Tokens to authenticate users and replace the mock `userId` |
| **Password Hashing** | 🔜 Planned | `bcryptjs` to hash passwords before storing in the `passwordHash` field |
| **Protected Routes** | 🔜 Planned | Express middleware to verify JWT on all private API routes |
| **Rate Limiting** | 🔜 Planned | `express-rate-limit` to prevent brute-force attacks on the API |
| **Helmet.js** | 🔜 Planned | HTTP security headers (XSS protection, content type, HSTS, etc.) |
| **Frontend Auth Guard** | 🔜 Planned | React route protection — redirect unauthenticated users to `/signin` |
| **HTTPS** | 🔜 Planned | SSL/TLS for production deployment (Render, Vercel, or Railway) |

---

## 9. Project Folder Structure

```
invikt ai -webapp/
├── .gitignore                         # Prevents .env and node_modules from being committed
│
├── frontend/                          # React + Vite SPA
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json                   # Frontend dependencies
│   └── src/
│       ├── main.jsx                   # React entry point
│       ├── App.jsx                    # All routes defined here
│       ├── index.css                  # Global styles, design tokens, dark/light mode
│       ├── assets/                    # Static images and media
│       ├── context/                   # React Context providers (Theme, Auth)
│       ├── data/                      # Static data files
│       ├── layouts/
│       │   ├── PublicLayout.jsx       # Wraps public/landing pages
│       │   ├── DashboardLayout.jsx    # Wraps user dashboard pages (sidebar + header)
│       │   └── AdminLayout.jsx        # Wraps admin panel pages
│       ├── pages/
│       │   ├── LandingPage.jsx
│       │   ├── SignInPage.jsx
│       │   ├── SignUpPage.jsx
│       │   ├── ResetPasswordPage.jsx
│       │   ├── DashboardPage.jsx      # Overview/home for users
│       │   ├── JobTrackerPage.jsx     # ⭐ Core feature — fully connected to MongoDB
│       │   ├── ResumeAnalyzerPage.jsx
│       │   ├── SkillGapPage.jsx
│       │   ├── CareerPathPage.jsx
│       │   ├── LearningHubPage.jsx
│       │   ├── SettingsPage.jsx
│       │   └── admin/                 # Admin-only pages
│       │       ├── overview/AdminDashboardPage.jsx
│       │       ├── users/AdminUsersPage.jsx
│       │       ├── roadmaps/AdminRoadmapsPage.jsx
│       │       ├── applications/AdminApplicationsPage.jsx
│       │       ├── security/AdminSecurityPage.jsx
│       │       └── settings/AdminSettingsPage.jsx
│       └── components/
│           ├── common/                # Shared UI components (buttons, inputs, etc.)
│           ├── landing/               # Landing page sections
│           ├── dashboard/
│           │   └── JobTracker/
│           │       ├── KanbanBoard.jsx   # Board view with stage columns
│           │       └── TableView.jsx     # Table view with bulk actions
│           ├── career/
│           │   └── RoadmapDetail.jsx  # Interactive career roadmap
│           ├── resume/                # Resume analyzer components
│           ├── roadmap/               # Roadmap builder components
│           ├── settings/              # Settings panel components
│           ├── skillgap/              # Skill gap components
│           └── admin/                 # Admin-specific components
│
└── backend/                           # Node.js + Express REST API
    ├── .env                           # 🔒 Secret config (NEVER commit to Git)
    ├── package.json                   # Backend dependencies
    ├── server.js                      # Entry point — Express app setup
    ├── config/
    │   └── db.js                      # MongoDB Atlas connection logic
    ├── models/
    │   ├── User.js                    # User account schema
    │   ├── JobApplication.js          # Job application schema
    │   └── RoadmapProgress.js         # User roadmap progress schema
    ├── controllers/
    │   └── jobController.js           # CRUD logic for job applications
    └── routes/
        └── jobRoutes.js               # Express routes → controller mapping
```

---

## 10. Environment Configuration

### Backend `.env` File (Never commit this!)

```env
MONGO_URI=mongodb+srv://<username>:<password>@invikt-cluster.6uidaje.mongodb.net/invikt_ai?appName=invikt-cluster
PORT=5000
```

### Key Variable Descriptions

| Variable | Description |
|---|---|
| `MONGO_URI` | Full MongoDB Atlas SRV connection string. Includes username, password, cluster host, and database name (`invikt_ai`). |
| `PORT` | The port the Express server listens on (default: `5000`). |

> **Important:** The database name `invikt_ai` is embedded in the `MONGO_URI`. This ensures all collections are stored in the correct, isolated database automatically.

---

## 11. Running the Application

### Start the Backend (Terminal 1)

```bash
cd "invikt ai -webapp/backend"
npm run dev
```

Expected output:
```
Server running on port 5000
MongoDB Connected: ac-xxxxx-shard-00-00.6uidaje.mongodb.net
```

### Start the Frontend (Terminal 2)

```bash
cd "invikt ai -webapp/frontend"
npm run dev
```

Expected output:
```
VITE vX.X.X  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### Ports Summary

| Service | Port | URL |
|---|---|---|
| Frontend (Vite) | 5173 | `http://localhost:5173` |
| Backend (Express) | 5000 | `http://localhost:5000` |
| MongoDB Atlas | Cloud | `invikt-cluster.6uidaje.mongodb.net` |

---

## 12. Roadmap — Next Steps

### Phase 2: Authentication

- [ ] Install `bcryptjs` and `jsonwebtoken` in the backend
- [ ] Create `POST /api/auth/register` — hash password and create user
- [ ] Create `POST /api/auth/login` — verify password and return JWT token
- [ ] Add `authMiddleware.js` to protect private routes
- [ ] Replace `mockUserId` in all controllers with `req.user._id` from JWT
- [ ] Frontend: Store JWT in `localStorage`, attach to API headers
- [ ] Frontend: Create `AuthContext` to manage login state globally
- [ ] Frontend: Add protected route wrapper to redirect unauthenticated users

### Phase 3: Full Feature Integration

- [ ] Connect Roadmap Progress nodes to `PUT /api/roadmap/:id` endpoint
- [ ] Connect Resume Analyzer page to an AI analysis API
- [ ] Connect Skill Gap page to compare user skills vs. job requirements
- [ ] Implement real-time stats on Dashboard from live MongoDB data

### Phase 4: Production Deployment

- [ ] Deploy backend to **Railway** or **Render** (free tier)
- [ ] Deploy frontend to **Vercel** (free tier)
- [ ] Set up MongoDB Atlas production IP allowlist
- [ ] Configure environment variables on hosting platforms
- [ ] Add HTTPS, Helmet.js security headers, and rate limiting

---

*Documentation maintained by the Invikt AI development team.*
