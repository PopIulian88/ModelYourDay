import { generateModelDescription } from "./generateModelDescription";
import { generateModelCurrentActivity } from "./generateModelCurrentActivity";
import { chatRequest } from "./chat";
import { verifyNameCorrectness } from "./verifyNameCorrectness";
import { generateModelMotivation } from "./generateModelMotivation";
import { generateModelMeals } from "./generateModelMeals";
import { generateModelTrainings } from "./generateModelTrainings";
import { generateModelChallenges } from "./generateModelChallenges";

export const AI = {
  chatRequest,
  generateModelDescription,
  generateModelCurrentActivity,
  verifyNameCorrectness,
  generateModelMotivation,
  generateModelMeals,
  generateModelTrainings,
  generateModelChallenges,
};
