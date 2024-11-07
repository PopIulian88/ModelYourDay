export type ModelModel = {
  name: string;
  description: string;
  image: string | number;
  currentActivity: string;
  strike: number;
  motivation?: string[];
  meals?: string[][];
  freeTime?: string[];
  training?: string[][];
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
