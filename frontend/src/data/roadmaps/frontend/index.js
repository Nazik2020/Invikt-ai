import { frontendMeta } from './meta';
import { frontendStages } from './stages';
import { frontendResources } from './resources';

// Dynamically calculate the total number of skills
const totalSkills = frontendStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const frontendRoadmap = {
  ...frontendMeta,
  skillCount: totalSkills,
  stageCount: frontendStages.length,
  time: "~250 hrs", 
  stages: frontendStages,
  globalResources: frontendResources
};

export default frontendRoadmap;
