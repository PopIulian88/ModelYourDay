export type UserType = {
  username: string;
  email: string;
  age: number;
  isOnboardingComplete: boolean;
  modelsList: string[]; // Ids of models
  selectedModel: string; // Id of selected model
};
