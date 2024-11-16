import { ModelTrainingModel } from "./ModelTrainingModel";
import { ModelMealModel } from "./ModelMealModel";

export type ModelModel = {
  name: string;
  description: string;
  image: string | number;
  currentActivity: string;
  strike: number;
  motivation?: string[];
  meals?: ModelMealModel;
  freeTime?: string[][];
  training?: ModelTrainingModel;
  challenges?: {
    food: string;
    gym: string;
    freeTime: string;
  }[];
  challengesCompleted: {
    food: number;
    gym: number;
    freeTime: number;
    fail: number;
  };
};
