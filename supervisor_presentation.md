# System Architecture & Technical Decisions
**Supervisor Presentation Preparation Guide**

This guide provides clear, non-technical, and highly professional answers to the 13 potential questions your supervisor will ask regarding the system's architecture, security, and scalability.

---

### 1. Authentication & Authorization (How do we verify users?)
*   **Authentication (Who you are):** We implemented a highly secure, stateless authentication system using **JSON Web Tokens (JWT)**. When a user logs in, their password is securely hashed using `bcrypt` (so even database admins cannot read it). The system generates a JWT and stores it in an **httpOnly cookie**, making it immune to Cross-Site Scripting (XSS) attacks.
*   **Authorization (What you can do):** We implemented **Role-Based Access Control (RBAC)**. We have strict middleware (e.g., `authorize("manager", "super_admin")`) that checks the user's role on every API request. A DJ cannot access Manager routes, and a Decorator cannot view another Decorator's data.

### 2. General Data Sanitization
*   We use a dedicated utility called `sanitizeVendorBooking`. When a vendor (like a DJ) requests booking details, this sanitization function strips out sensitive data (such as how much the client paid the hotel, or other vendors' private contact details) before sending the data to the frontend. This ensures vendors only see exactly what they need to do their job.

### 3. Personal Details (Phone, Email) Validation & Sanitization
*   We enforce strict validation at the database level using **Mongoose Schemas**. 
*   **Emails** are automatically cast to lowercase and trimmed of whitespace.
*   **Phone Numbers** and emails can be checked against standard Regex patterns to ensure they are valid formats before the database accepts them, preventing garbage data from corrupting the system.

### 4. Payment System Integration
*   Currently, the system is architected to handle **Manual Payments** (Card Terminal, Cash, Bank Transfer) which are recorded by the Manager, triggering automated database updates (moving balance to paid). 
*   However, the database is fully structured to support **Payment Gateways (like PayHere or Stripe)** in the future. The `transactionId` and `paymentStatus` fields in our `Payment` model are explicitly designed to receive automated Webhooks from third-party gateways.

### 5. Cloudinary Security & File Handling
*   Instead of letting the frontend upload files directly to Cloudinary (which would expose our API keys to hackers), we securely pipe files through our backend server (`upload.middleware.js`). 
*   While we do not heavily encrypt public images, we secure them by stripping metadata during upload and generating complex, unguessable URLs. Furthermore, vendors have an `isPrivate` toggle for their portfolio, allowing them to hide sensitive event photos from the public gallery.

### 6. Why use this specific Tech Stack (MERN / Next.js)?
*   **Next.js (Frontend):** It provides Server-Side Rendering (SSR), which is critical for the Hotel's SEO (Search Engine Optimization) so clients can easily find the booking page on Google.
*   **Node.js/Express (Backend):** Its non-blocking, asynchronous architecture is perfect for handling thousands of simultaneous requests (like browsing portfolios or generating bookings) without slowing down.
*   **Tailwind CSS:** Allowed us to rapidly build a premium, highly responsive UI without maintaining thousands of lines of custom CSS.

### 7. Why use MongoDB instead of SQL?
*   A wedding booking is highly complex and dynamic. Some bookings have a DJ, some don't. Some have 5 custom menu items, others have 20. 
*   **MongoDB (NoSQL)** uses flexible JSON-like documents, which perfectly handles nested arrays (like vendor checklists) without requiring dozens of complex, rigid SQL join tables. It allows our packages and configurations to scale seamlessly.

### 8. Load Balancing & Traffic Handling
*   Our frontend (Next.js) can be deployed on a global CDN edge network (like Vercel), automatically balancing the load globally.
*   Our Node.js backend is completely stateless (thanks to JWT). This means we can use tools like **PM2 Cluster Mode** or **AWS Application Load Balancers** to spin up multiple instances of our backend server during peak wedding season, effortlessly distributing the traffic.

### 9. 3D Modelling & Visualization
*   We utilize lightweight 3D web rendering libraries (like Three.js or React Three Fiber). By serving optimized `GLTF/GLB` models, clients can experience a virtual walkthrough of the banquet halls directly in their browser. This drastically improves conversion rates without forcing the client to download heavy standalone applications.

### 10. Non-Functional Requirements (NFRs)
*   **Performance:** By storing images on Cloudinary's global CDN, our server bandwidth is untouched by heavy media, ensuring lightning-fast page loads.
*   **Scalability:** The modular MVC (Model-View-Controller) architecture means if the Decorator module experiences heavy load, we can scale that specific micro-service without affecting the Core Booking engine.
*   **Availability:** Utilizing MongoDB Atlas ensures automated backups and 99.99% database uptime.

### 11. Notification System Architecture
*   Currently, we manage notification preferences in the database. 
*   To trigger them, the system is designed to use **NodeMailer** (connected to an SMTP server like Gmail) for critical asynchronous alerts (like sending an official booking receipt). For real-time dashboard updates, the architecture easily supports WebSockets (`Socket.io`) or Server-Sent Events (SSE) in the future.

### 12. Management of Integration Keys
*   **Zero Hardcoding:** Absolutely no API keys (Cloudinary, Database URI, JWT Secrets, Gmail Passwords) are hardcoded into the source code.
*   They are securely injected via `.env` (Environment Variable) files on the server. This guarantees that even if a developer downloads the source code, they cannot access the production database or services.

### 13. Testing Strategy (Test Cases)
*   Our backend controllers are strictly isolated from the routes. This modular design heavily facilitates **Unit Testing** (using frameworks like Jest or Mocha). 
*   We can easily write test cases to mock database requests and mathematically verify that our complex Pricing Calculators and "Auto-Complete Booking" utilities execute flawlessly before pushing updates to production.
