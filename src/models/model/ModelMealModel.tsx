export type ModelMealModel = {
  monday: ModelMealDay;
  tuesday: ModelMealDay;
  wednesday: ModelMealDay;
  thursday: ModelMealDay;
  friday: ModelMealDay;
  saturday: ModelMealDay;
  sunday: ModelMealDay;
};

export type ModelMealDay = {
  meals?: string[][];
};
