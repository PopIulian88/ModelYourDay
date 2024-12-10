import { ModelModel } from "../../models";
import { AI } from "../../backend/ai";

export const createNewModel = async (modelName: string) => {
  // await AI.generateModelMotivation(searchText).then((response) => {
  //    console.log("AI response: ", response);

  const newModel: ModelModel = {
    id: "Unknown",
    name: "Unknown",
    description: "Unknown",
    image: 0, // This should be generated in the future
    currentActivity: "Unknown",
    strike: 0, // Initial value: 0
    motivation: [],
    meals: {
      monday: {},
      tuesday: {},
      wednesday: {},
      thursday: {},
      friday: {},
      saturday: {},
      sunday: {},
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
    freeTime: [],
    training: {
      monday: {},
      tuesday: {},
      wednesday: {},
      thursday: {},
      friday: {},
      saturday: {},
      sunday: {},
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
    challenges: {
      monday: {},
      tuesday: {},
      wednesday: {},
      thursday: {},
      friday: {},
      saturday: {},
      sunday: {},
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
  };

  console.log("START getting the data for the new model");

  [
    newModel.description,
    newModel.currentActivity,
    newModel.motivation,
    newModel.meals,
    newModel.freeTime,
    newModel.training,
    newModel.challenges,
  ] = await Promise.all([
    AI.generateModelDescription(modelName),
    AI.generateModelCurrentActivity(modelName),
    AI.generateModelMotivation(modelName),
    AI.generateModelMeals(modelName),
    AI.generateModelFreeTime(modelName),
    AI.generateModelTrainings(modelName),
    // TODO: Cand facem acest call ar trebuiis a incercam sa il repetam pana la 3-5 ori in caz de eroare
    AI.generateModelChallenges(modelName), //(LOOK AT THE RESPONSE) IF THE RESPONSE HASE A FAIL OUTPUT, WE SHOULD TRY AGAIN
  ]);

  // TODO: Try to regenerate the ungenerated fields

  return newModel;
};
