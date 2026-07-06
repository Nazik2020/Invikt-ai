// src/data/roadmaps.js
// Central data source for all career roadmap definitions
import { aiEngineerRoadmap } from "./roadmaps/ai-engineer";
import { aiDataScientistRoadmap } from "./roadmaps/ai-data-scientist";

export const categories = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Engineering" },
  { id: "data", label: "Data & AI" },
  { id: "design", label: "Design" },
  { id: "security", label: "Security" },
  { id: "devops", label: "DevOps" },
  { id: "product", label: "Product" },
];

export const roadmaps = [
  aiEngineerRoadmap,
  aiDataScientistRoadmap,
];
