export type ModelTrainingModel = {
  monday: ModelTrainingDay;
  tuesday: ModelTrainingDay;
  wednesday: ModelTrainingDay;
  thursday: ModelTrainingDay;
  friday: ModelTrainingDay;
  saturday: ModelTrainingDay;
  sunday: ModelTrainingDay;
  lastUpdated: string;
};

export type ModelTrainingDay = {
  trainings?: string[][];
};
