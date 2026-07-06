import { androidMeta } from "./meta";
import { androidResources } from "./resources";
import { androidStages } from "./stages";

const totalSkills = androidStages.reduce(
  (acc, stage) => acc + stage.skills.length,
  0
);

export const androidRoadmap = {
  ...androidMeta,
  skillCount: totalSkills,
  stageCount: androidStages.length,
  time: "~220 hrs",
  stages: androidStages,
  globalResources: androidResources,
};
