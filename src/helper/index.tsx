import { sendVerificationMail } from "./VerificationMail";
import { generateCode } from "./GenerateCode";
import { getCurrentDay } from "./GetCurrentDay";

import { getTrainingsByDay } from "./model/GetTrainings";
import { getMealsByDay } from "./model/GetMeals";

export const helper = { sendVerificationMail, generateCode, getCurrentDay };
export const modelHelper = { getTrainingsByDay, getMealsByDay };
