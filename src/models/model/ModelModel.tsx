import { ModelTrainingModel } from "./ModelTrainingModel";
import { ModelMealModel } from "./ModelMealModel";
import { ModelChallengeModel } from "./ModelChallengeModel";

export type ModelModel = {
  id: string;
  name: string;
  description: string;
  image: string | number;
  currentActivity: string;
  strike: number;
  motivation?: string[];
  meals?: ModelMealModel;
  freeTime?: string[][];
  training?: ModelTrainingModel;
  challenges?: ModelChallengeModel;
  challengesCompleted: {
    food: number;
    gym: number;
    freeTime: number;
    fail: number;
    lastUpdated: string;
  };
};
