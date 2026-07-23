# AGENTS.md — Invikt AI Web App

## Project Layout

Two independent packages at repo root. No monorepo manager — each has its own `node_modules/` and `package.json`.

```
frontend/   — Next.js 15 (App Router) + React 19 + Tailwind CSS v4 (JSX, no TypeScript)
backend/    — Express 5 + Mongoose 9 (Node.js)
```

## Dev Commands

Both must run simultaneously for full-stack development.

```bash
cd frontend && npm run dev     # Next.js dev on :3000
cd backend && npm run dev      # Nodemon on :5000
cd frontend && npm run build   # Production build
cd frontend && npm run lint    # ESLint (only lint step available)
```

There is **no test framework** configured in either package. No jest, vitest, or pytest exists.

## Critical Tech Quirks

- **Express 5** (not v4): async errors propagate automatically to error handler — no `try/catch` wrappers needed in route handlers. `app.listen` returns a Promise.
- **Tailwind CSS v4**: uses `@import "tailwindcss"` and `@theme {}` in `src/app/globals.css`. There is **no `tailwind.config.js`** — all customization lives in the CSS file's `@theme` block. PostCSS plugin: `@tailwindcss/postcss`.
- **Dark mode is default**: class-based via `.dark` on `<html>`. Theme stored in `localStorage`, toggled by inline script in root layout (`src/app/layout.jsx`).
- **No TypeScript anywhere**: entire codebase is plain JS/JSX.
- **React 19** with StrictMode. Frontend uses Next.js 15 App Router (file-based routing in `src/app/`).
- **All pages/components are `"use client"`**: no React Server Components migration yet.
- **Dual User models**: `models/auth/User.js` (used by auth system, has bcrypt) and `models/User.js` (legacy, dead code). All new code must import from `models/auth/User.js`.
- **Dual JobApplication models**: `models/jobs/JobApplication.js` (active, uses `FINAL_INTERVIEW` stage, `employment` field) vs `models/JobApplication.js` (legacy, uses `FINAL` stage, `employmentType`). Only the newer one is used by active routes.

## API Auto-Detection

`frontend/src/config/api.js` picks the API URL automatically:
- Dev: `http://localhost:5000/api`
- Prod: `https://aspirev-backend-bhe7g2fdabbycbap.eastus-01.azurewebsites.net/api` (Azure)
- Override: `NEXT_PUBLIC_API_URL` env var (Next.js client-side env)

## Backend Environment

Required env vars (validated at startup in `server.js`):
- `MONGO_URI` — MongoDB Atlas connection string
- `JWT_SECRET` — Access token signing
- `JWT_REFRESH_SECRET` — Refresh token signing (must differ from JWT_SECRET)

Optional: `PORT` (default 5000), `FRONTEND_URL`, `AZURE_STORAGE_CONNECTION_STRING`.

See `backend/.env.example` for full template.

**Warning**: `backend/.env` with real credentials is committed to git (added before `.gitignore` rule). Treat it as public — rotate secrets if repo is public.

## Backend Middleware Stack (order matters)

`server.js` applies in this order:
1. `dotenv.config()` — loads `.env` before anything else
2. `connectDB()` — Mongoose connect, `process.exit(1)` on failure
3. HTTPS redirect (production only, checks `x-forwarded-proto`)
4. CORS (localhost:5173, localhost:3000, Azure SWA, Render, `FRONTEND_URL` env)
5. Helmet (crossOriginEmbedderPolicy disabled, crossOriginResourcePolicy = cross-origin)
6. Rate limiting — general: 100 req/15min on `/api/`, auth: 10 req/15min on `/api/auth` (applied at route mount)
7. `express.json({ limit: "2mb" })`
8. NoSQL injection sanitization (`$` prefix stripping)
9. XSS cleaning (HTML entity escaping on body/query/params)
10. Route mounts
11. 404 handler
12. Global error handler (`middleware/errorHandler.js` — handles CastError, 11000 duplicate key, ValidationError, JWT errors)

## Auth System

- JWT with access (1h) + refresh (30d) tokens
- Refresh rotation: old refresh token blacklisted on each refresh (via `TokenBlacklist` model with TTL index)
- Password: bcryptjs, 12 salt rounds, requires 8+ chars with uppercase, number, special char
- Roles: `student` (default), `admin`
- Protected routes use `protect` middleware from `middleware/auth/authMiddleware.js` (also exports `adminOnly`)
- `protect` attaches the **full Mongoose document** to `req.user` (from `models/auth/User.js`)
- **No frontend role gating**: `ProtectedRoute` only checks auth, not roles. Admin routes at `/admin/*` are wrapped in `ProtectedRoute` but any authenticated user can reach them — role enforcement is backend-only via `adminOnly` middleware.

## API Conventions

- Consistent response format: `{ success: boolean, error?: string, data?: any, count?: number }`
- Input validation via `express-validator` v7 — chains exported from `middleware/validation.js` (11 validators: register, login, refresh, job, portfolio, profile, roadmap, share, adminSearch, adminUserId, upload)
- Validation errors return 400 with `{ success: false, error: "<message>" }` (not field-level errors)

## Frontend Styling

Design tokens live in `frontend/src/app/globals.css` under `@theme {}` (Tailwind v4 syntax). Key custom classes: `.glass-card`, `.glass-panel`, `.glow-orb`, `.text-gradient`, `.bg-gradient-primary`, `.no-scrollbar`. Fonts: Manrope (headlines), Inter (body). Icons: Google Material Symbols Outlined.

**Never use borders at full opacity** — use 15% opacity ghost borders or background tone shifts per the glassmorphism design system.

## Frontend Architecture

### App Router Structure (`src/app/`)

```
src/app/
├── layout.jsx                    # Root layout (fonts, metadata, AuthProvider)
├── providers.jsx                 # Client-side wrapper ("use client") for AuthProvider
├── globals.css                   # Tailwind v4 theme (was src/index.css)
├── page.jsx                      # Landing page (/)
├── (auth)/
│   ├── layout.jsx                # Redirects to /dashboard if already authenticated
│   ├── signin/page.jsx           # /signin
│   ├── signup/page.jsx           # /signup
│   └── forgot-password/page.jsx  # /forgot-password
├── p/[username]/page.jsx         # Public portfolio view (no auth)
├── (dashboard)/                  # Route group — protected, wraps in DashboardLayout
│   ├── layout.jsx                # Auth guard + DashboardLayout wrapper
│   ├── dashboard/page.jsx
│   ├── resume/page.jsx
│   ├── skill-gap/page.jsx
│   ├── career-path/page.jsx
│   ├── career-path/[id]/page.jsx
│   ├── learning-hub/page.jsx
│   ├── job-tracker/page.jsx
│   ├── portfolio/page.jsx
│   ├── settings/page.jsx
│   └── support/page.jsx          # Redirects to /dashboard
└── admin/                        # Protected, wraps in AdminLayout
    ├── layout.jsx                # Auth guard + AdminLayout wrapper
    ├── page.jsx                  # Redirects to /admin/dashboard
    ├── dashboard/page.jsx
    ├── users/page.jsx
    ├── roadmaps/page.jsx
    ├── applications/page.jsx
    ├── security/page.jsx
    └── settings/page.jsx
```

### Key Migration Notes

- **Image imports**: Vite imported images as default objects. In Next.js, `import logo from "../assets/aspirev.png"` returns an object — use `logo.src` in `<img>` tags.
- **No react-router-dom**: all routing is file-based. Use `next/link` (`<Link href>`), `next/navigation` (`useRouter`, `usePathname`, `useParams`, `useSearchParams`).
- **Auth state passing**: React Router's `location.state` is not available. Use query parameters instead (e.g., `/signin?from=/dashboard&message=...`).
- **Path aliases**: `@/` maps to `./src/` via `jsconfig.json`.
- **Old Vite files**: `src/App.jsx` and `src/main.jsx` still exist but are **unused** — kept for reference. The entry point is `src/app/layout.jsx`.

## Dead / Legacy Code

These files exist but are **not imported** by active routes:
- `backend/routes/jobRoutes.js` — legacy routes with hardcoded mock user ID, no auth
- `backend/controllers/jobController.js` — legacy controller with hardcoded userId
- `backend/models/JobApplication.js` — legacy model (stage `FINAL`, field `employmentType`)
- `backend/models/User.js` — legacy User model (no bcrypt, no `isDeactivated`)
- `frontend/src/App.jsx` — old Vite SPA entry point (unused by Next.js)
- `frontend/src/main.jsx` — old Vite React root mount (unused by Next.js)

Do not modify or depend on these files. They are kept for reference only.

## Deployment

| Component | Platform | Notes |
|-----------|----------|-------|
| Frontend | Azure Static Web Apps | SPA fallback, built from `frontend/.next` |
| Backend | Azure Container Apps | `aspirev-backend-bhe7g2fdabbycbap.eastus-01.azurewebsites.net` |
| Database | MongoDB Atlas | `invikt_ai` database |
| Storage | Azure Blob | `invikt-uploads`, `resume-uploads`, `portfolio-uploads` containers |

CORS also allows `invikt-backend.onrender.com` (legacy Render deployment, still in CORS origin list).
