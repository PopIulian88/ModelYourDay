import { sendVerificationMail } from "./VerificationMail";
import { generateCode } from "./GenerateCode";
import { getCurrentDay } from "./GetCurrentDay";
import { errorModal } from "./ErrorModal";

import { getTrainingsByDay } from "./model/GetTrainings";
import { getMealsByDay } from "./model/GetMeals";
import { createNewModel } from "./model/CreateNewModel";
import { getImageFromGallery } from "./model/GetImageFromGallery";
import { getImageFromApp } from "./model/GetImageFromApp";

export const helper = {
  sendVerificationMail,
  generateCode,
  getCurrentDay,
  errorModal,
};
export const modelHelper = {
  getTrainingsByDay,
  getMealsByDay,
  createNewModel,
  getImageFromGallery,
  getImageFromApp,
};
