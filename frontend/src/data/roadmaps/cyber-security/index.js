import { cyberSecurityStages } from './stages';
import { cyberSecurityMeta } from './meta';
import { cyberSecurityResources } from './resources';

const totalSkills = cyberSecurityStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const cyberSecurityRoadmap = {
  ...cyberSecurityMeta,
  skillCount: totalSkills,
  stageCount: cyberSecurityStages.length,
  time: "~350 hrs",
  stages: cyberSecurityStages,
  globalResources: cyberSecurityResources
};

export default cyberSecurityRoadmap;
