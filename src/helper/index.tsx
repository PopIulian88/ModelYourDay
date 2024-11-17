import { sendVerificationMail } from "./VerificationMail";
import { generateCode } from "./GenerateCode";
import { getCurrentDay } from "./GetCurrentDay";

import { getTrainingsByDay } from "./model/GetTrainings";
import { getMealsByDay } from "./model/GetMeals";
import { getChallengesByDay } from "./model/GhetChallenges";

export const helper = { sendVerificationMail, generateCode, getCurrentDay };
export const modelHelper = {
  getTrainingsByDay,
  getMealsByDay,
  getChallengesByDay,
};
