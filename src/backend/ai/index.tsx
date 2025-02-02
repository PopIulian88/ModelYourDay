import { chatRequest } from "./chat";
import { verifyNameCorrectness } from "./verifyNameCorrectness";
import {
  generateModelChallenges,
  generateModelCurrentActivity,
  generateModelDescription,
  generateModelFreeTime,
  generateModelImage,
  generateModelMeals,
  generateModelMotivation,
  generateModelTrainings,
} from "./generateModel";

export const AI = {
  generateModelDescription,
  generateModelCurrentActivity,
  generateModelMotivation,
  generateModelMeals,
  generateModelTrainings,
  generateModelChallenges,
  generateModelFreeTime,
  chatRequest,
  verifyNameCorrectness,
  generateModelImage,
};
