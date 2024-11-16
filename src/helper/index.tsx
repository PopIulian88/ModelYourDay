import { sendVerificationMail } from "./VerificationMail";
import { generateCode } from "./GenerateCode";
import { getCurrentDay } from "./GetCurrentDay";

import { getTrainingsByDay } from "./model/GetTrainings";

export const helper = { sendVerificationMail, generateCode, getCurrentDay };
export const modelHelper = { getTrainingsByDay };
