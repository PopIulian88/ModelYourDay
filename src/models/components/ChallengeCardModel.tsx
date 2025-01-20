export enum challengeType {
  FOOD = "food",
  GYM = "gym",
  FREE_TIME = "freeTime",
}

export type ChallengeCardModel = {
  type: challengeType;
  header: string;
  description: string;
  color: string;
  isCompleted: boolean;
  onCheck?: (r: boolean) => void;
};
