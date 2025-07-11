import { ModelModel } from "../../models";
import { AI } from "../../backend";

export const createNewModel = async (modelName: string) => {
  const newModel: ModelModel = {
    id: "Unknown",
    name: "Unknown",
    description: "Unknown",
    image: "", // This is generated when the model is created
    currentActivity: "Unknown",
    strike: 0,
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
      food: "Unknown",
      gym: "Unknown",
      freeTime: "Unknown",
    },
    challengesCompleted: {
      food: 0,
      gym: 0,
      freeTime: 0,
      fail: 0,
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
    currentChallenge: {
      food: 0,
      gym: 0,
      freeTime: 0,
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
    AI.generateModelChallenges(modelName),
  ]);

  return newModel;
};
