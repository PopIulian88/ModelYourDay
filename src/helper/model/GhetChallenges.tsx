import { ModelChallengeDay } from "../../models";
import { useSelector } from "react-redux";
import { IStore } from "../../redux";

export const getChallengesByDay = (day: number): ModelChallengeDay => {
  const { model } = useSelector((state: IStore) => state.modelReducer);

  if (!model?.challenges) return {};

  switch (day) {
    case 0:
      return model.challenges.monday;
    case 1:
      return model.challenges.tuesday;
    case 2:
      return model.challenges.wednesday;
    case 3:
      return model.challenges.thursday;
    case 4:
      return model.challenges.friday;
    case 5:
      return model.challenges.saturday;
    case 6:
      return model.challenges.sunday;
    default:
      return model.challenges.monday;
  }
};
