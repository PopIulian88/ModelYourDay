import { ModelMealDay } from "../../models";
import { DefaultData } from "../../resources";

export const getMealsByDay = (day: number): ModelMealDay => {
  if (!DefaultData.models[1].meals) return {};

  switch (day) {
    case 0:
      return DefaultData.models[1].meals.monday;
    case 1:
      return DefaultData.models[1].meals.tuesday;
    case 2:
      return DefaultData.models[1].meals.wednesday;
    case 3:
      return DefaultData.models[1].meals.thursday;
    case 4:
      return DefaultData.models[1].meals.friday;
    case 5:
      return DefaultData.models[1].meals.saturday;
    case 6:
      return DefaultData.models[1].meals.sunday;
    default:
      return DefaultData.models[1].meals.monday;
  }
};
