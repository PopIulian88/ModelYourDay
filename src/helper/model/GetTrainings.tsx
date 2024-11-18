import { DefaultData } from "../../resources";
import { ModelTrainingDay } from "../../models";

export const getTrainingsByDay: (day: number) => ModelTrainingDay = (
  day: number,
) => {
  if (!DefaultData.models[1].training) return {};

  switch (day) {
    case 0:
      return DefaultData.models[1].training.monday;
    case 1:
      return DefaultData.models[1].training.tuesday;
    case 2:
      return DefaultData.models[1].training.wednesday;
    case 3:
      return DefaultData.models[1].training.thursday;
    case 4:
      return DefaultData.models[1].training.friday;
    case 5:
      return DefaultData.models[1].training.saturday;
    case 6:
      return DefaultData.models[1].training.sunday;
    default:
      return DefaultData.models[1].training.monday;
  }
};
