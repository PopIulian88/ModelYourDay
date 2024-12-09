import { generateModelDescription } from "./generateModelDescription";
import { generateModelCurrentActivity } from "./generateModelCurrentActivity";
import { chatRequest } from "./chat";
import { verifyNameCorrectness } from "./verifyNameCorrectness";
import { generateModelMotivation } from "./generateModelMotivation";

export const AI = {
  chatRequest,
  generateModelDescription,
  generateModelCurrentActivity,
  verifyNameCorrectness,
  generateModelMotivation,
};
