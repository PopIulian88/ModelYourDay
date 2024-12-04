import { ModelMealDay } from "../../models";
import { useSelector } from "react-redux";

export const getMealsByDay = (day: number): ModelMealDay => {
  const { model } = useSelector((state: any) => state.modelReducer);
  if (!model?.meals) return {};

  switch (day) {
    case 0:
      return model.meals.monday;
    case 1:
      return model.meals.tuesday;
    case 2:
      return model.meals.wednesday;
    case 3:
      return model.meals.thursday;
    case 4:
      return model.meals.friday;
    case 5:
      return model.meals.saturday;
    case 6:
      return model.meals.sunday;
    default:
      return model.meals.monday;
  }
};
