# Invikt AI - Roadmap Creation Guidelines

This document outlines the standard procedure and rules for creating new career roadmaps for the Invikt AI platform. Follow these steps strictly to ensure UI consistency, high-quality content, and seamless integration with the `RoadmapDetail.jsx` component.

## 0. User Input & Workflow
The typical workflow for creating a new roadmap involves the following inputs from the user:
1. **Raw JSON Data:** Contains the raw node/edge structure exported from `roadmap.sh`.
2. **Markdown (MD) Files:** Contains text descriptions and topics for the roadmap.
3. **Roadmap Image:** A screenshot of the official `roadmap.sh` diagram.

**Agent Responsibility:** You must meticulously cross-reference the JSON, MD, and image to ensure *every single granular box* (concept/skill) from the image is successfully translated into the Invikt AI format. Do NOT skip or arbitrarily group skills.

## 1. File Structure
Every new roadmap must be placed in a dedicated folder inside `src/data/roadmaps/`. The folder name should be a URL-friendly slug (e.g., `cyber-security-expert`).

Inside the folder, you MUST create the following 4 files:
1. `meta.js` (Metadata & Styling)
2. `stages.js` (Curriculum & Skills)
3. `resources.js` (Global/General Resources)
4. `index.js` (Main Export & Aggregation)

---

## 2. File Specifications

### A. `meta.js`
This file defines the high-level details for the roadmap card and header.
```javascript
export const myRoadmapMeta = {
  id: "roadmap-slug",
  title: "Official Title (e.g., Cyber Security Expert)",
  description: "A compelling 1-2 sentence description.",
  icon: "security", // Use a valid Google Material Symbol string
  color: "text-red-500", // Tailwind text color
  bgColor: "bg-red-500/10", // Tailwind background color for badges
  stats: {
    totalSkills: 58, // Will be overridden dynamically in index.js
    estimatedTime: "350 hrs",
    difficulty: "Advanced",
  }
};
```

### B. `stages.js`
This is the core of the roadmap. 
* **Granularity is Key:** Do NOT group too many concepts into one skill. Match the depth of official roadmaps (e.g., roadmap.sh). If there are 50 yellow boxes, there should be 50 skills.
* **Dual-Resource Rule & Curation Standards:** Every single skill MUST have exactly **two** high-quality resources attached to it. When curating resources, you must consider the following:
  * **CRITICAL - Resource Naming:** Use the key `name` (NOT `title`) for the resource object. The UI parser specifically checks for `res.name` to render the button text. If you use `title`, the UI will render a blank button.
  1. **A Video Guide (Type: 'YouTube')**: For visual learners. Pick reputable creators (e.g., NetworkChuck, freeCodeCamp) over random uploads.
  2. **A Deep-Dive Link (Type: 'Docs', 'Article', 'Platform', or 'Tutorial')**: This must be contextually appropriate for the skill:
     - **Tools/Utilities** (e.g., Nmap, React, Docker) -> Link to **Official Docs**.
     - **Concepts/Attacks** (e.g., Phishing, OSI Model) -> Link to reputable **Articles** (e.g., OWASP, Cloudflare).
     - **Certifications/CTFs/Practice** -> Link to interactive **Platforms** (e.g., HackTheBox, LeetCode).
     - **Programming Languages** -> Link to comprehensive **Tutorials**.
  * **Free-Tier Priority:** Avoid paid courses (like Coursera/Udemy) as primary resources. The goal is to make education accessible. Paid certificates should only be mentioned as optional disclaimers at the bottom of the roadmap.

```javascript
export const myRoadmapStages = [
  {
    id: 1,
    title: "Stage Title (e.g., Fundamental IT Skills)",
    level: "Beginner",
    duration: "20 hrs",
    skills: [
      { 
        id: "s1", 
        name: "Computer Hardware Components", 
        description: "Understand motherboards, CPUs, RAM, and storage.", 
        done: false, 
        resources: [ 
          { name: 'Hardware Video Guide', url: 'https://youtube.com/...', type: 'YouTube' },
          { name: 'Hardware Official Docs', url: 'https://...', type: 'Docs' }
        ] 
      }
    ],
  }
];
```

### C. `resources.js`
Used for general, top-level resources that apply to the whole career (not tied to a specific skill).
```javascript
export const myRoadmapResources = {
  general: [
    { title: "General Guide", url: "https://...", type: "Article" }
  ]
};
```

### D. `index.js`
This file pieces everything together. **CRITICAL:** You must dynamically calculate the `skillCount` and explicitly export `stageCount` and `time` so the Hero Header UI doesn't break!

```javascript
import { myRoadmapStages } from './stages';
import { myRoadmapMeta } from './meta';
import { myRoadmapResources } from './resources';

// Dynamically count skills for accuracy
const totalSkills = myRoadmapStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const myRoadmapRoadmap = {
  ...myRoadmapMeta,
  skillCount: totalSkills,              // REQUIRED for Hero UI
  stageCount: myRoadmapStages.length,   // REQUIRED for Hero UI
  time: "~350 hrs",                     // REQUIRED for Hero UI
  stages: myRoadmapStages,
  globalResources: myRoadmapResources
};

export default myRoadmapRoadmap;
```

---

## 3. Registration
Once the folder is built, you must register the roadmap in the central registry so it appears on the dashboard.

Open `src/data/roadmaps.js`:
1. Import your new roadmap.
2. Add it to the `roadmaps` array.

```javascript
import { myRoadmapRoadmap } from "./roadmaps/my-roadmap-slug";

export const roadmaps = [
  aiEngineerRoadmap,
  aiDataScientistRoadmap,
  cyberSecurityRoadmap,
  myRoadmapRoadmap // <-- Added here
];
```

## 4. Quality Assurance Checklist
- [ ] Is the title accurate and premium sounding?
- [ ] Are all skills granular and step-by-step?
- [ ] Does EVERY skill have 1 YouTube link + 1 Rich Text link?
- [ ] Does the Hero UI successfully display `{X} Skills • {Y} Stages • {Z} hrs` without missing data?
- [ ] Are paid courses (Coursera/Udemy) avoided as primary links to ensure free accessibility?
