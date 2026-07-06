import { fullStackMeta } from './meta';
import { fullStackStages } from './stages';
import { fullStackResources } from './resources';

// Dynamically calculate the total number of skills
const totalSkills = fullStackStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const fullStackRoadmap = {
  ...fullStackMeta,
  skillCount: totalSkills,
  stageCount: fullStackStages.length,
  time: "~400 hrs", 
  stages: fullStackStages,
  globalResources: fullStackResources
};

export default fullStackRoadmap;
