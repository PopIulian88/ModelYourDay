export type ModelTraining = {
  monday: ModelTrainingDay;
  tuesday: ModelTrainingDay;
  wednesday: ModelTrainingDay;
  thursday: ModelTrainingDay;
  friday: ModelTrainingDay;
  saturday: ModelTrainingDay;
  sunday: ModelTrainingDay;
};

export type ModelTrainingDay = {
  hasTraining: boolean;
  trainings?: string[][];
};
