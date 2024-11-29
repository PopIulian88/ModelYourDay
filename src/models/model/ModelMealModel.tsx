export type ModelMealModel = {
  monday: ModelMealDay;
  tuesday: ModelMealDay;
  wednesday: ModelMealDay;
  thursday: ModelMealDay;
  friday: ModelMealDay;
  saturday: ModelMealDay;
  sunday: ModelMealDay;
  lastUpdated: string;
};

export type ModelMealDay = {
  meals?: string[][];
};
