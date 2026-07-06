import { qaEngineerMeta } from './meta';
import { qaEngineerStages } from './stages';
import { qaEngineerResources } from './resources';

// Dynamically calculate the total number of skills
const totalSkills = qaEngineerStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const qaEngineerRoadmap = {
  ...qaEngineerMeta,
  skillCount: totalSkills,
  stageCount: qaEngineerStages.length,
  time: "~300 hrs", 
  stages: qaEngineerStages,
  globalResources: qaEngineerResources
};

export default qaEngineerRoadmap;
