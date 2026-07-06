import { blockchainMeta } from "./meta";
import { blockchainResources } from "./resources";
import { blockchainStages } from "./stages";

const totalSkills = blockchainStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const blockchainRoadmap = {
  ...blockchainMeta,
  skillCount: totalSkills,
  stageCount: blockchainStages.length,
  time: "~230 hrs",
  stages: blockchainStages,
  globalResources: blockchainResources,
};
