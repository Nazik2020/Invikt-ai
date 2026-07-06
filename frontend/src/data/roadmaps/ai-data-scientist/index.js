/**
 * AI & Data Scientist Roadmap - Index
 */

import { aiDataScientistMeta } from "./meta";
import { aiDataScientistStages } from "./stages";
import { globalResources, topicResources } from "./resources";

const totalSkills = aiDataScientistStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const aiDataScientistRoadmap = {
  ...aiDataScientistMeta,
  skillCount: totalSkills,
  stageCount: aiDataScientistStages.length,
  time: "~150 hrs",
  stages: aiDataScientistStages,
  globalResources,
  topicResources,
};

export { aiDataScientistMeta, aiDataScientistStages, globalResources, topicResources };
export default aiDataScientistRoadmap;
