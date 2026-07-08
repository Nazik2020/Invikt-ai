# Invikt AI Database Architecture

Based on the highly interactive frontend systems we've built (Job Application Tracker & Educational Roadmaps), here is the perfect blueprint for structuring your MongoDB database using Mongoose.

## 1. Users Collection (`users`)
This will handle authentication and user profile data.

```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  profilePicture: { type: String, default: "" },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  createdAt: { type: Date, default: Date.now }
});
```

## 2. Job Applications Collection (`job_applications`)
This will replace the `initialApps` mock data in `JobTrackerPage.jsx` so users can permanently save and move their jobs across the Kanban board and Table view.

```javascript
const jobApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: String, required: true }, // e.g., "Nvidia"
  role: { type: String, required: true },    // e.g., "Product Designer"
  stage: { 
    type: String, 
    enum: ['WISHLIST', 'APPLIED', 'ASSESSMENT', 'INTERVIEW', 'FINAL', 'OFFER', 'REJECTED'], 
    default: 'WISHLIST' 
  },
  badge: { type: String },                   // e.g., "REMOTE", "HYBRID"
  source: { type: String, default: 'Direct' },
  location: { type: String },
  employmentType: { type: String },          // e.g., "Full-time"
  jobUrl: { type: String },
  dateApplied: { type: Date },
  notes: { type: String },
  info: { type: String },                    // Temporary alerts e.g., "Take home test"
  
  // UI Helpers (can also be generated on frontend dynamically based on company name)
  logoColor: { type: String },
  logoText: { type: String }
}, { timestamps: true });
```

## 3. Roadmap Progress Collection (`roadmap_progress`)
Since we have 12 distinct roadmaps (Cyber Security, Full Stack, etc.), this schema tracks what skills a user has marked as completed on the Interactive Timeline.

```javascript
const roadmapProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roadmapId: { type: String, required: true }, // e.g., "cyber-security", "full-stack"
  
  // Array of node/step IDs the user has clicked the purple checkmark on
  completedNodes: [{ type: String }],
  
  // Overall progress percentage calculation cache (optional but good for performance)
  progressPercentage: { type: Number, default: 0 },
  
  lastUpdated: { type: Date, default: Date.now }
});
```

## Recommended Backend Folder Structure
Before writing the code, we should organize the `backend` folder elegantly using the MVC (Model-View-Controller) pattern:

```text
backend/
├── config/
│   └── db.js              # MongoDB Connection Logic
├── models/
│   ├── User.js            # User Schema
│   ├── JobApplication.js  # Job Tracker Schema
│   └── RoadmapProgress.js # Progress Tracking Schema
├── controllers/
│   ├── jobController.js   # Logic to fetch, add, move, delete jobs
│   └── progressController.js 
├── routes/
│   ├── jobRoutes.js       # Express routes (e.g., POST /api/jobs)
│   └── progressRoutes.js
├── server.js              # Entry point
└── .env                   # Database URI (MONGO_URI)
```
