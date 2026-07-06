import { devopsMeta } from "./meta";
import { devopsResources } from "./resources";
import { devopsStages } from "./stages";

const totalSkills = devopsStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const devopsRoadmap = {
  ...devopsMeta,
  skillCount: totalSkills,
  stageCount: devopsStages.length,
  time: "~280 hrs",
  stages: devopsStages,
  globalResources: devopsResources,
};
