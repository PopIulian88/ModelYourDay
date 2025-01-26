import { SmallModelModel } from "./model";

export type UserType = {
  id: string;
  isConnectedWithGoogle: boolean;
  username: string;
  email: string;
  age: number;
  isOnboardingComplete: boolean;
  modelsList: SmallModelModel[];
  selectedModel: string; // Id of selected model
};
