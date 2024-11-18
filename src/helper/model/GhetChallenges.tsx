import { ModelChallengeDay } from "../../models";
import { DefaultData } from "../../resources";

export const getChallengesByDay = (day: number): ModelChallengeDay => {
  if (!DefaultData.models[1].challenges) return {};

  switch (day) {
    case 0:
      return DefaultData.models[1].challenges.monday;
    case 1:
      return DefaultData.models[1].challenges.tuesday;
    case 2:
      return DefaultData.models[1].challenges.wednesday;
    case 3:
      return DefaultData.models[1].challenges.thursday;
    case 4:
      return DefaultData.models[1].challenges.friday;
    case 5:
      return DefaultData.models[1].challenges.saturday;
    case 6:
      return DefaultData.models[1].challenges.sunday;
    default:
      return DefaultData.models[1].challenges.monday;
  }
};
