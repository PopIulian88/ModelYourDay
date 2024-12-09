import { ModelTrainingModel } from "./ModelTrainingModel";
import { ModelMealModel } from "./ModelMealModel";
import { ModelChallengeModel } from "./ModelChallengeModel";

export type ModelModel = {
  id: string; // Fake ID - Should be generated
  name: string;
  description: string;
  image: string | number;
  currentActivity: string;
  strike: number; // Initial value: 0
  motivation?: string[];
  meals?: ModelMealModel;
  freeTime?: string[][]; // AM UITAT DE ASTA
  training?: ModelTrainingModel;
  challenges?: ModelChallengeModel;
  challengesCompleted: {
    // This will not be generated
    food: number;
    gym: number;
    freeTime: number;
    fail: number;
    lastUpdated: string;
  };
};
