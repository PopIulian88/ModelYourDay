import { sendVerificationMail } from "./VerificationMail";
import { generateCode } from "./GenerateCode";
import { getCurrentDay } from "./GetCurrentDay";
import { errorModal } from "./ErrorModal";

import { getTrainingsByDay } from "./model/GetTrainings";
import { getMealsByDay } from "./model/GetMeals";
import { getChallengesByDay } from "./model/GhetChallenges";

export const helper = {
  sendVerificationMail,
  generateCode,
  getCurrentDay,
  errorModal,
};
export const modelHelper = {
  getTrainingsByDay,
  getMealsByDay,
  getChallengesByDay,
};
