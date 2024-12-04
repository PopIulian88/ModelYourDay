import { ModelTrainingDay } from "../../models";
import { useSelector } from "react-redux";
import { IStore } from "../../redux";

export const getTrainingsByDay: (day: number) => ModelTrainingDay = (
  day: number,
) => {
  const { model } = useSelector((state: IStore) => state.modelReducer);
  if (!model?.training) return {};

  switch (day) {
    case 0:
      return model.training.monday;
    case 1:
      return model.training.tuesday;
    case 2:
      return model.training.wednesday;
    case 3:
      return model.training.thursday;
    case 4:
      return model.training.friday;
    case 5:
      return model.training.saturday;
    case 6:
      return model.training.sunday;
    default:
      return model.training.monday;
  }
};
